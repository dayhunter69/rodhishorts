import img from '../assets/Video.png';

import CallButton from './CaallButton';
const BookACall = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-w-6xl mx-auto px-2 mb-[5rem]">
        <div className=" rounded-lg shadow-xl p-8 ">
          <img src={img} className="w-[10rem] h-[10rem] rounded-xl mx-auto " />
          <h3 className="text-center text-rodhi-blue text-2xl md:text-4xl user-select-none px-11">
            Let us handle your video editing workload so you can focus on
            content creation.
          </h3>
          <p className="text-center text-xl  mt-[2rem]">
            Begin by booking a call or filling out the form, and we&#39;ll be in
            touch shortly
          </p>
          <div className="mt-10 flex justify-center items-center mx-auto">
            <CallButton text="Book a call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
