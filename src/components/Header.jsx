"use client"
import { useState } from "react";
import MainButton from "./MainButton";
import Link from "next/link";

export default function Header() {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="flex flex-row flex-wrap sticky top-0 right-0 z-50 items-center justify-between h-30 bg-white">
            <img src={'/FlokiaLogo1.svg'} alt='Flokia Logo' className="p-4 ml-8 w-[15vw] min-w-[130px] max-w-[180px]" />
            <div className="md:hidden relative pr-4">
                <button type="button" onClick={() => setShowDropdown(!showDropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {showDropdown && <div className="absolute right-0 w-64">
                    <nav className="flex flex-col w-full bg-white rounded-lg">
                        <ul className="flex flex-col text-left rounded-lg text-neutral-darker text-md">
                            <Link href="#about" scroll={true}>
                                <li className="text-xl rounded-t-lg bg-white px-6 py-4 w-full active:bg-neutral-dark">Sobre Nós</li>
                            </Link>
                            <Link href="#howItWorks" scroll={true}>
                                <li className="text-xl bg-white px-6 py-4 w-full active:bg-neutral-dark">Como Funciona</li>
                            </Link>
                            <Link href="#budget" scroll={true}>
                                <li className="text-xl bg-white px-6 py-4 w-full active:bg-neutral-dark">Solicitar Orçamento</li>
                            </Link>
                            <Link href="#contact" scroll={true}>
                                <li className="px-6 py-4 rounded-b-lg"><MainButton content="Entre em Contato" /></li>
                            </Link>
                        </ul>
                    </nav>
                </div>}
            </div>

            <nav className="hidden md:flex mr-8">
                <ul className="hidden md:flex flex-wrap items-center gap-6 text-neutral-dark text-md">
                    <Link href="#about" scroll={true}>
                        <li className="hidden md:flex hover:text-neutral-dark-hover cursor-pointer">Sobre Nós</li>
                    </Link>
                    <Link href="#howItWorks" scroll={true}>
                        <li className="hidden md:flex hover:text-neutral-dark-hover cursor-pointer">Como Funciona</li>
                    </Link>
                    <Link href="#budget" scroll={true}>
                        <li className="hidden md:flex hover:text-neutral-dark-hover cursor-pointer">Solicitar Orçamento</li>
                    </Link>
                    <Link href="#contact" scroll={true}>
                        <li><MainButton content="Entre em Contato" /></li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}