import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="Contato">
      <div className="flex justify-around gap-10 mt-10 py-8 m-auto max-[440px]:flex-col p-5">
        <div>
          <h3 className="text-3xl font-bold text-textColor-300 w-[404px] max-[440px]:w-72">
            Entre em contato com a gente!
          </h3>
          <p className="w-80 text-base my-4 text-textColor-300">
            Entre em contato conosco, queremos tirar suas dúvidas, ouvir suas
            críticas e sugestões.
          </p>

          <a 
            href="https://api.whatsapp.com/send?phone=5577988080660&text=" 
            title="Whatsapp"
            target="_blank"
            className="flex items-center gap-2 w-max bg-green-500 shadow-black rounded p-5 py-4 my-10 text-textColor-300 font-normal text-base hover:brightness-75 transition"
            >
            <FaWhatsapp size={20} />
            Entrar em contato
          </a>
        </div>

        <div>
          <ul className="grid gap-5">
            <li>
              <a
                className="flex gap-1 items-center"
                href="tel:+55123456789"
                title="Meu contato"
              >
                <BsTelephone />
                11 99845-6754
              </a>
            </li>
            <li>
              <a
                className="flex gap-1 items-center"
                href="contato@beautysalon.com"
                title="Meu e-mail"
              >
                <AiOutlineMail />
                contato@beautysalon.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
