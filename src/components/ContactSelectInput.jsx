//tipo de input
//titulo input
//placeholder input

export default function ContactSelectInput({ label, options }) {

    let opt = options.length;
    const elements = [];

    for (let i = 0; i < opt; i++) {
        console.log(options[i]);

        elements.push(
            <option className="bg-white text-neutral-darker p-2" key={options[i]} value={options[i]}>{options[i]}</option>)

    }

    return (
        <div className="px-4 py-2">
            <div className="max-w-full flex flex-row gap-3 items-center">

                <h4 className="text-sm text-neutral-darker">
                    {label}
                </h4>


            </div>
            <div className={`relative w-full h-12 bg-white placeholder:pl-2 rounded-lg border-2 border-neutral-normal `}>

                <select className="appearance-none bg-white w-full h-full">
                    {elements}
                </select>
                {options[3] === "Outros (Por favor, especifique)" && options[3]?
                    <input type="text" className="w-full h-12 border-2 border-neutral-normal"></input> : null
                }
                
            </div>
        </div>
    )

}