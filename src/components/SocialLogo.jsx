export default function SocialLogo({ src, alt }) {
    return (
        <button className="border-box w-8 bg-white rounded-md flex justify-center items-center">
            <img src={src} alt={alt} className="object-contain"/>
        </button>
    )
}