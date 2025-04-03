export default function FeedbackCard({ title, image, subtitle, content }) {

    return (
        <article className="border-box bg-neutral-light rounded-4xl w-[80vw] h-[550px] md:max-w-[35vw]">
            <div className="flex flex-row flex-wrap items-center">
                {image.map((url) => (
                    <img key={url.id} src={url.text} draggable="false" className="p-4"/>
                ))}
                <div className="flex flex-col">
                    {title.map((name) => (
                        <h3 key={name.id} className="text-lg font-semibold px-4 mb-1">
                            {name.text}
                        </h3>
                    ))}
                    {subtitle.map((description) => (
                        <p key={description.id} className="text-xs text-neutral-darker px-4 mt-1">
                            {description.text}
                        </p>
                    ))}
                </div>
            </div>

            {content.map((feedback) => (
                <p key={feedback.id} className="px-5 py-5 text-neutral-darker" >
                    {feedback.text}
                </p>
            ))}

        </article>
    )
}