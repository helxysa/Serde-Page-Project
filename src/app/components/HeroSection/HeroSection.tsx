import Link from 'next/link'
import { Settings } from "lucide-react"

export default function HeroSection() {
    return (
      <div className="relative bg-blue-950/95 min-h-screen flex items-center overflow-hidden">
        <div className="sm:hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-blue-500/5 rounded-full blur-3xl animate-moveSlowly"></div>
              <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-indigo-500/5 rounded-full blur-3xl animate-moveSlowly delay-1000"></div>
            </div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-blue-400/15 rounded-full animate-spin-very-slow"></div>
            <div className="absolute top-10 right-10 w-[300px] h-[300px] border-2 border-blue-400/15 rounded-full animate-reverse-spin"></div>
            <div className="absolute top-20 right-20 w-[200px] h-[200px] border border-dashed border-blue-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-30 right-30 w-[100px] h-[100px] border-2 border-blue-400/15 rounded-full animate-spin-very-slow"></div>
            
            <div className="absolute -bottom-[200px] -left-[100px] w-[500px] h-[500px] border border-blue-400/15 rounded-full"></div>
            <div className="absolute -bottom-[150px] -left-[50px] w-[400px] h-[400px] border-2 border-blue-400/15 rounded-full"></div>
            <div className="absolute -bottom-[50px] left-0 w-[300px] h-[300px] border border-dashed border-blue-400/20 rounded-full"></div>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute h-[1px] w-[150%] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent top-[35%] right-[-150%] animate-shootingStarLeft"></div>
              <div className="absolute h-[1px] w-[150%] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent bottom-[20%] left-[-150%] animate-shootingStarRight"></div>
              
              <div className="absolute w-[1px] h-[150%] bg-gradient-to-b from-transparent via-blue-400/40 to-transparent left-[15%] top-[-150%] animate-shootingStarDown"></div>
              <div className="absolute w-[1px] h-[150%] bg-gradient-to-b from-transparent via-blue-300/30 to-transparent right-[45%] bottom-[-150%] animate-shootingStarUp"></div>
            </div>

            <div className="absolute inset-0">
              <div className="absolute w-1.5 h-1.5 bg-blue-400/50 rounded-full top-[35%] left-[15%] animate-pulseGlow shadow-[0_0_10px_rgba(96,165,250,0.4)]"></div>
              <div className="absolute w-1.5 h-1.5 bg-blue-400/50 rounded-full bottom-[20%] right-[45%] animate-pulseGlow delay-700 shadow-[0_0_10px_rgba(96,165,250,0.4)]"></div>
            </div>

            <div className="sm:hidden">
                <div className="absolute top-20 left-20 w-32 h-32 border border-dashed border-blue-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-40 right-40 w-40 h-40 border-2 border-blue-400/20 rounded-full animate-reverse-spin"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-dashed border-blue-400/15 rounded-full animate-spin-very-slow"></div>
                <div className="absolute bottom-1/4 right-1/3 w-28 h-28 border-2 border-dashed border-blue-400/20 rounded-full animate-spin-slow"></div>
            </div>
        </div>

        <div className="hidden sm:block">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-blue-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] bg-indigo-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] bg-blue-400/5 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-indigo-400/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="absolute top-0 right-0 w-[900px] h-[900px] border border-dashed border-blue-400/15 rounded-full"></div>
            <div className="absolute top-20 right-20 w-[700px] h-[700px] border-2 border-blue-400/15 rounded-full"></div>
            <div className="absolute top-40 right-40 w-[500px] h-[500px] border border-dashed border-blue-400/20 rounded-full"></div>
            <div className="absolute top-60 right-60 w-[300px] h-[300px] border-2 border-dashed border-blue-400/15 rounded-full"></div>
            
            <div className="absolute -bottom-[500px] -left-[200px] w-[1200px] h-[1200px] border border-dashed border-blue-400/15 rounded-full"></div>
            <div className="absolute -bottom-[300px] -left-[100px] w-[900px] h-[900px] border-2 border-dashed border-blue-400/15 rounded-full"></div>
            <div className="absolute -bottom-[100px] left-0 w-[600px] h-[600px] border border-dashed border-blue-400/20 rounded-full"></div>

            <div className="absolute top-20 left-20 w-48 h-48 border border-dashed border-blue-400/20 rounded-full"></div>
            <div className="absolute bottom-40 right-40 w-64 h-64 border-2 border-dashed border-blue-400/20 rounded-full animate-reverse-spin"></div>
            <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-dashed border-blue-400/15 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 border-2 border-dashed border-blue-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-2/3 left-1/3 w-24 h-24 border border-dashed border-blue-400/15 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-36 h-36 border-2 border-dashed border-blue-400/15 rounded-full animate-spin-very-slow"></div>

            <svg className="absolute inset-0 w-[200%] h-[200%] -translate-x-[25%] -translate-y-[25%] opacity-20" viewBox="0 0 1000 1000">
                <path className="animate-drawLineInfinite" d="M0 500 Q 250 500, 250 250 T 500 250 T 750 250 T 1000 250" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000"/>
                <path className="animate-drawLineInfinite delay-1000" d="M0 750 Q 250 750, 250 500 T 500 500 T 750 500 T 1000 500" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000"/>
                <path className="animate-drawLineInfinite delay-[2000ms]" d="M250 0 L 250 1000" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000"/>
                <path className="animate-drawLineInfinite delay-[3000ms]" d="M500 0 L 500 1000" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000"/>
                <path className="animate-drawLineInfinite delay-[4000ms]" d="M750 0 L 750 1000" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="1000"/>
            </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl relative z-10">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-none tracking-tight">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="w-10 h-10 sm:w-20 sm:h-20">
                            <Settings className="w-10 h-10 sm:w-20 sm:h-20 text-[#81CA6E] animate-spin-slow" />
                        </div>
                        <span className="text-white/90 text-4xl sm:text-6xl font-thin">|</span>
                        <span>Projeto <span className="border-b-2 border-white">SERDE</span></span>
                    </div>
                </h1>
                <p className="text-xl sm:text-2xl text-blue-100 mb-6 sm:mb-14 mt-4 sm:mt-10 leading-relaxed font-light max-w-3xl">
                    Software Engineering: Research, Development and Education
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link href="#sobre" className="inline-block px-6 sm:px-14 py-3 sm:py-5 bg-blue-100/10 backdrop-blur-sm border-2 border-blue-200/50 text-blue-50 text-sm sm:text-xl font-medium rounded-xl hover:bg-blue-100/20 hover:border-blue-300 hover:text-white hover:tracking-wider transition-all duration-300 ease-in-out text-center transform hover:scale-102 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95">
                        Saiba Mais
                    </Link>
                </div>
            </div>
            
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full filter blur-3xl opacity-[0.02] -z-10"></div>
        </div>
      </div>
    )
  }