export default function PresentationSection() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 justify-between border-box w-full bg-white ">
            <div className="border-box px-16 py-8">
                <h2 className="text-5xl font-bold">Economize em todas as suas compras com as soluções da <span className="text-primary-normal">Flokia</span></h2>
                <p className="text-xl mt-8 text-neutral-darker">Compare preços em tempo real, monte suas listas de compras e encontre as melhores ofertas para sua casa ou negócio!</p>
            </div>
            <img src="bannerPhoto.png" alt="Foto de família no supermercado" className="object-cover object-right justify-self-end"/>
        </section>
    )
}