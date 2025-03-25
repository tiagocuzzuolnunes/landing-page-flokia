import MainButton from "./MainButton";

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
        <div className="bg-primary-darker flex flex-col justify-center items-center p-4">
            <div>
                <p className="font-sans text-white font-semibold text-md text-left w-full">
                    Siga-nos
                </p>
                <div className="mt-1 flex flex-row text-left w-full mb-4 gap-1">
                    <img src="/instagramLogo.svg" alt="Logo Instagram" className="w-8" />
                    <img src="/youtubeLogo.svg" alt="Logo Youtube" className="w-8" />
                </div>
            </div>
            <div>
                <p className="font-sans text-white font-semibold text-md text-left w-full">
                    Baixe nosso aplicativo
                </p>
                <div  className="mt-1 flex flex-row text-left w-full mb-4 gap-1">
                    <img src="/appleLogo.svg" alt="Logo da Apple para instalação de app IOS" className="w-8" />
                    <img src="/androidLogo.svg" alt="Logo da Android para instalação de app Android" className="w-8" />
                </div>
            </div>
            <span className="font-sans text-white font-medium border-t-1 border-b-1 w-full text-center py-2 text-sm border-gray-400">
                Compare preços e produtos de grandes marcas.
            </span>
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
        </div>
    );
}

export default Footer;