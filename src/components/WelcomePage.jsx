import img from '../assets/RShorts.png';

import ScrollButton from './ScrollButton';
const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-grow bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundColor: 'white' }}
      >
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={img} className="w-[8rem] mb-4" alt="Logo" />
          <h1 className="text-center text-4xl md:text-5xl font-thin text-black max-w-2xl md:max-w-7xl leading-[3rem] md:leadin-[5rem]">
            Unleash the potential of short videos in 2024! We will transform
            your content into captivating, shareable sensations
          </h1>
          <ScrollButton text="Let's Do It" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
