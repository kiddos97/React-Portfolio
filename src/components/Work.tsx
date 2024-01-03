import work from "../assets/workImg.jpeg";
import realestate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div
          style={{ backgroundImage: `url(${work})` }}
          className="gird sm: gird-cols-2 md: grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover: opacity-100">
              <div>
                <span className="text-2xl font-bol text-white tracking-wider">
                  REACT JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-cener rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-cener rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
