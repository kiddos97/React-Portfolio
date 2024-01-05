import { skills } from "../Projects/Skills";

const Image = ({ name, src }) => {
  return (
    <div>
      <img className="w-20 mx-auto" src={src} alt="html logo" />
      <p className="my-4">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div name="skills" className=" w-full bg-[#0a192f] text-gray-300">
      {/*container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="sm:text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <Image {...skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
