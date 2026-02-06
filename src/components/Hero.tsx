import { useLayoutEffect, useRef } from 'react'
import { Phone, Calendar } from 'lucide-react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const Hero = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Main timeline for hero elements
            const mainTl = gsap.timeline({ delay: 3.2 })

            // "I'm" text reveal
            mainTl.fromTo(
                '.hero-im',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
            )

            // Name reveal with split text effect
            mainTl.fromTo(
                '.hero-name',
                { y: 60, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
                '-=0.2'
            )

            // Typewriter container
            mainTl.fromTo(
                '.typewriter-container',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.3'
            )

            // CTA buttons
            mainTl.fromTo(
                '.hero-cta',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
                '-=0.2'
            )

            // Doctor image
            mainTl.fromTo(
                '.hero-image',
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.8'
            )

            // Floating particles
            gsap.to('.hero-particle', {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: { each: 0.2, from: 'random' },
            })

            // Typewriter animation
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5, delay: 4.5 })
            const texts = [
                'Physician • Diabetologist • Intensivist',
                'Consultant Physician',
                'Critical Care Specialist',
                'Diabetologist',
                'Thyroid Specialist',
            ]

            texts.forEach((text) => {
                tl.to('.typewriter-text', {
                    duration: text.length * 0.04,
                    text: text,
                    ease: 'none',
                }).to({}, { duration: 1.5 })
            })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={comp}
            className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-white"
            id="home"
        >
            {/* Background layers */}
            <div className="absolute inset-0 hero-warm" />
            <div className="absolute inset-0 hero-pattern opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="hero-particle absolute w-3 h-3 bg-white/20 rounded-full"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl space-y-5 text-center md:text-left">
                    <p className="hero-im text-sm uppercase tracking-[0.5em] text-white/80 font-medium opacity-0">
                        I'm
                    </p>
                    <h1 className="hero-name text-[clamp(2.8rem,7vw,5rem)] font-serif font-bold leading-[1.05] opacity-0">
                        Dr. Shrikant Gote
                    </h1>
                    <div className="typewriter-container min-h-[50px] text-lg md:text-xl font-medium text-white/90 opacity-0">
                        <span className="typewriter-text"></span>
                        <span className="animate-pulse ml-1">|</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start pt-4">
                        <a
                            href="tel:08080688683"
                            className="hero-cta group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary-600 shadow-lg shadow-black/20 transition-all hover:scale-105 hover:shadow-xl opacity-0"
                        >
                            <Phone className="h-5 w-5 group-hover:animate-pulse" />
                            <span>080806 88683</span>
                        </a>
                        <a
                            href="#contact"
                            className="hero-cta flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 opacity-0"
                        >
                            <Calendar className="h-5 w-5" />
                            <span>Book Appointment</span>
                        </a>
                    </div>
                </div>

                <div className="hero-image relative hidden h-[480px] w-[400px] items-end justify-center md:flex opacity-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 to-transparent rounded-3xl" />
                    <img
                        src="/img/doct.png"
                        alt="Dr. Shrikant Gote"
                        className="h-full w-full object-contain drop-shadow-2xl"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
