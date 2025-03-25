export default function CarouselButton({ src }) {
    return (
        <div className="flex justify-center items-center relative">
            <img src="/elipse.svg" alt="Círculo da seta para carrosel de feedbacks" className=" z-5" />
            <img src={src} alt="Seta para carrosel de feedbacks" className="absolute z-10" />
        </div>
    )
};
