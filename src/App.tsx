import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsCounter from './components/StatsCounter'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal animations on scroll - only Y movement, no opacity change
      const sections = gsap.utils.toArray<HTMLElement>('section')
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 30 },
          {
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              end: 'top 50%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Reveal class animations
      ScrollTrigger.batch('.reveal', {
        start: 'top 85%',
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: 'power3.out',
              stagger: 0.18,
            }
          ),
        onLeaveBack: (batch) =>
          gsap.to(batch, { y: 40, opacity: 0, duration: 0.5 }),
      })

      // Timeline cards with scroll toggle
      const timelineCards = gsap.utils.toArray<HTMLElement>('.timeline-card')
      timelineCards.forEach((card) => {
        const side = card.dataset.side
        const fromX = side === 'left' ? -50 : 50
        gsap.fromTo(
          card,
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })

      // Timeline lines with scrub
      const timelineLines = gsap.utils.toArray<HTMLElement>('.timeline-line')
      timelineLines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: line.parentElement,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
            },
          }
        )
      })

      // Timeline dots with scroll toggle
      const timelineDots = gsap.utils.toArray<HTMLElement>('.timeline-dot')
      timelineDots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 90%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })

      return () => { }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div ref={rootRef} className="relative bg-white text-slate-800">
        <Navbar />
        <Hero />
        <StatsCounter />
        <About />
        <Services />
        <Experience />
        <Reviews />
        <Portfolio />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  )
}

export default App

