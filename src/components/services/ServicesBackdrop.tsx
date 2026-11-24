/** Fixed atmospheric glows + floating particles behind the Services page. */
export default function ServicesBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] hidden md:block w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#F4EFE6] to-[#EAE1D0] blur-[120px] animate-ambient" />
      <div
        className="absolute bottom-[10%] right-[-5%] hidden md:block w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-[#F7F2E8] to-[#E5D9C3] blur-[140px] animate-ambient"
        style={{ animationDelay: "4s" }}
      />
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#D4963B]/45 floating-particle" />
      <div
        className="absolute top-2/3 right-16 w-3 h-3 rounded-full bg-[#D4963B]/35 floating-particle"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D4963B]/50 floating-particle"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
