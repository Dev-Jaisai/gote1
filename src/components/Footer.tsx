import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from 'lucide-react'

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 px-6 py-12 text-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
                <h2 className="text-2xl font-semibold font-serif">
                    Shri Datt Diabetes & Critical Care Hospital
                </h2>
                <p className="text-sm text-primary-400 font-medium">
                    and Adishree Pathology Diagnostic Centre | Best Cancer Hospital In Pusad
                </p>
                <div className="flex items-center justify-center gap-4 text-white/70">
                    <a href="#" className="transition hover:text-primary-400">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="transition hover:text-primary-400">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="transition hover:text-primary-400">
                        <Youtube className="h-5 w-5" />
                    </a>
                    <a href="#" className="transition hover:text-primary-400">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="transition hover:text-primary-400">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
                <div className="w-full border-t border-white/10 pt-6 mt-2">
                    <p className="text-xs text-white/50">
                        © 2025 Dr. Shrikant Gote, All Rights Reserved
                    </p>
                    <p className="text-xs text-white/40 mt-2">
                        Developed by <span className="text-primary-400 font-medium">Dev-Jaisai</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
