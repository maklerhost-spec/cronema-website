/** Logo mark and name. `light` is for the ink header and footer. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={light ? "/logo-light.svg" : "/logo.svg"} alt="" width={36} height={36} className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.3rem] font-bold tracking-[0.08em] ${light ? "text-white" : "text-ink"}`}>CRONEMA</span>
        <span className={`mt-1 text-[9.5px] font-medium uppercase tracking-[0.2em] ${light ? "text-net-300" : "text-net-600"}`}>Cross Net Management</span>
      </span>
    </span>
  );
}
