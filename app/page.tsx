import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import TheStack from "@/components/sections/TheStack"
import Credentials from "@/components/sections/Credentials"
import SelectedWorks from "@/components/sections/SelectedWorks"
import TheJourney from "@/components/sections/TheJourney"
import ConnectCTA from "@/components/sections/ConnectCTA"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheStack />
        <Credentials />
        <SelectedWorks />
        <TheJourney />
        <ConnectCTA />
      </main>
      <Footer />
    </>
  )
}
