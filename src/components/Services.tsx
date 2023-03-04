import pilates from '../assets/icon-pilates.png';
import fisioterapia from '../assets/icon-fisioterapia.png';
import miofacial from '../assets/icon-microfacial.png';

const Services = () => {
  return (
    <section className="py-28" id="Serviços">
      <div className="text-center">
        <h2 className="font-bold text-3xl text-green-300 mb-5">Serviços</h2>
        <p className=" max-w-md m-auto mb-6">
          Com mais de 10 anos no mercado, o studio de <strong>Karina</strong> já
          conquistou clientes de inúmeros países com seus tratamentos exclusivos
          e totalmente naturais
        </p>
      </div>

      <div className="flex gap-5 m-12 max-[768px]:flex-col max-[768px]:m-3">
        <div className="border rounded-md bg-[#F2EAE5] shadow-xl text-center h-[22rem]">
          <img className="m-auto py-8" src={pilates} alt="icone pilates" />
          <h3 className="font-bold text-2xl text-green-500 py-2">Pilates</h3>
          <p className="m-2">
            Terapia completa para couro cabeludo e fios, protegendo todos os
            tipos de cabelos, inclusive os longos e finos.
          </p>
        </div>

        <div className="border rounded-md bg-[#F2EAE5] shadow-xl text-center h-[22rem]">
          <img
            className="m-auto py-8"
            src={fisioterapia}
            alt="icone fisioterapia"
          />
          <h3 className="font-bold text-2xl text-green-500 py-2">
            Fisioterapia
          </h3>
          <p className="m-2">
            Terapia completa para couro cabeludo e fios, protegendo todos os
            tipos de cabelos, inclusive os longos e finos.
          </p>
        </div>

        <div className="border rounded-md b bg-[#F2EAE5] shadow-xl text-center h-[22rem]">
          <img className="m-auto py-8" src={miofacial} alt="icone miofacial" />
          <h3 className="font-bold text-2xl text-green-500 py-2">
            Liberação Miofascial
          </h3>
          <p className="m-2">
            Terapia completa para couro cabeludo e fios, protegendo todos os
            tipos de cabelos, inclusive os longos e finos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
