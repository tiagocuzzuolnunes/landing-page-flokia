"use client";
import { useState } from "react";

export default function FaqQuestion({  question, answer }) {

    const [isSelected, setIsSelected] = useState(null);

    const toggleQuestion = (index) => {
        setIsSelected(isSelected === index ? null : index);
    };

    return (

        <div className="flex flex-col">

            {/* {title.map((titl) => (
                <h3 className="text-white text-xl font-bold" key={titl.id}>{titl.text}</h3>
            ))} */}

            {question.map((quest, index) => (
                <div key={quest.id} className="flex flex-col justify-center bg-white h-auto w-[70vw] rounded-md py-6 my-6" onClick={() => toggleQuestion(index)}>

                    <div className="flex flex-col w-full justify-between px-4">

                        <div className="flex w-full justify-between">


                            <p>{quest.text}</p>

                            <img src="/dropdownIcon.svg" alt="seta para baixo" className={`w-4 transition-transform duration-1000 ${isSelected === index ? "rotate-180" : ""}`} />


                        </div>
                        <div
                            className={`transition-all duration-800 ${isSelected === index ? "h-auto py-4" : "h-0"} overflow-hidden ease-in-out`}
                            style={{ backgroundColor: isSelected === index ? "#ffffff" : "transparent" }}
                        >

                            <div className="text-neutral-dark pt-6">

                                {quest.answer && <p>{quest.answer}</p>}

                            </div>


                        </div>

                    </div>

                </div>
            ))}

        </div>

    )
}