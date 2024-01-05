import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface Person {
  name: string;
}

const person: Person = {
  name: "Emmanuel Imarhiagbe",
};
const Home = () => {
  const [nav, setNav] = useState(false);
  const Navhandler = () => setNav(!nav); //handling nav bar

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div name="home" className="w-full pt-40 h-full bg-[#0a192f]">
        {/* Container */}
        <div
          className="max-w-[1000px] mx-auto px-8 flex flex-col justify-cener h-full"
          data-aos="fade-right"
        >
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            {person.name}
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a
            <Typed
              className="text-4xl sm:text-7xl font-bold text-[#8892b0] pl-2"
              strings={["Full-Stack Developer.", "YouTuber.", "Teacher."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            My passion to create digital magic. With{" "}
            <strong className="text-lg"> 2+ Years</strong> of Front-End
            experience, I hope you'll witness the culmination of my dedication,
            skills, and love for web development.
          </p>
          <div>
            <button className="text-white  rounded-lg border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              <Link onClick={Navhandler} smooth={true} to="work" duration={500}>
                View Work
              </Link>
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
