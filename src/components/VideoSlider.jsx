import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="text-black rounded-md overflow-hidden">
      <ReactPlayer
        url={url}
        width="40vh"
        height="70vh"
        showinfo={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
            },
          },
        }}
        style={{
          borderRadius: '24px',
        }}
        wrapperStyle={{
          borderRadius: '24px',
        }}
        playIconStyle={{
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

const VideoSlider = () => {
  const videoUrl = 'https://www.youtube.com/shorts/w-6S4JtOpzc';

  return (
    <div id="portfolio" className="mb-10">
      <h2 className="text-center text-rodhi-red text-4xl md:text-5xl">
        Witness Our Creation
      </h2>
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="flex flex-row justify-center  sm:w-[380px] md:w-[400px] mt-1">
          <VideoPlayer url={videoUrl} />
        </div>
        <div className="flex flex-row justify-center  sm:w-[380px] md:w-[400px] mt-1">
          <VideoPlayer url={videoUrl} />
        </div>
        <div className="flex flex-row justify-center  sm:w-[380px] md:w-[400px] mt-1">
          <VideoPlayer url={videoUrl} />
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
