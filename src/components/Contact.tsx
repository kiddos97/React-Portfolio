import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(3, { message: "Please enter a name!" }).max(100),
  email: z.string().min(3, { message: "Please enter a email!" }).max(100),
  message: z.string().min(3, { message: "Please enter a message!" }).max(100),
});

type ContactFormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: ContactFormData) => void;
}

const Contact = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      onSubmit(data);
      reset();
    } catch (err) {
      console.error("Form submission error: ", err);
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        method="POST"
        action="https://getform.io/f/bab19575-7084-44e8-b510-5536a0cfc917"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="sm:text-center pb-8">
          <p className="text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className=" text-gray-300 py-4">
            Submit the form below or shoot me an email
          </p>
        </div>
        <input
          {...register("name")}
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        {errors.name && <p className="text-gray-300">{errors.name.message}</p>}
        <input
          {...register("email")}
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        {errors.email && (
          <p className="text-gray-300">{errors.email.message}</p>
        )}
        <textarea
          {...register("message")}
          className="bg-[#ccd6f6] text-black-300 p-2"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <p className="text-gray-300">{errors.message.message}</p>
        )}
        <button
          type="submit"
          className="text-white rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
