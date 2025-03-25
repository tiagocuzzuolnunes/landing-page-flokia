import Link from "next/link";
import MainButton from "./MainButton";

export default function Header() {
    return(
        <header className="flex flex-row flex-wrap sticky top-0 right-0 z-50 items-center justify-between h-30 bg-white">
            <img src={'/FlokiaLogo1.svg'} alt='Flokia Logo' className="p-4 ml-8 w-[15vw] max-w-[180px]"/>
            <nav className="flex mr-8">
                <ul className="flex flex-wrap items-center gap-6 text-neutral-dark text-md">
                    <li className="hover:text-neutral-dark-hover cursor-pointer">Sobre Nós</li>
                    <li className="hover:text-neutral-dark-hover cursor-pointer">Como Funciona</li>
                    <li className="hover:text-neutral-dark-hover cursor-pointer">Solicitar Orçamento</li>
                    <li><MainButton content="Cadastre-se"/></li>
                </ul>
            </nav>
        </header>
    )
}