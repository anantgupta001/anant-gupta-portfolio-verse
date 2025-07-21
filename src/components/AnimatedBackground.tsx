export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="floating-shape w-32 h-32 bg-primary/10 top-20 left-10" style={{ animationDelay: '0s' }} />
      <div className="floating-shape w-20 h-20 bg-cyan/20 top-40 right-20" style={{ animationDelay: '1s' }} />
      <div className="floating-shape w-28 h-28 bg-primary/15 bottom-32 left-20" style={{ animationDelay: '2s' }} />
      <div className="floating-shape w-24 h-24 bg-cyan/10 top-60 left-1/2" style={{ animationDelay: '3s' }} />
      <div className="floating-shape w-36 h-36 bg-primary/5 bottom-20 right-10" style={{ animationDelay: '4s' }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan/5" />
    </div>
  );
};