export function BatmanBackground() {
  return (
    <>
      {/* Simplified Batman-themed background - removed complex effects for CPU performance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Main background image - lighter visibility */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/a-dark-knight-5c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </>
  );
}
