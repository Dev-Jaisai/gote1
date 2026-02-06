import { useState } from 'react'
import { X } from 'lucide-react'
import { portfolioItems } from '../constants'

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section id="portfolio" className="relative bg-white px-6 py-20 text-slate-800">
            <div className="mx-auto w-full max-w-6xl">
                <div className="reveal text-center space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary-500">My Portfolio</p>
                    <h2 className="text-2xl font-semibold text-slate-800">My Excellent Portfolio</h2>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {portfolioItems.map((item) => (
                        <div
                            key={`${item.title}-${item.image}`}
                            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm cursor-pointer transition-transform hover:scale-[1.02]"
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-48 w-full object-cover"
                                loading="lazy"
                            />
                            <div className="p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-primary-500">{item.category}</p>
                                <h3 className="text-base font-semibold text-slate-800">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-primary-400 transition"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Portfolio"
                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out forwards;
                }
            `}</style>
        </section>
    )
}

export default Portfolio
