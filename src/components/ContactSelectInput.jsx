//tipo de input
//titulo input
//placeholder input
"use client";
import { useState } from "react";
export default function ContactSelectInput({ label, options }) {

    const [selectedOption, setSelectedOption] = useState("");
    const opt = options.length;
    const elements = [];

    for (let i = 0; i < opt; i++) {
        console.log(options[i]);

        elements.push(
            <option className="bg-white text-neutral-darker pl-4" key={options[i]} value={options[i]}>{options[i]}</option>)

    }

    return (
        <div className="px-4 py-2">
            <div className="max-w-full flex flex-row gap-3 items-center">

                <h4 className="text-sm text-neutral-darker">
                    {label}
                </h4>


            </div>
            <div className={`relative w-full h-12 bg-white placeholder:pl-2 rounded-lg border-2 border-neutral-normal `}>

                <select className="appearance-none text-neutral-darker pl-2 bg-white w-full h-full" onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option disabled selected>Selecione uma opção</option>
                    {elements}
                </select>
                {selectedOption === "Outros (Por favor, especifique)" && (
                    <input
                        type="text"
                        className="block w-full bg-white h-24 border-2 border-neutral-normal mt-2 px-2"
                        placeholder="Especifique aqui..."
                    />

                )}

            </div>
        </div>
    )

}