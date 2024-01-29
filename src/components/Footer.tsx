import Logo from '../assets/logo-footer.svg';
import { FaInstagram, FaTiktok } from "react-icons/fa";


const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="Footer" className="bg-green-300 h-60 max-[768px]:h-72">
      <div className="flex justify-around items-center ml-[-3rem] max-[768px]:flex-col max-[768px]:gap-5 max-[768px]:items-start max-[768px]:ml-8">
        <div className='max-[768px]:w-60 max-[768px]:ml-[-4rem]'>
          <img src={Logo} alt="logo do footer" className='' />
        </div>

        <div className="leading-6 text-base">
          <p>©{year} Hellen Fernanda</p>
          <p>Todos os direitos Reservados</p>
        </div>

        <div className="flex items-center gap-5">
          <a 
            href="https://www.instagram.com/nandagomesn/" 
            target="_blank" 
            title="Instagram" 
            >
            <FaInstagram size={22} />
          </a>
          <a 
            href="https://www.tiktok.com/@fernandagneves0" 
            target="_blank" 
            title="Instagram" 
            >
            <FaTiktok size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
