export default function AuroraBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-violet-700/20 rounded-full blur-[180px] top-[-200px] left-[-150px]" />

        <div className="absolute w-[650px] h-[650px] bg-fuchsia-700/20 rounded-full blur-[180px] bottom-[-250px] right-[-100px]" />

        <div className="absolute inset-0 bg-[#050505]" />

      </div>
    </>
  );
}