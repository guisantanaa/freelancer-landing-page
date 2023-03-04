import Button from './Button';
import Banner from '../assets/banner.png';

const Start = () => {
  const handleClick = () => {
    window.location.href =
      'https://api.whatsapp.com/send?phone=5577988080660&text=';
  };

  return (
    <section
      className="py-32 text-green-300 font-bold flex items-center max-w-7xl m-auto max-[768px]:flex-col-reverse"
      id="Início"
    >
      <div className="text-center w-[30rem] m-12 max-[768px]:w-auto max-[768px]:m-5">
        <h1 className="text-4xl max-[768px]:text-3xl">
          Movimento é a Arte que Cura.
        </h1>
        <p className="font-normal m-4 mb-4">
          Um espaço completo, em Guanambi, com profissionais qualificados e
          aulas personalizadas.
        </p>
        <Button onClick={handleClick} label="Agendar um sessão" />
      </div>

      <div className="m-12 max-[768px]:m-0">
        <img src={Banner} alt="Banner Inicial" />
      </div>
    </section>
  );
};

export default Start;
