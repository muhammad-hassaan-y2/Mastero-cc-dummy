import { Github, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4 py-2'>
       
       <div className=''>
       <div className='bg-gray-300 border border-zinc-400 shadow-lg rounded-lg
      flex w-96 mt-4 space-x-2 font-medium' >
       <Link href={"/documentation"} >
      <h4 className='flex space-x-2 ml-5 '>🎉  Introducing all the UI-Liabries to you.
      <MoveRight className='ml-4' /></h4>
      </Link></div>

    <h1 className='mt-5 text-4xl font-bold'>Adding all the UI-component library <br />for the developers outreach.</h1>
    <p className='mt-2 font-medium text-base text-gray-800'>All the beautiful, 
    famous UI and components will be added here so that you
     can copy and paste them in your apps. Easy guide and documentation</p>
     
     <div className='flex'><Link className='mt-8 border border-gray-500 rounded-lg px-4 py-1 text-lg
        font-semibold bg-zinc-200 text-black' href="/documentation">
        
        Get Started
     </Link>
     <button className=' ml-8 mt-8 h-10 border border-gray-500 rounded-lg px-4 py-1 text-lg
        font-semibold bg-zinc-900  text-white flex'>
     <Link className='flex px-3' 
     href={"https://github.com/muhammad-hassaan-y2"}><Github /> Github</Link></button>
     
     </div>

    </div>



    <div className=''>
        <h2 className='mt-12 text-3xl font-bold sm:ml-8 sm:mx-auto' >Dashboard</h2>

        <div className='mt-6 border border-black border-solid rounded-lg 
        grid md:grid-cols-2 md:mx-auto  lg:grid-cols-4
         px-3 py-4 bg-slate-100 sm:max-w-xl sm:mx-auto 
         lg:max-w-screen-2xl '>

        <div className='text-white bg-gray-900 rounded-md border
         border-black mt-4 px-4 py-3'>
            <h2 className='text-xl font-bold'>Shad-cn UI</h2>
            <p className='text-gray-50 text-base font-medium mt-3'>Shad-cn UI is becoming the most popular component UI liabry
                among the developers, in which you can also made changes 
                and they can modify them. By the given command you can 
                start downloading the Shad-cn components.
            </p>
            <h4 className='bg-gray-300 text-gray-950 font-bold text-center
            rounded-lg w-max px-3 mt-3 border'>npx shadcn-ui@latest init</h4>

            <Link href={"/components"}>
                <button className='border mt-3 px-2 ml-3 bg-white
                 text-black font-semibold shadow-inner'>Learn More</button></Link>
        </div>

        <div className='text-white bg-gray-900 lg:mr-3 rounded-md border
         border-black mt-4 md:ml-3 px-4 py-3'>
            <h2 className='text-xl font-bold'>Shad-cn UI</h2>
            <p className='text-gray-50 text-base font-medium mt-3'>Shad-cn UI is becoming the most popular component UI liabry
                among the developers, in which you can also made changes 
                and they can modify them. By the given command you can 
                start downloading the Shad-cn components.
            </p>
            <h4 className='bg-gray-300 text-gray-950 font-bold text-center
            rounded-lg w-max px-3 mt-3 border'>npx shadcn-ui@latest init</h4>

                <Link href={"/components"}>
                <button className='border mt-3 px-2 ml-3 bg-white
                 text-black font-semibold shadow-inner'>Learn More</button></Link>
        </div>

        <div className='text-white bg-gray-900 rounded-md border
         border-black mt-4  px-4 py-3 '>
            <h2 className='text-xl font-bold mt-3'>Shad-cn UI</h2>
            <p className='text-gray-50 text-base font-medium'>Shad-cn UI is becoming the most popular component UI liabry
                among the developers, in which you can also made changes 
                and they can modify them. By the given command you can 
                start downloading the Shad-cn components.
            </p>
            <h4 className='bg-gray-300 text-gray-950 font-bold text-center
            rounded-lg w-max px-3 mt-3 border'>npx shadcn-ui@latest init</h4>

               <Link href={"/components"}>
                <button className='border mt-3 px-2 ml-3 bg-white
                 text-black font-semibold shadow-inner'>Learn More</button></Link>
        </div>

        <div className='text-white bg-gray-900 rounded-md border
         border-black mt-4 px-4 py-3 md:ml-3'>
            <h2 className='text-xl font-bold mt-3'>Shad-cn UI</h2>
            <p className='text-gray-50 text-base font-medium mt-3'>Shad-cn UI is becoming the most popular component UI liabry
                among the developers, in which you can also made changes 
                and they can modify them. By the given command you can 
                start downloading the Shad-cn components.
            </p>
            <h4 className='bg-gray-300 text-gray-950 font-bold text-center
            rounded-lg w-max px-3 mt-3 border'>npx shadcn-ui@latest init</h4>

              <Link href={"/components"}>
                <button className='border mt-3 px-2 ml-3 bg-white
                 text-black font-semibold shadow-inner'>Learn More</button></Link>
        </div>

        </div>

        <div>
        <h2 className='mt-12 font-bold text-3xl'>Making your code minimal and Impressive</h2>
        <p className='font-medium mt-3 '>All the built in components that are available here are<br /> totaly
            responsive, our aim is to make your code clean by putting your low effort.
        </p>
        <h4 className='mt-2 text-lg font-medium'>All the components here are of free of cost:</h4>
        <button className='bg-slate-100 px-3 text-black mt-3
         text-lg font-semibold
        border-black border rounded-md'>
            <Link href={"/documentation"}>Start It Now</Link></button>
    </div>

    <div className='mt-8'>
        <h3 className='mt-3 font-bold text-3xl'>Coding Cheats</h3>
        <p className='font-medium text-lg mt-3'>Coming Soon</p>
    </div>


    </div>
    </div>
  )
}

export default Hero
