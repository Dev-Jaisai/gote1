
import { practiceExperience, education } from '../constants'

const Experience = () => {
    return (
        <section id="experience" className="relative bg-white px-6 py-20 text-slate-800">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
                <div className="reveal flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-primary-500">
                    <span className="h-[2px] w-12 bg-primary-500" />
                    Practice Experience & Alligned with hospitals
                </div>

                <div className="relative">
                    <div className="timeline-line absolute left-4 top-0 h-full w-px bg-primary-200 md:left-1/2" />
                    <div className="flex flex-col gap-10">
                        {practiceExperience.map((item, index) => {
                            const isLeft = index % 2 === 0
                            return (
                                <div key={item.place} className="relative grid md:grid-cols-2">
                                    <div
                                        className={`timeline-card rounded-lg border border-l-4 border-slate-200 border-l-primary-400/60 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] ${isLeft
                                            ? 'ml-10 md:ml-0 md:mr-14 md:justify-self-end'
                                            : 'ml-10 md:ml-14 md:col-start-2'
                                            }`}
                                        data-side={isLeft ? 'left' : 'right'}
                                    >
                                        <h3 className="text-lg font-semibold text-slate-800">{item.place}</h3>
                                        <p className="text-sm font-semibold text-primary-500">{item.role}</p>
                                        <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                                    </div>
                                    <span className="timeline-dot absolute left-4 top-8 -translate-x-1/2 md:left-1/2" />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="reveal flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-primary-500">
                    <span className="h-[2px] w-12 bg-primary-500" />
                    Education
                </div>

                <div className="relative">
                    <div className="timeline-line absolute left-4 top-0 h-full w-px bg-primary-200 md:left-1/2" />
                    <div className="flex flex-col gap-10">
                        {education.map((item, index) => {
                            const isLeft = index % 2 === 0
                            return (
                                <div key={item.title} className="relative grid md:grid-cols-2">
                                    <div
                                        className={`timeline-card rounded-lg border border-l-4 border-slate-200 border-l-primary-400/60 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] ${isLeft
                                            ? 'ml-10 md:ml-0 md:mr-14 md:justify-self-end'
                                            : 'ml-10 md:ml-14 md:col-start-2'
                                            }`}
                                        data-side={isLeft ? 'left' : 'right'}
                                    >
                                        <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                                        <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                                    </div>
                                    <span className="timeline-dot absolute left-4 top-8 -translate-x-1/2 md:left-1/2" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
