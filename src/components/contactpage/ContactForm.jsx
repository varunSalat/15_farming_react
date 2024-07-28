export const FormInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-300 w-full rounded-md border p-4"
    />
  );
};

const ContactForm = () => {
  return (
    <form className="w-full space-y-4">
      <div className="flex w-full max-w-[90%] items-center justify-start gap-x-6">
        <FormInput type={"text"} placeholder={"Your Name"} />
        <FormInput type={"text"} placeholder={"Your Phone Number"} />
      </div>{" "}
      <div className="flex w-full max-w-[90%] items-center justify-start gap-x-6">
        <FormInput type={"email"} placeholder={"Your Email"} />
        <FormInput type={"text"} placeholder={"Your Subject"} />
      </div>
      <div className="w-full max-w-[90%]">
        <textarea
          className="border-gray-300 w-full resize-none rounded-md border p-4"
          placeholder="comment"
        />
      </div>
      <button className="hover:bg-yellow-500 rounded-full bg-green px-8 py-4 text-lg font-medium text-white">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
