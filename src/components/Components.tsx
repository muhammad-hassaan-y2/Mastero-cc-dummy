"use client"
import React from "react";
import { components } from "@/utils/mock";
import Link from "next/link";

const  Component = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 py-8 gap gap-14 grid grid-cols-2 
      z-0">

      {components.map((compo) => (
        <section key={compo.id} className="border border-solid  rounded-md gap-4" >
          <div className=" py-3 ml-5">
          <h2 className="font-semibold text-xl ">{compo.name}</h2>
          
          <p className="text-base font-medium">{compo.tagline}</p>
          <h4 className="text-stone-950 ">{compo.command}</h4>
          <Link href={`/components/${encodeURIComponent(compo.id)}`}>
            <button className="border border-spacing-x-2 border-black
             shadow-md rounded-md"><div className="ml-3 mr-3">VIEW-IT</div></button>
           </Link>
           </div>
        </section>
      ))}
    </div>
  );
};

 
export default Component;
