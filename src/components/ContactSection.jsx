import ContactTextInput from "./ContacTextInput";
import ContactSelectInput from "./ContactSelectInput";

export default function ContactSection() {

    return (
        <section className="bg-primary-background h-auto py-16 px-8">

            <div className="grid grid-cols-4 gap-4">
                <article className="col-span-2 col-start-2 text-center py-16">
                    <div className="justify-self-center ">
                        <h2 className="text-2xl font-semibold">Saiba o que o <span className="text-primary-normal">Cartip</span> pode fazer</h2>
                        <p>Está pronto para transformar a maneira como seu supermercado alcança novos clientes<br /> ou como você faz suas compras de supermercado? <br />Solicite seu orçamento grátis agora e descubra o poder do <span className="text-primary-normal">Cartip</span> </p>
                        <p>Preencha o formulário abaixo e dê o primeiro passo para economizar mais e aumentar suas vendas!</p>
                    </div>
                </article>
                <article className="col-span-2">
                    <h4 className="pb-2 font-semibold">Instruções para o preenchimento</h4>
                    <div className="rounded-md bg-white px-4">
                        <ul>
                            <li className="flex items-start text-neutral-darker gap-1 py-3">
                                <span className="text-xs pt-1">•</span>
                                Por favor, preencha todas as perguntas com a maior precisão possível.
                            </li>
                            <li className="flex items-start text-neutral-darker gap-1 py-3">
                                <span className="text-xs pt-1">•</span>
                                As informações fornecidas serão utilizadas exclusivamente para a elaboração de um orçamento personalizado e não serão compartilhadas com terceiros.
                            </li>
                            <li className="flex items-start text-neutral-darker gap-1 pt-3 pb-5">
                                <span className="text-xs pt-1">•</span>
                                Após o envio deste formulário, nossa equipe entrará em contato em até 48 horas para discutir sua solicitação em detalhes.
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="col-span-2">
                    <h4 className="pb-2 font-semibold">Solicitar Orçamento</h4>
                    <div className="grid md:grid-cols-2">
                        <ContactTextInput label="Seu Nome / Nome da Empresa" placeholder="Insira o nome" isRequired={true} />
                        <ContactTextInput label="Sobrenome" placeholder="Insira o seu sobrenome" isRequired={false} />
                        <ContactTextInput label="E-mail para Contato" placeholder="Insira o seu e-mail" isRequired={true} />
                        <ContactTextInput label="Número de Telefone" placeholder="Insira o seu número" isRequired={true} />
                        <ContactTextInput label="Cidade" placeholder="Insira a sua cidade" isRequired={true} />
                        <ContactTextInput label="Estado" placeholder="Insira o seu estado" isRequired={true} />
                    </div>
                    <div>

                    </div>
                </article>
            </div>
            <article className="grid grid-cols-3">
                <div>
                    <ContactSelectInput label="Quais categorias de produtos você está mais interessado em comprar?" options={["Alimentos e Bebidas", "Produtos de Limpeza", "Higiene Pessoal", "Outros (Por favor, especifique)"]} />
                    <ContactSelectInput label="Com que frequência você faz compras de supermercado?" options={["Semanalmente", "Quinzenalmente", "Mensalmente", "Outros (Por favor, especifique)"]} />
                    <ContactTextInput label="Qual é o orçamento médio mensal para compras de supermercado?" placeholder="Descreva" isRequired={false} />
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </article>

        </section>
    )

}