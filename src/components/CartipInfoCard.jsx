export default function CartipInfoCard({ title, items }) {

    return (
        <article className="p-8">
            {title.map((titleProp) => (
            <h3 className="text-neutral-darker text-2xl font-medium mb-2" key={titleProp.id}>{titleProp.text}<span className="text-primary-normal">{titleProp.style}</span></h3>
            ))}
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="flex flex-row justify-between gap-4 py-2">
                        <img src="/checkIcon.svg" alt="Ícone de certo" className="w-4"/>
                        <p><span className="text-primary-normal">{item.subtitle}</span>{item.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}