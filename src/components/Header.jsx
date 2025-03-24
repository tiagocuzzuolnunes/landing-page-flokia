import Link from "next/link";

export default function Header() {
    return(
        <header className="flex flex-row items-center justify-between h-30 bg-white">
            <img src={'/FlokiaLogo1.svg'} alt='Flokia Logo' height='120' className="p-4 ml-8 w-[20vw]"/>
            <nav className="flex mr-8">
                <ul className="flex items-center gap-6 text-neutral-dark">
                    <li className="hover:text-neutral-dark-hover">Sobre Nós</li>
                    <li className="hover:text-neutral-dark-hover">Como Funciona</li>
                    <li className="hover:text-neutral-dark-hover">Solicitar Orçamento</li>
                    <li><button className="bg-primary-normal hover:bg-primary-normal-hover text-white p-2 rounded-md">Cadastre-se</button></li>
                </ul>
            </nav>
        </header>
    )
}