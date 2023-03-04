import bannerAbout from '../assets/banner-about.png';

const About = () => {
  return (
    <section className="flex py-28 max-[768px]:flex-col" id="Sobre">
      <div className="w-full">
        <img src={bannerAbout} alt="Sobre nós" />
      </div>

      <div className="w-fit m-4">
        <h2 className="text-green-300 font-bold text-3xl mb-4">Sobre nós</h2>
        <p className="mb-5 max-[768px]:justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
          quis bibendum diam. Sed consequat nisl laoreet eros ultricies
          pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula
          risus.
        </p>

        <p className="mb-5">
          In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
          pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
          luctus, nunc finibus elementum suscipit, tortor augue vulputate
          sapien, vitae feugiat enim augue sed.
        </p>

        <p>
          Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
          rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
          tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
          nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
          dolor. Nullam eget dui at sem ullamcorper luctus.
        </p>
      </div>
    </section>
  );
};

export default About;
