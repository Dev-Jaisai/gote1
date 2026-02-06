import { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef<HTMLElement>(null)

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About Me', href: '#about' },
        { label: 'Service', href: '#service' },
        { label: 'Practice Experience', href: '#experience' },
        { label: 'Review', href: '#review' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ]

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Navbar slide down animation
            gsap.fromTo(
                navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 3.2 }
            )

            // Logo animation
            gsap.fromTo(
                '.nav-logo',
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.4)', delay: 3.4 }
            )

            // Nav links staggered animation
            gsap.fromTo(
                '.nav-link',
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: 'power2.out',
                    delay: 3.5,
                }
            )
        }, navRef)

        return () => ctx.revert()
    }, [])

    return (
        <nav
            ref={navRef}
            className="sticky top-0 z-40 bg-white/95 px-6 py-4 shadow-[0_6px_24px_-20px_rgba(15,23,42,0.4)] backdrop-blur"
            style={{ opacity: 0 }}
        >
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                <div className="nav-logo flex flex-col">
                    <span className="text-base font-semibold font-serif">Dr. Shrikant Gote</span>
                    <span className="text-xs text-primary-500">(Physician, Diabetologist, Intensivist)</span>
                </div>
                <button
                    type="button"
                    className="rounded-md border border-slate-200 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-600 md:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    Menu
                </button>
                <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-slate-600 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav-link relative transition hover:text-primary-500 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            {isMenuOpen && (
                <div className="mx-auto mt-4 flex w-full max-w-6xl flex-col gap-3 text-xs uppercase tracking-[0.22em] text-slate-600 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="transition hover:text-primary-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
