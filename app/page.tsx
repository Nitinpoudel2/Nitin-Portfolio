import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import TimeLine from "@/components/main/TimeLine";



export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-10'>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
