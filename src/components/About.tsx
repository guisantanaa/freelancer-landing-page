import bannerAbout from "../assets/banner-about.png";

const About = () => {
  return (
    <section className="flex py-16 max-[768px]:flex-col" id="Sobre">
      <div className="w-full">
        <img src={bannerAbout} alt="Sobre Hellen" />
      </div>

      <div className="w-fit m-4">
        <h2 className="text-textColor-300 font-bold text-3xl mb-4">
          Sobre Hellen
        </h2>
        <p className="mb-5 text-textColor-300 max-[768px]:justify-center">
          Meu nome é Hellen Fernanda, sou Fisioterapeuta formada pelo Centro
          Universitário UNIFG de Guanambi e estou entusiasmada em compartilhar
          minha jornada com vocês!
        </p>

        <p className="mb-5 text-textColor-300">
          No ano de 2021 finalizei minha graduação na UNIFG, onde adquiri uma
          base sólida em fisioterapia. No ano seguinte, em 2022, realizei minha
          formação no método Pilates por Érica Tremura. Desde então, tenho
          dedicado minha vida a ajudar as pessoas a alcançarem o melhor de sua
          saúde e bem-estar. Através do Pilates, tenho auxiliado inúmeras
          pessoas a atingirem seus objetivos, seja para reabilitação ou
          simplesmente melhorar a qualidade de vida.
        </p>

        <p className="text-textColor-300">
          Como fisioterapeuta, ofereço tratamentos terapêuticos personalizados
          para aqueles que buscam alívio da dor e reabilitação de lesões
          musculoesqueléticas. Minha abordagem é centrada no paciente,
          priorizando seu conforto e bem-estar em cada etapa do processo de
          tratamento. Atualmente trabalho com fisioterapia clínica, domiciliar,
          quiropraxia clínica e liberação mio&fascial.
        </p>

        <p className="text-textColor-300">
          Não hesite em entrar em contato comigo para agendar uma consulta ou
          saber mais sobre como posso ajudar você a atingir seus objetivos de
          saúde. <br/> Dra Hellen Fernanda Fisioterapeuta <br /> Crefito 7: 349965-F
        </p>
      </div>
    </section>
  );
};

export default About;
