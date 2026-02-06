import { useState, useEffect } from 'react'
import { ArrowUp, X } from 'lucide-react'

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

const FloatingButtons = () => {
    const [showBackToTop, setShowBackToTop] = useState(false)
    const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const whatsappNumber = '918080688683'
    const whatsappMessage = 'Hello Dr. Shrikant Gote, I would like to book an appointment.'

    return (
        <>
            {/* WhatsApp Button */}
            <div className="fixed bottom-6 left-6 z-50">
                {isWhatsAppOpen && (
                    <div className="absolute bottom-16 left-0 w-72 rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden animate-slideUp">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <WhatsAppIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Dr. Shrikant Gote</p>
                                        <p className="text-xs text-white/80">Usually replies instantly</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsWhatsAppOpen(false)}
                                    className="text-white/80 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 bg-slate-50">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <p className="text-sm text-slate-600">
                                    👋 Hello! How can I help you today? Click below to start a conversation.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 pt-0">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                Start Conversation
                            </a>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
                    className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all"
                >
                    <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:bg-primary-600 hover:scale-110 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <ArrowUp className="w-5 h-5" />
            </button>

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out forwards;
                }
            `}</style>
        </>
    )
}

export default FloatingButtons
