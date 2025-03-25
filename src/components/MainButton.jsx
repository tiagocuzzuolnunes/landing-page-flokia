export default function MainButton({ content }) {
    return(
        <button className="bg-primary-normal hover:bg-primary-normal-hover text-white font-bold px-4 py-3 rounded-md cursor-pointer">{content}</button>
    )
}