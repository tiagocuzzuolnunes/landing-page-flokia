import FeedbackCard from "./FeedbackCard";

const feedbackCard1 = [
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
    }
];

const feedbackCard2 = [
    {
        image: [
            { id: "2", text: "/GabrielCosta.png" }
        ],
        title: [
            { id: "2", text: "Gabriel Costa" }
        ],
        subtitle: [
            { id: "2", text: "Estudante universitário, morando sozinho pela primeira vez" }
        ],
        content: [
            { id: "2", text: "Morar sozinho tem sido um desafio, especialmente na gestão das minhas finanças. O Cartip foi uma descoberta fantástica. Ele me ajuda a encontrar os melhores preços para manter minha alimentação dentro do orçamento e me ensinou a ser mais consciente sobre meus gastos. A funcionalidade de recomendações personalizadas é um bônus incrível, apresentando produtos de qualidade que nem sabia que estavam em promoção." }
        ]
    }
]

export default function FeedbackSection() {
    return (
        <section className="flex justify-center gap-5 my-10">
            {feedbackCard1.map((info, index) => (
                <FeedbackCard key={index} {...info} />
            ))}
            {feedbackCard2.map((info, index) => (
                <FeedbackCard key={index} {...info} />
            ))}
        </section>
    )
}