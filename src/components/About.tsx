interface Person {
  name: string;
}
const person: Person = {
  name: "Emmanuel",
};
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full gird grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            className="sm: text-left text-4xl font-bold"
            data-aos="flip-right"
          >
            <p>
              Hi. I'm {person.name}, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div data-aos="flip-left">
            I am 25-year-old software developer currently at General Motors with
            over <strong className="text-lg">2+ Years</strong> experiences. With
            a keen mind for innovation and a passion for crafting cutting-edge
            solutions, I previously worked on SAS DMP project and now currently
            work on the DMP Merkle project, and on the side I do Front-End web
            development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
