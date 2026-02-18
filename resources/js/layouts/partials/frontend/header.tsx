import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Menu, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function FrontendHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);


    const closeMobile = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50">
            {/* Main Navigation */}
            <nav className="w-full bg-primary-600">
                <div className="mx-auto flex container items-center justify-between px-4 lg:px-6">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center py-3">
                        <AppLogo className="h-20 sm:h-24" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
                    </div>

                    {/* Right Side: CTA Button + User Icon */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <Link
                            href={route('login')}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-500 text-white transition-colors hover:bg-slate-600"
                        >
                            <User className="h-5 w-5" />
                        </Link>
                    </div>

                    {/* Right Side: CTA + User + Hamburger (Mobile) */}
                    <div className="flex items-center lg:hidden">
                        {/* Vertical divider */}
                        <div className="mr-3 hidden h-10 w-px bg-white/15 sm:block" />

                        {/* CTA pill */}
                        <Link
                            href={route('lpa.start')}
                            className="group hidden items-center gap-1 rounded-full bg-slate-500 py-1.5 pl-3 pr-1.5 transition-all hover:bg-slate-600 sm:flex"
                        >
                            <span className="flex flex-col leading-tight text-white">
                                <span className="text-[10px] font-bold tracking-wide">
                                    Create Your LPA &ndash; Just &pound;99 Each
                                </span>
                                <span className="text-[9px] font-normal text-white/70">
                                    (plus &pound;92 OPG fee per LPA)
                                </span>
                            </span>
                            <span className="flex shrink-0 items-center text-slate-200">
                                <ChevronRight className="-mr-2 h-4 w-4" />
                                <ChevronRight className="h-4 w-4" />
                            </span>
                        </Link>

                        {/* User icon – dark rounded square */}
                        <Link
                            href={route('login')}
                            className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-900/70 text-white transition-colors hover:bg-primary-900"
                        >
                            <User className="h-4 w-4" />
                        </Link>

                        {/* Hamburger – outlined box */}
                        <button
                            type="button"
                            className="ml-2 flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10"
                            onClick={() => {
                                setMobileMenuOpen((o) => !o);
                            }}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu – Full-screen Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 flex flex-col bg-primary-600 lg:hidden">
                        {/* Header row: Logo + Close */}
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                            <Link href="/" onClick={closeMobile} className="flex shrink-0 items-center">
                                <AppLogo className="h-10 w-auto" />
                            </Link>
                            <button
                                type="button"
                                onClick={closeMobile}
                                className="flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Navigation list */}
                        <div className="flex-1 overflow-y-auto px-4 pb-8 pt-2">
                            {/* Mobile CTA + Sign in */}
                            <div className="mt-6 space-y-3">
                                <Link
                                    href={route('login')}
                                    onClick={closeMobile}
                                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    <User className="h-4 w-4" />
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
