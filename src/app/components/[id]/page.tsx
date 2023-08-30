import React, {FC} from "react";
import { components } from "@/utils/mock";
import { Badge } from "@/components/ui/badge"


const renderComponent = (id: number) => {
  return components.filter((compo) => compo.id == id)
};

const page = ({ params }: { params: { id: number } }) => {

  const result = renderComponent(params.id);
  console.log(result)
  return ( 
  <div className=" max-w-screen-2xl mx-auto px-10 py-8 ">
   {
    result.map((compo) => (
      <div key={compo.id} className="">
        <h2 className="text-4xl font-bold text-black">{compo.name}</h2>
        <p className="mt-4 font-semibold  text-zinc-600">{compo.tagline}</p>
        <p className="mt-1 font-semibold  text-zinc-600 ">For downloading this component you need to paste this
           command line in your vs code terminal:</p>
        <h4 className=" mt-5 text-xl bg-neutral-300 text-center
        text-black font-semibold border border-slate-500 rounded-lg
         w-1/2 ml-72 shadow-2xl">{compo.command}</h4>
         <h4 className="mt-3 mb-3 font-semibold text-xl">Preview:</h4>
        <section className="">{compo.component}</section>
        </div>
    
    ))
   }

  </div>
  )
};

export default page;

