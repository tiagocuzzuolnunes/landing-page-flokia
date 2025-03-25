import Card from "./Card"

const cardsData = [
    {
        title: "Para Consumidores (B2C)",
        items: [
            { id: "1", text: "Compare preços de vários estabelecimentos em tempo real." },
            { id: "2", text: "Alertas de descontos e recomendações personalizadas." },
            { id: "3", text: "Acesso a promoções exclusivas." },
            { id: "4", text: "Economize tempo e dinheiro." },
            { id: "5", text: "Compartilhe ofertas com amigos e familiares." }
        ]
    },
    {
        title: "Para Empresas (B2B)",
        items: [
            { id: "1", text: "Anuncie produtos para um público segmentado e amplo." },
            { id: "2", text: "Sistema de gestão empresarial." },
            { id: "3", text: "Receba análises detalhadas sobre o comportamento de compra dos usuários." },
            { id: "4", text: "Participe de promoções exclusivas e campanhas de marketing." }
        ]
    }
]

export default function ServiceSection() {
    return (
        <section className="flex w-full items-center flex-col text-center h-auto bg-primary-darker px-16 py-8">

            <h2 className="text-3xl font-bold text-white my-6">Nossos serviços personalizados para você</h2>
            <p className="text-lg my-6 text-white">A nova solução da Flokia, o Cartip, é a sua ferramenta definitiva para economizar nas compras do dia a dia. Com nosso aplicativo, você pode comparar preços de diversos estabelecimentos em sua cidade, criar listas de compras personalizadas, acessar histórico de preços e compartilhar ofertas com facilidade. Além disso, trabalhamos com clientes B2B, permitindo que estabelecimentos anunciem diretamente no nosso app, aumentando suas vendas e visibilidade.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card}/>
                ))}
            </div>

        </section>
    )
}