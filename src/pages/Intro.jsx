import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

const Intro = () => {
  const videoId = import.meta.env.VITE_DOG_VIDEO_KEY;
  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-8 7xl:px-0 pt-12">
      <div className="flex flex-col items-center gap-10">
        <div className="w-full h-[40vh] bg-gray-100">
          <ReactPlayer
            muted={true}
            url={`https://m.youtube.com/watch?v=${videoId}`}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            volume={1}
            pip={true}
          />
        </div>

        <Link to="/">
          <button
            className="btn btn-lg btn-outline shadow-md rounded-3xl cursor-pointer 
          transition duration-300 ease-in-out transform hover:bg-gradient-to-l hover:from-[#003459] from-36% hover:to-[#fceed5] to-25% text-[#003459] border border-[#003459] px-0"
          >
            <span className="flex items-center gap-2 px-5 py-3 hover:bg-gradient-to-l hover:from-[#fceed5] from-36%  hover:bg-clip-text hover:to-[#003459] to-25% tracking-wide hover:text-transparent">
              <RiArrowGoBackLine className="text-[#003459]" />
              Return to Home
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
