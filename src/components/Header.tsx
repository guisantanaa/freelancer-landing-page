import Logo from '../assets/logo.png';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <header className="flex justify-between items-center px-5 py-2 bg-primary text-black fixed w-full z-10 h-20 bg-primary-500">
      <a href="/" className="logo mt-3">
        <img className="max-[600px]:w-48" src={Logo} alt="logo" />
      </a>
      {/* Desktop Nav */}
      <nav className="hidden md:block transition">
        <ul className="flex gap-8">
          <li>
            <a href="/#Início">Início</a>
          </li>
          <li>
            <a href="/#Sobre">Sobre</a>
          </li>
          <li>
            <a href="/#Serviços">Serviços</a>
          </li>
          <li>
            <a href="/#Depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="/#Contato">Contato</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={
          !toggle
            ? 'mobile-nav left-[-100%]'
            : 'mobile-nav left-0 text-center text-3xl font-bold text-green-300'
        }
      >
        <ul className="flex flex-col gap-16 py-20">
          <li>
            <a href="/#Início" onClick={handleToggle}>
              Início
            </a>
          </li>
          <li>
            <a href="/#Sobre" onClick={handleToggle}>
              Sobre
            </a>
          </li>
          <li>
            <a href="/#Serviços" onClick={handleToggle}>
              Serviços
            </a>
          </li>
          <li>
            <a href="/#Depoimentos" onClick={handleToggle}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="/#Contato" onClick={handleToggle}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden z-10">
        {!toggle ? (
          <AiOutlineMenu size={30} color={'#1f473d'} />
        ) : (
          <AiOutlineClose size={30} />
        )}
      </button>
    </header>
  );
};

export default Header;
