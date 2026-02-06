import { useLayoutEffect, useRef } from 'react'
import { Users, Heart, Award, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { icon: Users, value: 50000, suffix: '+', label: 'Patients Treated' },
    { icon: Heart, value: 15000, suffix: '+', label: 'Covid-19 Cases' },
    { icon: Award, value: 20, suffix: '+', label: 'Years Experience' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Emergency Care' },
]

const StatsCounter = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const countersRef = useRef<HTMLSpanElement[]>([])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate counters on scroll
            countersRef.current.forEach((counter, index) => {
                const target = stats[index].value

                gsap.fromTo(
                    counter,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            })

            // Card animations
            gsap.fromTo(
                '.stat-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 px-6 py-16 overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }} />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={stat.label}
                                className="stat-card group flex flex-col items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center text-white transition-all hover:bg-white/20 hover:scale-105"
                            >
                                <div className="rounded-full bg-white/20 p-3 group-hover:bg-white/30 transition">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold font-display">
                                    <span
                                        ref={(el) => {
                                            if (el) countersRef.current[index] = el
                                        }}
                                    >
                                        0
                                    </span>
                                    {stat.suffix}
                                </div>
                                <p className="text-sm text-white/80 font-medium">{stat.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default StatsCounter
