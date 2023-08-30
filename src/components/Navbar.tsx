"use client" 
import Link from "next/link";
import * as React from "react"
import { useTheme } from "next-themes"


const Navbar = () => {
  const { setTheme } = useTheme()
  return (
    <nav>
      <section
        className="bg-white flex 
        md:max-w-screen-xl mx-auto px-4 py-2 gap gap-14  scroll-mx-px  sticky"
      >
        <div className=" text-lg font-bold mt-1 ">
          <Link href={"/"}>Mastero-CC | UI</Link>
        </div>

        <div className="ml-28 gap gap-x-10 flex mt-1 font-semibold">

          <div>
            <Link href="/components">Components</Link>
          </div>

          <div>
            <Link href="/documentation">Documentation</Link>
          </div>

          <div>
            <Link href={"/"}>Contact-us</Link>
          </div>
        </div>
        
      </section>
    </nav>
  );
};

export default Navbar;
