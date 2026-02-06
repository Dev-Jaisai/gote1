import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const preloaderRef = useRef<HTMLDivElement>(null)
    const counterRef = useRef<HTMLSpanElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Reveal animation
                    gsap.to(preloaderRef.current, {
                        yPercent: -100,
                        duration: 1,
                        ease: 'power4.inOut',
                        onComplete,
                    })
                },
            })

            // Counter animation
            tl.to(
                { val: 0 },
                {
                    val: 100,
                    duration: 2.5,
                    ease: 'power2.out',
                    onUpdate: function () {
                        setCount(Math.round(this.targets()[0].val))
                    },
                }
            )

            // Progress bar animation
            tl.to(
                progressRef.current,
                {
                    width: '100%',
                    duration: 2.5,
                    ease: 'power2.out',
                },
                0
            )

            // Text reveal staggered
            tl.fromTo(
                '.preloader-letter',
                { y: 100, opacity: 0, rotateX: -90 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: 'back.out(1.7)',
                },
                0.3
            )

            // Subtitle fade in
            tl.fromTo(
                '.preloader-subtitle',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
                1
            )

            // Pulse animation on logo
            tl.to(
                '.preloader-logo',
                {
                    scale: 1.05,
                    duration: 0.5,
                    repeat: 3,
                    yoyo: true,
                    ease: 'power1.inOut',
                },
                1.5
            )
        }, preloaderRef)

        return () => ctx.revert()
    }, [onComplete])

    const name = 'Dr. Shrikant Gote'

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#014e3d] via-[#02c39a] to-[#33d6af] overflow-hidden"
        >
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#02c39a]/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#33d6af]/30 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
            }} />

            {/* Main content */}
            <div className="relative z-10 text-center">
                {/* Animated medical cross logo */}
                <div className="preloader-logo mb-8 relative">
                    <div className="w-20 h-20 mx-auto relative">
                        <div className="absolute inset-0 bg-white/20 rounded-2xl rotate-45 animate-spin-slow" />
                        <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                            <svg className="w-10 h-10 text-[#02c39a]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Name with letter animation */}
                <div ref={textRef} className="overflow-hidden mb-4" style={{ perspective: '1000px' }}>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        {name.split('').map((letter, i) => (
                            <span
                                key={i}
                                className="preloader-letter inline-block"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="preloader-subtitle text-white/80 text-lg md:text-xl font-light tracking-widest uppercase mb-12">
                    Physician • Diabetologist • Intensivist
                </p>

                {/* Progress section */}
                <div className="w-64 md:w-80 mx-auto">
                    {/* Counter */}
                    <div className="flex justify-between items-center mb-2 text-white/90">
                        <span className="text-sm font-medium tracking-wider">LOADING</span>
                        <span ref={counterRef} className="text-2xl font-bold tabular-nums">
                            {count}%
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            ref={progressRef}
                            className="h-full bg-white rounded-full"
                            style={{ width: '0%' }}
                        />
                    </div>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Custom keyframes */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(45deg); }
                    to { transform: rotate(405deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                .delay-500 {
                    animation-delay: 0.5s;
                }
            `}</style>
        </div>
    )
}

export default Preloader
