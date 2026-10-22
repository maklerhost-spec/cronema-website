// Consent (as on work247.app). Without consent the site loads nothing from third parties;
// Google Analytics starts only after consent to "statistics". The choice itself is kept in
// localStorage, which is strictly necessary for the banner (§ 25 (2) no. 2 TDDDG).
import { useSyncExternalStore } from "react";

export interface Consent {
  v: 1;
  /** When the choice was made (proof in the browser) */
  date: string;
  analytics: boolean;
}

export type ConsentChoice = Omit<Consent, "v" | "date">;

export const CONSENT_KEY = "cronema-consent";
/** Valid for 12 months at most, then we ask again */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

let consent: Consent | null = null;
let loaded = false;
let settingsOpen = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CONSENT_KEY) ?? "null");
    if (parsed?.v === 1 && Date.now() - Date.parse(parsed.date) < MAX_AGE_MS) {
      consent = { v: 1, date: parsed.date, analytics: parsed.analytics === true };
    }
  } catch {
    // Storage blocked: the banner shows on every page view
  }
}

export function saveConsent(choice: ConsentChoice) {
  consent = { v: 1, date: new Date().toISOString(), ...choice };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Without storage the choice lasts until the next page load
  }
  settingsOpen = false;
  emit();
}

/** "Cookie settings": change or withdraw the choice at any time */
export function openConsentSettings() {
  settingsOpen = true;
  emit();
}

export function closeConsentSettings() {
  settingsOpen = false;
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

interface Snapshot {
  consent: Consent | null;
  settingsOpen: boolean;
  ready: boolean;
}
let snapshot: Snapshot = { consent: null, settingsOpen: false, ready: false };
const SERVER: Snapshot = { consent: null, settingsOpen: false, ready: false };

function getSnapshot(): Snapshot {
  load();
  if (snapshot.consent !== consent || snapshot.settingsOpen !== settingsOpen || !snapshot.ready) {
    snapshot = { consent, settingsOpen, ready: true };
  }
  return snapshot;
}

/** ready = read in the browser (always false while prerendering: no banner in the static HTML) */
export function useConsent(): Snapshot {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER);
}
