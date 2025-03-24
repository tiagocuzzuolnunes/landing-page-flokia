export default function PresentationSection() {
    return (
        <section className="flex justify-between h-auto bg-white pt-30">
            <div className="px-16 py-8">
                <h2 className="text-5xl font-bold">Economize em todas as suas compras com as soluções da <span className="text-primary-normal">Flokia</span></h2>
                <p className="text-xl mt-8 text-neutral-darker">Compare preços em tempo real, monte suas listas de compras e encontre as melhores ofertas para sua casa ou negócio!</p>
            </div>
            <img src="bannerPhoto.png" alt="Foto de família no supermercado" className="object-contain object-right"/>
        </section>
    )
}