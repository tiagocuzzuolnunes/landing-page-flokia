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
        title: [{ id: "1", text: "Para Supermercados (B2B)" }],
        question: [
            { id: "4", text: "Como posso listar meu supermercado no Cartip?" },
            { id: "5", text: "Existe um custo para listar meu supermercado no Cartip?" },
            { id: "6", text: "Como o Cartip pode aumentar minhas vendas?" }
        ],
        answer: [
            { id: "4", text: "Para listar seu supermercado e começar a divulgar suas ofertas no Cartip, basta preencher o formulário de solicitação de orçamento em nosso site. Nossa equipe entrará em contato para discutir os próximos passos e personalizar um plano que atenda às suas necessidades." },
            { id: "5", text: "Oferecemos diferentes planos de parceria, adaptados às necessidades e ao tamanho do seu negócio. Durante nossa consulta inicial, discutiremos as opções de plano e encontraremos uma solução que se encaixe no seu orçamento." },
            { id: "6", text: "Ao listar seu supermercado e suas ofertas no Cartip, você aumenta a visibilidade do seu negócio para um público amplo e interessado em economizar. Isso não apenas atrai mais clientes para o seu supermercado, mas também pode aumentar significativamente suas vendas online e físicas." }
        ]
    }
];

const generalQuestions = [
    {
        title: [{ id: "1", text: "Gerais" }],
        question: [
            { id: "7", text: "Os preços e ofertas são atualizados com que frequência?" },
            { id: "8", text: "Posso confiar na precisão dos preços listados no Cartip?" },
            { id: "9", text: "Como posso entrar em contato com o Cartip para mais informações?" }
        ],
        answer: [
            { id: "7", text: "Nossos preços e ofertas são atualizados diariamente, garantindo que você tenha acesso às informações mais atuais e possa aproveitar as melhores ofertas do momento." },
            { id: "8", text: "Sim, nossa equipe se dedica a garantir a precisão dos preços e ofertas listados. Trabalhamos em estreita colaboração com nossos parceiros de supermercado para assegurar que as informações sejam confiáveis e atualizadas." },
            { id: "9", text: "Se você tiver mais perguntas ou precisar de assistência, pode nos contatar através do formulário de contato em nosso site, ou enviar um e-mail diretamente para nossa equipe de suporte. Estamos sempre aqui para ajudar!" }
        ]
    }
];


export default function FaqSection(question, answer) {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <section className="flex flex-col items-center bg-primary-darker h-auto py-6">

            <h2 className="text-2xl text-white font-bold">Principais Dúvidas</h2>

            <h3 className="text-white text-xl justify-self-left font-bold" >Para Consumidores (B2C)</h3>

            {consumerQuestions.map((info, index) => (
                <FaqQuestion key={index} {...info} />
            ))}

        </section>
    )
}