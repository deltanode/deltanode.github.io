import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LeftPanel from "@/components/LeftPanel"
import Hero from "@/components/Hero"
// import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Collaborate from "@/components/Collaborate"

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex">
        <LeftPanel />
        <div className="ml-[40%] w-[60%] px-10">
          <Hero />
          {/* <Projects /> */}
          <Skills />
          <Collaborate />
        </div>
      </main>

      <Footer />
    </>

  )
}
