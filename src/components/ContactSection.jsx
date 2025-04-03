import ContactTextInput from "./ContactTextInput";
import ContactSelectInput from "./ContactSelectInput";
import MainButton from "./MainButton";

export default function ContactSection() {

    return (
        <section id="budget" className="bg-primary-background h-auto py-16 px-8">

            <div className="grid sm:grid-cols-4 gap-4">
                <article className="col-span-2 sm:col-start-2 text-center pt-16 pb-8">
                    <div className="justify-self-center ">
                        <h2 className="text-2xl font-semibold pb-4">Saiba o que o <span className="text-primary-normal">Cartip</span> pode fazer</h2>
                        <p>Está pronto para transformar a maneira como seu supermercado alcança novos clientes<br /> ou como você faz suas compras de supermercado? <br />Solicite seu orçamento grátis agora e descubra o poder do <span className="text-primary-normal">Cartip</span> </p>
                        <p>Preencha o formulário abaixo e dê o primeiro passo para economizar mais e aumentar suas vendas!</p>
                    </div>
                </article>
                <article className="col-span-2 py-4">
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
            <article className="py-4 grid md:grid-cols-3">
                <div className="pt-8">
                    <h4 className="pb-2 pl-4 font-semibold">Para Consumidores (B2C)</h4>
                    <ContactSelectInput label="Quais categorias de produtos você está mais interessado em comprar?" options={["Alimentos e Bebidas", "Produtos de Limpeza", "Higiene Pessoal", "Outros (Por favor, especifique)"]} />
                    <ContactSelectInput label="Com que frequência você faz compras de supermercado?" options={["Semanalmente", "Quinzenalmente", "Mensalmente", "Outros (Por favor, especifique)"]} />
                    <ContactTextInput label="Qual é o orçamento médio mensal para compras de supermercado?" placeholder="Descreva" isRequired={false} />

                </div>
                <div className="pt-8">
                    <h4 className="pb-2 pl-4 font-semibold">Para Supermercados (B2B)</h4>
                    <ContactSelectInput label="Você já possui uma estratégia de marketing digital?" options={["Sim (Se sim, por favor, descreva)", "Não"]} />
                    <ContactSelectInput label="Qual é o principal objetivo com nossos serviços?" options={["Aumentar a visibilidade online", "Atrair mais clientes para a loja física", "Expandir vendas online", "Outros (Por favor, especifique)"]} />
                    <ContactSelectInput label="Qual é o tamanho do seu supermercado?" options={["Semanalmente", "Quinzenalmente", "Mensalmente", "Outros (Por favor, especifique)"]} />
                    <ContactTextInput label="Qual é o orçamento médio mensal para compras de supermercado?" placeholder="Descreva" isRequired={false} />

                </div>
                <div className="pt-8">
                    <h4 className="pb-2 pl-4 font-semibold">Gerais</h4>
                    <ContactTextInput label="Há alguma informação adicional que você considera importante para a elaboração do seu orçamento?" placeholder="Descreva" isRequired={false} />
                    <ContactTextInput label="Quais são suas expectativas em relação aos resultados com o Cartip?" placeholder="Descreva" isRequired={false} />

                </div>
            </article>
            <div className="flex justify-center">

                <MainButton content={"Enviar"} />

            </div>

            <article id="contact" className="w-full pt-12 flex flex-col items-center">
                <h4 className="pt-12 pb-2 text-4xl font-semibold">Entre em contato</h4>
                <a target="_blank" href="https://wa.me/5527996420246?text=Olá,%20tenho%20interesse%20em%20tirar%20dúvidas!">

                    <p className="pt-3 text-xl hover:text-primary-normal hover:underline active:underline active:text-primary-normal">Telefone: (27) 99642-0246</p>

                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=flokkia.startup@gmail.com.com&su=Minha Dúvida&body=Escreva Aqui" target="_blank">

                    <p className="pt-3 text-xl hover:text-primary-normal hover:underline active:underline active:text-primary-normal">Email: flokkia.startup@gmail.com</p>

                </a>

            </article>


        </section>
    )

}