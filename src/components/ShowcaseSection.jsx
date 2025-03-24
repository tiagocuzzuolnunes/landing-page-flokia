import CartipInfoCard from "./CartipInfoCard";

const CartipInfo1 = [
    {
        title: [
            {text: "Aqui você encontra as melhores ofertas e promoções para suas compras diárias.", style: ""}],
        items: [
            { id: "1", subtitle: "Pesquise Produtos: ", text: "Digite o nome dos itens que deseja comprar e veja os preços em diversos estabelecimentos da sua região." },
            { id: "2", subtitle: "Compare Preços: ", text: "Compare os preços dos produtos em tempo real e escolha as melhores ofertas." },
            { id: "3", subtitle: "Monte Sua Lista de Compras: ", text: "Crie listas de compras personalizadas e salve-as para futuras compras." },
            { id: "4", subtitle: "Atualizado Diariamente: ", text: "Histórico de Preços e Compartilhamento de Ofertas."}
]}]

const CartipInfo2 = [
    {
        title: [
            {text: "Porque escolher o ", style: "Cartip?"}],
        items: [
            { id: "1", subtitle: "Economia de Tempo e Dinheiro: ", text: "Com nossa tecnologia de comparação de preços, você economiza em cada compra, garantindo sempre o melhor preço disponível." },
            { id: "2", subtitle: "Decisões de Compra: ", text: "Fornecemos todas as informações que você precisa para fazer escolhas inteligentes e economizar no seu orçamento." },
            { id: "3", subtitle: "Acesso a Promoções Exclusivas: ", text: "Nossos usuários recebem alertas de promoções e ofertas exclusivas, para nunca perderem uma oportunidade de economizar." }
        ]
    }
]

export default function ShowcaseSection() {
    return (
        <section className="grid grid-cols-2 w-full bg-white">
            <img src="/mockupPhotoShowcase.png" alt="Mulher verificando o site do Cartip" />
            <div className="flex items-center relative">
                <img src="frontiPhone.png" alt="Iphone com Cartip na frente" className="absolute z-1 left-20 top-0"/>
                <img src="backiPhone.png" alt="Iphone com Cartip atrás e inclinado" className="absolute left-60 top-0 z-0"/>
            </div>
            <img src="Macbook1.png" alt="Computador com site do Cartip na página inicial" />
            <div>
                {CartipInfo1.map((info, index) => (
                    <CartipInfoCard key={index} {...info} />
                ))}
            </div>
            <div>
                {CartipInfo2.map((info, index) => (
                    <CartipInfoCard key={index} {...info} />
                ))}
            </div>
            <img src="Macbook2.png" alt="Computador com site do Cartip na página de detalhe de produto" />
        </section>
    )
}