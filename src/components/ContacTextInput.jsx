//tipo de input
//titulo input
//placeholder input

export default function ContactTextInput({label, placeholder, isRequired = false}) {

    

        return (
            <div className="px-4 py-2">
                <div className={`max-w-full flex flex-row gap-3 items-center ${isRequired ? 'justify-between' : null}`}>

                <h4 className="text-sm text-neutral-darker">
                    {label}
                </h4>
                {isRequired ? <span className="text-red-500 pr-5">*</span> : null}

                </div>
                <div>
                    
                    <input type="text" required={isRequired} className={`w-full h-12 bg-white placeholder:pl-2 rounded-lg border-2 border-neutral-normal `} placeholder={placeholder} />

                </div>
            </div>
        )

    }