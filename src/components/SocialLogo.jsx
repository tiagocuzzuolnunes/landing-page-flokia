export default function SocialLogo({ src, alt }) {
    return (
        <button className="border-box cursor-pointer w-8 h-8 p-1 bg-white rounded-md flex justify-center items-center">
            <img src={src} alt={alt} className="object-cover"/>
        </button>
    )
}