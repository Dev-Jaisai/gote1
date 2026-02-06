
import { UserRound } from 'lucide-react'
import { aboutParagraphs, aboutHighlights } from '../constants'

const About = () => {
    return (
        <section id="about" className="relative bg-white px-6 py-20 text-slate-800">
            <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_1fr] md:items-start">
                <div className="relative overflow-hidden bg-white">
                    <img
                        src="/img/doct.png"
                        alt="Dr. Shrikant Gote"
                        className="w-full object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="space-y-6">
                    <div className="reveal flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-500">
                        <UserRound className="h-4 w-4" />
                        About Me
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800">
                        Advanced Diabetic Care & Critical Care Unit with comprehensive emergency readiness
                    </h4>
                    {aboutParagraphs.map((text) => (
                        <p key={text} className="text-sm leading-relaxed text-slate-600">
                            {text}
                        </p>
                    ))}
                    <ul className="space-y-3 text-sm text-slate-600">
                        {aboutHighlights.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-slate-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
