import Profile from '../assets/perfil.png';
import Aspas from '../assets/Aspas.png';
import Slider from 'react-slick';

const Depositions = () => {
  const settingsCarousel = {
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10" id="Depoimentos">
      <div className="text-center py-8 mt-20 w-96 m-auto max-[440px]:w-auto">
        <h2 className="text-3xl font-bold text-textColor-300 max-[440px]:text-2xl max-[440px]:m-3">
          Depoimentos de quem já passou por aqui
        </h2>
      </div>

      <div>
        <ul className="flex gap-5 m-12 max-[834px]:flex-col max-[440px]:m-3 mt-0">
          <li className="w-auto h-64 shadow rounded-md max-[440px]:h-80 bg-green-300">
            <div className="flex items-baseline m-5 my-2 p-8 max-[440px]:p-2 mt-5">
              <img className="w-5 h-4" src={Aspas} alt="aspas dupla" />
              <p className="text-center py-1">
                Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
                Certamente meu cabelo mudou muito depois que comecei a tratar
                somente com produtos naturais e veganos. São profissionais
                incríveis e qualificados.
              </p>
            </div>
            <div className="flex ml-20  gap-2 items-center text-[#767676]">
              <img src={Profile} alt="Perfil do depoimento" />
              <span>Wanessa Souza</span>
            </div>
          </li>

          <li className="w-auto h-64 shadow rounded-md max-[440px]:h-80 bg-green-300">
            <div className="flex items-baseline m-5 my-2 p-8 max-[440px]:p-2 mt-5">
              <img className="w-5 h-4" src={Aspas} alt="aspas dupla" />
              <p className="text-center py-1">
                Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
                Certamente meu cabelo mudou muito depois que comecei a tratar
                somente com produtos naturais e veganos. São profissionais
                incríveis e qualificados.
              </p>
            </div>
            <div className="flex ml-20  gap-2 items-center text-[#767676]">
              <img src={Profile} alt="Perfil do depoimento"></img>
              <span>Wanessa Souza</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Depositions;
