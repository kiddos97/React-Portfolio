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
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm: text-left text-4xl font-bold">
            <p>
              Hi. I'm {person.name}, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            quos delectus. Odit, corporis impedit eligendi adipisci nesciunt sit
            voluptate accusamus? Modi delectus, facere accusantium tempora
            consequuntur, quos ad optio minima provident architecto, nihil
            adipisci quis fugit vitae excepturi iusto omnis praesentium ab
            maxime repellat animi quasi. Earum amet esse rerum?
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
