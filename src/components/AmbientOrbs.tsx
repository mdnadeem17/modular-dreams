export function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-3xl animate-orb" />
      <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl animate-orb" style={{ animationDelay: "-12s" }} />
    </div>
  );
}
