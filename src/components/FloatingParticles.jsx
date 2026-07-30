export default function FloatingParticles() {

  const particles = Array.from({ length: 35 });

  return (

    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (

        <span

          key={i}

          className="absolute w-[2px] h-[2px] rounded-full bg-violet-300 opacity-40 animate-pulse"

          style={{
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,
            animationDuration: `${3+Math.random()*4}s`
          }}

        />

      ))}

    </div>

  );

}