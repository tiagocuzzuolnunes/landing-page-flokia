export default function Card({ title, items }) {
    return (
        <div className="flex flex-col bg-white hover:bg-primary-light-hover cursor-pointer w-[35vw] max-w-[600px] rounded-3xl p-8">
            <h3 className="text-xl text-primary-normal font-bold">{title}</h3>
            <ul className="text-left text-neutral-darker list-disc mx-5 my-4">
                {items.map((item) => (
                    <li className="text-lg my-8" key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}