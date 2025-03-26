import MainButton from "./MainButton";
import SocialLogo from "./SocialLogo";

// export default function Footer() {
//     return (
//         <section className="bg-primary-darker">
//             <article></article>
//             <article><MainButton content="Tire sua Dúvida"/></article>
//             <article></article>
//             <article></article>
//         </section>
//     )
// }

import React from "react";

function Footer() {
    return (
        <section className="bg-primary-darker flex flex-col justify-center items-center p-4">

            <div className="grid grid-cols-8">

                <article className="text-white col-span-2">

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

                <article className="text-white col-span-2">

                    <h4 className="cursor-default font-semibold text-lg">
                        Precisa de ajuda?
                    </h4>

                    <MainButton content="Tire sua Dúvida" />

                </article>

                <article>

                    <p className="font-sans text-white font-semibold text-md text-left w-full">
                        Siga-nos
                    </p>

                    <div className="mt-1 flex flex-row text-left w-full mb-4 gap-1">

                        <SocialLogo src="/instagramLogo.svg" alt="Logo Instagram. Clique para entrar no Instagram da Flokia" />

                        <SocialLogo src="/youtubeLogo.svg" alt="Logo Youtube. Clique para entrar no Youtube da Flokia" />

                    </div>

                </article>

                <article>
                    <p className="font-sans text-white font-semibold text-md text-left w-full">
                        Baixe nosso aplicativo
                    </p>
                    <div className="mt-1 flex flex-row text-left w-full mb-4 gap-1">
                        <SocialLogo src="/appleLogo.svg" alt="Logo da Apple. Clique para instalação de app IOS" className="w-8" />
                        <SocialLogo src="/androidLogo.svg" alt="Logo da Android. Clique para instalação de app Android" className="w-8" />
                    </div>
                </article>

            </div>

            <div className="font-sans text-white font-medium border-t-1 border-b-1 w-full text-center py-2 my-10 text-sm border-gray-400">
                Compare preços e produtos de grandes marcas.
            </div>

            <span className="font-sans text-white text-sm text-left w-full mt-6">
                O uso deste site está sujeito aos termos e condições do <a href="https://github.com/Flokkia" target="_blank" className="underline">Termo de Uso</a> e <a href="https://github.com/Flokkia" target="_blank" className="underline">Política de privacidade</a>.
            </span>

            <span className="font-sans text-white text-sm text-left w-full mt-5">
                CNPJ: 097738538593 / Rua Capote, 1º andar - São Paulo - SP
            </span>

            <p className="font-sans text-white text-xs mt-8 mb-4">
                © Copyrights 2024 - Todos os direitos reservados.
            </p>

            <div className="my-2">
                <img src="/FlokiaLogo2.svg" alt="Logo da Flokia" className="max-w-[15vw]" />
            </div>

        </section>
    );
}

export default Footer;