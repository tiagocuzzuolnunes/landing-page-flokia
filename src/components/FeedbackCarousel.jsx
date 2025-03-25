"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import FeedbackCard from "./FeedbackCard";
import CarouselButton from './CarouselButton';

const feedbackCardsList = [
    {
        image: [
            { id: "1", text: "/CarlosSilva.png" }
        ],
        title: [
            { id: "1", text: "Carlos Silva" }
        ],
        subtitle: [
            { id: "1", text: "Proprietário de uma rede de cafeterias local" }
        ],
        content: [
            { id: "1", text: "O Cartip transformou completamente a forma como gerenciamos nossos custos. Antes, gastávamos horas comparando preços manualmente, o que era exaustivo e impreciso. Agora, com apenas alguns cliques, temos  acesso a uma análise de mercado detalhada. Reduzimos nossos custos operacionais em 20% nos últimos seis meses, impactando diretamente nossa margem de lucro." }
        ]
    },
    {
        image: [
            { id: "2", text: "/JulianaMartins.png" }
        ],
        title: [
            { id: "2", text: "Juliana Martins" }
        ],
        subtitle: [
            { id: "2", text: "Mãe de dois filhos, trabalha em tempo integral" }
        ],
        content: [
            { id: "2", text: "Com uma agenda sempre cheia, encontrar tempo para fazer compras de supermercado e economizar parecia impossível. O Cartip mudou minha rotina para melhor! Recebo alertas de promoções dos produtos que mais compro e posso comparar preços de diferentes supermercados sem sair de casa. Estou economizando, em média, 30% a mais em minhas compras de supermercado. Estou verdadeiramente grata por este serviço incrível!" }
        ]
    },
    {
        image: [
            { id: "3", text: "/GabrielCosta.png" }
        ],
        title: [
            { id: "3", text: "Gabriel Costa" }
        ],
        subtitle: [
            { id: "3", text: "Estudante universitário, morando sozinho pela primeira vez" }
        ],
        content: [
            { id: "3", text: "Morar sozinho tem sido um desafio, especialmente na gestão das minhas finanças. O Cartip foi uma descoberta fantástica. Ele me ajuda a encontrar os melhores preços para manter minha alimentação dentro do orçamento e me ensinou a ser mais consciente sobre meus gastos. A funcionalidade de recomendações personalizadas é um bônus incrível, apresentando produtos de qualidade que nem sabia que estavam em promoção." }
        ]
    }
];

// const feedbackCardsList = [feedbackCard1, feedbackCard2, feedbackCard3];

export default function FeedbackCarousel() {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <section className="flex py-24 px-6 gap-5 bg-white">

            <CarouselButton src={"arrowLeft.svg"} />

            <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
                <motion.div className="flex"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                >

                    {/* {feedbackCardsList.map(item => (
                        <motion.div key={item}>
                            {feedbackCard1.map((info, index) => (
                                <FeedbackCard key={index} {...info} />
                            ))}
                        </motion.div>
                    ))} */}

                    {feedbackCardsList.map((info, index) => (
                        <motion.div key={index} className="p-3">

                            <FeedbackCard key={index} {...info} />

                        </motion.div>
                    ))}


                    {/* {feedbackCard2.map((info, index) => (
                        <FeedbackCard key={index} {...info} />
                    ))} */}

                </motion.div>
            </motion.div>
            <CarouselButton src={"/arrowRight.svg"} />
        </section>
    )
};