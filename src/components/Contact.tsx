import { useLayoutEffect, useRef } from 'react'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.contact-form',
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            )

            gsap.fromTo(
                '.contact-info',
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative bg-gradient-to-br from-primary-50 via-primary-100/70 to-white px-6 py-24 text-slate-800 overflow-hidden"
        >
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
                {/* Left side - Info & Map */}
                <div className="contact-info space-y-6">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
                            <MapPin className="w-4 h-4 text-primary-500" />
                            <span className="text-sm font-medium tracking-wide text-primary-600">
                                Contact Us
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-800">
                            Get In Touch
                        </h2>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                            <div className="rounded-lg bg-primary-100 p-2.5">
                                <MapPin className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Address</h4>
                                <p className="text-sm text-slate-600">
                                    In front of Aasegaonkar school, Naik square, SBI road, Pusad, Maharashtra 445204
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                            <div className="rounded-lg bg-primary-100 p-2.5">
                                <Phone className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Phone</h4>
                                <a href="tel:08080688683" className="text-sm text-primary-600 hover:underline">
                                    080806 88683
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                            <div className="rounded-lg bg-primary-100 p-2.5">
                                <Clock className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Hours</h4>
                                <p className="text-sm text-slate-600">Open 24 Hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.7!2d77.5684!3d19.9073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU0JzI2LjMiTiA3N8KwMzQnMDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hospital Location"
                        />
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="contact-form">
                    <form className="space-y-4 rounded-2xl bg-white border border-slate-100 p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Send Message</h3>
                        <p className="text-sm text-slate-500 mb-6">
                            Please share your details and we will get back to you shortly.
                        </p>

                        <div className="space-y-4">
                            <input
                                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                                placeholder="Your Name / Patient Name"
                                type="text"
                            />
                            <input
                                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                                placeholder="Your Email"
                                type="email"
                            />
                            <input
                                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                                placeholder="Your Mobile Number"
                                type="tel"
                            />
                            <input
                                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                                placeholder="Subject"
                                type="text"
                            />
                            <textarea
                                className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none resize-none"
                                placeholder="Your Message"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
                        >
                            <Send className="h-4 w-4" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
