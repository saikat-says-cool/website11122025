import React, { useState, useEffect } from 'react';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#050505] text-gray-200 font-sans selection:bg-white selection:text-black overflow-x-hidden">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
          body, h1, h2, h3, h4, p, span, button {
            font-family: 'Comfortaa', cursive;
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-30px, 50px) scale(1.1); }
            66% { transform: translate(20px, -20px) scale(0.9); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(50px, 50px) scale(0.9); }
            66% { transform: translate(-50px, -50px) scale(1.1); }
          }
          
          .orb-1 { animation: float-1 20s ease-in-out infinite; }
          .orb-2 { animation: float-2 25s ease-in-out infinite; }
          .orb-3 { animation: float-3 22s ease-in-out infinite; }
        `}
            </style>

            {/* The "Deep Ether" Background (Replaces Tentacles) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Deep background color */}
                <div className="absolute inset-0 bg-[#050505]"></div>

                {/* Glowing Orbs - creating the "expensive tech" atmosphere */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] orb-1 mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[120px] orb-2 mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-indigo-900/5 rounded-full blur-[100px] orb-3 mix-blend-screen"></div>

                {/* Noise overlay for texture (optional, keeps it grounded) */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>

            {/* Main Content Wrapper */}
            <div className="relative z-10">

                {/* Navigation - Pure Text */}
                <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#050505]/80 py-4 border-b border-white/5 backdrop-blur-xl' : 'bg-transparent py-8'}`}>
                    <div className="w-full mx-auto px-4 md:px-6 flex justify-between items-center">
                        <div className="font-bold text-lg tracking-tighter text-white hover:opacity-80 transition-opacity cursor-pointer">
                            artificialyze.
                        </div>

                        <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
                            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors tracking-wide">problem</button>
                            <button onClick={() => scrollToSection('method')} className="hover:text-white transition-colors tracking-wide">method</button>
                            <button onClick={() => scrollToSection('cost')} className="hover:text-white transition-colors tracking-wide">cost</button>
                        </div>

                        <button
                            onClick={() => window.open('https://cal.id/saikat/qualified-security-growth-conversation', '_blank')}
                            className="text-sm font-bold border-b border-white pb-0.5 hover:text-gray-300 hover:border-gray-300 transition-all"
                        >
                            audit your firm
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-48 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
                    <div className="w-full mx-auto px-4 md:px-6">
                        <div className="inline-block px-4 py-1.5 mb-10 border border-white/10 rounded-full text-xs text-gray-400 bg-white/5 backdrop-blur-sm tracking-wide">
                            Currently accepting 4 partners for Q1.
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
                            Cybersecurity sales is broken. <br />
                            We fix the infrastructure.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-14 leading-relaxed font-light max-w-2xl">
                            Most firms rely on referrals until they dry up, then panic-hire an agency that blasts generic spam.
                            <br /><br />
                            We build precise, engineer-led outbound systems that actually get replies from CISOs. No fluff. Just conversations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => window.open('https://cal.id/saikat/qualified-security-growth-conversation', '_blank')}
                                className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                Start Building
                            </button>
                            <button
                                onClick={() => window.open('https://cal.id/saikat/qualified-security-growth-conversation', '_blank')}
                                className="px-10 py-5 border border-white/20 text-white rounded-full hover:border-white transition-all hover:bg-white/5 backdrop-blur-sm"
                            >
                                Read the Protocol
                            </button>
                        </div>
                    </div>
                </section>

                {/* The Problem - Narrative */}
                <section id="problem" className="py-32 px-6 border-t border-white/5 backdrop-blur-sm bg-[#050505]/40">
                    <div className="w-full mx-auto px-4 md:px-6">
                        <span className="text-xs tracking-[0.2em] text-gray-500 font-bold mb-8 block uppercase">01 / The Reality</span>
                        <h2 className="text-4xl text-white font-bold mb-16">The "Referral Trap"</h2>

                        <div className="space-y-10 text-xl text-gray-400 font-light leading-relaxed">
                            <p>
                                You built your firm on technical excellence. Your first $2M came from your network. But now, you need predictability.
                            </p>
                            <p>
                                You tried hiring an SDR. They didn't understand compliance. <br />
                                You tried a "lead gen" agency. They burnt your domain reputation.
                            </p>
                            <p className="text-white font-medium border-l-2 border-white pl-8 py-2">
                                The hard truth: CISOs don't buy from marketing emails. They buy from peers who understand their risk profile.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Solution - Text List */}
                <section id="method" className="py-32 px-6 border-t border-white/5 backdrop-blur-sm bg-[#050505]/40">
                    <div className="w-full mx-auto px-4 md:px-6">
                        <span className="text-xs tracking-[0.2em] text-gray-500 font-bold mb-8 block uppercase">02 / The Method</span>
                        <h2 className="text-4xl text-white font-bold mb-16">Precision Outbound</h2>

                        <div className="grid gap-20">
                            <div className="group cursor-default">
                                <h3 className="text-2xl text-white font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500">Targeting, not scraping.</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We don't buy lists. We manually verify prospects. We know the difference between an MSSP buyer and a Pentest buyer. We align on your exact Ideal Customer Profile before sending a single email.
                                </p>
                            </div>

                            <div className="group cursor-default">
                                <h3 className="text-2xl text-white font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500">Infrastructure, not tools.</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We set up dedicated, isolated sending domains. We warm them up for 21 days. We protect your primary brand's reputation at all costs. This is an engineering problem, not a marketing one.
                                </p>
                            </div>

                            <div className="group cursor-default">
                                <h3 className="text-2xl text-white font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500">Relevance, not volume.</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We target low volume with high relevance. AI-driven personalization that references recent news, compliance shifts, and tech stacks. It reads like a human wrote it, because a human strategy designed it.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics - Simple Numbers */}
                <section className="py-32 px-6 border-t border-white/5 bg-[#080808] relative overflow-hidden">
                    <div className="w-full mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-16 relative z-10">
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-white mb-3">100%</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Brand Safety</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-white mb-3">5-10%</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Reply Rate</div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-5xl md:text-6xl font-bold text-white mb-3">2-6</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Qualified Meetings / Mo</div>
                        </div>
                    </div>
                </section>

                {/* Pricing - Transparent */}
                <section id="cost" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
                    <div className="w-full mx-auto px-4 md:px-6">
                        <span className="text-xs tracking-[0.2em] text-gray-500 font-bold mb-8 block uppercase">03 / The Investment</span>
                        <h2 className="text-4xl text-white font-bold mb-16">Simple Pricing.</h2>

                        <div className="border border-white/10 p-10 md:p-16 rounded-[2rem] bg-[#0a0a0a] relative overflow-hidden group hover:border-white/20 transition-all duration-700">
                            {/* Hover glow effect for card */}
                            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-all duration-1000 pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 relative z-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">Managed System</h3>
                                    <p className="text-gray-400 mt-2 text-lg">Full service execution.</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-6xl font-bold text-white">$4,000</span>
                                    <span className="text-gray-500 text-lg ml-2">/ month</span>
                                    <div className="text-gray-400 mt-2">+ $2k setup fee</div>
                                </div>
                            </div>

                            <div className="space-y-6 mb-16 text-gray-300 relative z-10 font-light text-lg">
                                <p>— Full infrastructure setup (domains, DNS, warm-up)</p>
                                <p>— Manual lead verification & research</p>
                                <p>— Senior-level copywriting & strategy</p>
                                <p>— Inbox management & meeting booking</p>
                                <p>— No long-term handcuffs (2-month minimum)</p>
                            </div>

                            <button
                                onClick={() => window.open('https://cal.id/saikat/qualified-security-growth-conversation', '_blank')}
                                className="w-full py-6 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all relative z-10 text-lg"
                            >
                                Apply for Access
                            </button>
                            <p className="text-center text-sm text-gray-600 mt-8 relative z-10">
                                We only onboard 4 clients per month to ensure quality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ - Text Only */}
                <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
                    <div className="w-full mx-auto px-4 md:px-6 space-y-20">
                        <div>
                            <h4 className="text-white font-bold text-xl mb-6">Will this hurt my domain?</h4>
                            <p className="text-gray-400 leading-relaxed text-lg">Never. We use separate, protected infrastructure. Your main domain is never touched. We take on the risk, you take the meetings.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-6">How much time do I need?</h4>
                            <p className="text-gray-400 leading-relaxed text-lg">~60 minutes for onboarding. Then you just take the calls we book. We handle the follow-ups, the scheduling, and the rejection filtering.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-6">Do you guarantee meetings?</h4>
                            <p className="text-gray-400 leading-relaxed text-lg">We guarantee infrastructure health and execution. We do not offer spammy "pay-per-meeting" incentives that ruin your brand. We align on long-term pipeline value.</p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-40 px-6 border-t border-white/5 bg-white text-black">
                    <div className="w-full mx-auto text-center px-4 md:px-6">
                        <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Ready to scale?</h2>
                        <p className="text-2xl mb-16 font-light text-gray-600">
                            We are currently vetting partners for this quarter. <br />
                            Let's see if your offer is ready for outbound.
                        </p>

                        <button className="px-14 py-7 bg-black text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-2xl" onClick={() => window.open('https://cal.id/saikat/qualified-security-growth-conversation', '_blank')}>
                            Book a Strategy Audit
                        </button>

                        <p className="mt-12 text-gray-500 font-medium">
                            Serious inquiries only. <br />
                            $24k/yr minimum contract value.
                        </p>
                    </div>
                </section>

                <footer className="py-16 px-6 bg-[#050505] text-gray-600 border-t border-white/5">
                    <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left px-4 md:px-6">
                        <div>
                            <div className="font-bold text-gray-300 text-lg mb-2">artificialyze.</div>
                            <p className="text-xs">&copy; {new Date().getFullYear()} Artificialyze.</p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <span className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-1">Contact</span>
                            <a href="mailto:inquiries@artificialyze.com" className="hover:text-white transition-colors">inquiries@artificialyze.com</a>
                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <span className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-1">HQ</span>
                            <span>Kolkata, India</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;
