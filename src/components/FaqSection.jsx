"use client";
import { useState } from "react";
import FaqQuestion from "./FaqQuestion";

const consumerQuestions = [
    {

        question: [
            { id: "1", text: "Como o Cartip encontra os melhores preços?", answer: "Utilizamos tecnologia avançada para monitorar uma ampla gama de supermercados e atualizamos nossos dados em tempo real para garantir que você tenha acesso às ofertas mais recentes e aos melhores preços disponíveis." },

        ]


    },
    {

        question: [

            { id: "2", text: "O aplicativo Cartip é gratuito?", answer: "Sim, nosso aplicativo é totalmente gratuito para os consumidores. Nosso objetivo é ajudá-lo a economizar dinheiro em suas compras de supermercado." },

        ],
    },
    {

        question: [

            { id: "3", text: "Posso encontrar produtos de qualquer supermercado no Cartip?", answer: "Trabalhamos com uma ampla rede de supermercados, desde grandes cadeias até estabelecimentos locais. Estamos constantemente expandindo nossa parceria com supermercados para oferecer uma variedade ainda maior de produtos e ofertas." }
        ],
    }

];

const businessQuestions = [
    {


        question: [
            { id: "1", text: "Como posso listar meu supermercado no Cartip?", answer: "Para listar seu supermercado e começar a divulgar suas ofertas no Cartip, basta preencher o formulário de solicitação de orçamento em nosso site. Nossa equipe entrará em contato para discutir os próximos passos e personalizar um plano que atenda às suas necessidades." },

        ]


    },
    {

        question: [

            { id: "2", text: "Existe um custo para listar meu supermercado no Cartip?", answer: "Oferecemos diferentes planos de parceria, adaptados às necessidades e ao tamanho do seu negócio. Durante nossa consulta inicial, discutiremos as opções de plano e encontraremos uma solução que se encaixe no seu orçamento." },

        ],
    },
    {

        question: [

            { id: "3", text: "Como o Cartip pode aumentar minhas vendas?", answer: "Ao listar seu supermercado e suas ofertas no Cartip, você aumenta a visibilidade do seu negócio para um público amplo e interessado em economizar. Isso não apenas atrai mais clientes para o seu supermercado, mas também pode aumentar significativamente suas vendas online e físicas." }
        ],
    }
];

const generalQuestions = [

    {


        question: [
            { id: "1", text: "Os preços e ofertas são atualizados com que frequência?", answer: "Nossos preços e ofertas são atualizados diariamente, garantindo que você tenha acesso às informações mais atuais e possa aproveitar as melhores ofertas do momento." },

        ]


    },
    {

        question: [

            { id: "2", text: "Posso confiar na precisão dos preços listados no Cartip?", answer: "Sim, nossa equipe se dedica a garantir a precisão dos preços e ofertas listados. Trabalhamos em estreita colaboração com nossos parceiros de supermercado para assegurar que as informações sejam confiáveis e atualizadas." },

        ],
    },
    {

        question: [

            { id: "3", text: "Como posso entrar em contato com o Cartip para mais informações?", answer: "Se você tiver mais perguntas ou precisar de assistência, pode nos contatar através do formulário de contato em nosso site, ou enviar um e-mail diretamente para nossa equipe de suporte. Estamos sempre aqui para ajudar!" }
        ],
    }
];


export default function FaqSection(question, answer) {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <section className="flex flex-col items-center bg-primary-darker h-auto py-6">

            <h2 className="text-2xl text-white font-bold">Principais Dúvidas</h2>

            <div className="py-8">

                <div className="flex w-[70vw] justify-start">

                    <h3 className="text-white text-xl justify-self-left font-bold" >Para Consumidores (B2C)</h3>

                </div>

                {consumerQuestions.map((info, index) => (
                    <FaqQuestion key={index} {...info} />
                ))}

            </div>

            <div className="py-8">

                <div className="flex w-[70vw] justify-start">

                    <h3 className="text-white text-xl justify-self-left font-bold" >Para Supermercados (B2B)</h3>

                </div>

                {businessQuestions.map((info, index) => (
                    <FaqQuestion key={index} {...info} />
                ))}

            </div>

            <div className="py-8">

                <div className="flex w-[70vw] justify-start">

                    <h3 className="text-white text-xl justify-self-left font-bold" >Gerais</h3>

                </div>

                {generalQuestions.map((info, index) => (
                    <FaqQuestion key={index} {...info} />
                ))}

            </div>


        </section>
    )
}