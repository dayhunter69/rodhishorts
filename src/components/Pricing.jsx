import CallButton from './CaallButton';

const Pricing = () => {
  return (
    <div
      id="pricingSection"
      className="mt-[5rem] flex flex-col w-full justify-center mx-auto items-center"
    >
      <h2 className="text-center text-rodhi-blue text-4xl md:text-5xl user-select-none">
        Our Pricing
      </h2>
      <p className="text-center italic text-xl font-extralight px-8 mt-2">
        Still undecided? Just shoot us a text!
      </p>
      <div className="mt-10">
        <CallButton text="Call Us Now" />
      </div>
    </div>
  );
};

export default Pricing;
