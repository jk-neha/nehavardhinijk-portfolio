export default function BlurCircle({
  top,
  left,
  right,
  bottom,
  size = 500,
}) {
  return (
    <div
      className="absolute rounded-full bg-violet-700/15 blur-[160px] pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
}