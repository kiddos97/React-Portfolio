import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div name="home" className="w-full pt-40 bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-cener h-full">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Emmanuel Imarhiagbe
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur
            error a, nam voluptatibus incidunt animi labore illum accusantium
            doloribus?
          </p>
          <div>
            <button className="text-white  border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;