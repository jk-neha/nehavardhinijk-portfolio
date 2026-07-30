import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position,setPosition]=useState({x:0,y:0});

  useEffect(()=>{

    const move=(e)=>{

      setPosition({

        x:e.clientX,

        y:e.clientY

      });

    };

    window.addEventListener("mousemove",move);

    return()=>window.removeEventListener("mousemove",move);

  },[]);

  return(

    <div

      className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full blur-[120px]"

      style={{

        left:position.x-250,

        top:position.y-250,

        background:"rgba(139,92,246,.08)"

      }}

    />

  )

}