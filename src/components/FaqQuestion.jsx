"use client";
import { useState } from "react";

export default function FaqQuestion({ title, question, answer }) {

    const [isSelected, setIsSelected] = useState(null);

    const toggleQuestion = (index) => {
        setIsSelected(isSelected === index ? null : index);
    };

    return (

        <div className="flex flex-col">

            {title.map((titl) => (
                <h3 key={titl.id}>{titl.text}</h3>
            ))}

            {question.map((quest, index) => (
                <div key={quest.id} className="flex flex-col justify-center bg-white h-auto w-[70vw] rounded-md py-6 my-6" onClick={() => toggleQuestion(index)}>

                    <div className="flex flex-col w-full justify-between px-4">

                        <div className="flex w-full justify-between">


                            <p>{quest.text}</p>

                            <img src="/dropdownIcon.svg" alt="seta para baixo" className={`w-4 transition-transform duration-1000 ${isSelected === index ? "rotate-180" : ""}`} />


                        </div>
                        <div
                            className={`transition-all duration-1000 ${isSelected === index ? "h-[120px] py-4" : "h-0"} overflow-hidden ease-in-out`}
                            style={{ backgroundColor: isSelected === index ? "#ffffff" : "transparent" }}
                        >

                            {isSelected && <div className="text-neutral-dark pt-6">

                                {answer.map((answ) => (

                                    <p key={answ.id}>{answ.text}</p>

                                ))}

                            </div>}

                        </div>

                    </div>

                </div>
            ))}

        </div>

    )
}