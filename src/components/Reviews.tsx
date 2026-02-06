import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { testimonials } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Reviews = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    // Auto-carousel every 2 seconds
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 2000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])

    // Animate card change
    useEffect(() => {
        gsap.fromTo(
            '.active-review-card',
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' }
        )
    }, [activeIndex])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Floating quote animation
            gsap.to('.quote-icon', {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const goToSlide = (index: number) => {
        setActiveIndex(index)
        // Reset interval on manual navigation
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 2000)
    }

    const goNext = () => goToSlide((activeIndex + 1) % testimonials.length)
    const goPrev = () => goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)

    const currentItem = testimonials[activeIndex]

    return (
        <section
            ref={sectionRef}
            id="review"
            className="relative bg-gradient-to-br from-primary-50 via-primary-100/80 to-white px-6 py-24 text-slate-800 overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-12">
                {/* Header */}
                <div className="reveal text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
                        <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
                        <span className="text-sm font-medium tracking-wide text-primary-600">
                            Patient Feedback
                        </span>
                        <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-800">
                        What Our Patients Say
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={goPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Active Card */}
                    <div className="active-review-card group relative p-[2px] rounded-2xl bg-gradient-to-br from-primary-400 via-primary-300 to-primary-200 mx-8">
                        <div className="relative bg-white rounded-2xl p-8 md:p-12 overflow-hidden text-center">
                            {/* Quote Icon */}
                            <div className="quote-icon absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                                <Quote className="w-8 h-8 text-primary-500 rotate-180" />
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6 mt-12">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-amber-400 fill-amber-400"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 italic">
                                "{currentItem.text}"
                            </p>

                            {/* Author */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-xl shadow-md">
                                    {currentItem.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-lg text-slate-800">{currentItem.name}</p>
                                    <p className="text-sm text-primary-500">Verified Patient</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-primary-500 w-8'
                                : 'bg-primary-200 hover:bg-primary-300'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-xs mx-auto h-1 bg-primary-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary-500 transition-all duration-300"
                        style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Reviews
