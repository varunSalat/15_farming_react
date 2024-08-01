export const FormInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-300 p-2 md:p-4"
    />
  );
};

const ContactForm = () => {
  return (
    <form className="mt-4 w-full space-y-4 md:mt-0">
      <div className="flex w-full flex-col items-center justify-start gap-6 md:max-w-[90%] md:flex-row">
        <FormInput type={"text"} placeholder={"Your Name"} />
        <FormInput type={"text"} placeholder={"Your Phone Number"} />
      </div>{" "}
      <div className="flex w-full flex-col items-center justify-start gap-6 md:max-w-[90%] md:flex-row">
        <FormInput type={"email"} placeholder={"Your Email"} />
        <FormInput type={"text"} placeholder={"Your Subject"} />
      </div>
      <div className="w-full md:max-w-[90%]">
        <textarea
          className="w-full resize-none rounded-md border border-gray-300 p-4"
          placeholder="comment"
        />
      </div>
      <button className="rounded-full bg-green px-8 py-4 text-lg font-medium text-white hover:bg-yellow-500">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
