import { useLayoutEffect, useRef } from 'react'
import {
    Heart,
    Thermometer,
    Brain,
    Pill,
    Activity,
    Droplet,
    Stethoscope,
    Siren,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { serviceList } from '../constants'

gsap.registerPlugin(ScrollTrigger)

// Map service names to icons
const getIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase()
    if (name.includes('diabetes') || name.includes('sugar')) return Droplet
    if (name.includes('heart') || name.includes('cardiac')) return Heart
    if (name.includes('thyroid')) return Thermometer
    if (name.includes('brain') || name.includes('neuro')) return Brain
    if (name.includes('fever') || name.includes('infection')) return Thermometer
    if (name.includes('critical') || name.includes('icu')) return Siren
    if (name.includes('blood') || name.includes('pressure')) return Activity
    return Stethoscope
}

const Services = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Service cards stagger animation
            gsap.fromTo(
                '.service-card',
                { y: 60, opacity: 0, rotateY: -15 },
                {
                    y: 0,
                    opacity: 1,
                    rotateY: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: '.services-grid',
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
            id="service"
            className="relative bg-gradient-to-br from-primary-50 via-primary-100/70 to-white px-6 py-24 text-slate-800 overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
                {/* Header */}
                <div className="reveal text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
                        <Pill className="w-4 h-4 text-primary-500" />
                        <span className="text-sm font-medium tracking-wide text-primary-600">
                            What I Treat
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-800">
                        Conditions I Treat
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        I am a doctor - it's a profession that may be considered a special mission,
                        a devotion. It calls for involvement, respect and willingness to help all other people.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
                    {serviceList.map((item, index) => {
                        const Icon = getIcon(item)
                        return (
                            <div
                                key={item}
                                className="service-card group relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Icon */}
                                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 p-3 group-hover:from-primary-500 group-hover:to-primary-400 transition-all duration-300">
                                    <Icon className="h-7 w-7 text-primary-500 group-hover:text-white transition-colors" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
                                    {item}
                                </h3>

                                {/* Hover line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300" />

                                {/* Number badge */}
                                <span className="absolute top-4 right-4 text-4xl font-bold text-slate-100 group-hover:text-primary-100 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
