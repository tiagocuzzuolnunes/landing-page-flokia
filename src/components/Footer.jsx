import MainButton from "./MainButton";
import SocialLogo from "./SocialLogo";
import React from "react";

function Footer() {
    return (
        <section className="bg-primary-darker text-white flex flex-col justify-center items-center py-8 px-16">

            <div className="grid grid-cols-2 md:grid-cols-8">

                <article className="md:col-span-2 pb-4">

                    <h4 className="cursor-default font-semibold text-md">
                        Destaques
                    </h4>
                    <ul>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Mercado
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Bebidas
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Farmácia
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Saudável
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Padaria
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Regional
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Todas as categorias
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Cupons
                            </span>
                        </li>

                        <li>
                            <span className="cursor-pointer font-light hover:text-neutral-normal-hover">
                                Cashback
                            </span>
                        </li>

                    </ul>

                </article>

                <article className="md:col-span-2">

                    <h4 className="cursor-default font-semibold text-lg">
                        Precisa de ajuda?
                    </h4>

                    <MainButton content="Tire sua Dúvida" />

                </article>

                <article className="md:col-span-2 md:px-4">

                    <p className="font-semibold text-md text-left w-full">
                        Siga-nos
                    </p>

                    <div className="mt-1 flex flex-row text-left w-full mb-4 gap-1">

                        <a target="_blank" href="https://www.instagram.com/flokia.startup?igsh=MWkyaHExYTh4bDl6Zw%3D%3D&utm_source=qr">

                            <SocialLogo src="/instagramLogo.svg" alt="Logo Instagram. Clique para entrar no Instagram da Flokia" />

                        </a>

                        <a target="_blank" href="https://www.youtube.com/@Flokia-m8q">

                            <SocialLogo src="/youtubeLogo.svg" alt="Logo Youtube. Clique para entrar no Youtube da Flokia" />

                        </a>

                    </div>

                </article>

                <article className="md:col-span-2 md:px-4">

                    <p className="font-semibold text-md text-left w-full">
                        Baixe nosso app
                    </p>

                    <div className="mt-1 flex flex-row text-left w-full mb-4 gap-1">
                        <a target="_blank" href="https://www.youtube.com/@Flokia-m8q">

                            <SocialLogo src="/appleLogo.svg" alt="Logo da Apple. Clique para instalação de app IOS" className="w-8" />

                        </a>
                        <a target="_blank" href="https://www.youtube.com/@Flokia-m8q">

                            <SocialLogo src="/androidLogo.svg" alt="Logo da Android. Clique para instalação de app Android" className="w-8" />

                        </a>

                    </div>

                </article>

            </div>

            <div className="font-medium text-sm w-full text-center border-y-1 py-2 my-10 border-gray-400">
                Compare preços e produtos de grandes marcas.
            </div>

            <span className="text-sm text-left w-full mt-6">
                O uso deste site está sujeito aos termos e condições do <a href="https://github.com/Flokkia" target="_blank" className="underline">Termo de Uso</a> e <a href="https://github.com/Flokkia" target="_blank" className="underline">Política de privacidade</a>.
            </span>

            <div className="w-full grid grid-cols-2 items-center">

                <span className="text-sm text-left w-full mt-5 justify-self-start">
                    CNPJ: 44.547.191/0001-81 / São Mateus, ES
                </span>

                <p className="text-sm mt-8 mb-4 justify-self-end">
                    © Copyrights 2025 - Todos os direitos reservados.
                </p>

            </div>


            <div className="mb-4 mt-16">

                <img src="/FlokiaLogo2.svg" alt="Logo da Flokia" className="max-w-[15vw]" />

            </div>


        </section>
    );
}

export default Footer;