import step1 from '../assets/HowItWorks/step1.png';
import step2 from '../assets/HowItWorks/step2.webp';
import step3 from '../assets/HowItWorks/step3.png';

const HowItWorks = () => {
  return (
    <div id="HowItWorks" className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-center text-rodhi-red text-4xl md:text-5xl">
          How it Works
        </h2>
        <p className="text-center italic text-xl font-extralight px-8">
          Choose the type of editing Style you want to incorporate Our expert
          editors will give you Best recommendation.
        </p>
        {/* Cards */}
        <div className="mx-auto flex flex-row flex-wrap justify-center mt-10">
          <div className="w-full sm:w-[350px] md:w-[450px] mt-1">
            <div className="bg-gray-100 h-[340px] text-black rounded-md mx-3">
              {/* This div for image */}
              <div className="h-[6rem] rounded-t-xl flex justify-center items-center">
                <img src={step1} alt="Step 1" className="h-20 w-20" />
              </div>
              {/* This div for content */}
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p>Step 1</p>
                <h4 className="text-xl text-rodhi-blue font-semibold">
                  Send us your raw video
                </h4>
                <p className="text-center">
                  We welcome raw video content – a complete podcast, unedited
                  footage, or clips from your phone. Let us know your content
                  preferences too. We&#39;re ready to customize our approach to
                  match your unique vision
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[350px] md:w-[450px] mt-1">
            <div className="bg-gray-100 h-[340px] text-black rounded-md mx-3">
              {/* This div for image */}
              <div className="h-[6rem] rounded-t-xl flex justify-center items-center">
                <img src={step2} alt="Step 2" className="h-20 w-20" />
              </div>
              {/* This div for content */}
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p>Step 2</p>
                <h4 className="text-xl font-semibold text-rodhi-blue">
                  We&#39;ll meticulously edit it.
                </h4>
                <p className="text-center">
                  With the expertise of our dedicated editors and cutting-edge
                  software like DaVinci Resolve, we refine your video to
                  perfection. Every detail aligns with your vision and
                  objectives, and we&#39;re committed to revisions until
                  precisely as you desire.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[350px] md:w-[450px] mt-1">
            <div className="bg-gray-100 h-[340px] text-black rounded-md mx-3">
              {/* This div for image */}
              <div className="h-[6rem] rounded-t-xl flex justify-center items-center">
                <img src={step3} alt="Step 3" className="h-20 w-20" />
              </div>
              {/* This div for content */}
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p>Step 3</p>
                <h4 className="text-xl font-semibold text-rodhi-blue">
                  Maximise Visibility
                </h4>
                <p className="text-center">
                  Share your edited video across all your social media channels
                  to increase views and engagement, and rise above the
                  competition, ultimately fostering brand growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
