import FooterBackground from './footer-background';
import BrandLogo from './brand-logo';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import SelectedWorks from '@/components/sections/SelectedWorks';
import TheStack from '@/components/sections/TheStack';
import TheJourney from '@/components/sections/TheJourney';
import ConnectCTA from '@/components/sections/ConnectCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. Initial Interactive Character Studio Section (Home) */}
      <section id="home" className="footer" aria-label="JPA Studio Character Interactive Experience">
        <FooterBackground />


        {/* Left Information Block aligned with Joevan's portfolio */}
        <div className="jobs" style={{ position: 'relative', zIndex: 1 }}>
          <span className="tag">open to collaborate</span>
          <span className="headline job-title">engineering<br />meets craft</span>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#works">Selected Works</a>
            <a href="#stack">Tech Stack</a>
            <a href="#journey">Experience</a>
            <a href="#contact">Get in Touch</a>
          </div>
        </div>

        {/* Center JPA Monogram Brand Logo */}
        <div className="logo" role="img" aria-label="JPA logo" style={{ zIndex: 1 }}>
          <BrandLogo />
        </div>

        {/* Right Contact Block with Real Socials */}
        <div className="contact" style={{ zIndex: 1 }}>
          <span className="tag">say hey</span>
          <div className="headline contact-links">
            <span>let’s team up!</span>
            <span>bring your vision*</span>
          </div>
          <p className="note">*scalable systems start with one spark. let’s engineer yours.</p>
          <div className="socials">
            <a 
              href="https://github.com/Joevan29" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              title="GitHub"
            >
              <img src="/github.svg" alt="GitHub" width="35" height="35" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jvnprmnachmd/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img src="/linkedin.svg" alt="LinkedIn" width="35" height="35" />
            </a>
            <a 
              href="https://www.instagram.com/aequorreditusjoi" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              title="Instagram"
            >
              <img src="/instagram.svg" alt="Instagram" width="35" height="35" />
            </a>
          </div>
        </div>

        {/* Seamless Soft Dark Gradient Transition to Portfolio */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#070412] to-transparent pointer-events-none z-10" />

        {/* Explore Portfolio Prompt Pill - High Visibility Contrast */}
        <a 
          href="#about" 
          style={{ color: '#080909', backgroundColor: '#ffffff' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono font-bold !text-[#080909] !bg-white hover:!bg-[#A2FF00] transition-all z-20 px-6 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-purple-300/60 hover:scale-105 cursor-pointer"
          aria-label="Scroll to explore Joevan's portfolio"
        >
          <span style={{ color: '#080909' }}>Explore Portfolio</span>
          <span style={{ color: '#080909' }} className="animate-bounce font-bold">↓</span>
        </a>
      </section>

      {/* 2. Joevan's Engineering Portfolio (Cyber-Midnight Purple Theme) */}
      <main className="relative z-10 bg-[#070412] text-white overflow-hidden">
        {/* Continuous Atmospheric Violet Ambient Glows */}
        <div 
          aria-hidden="true" 
          className="absolute top-24 right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)', filter: 'blur(60px)' }} 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-[35%] left-[-15%] w-[55vw] h-[55vw] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 60%)', filter: 'blur(70px)' }} 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-[65%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} 
        />
        <div 
          aria-hidden="true" 
          className="absolute bottom-10 left-[10%] w-[60vw] h-[40vw] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse, rgba(147,51,234,0.10) 0%, transparent 60%)', filter: 'blur(80px)' }} 
        />

        <Hero />
        <SelectedWorks />
        <TheStack />
        <TheJourney />
        <ConnectCTA />
      </main>

      {/* 3. Footer */}
      <Footer />
    </>
  );
}
