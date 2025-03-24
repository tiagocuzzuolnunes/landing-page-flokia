export default function CartipInfoCard({ title, items }) {

    return (
        <article>
            {title.map((titleProp) => (
            <h3 className="text-neutral-darker">{titleProp.text}<span className="text-primary-normal">{titleProp.style}</span></h3>
            ))}
            <ul className="">
                {items.map((item) => (
                    <li className="flex flex-row">
                        <img src="/checkIcon.svg" alt="Ícone de certo" />
                        <p key={item.id}><span>{item.subtitle}</span>{item.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}