import { useState } from "react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const subject = e.target.subject.value;
    const yourMessage = e.target.yourMessage.value;

    console.log(name, email, phoneNumber, subject, yourMessage);

    setSuccessMessage("Your message has been sent successfully!");

    e.target.reset();

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div
      id="contact"
      className="bg-black text-white min-h-screen w-full font-[Poppins] px-6 py-16"
    >
      <h1 className="text-3xl md:text-5xl flex justify-center gap-4 tracking-wider font-bold mb-16">
        Contact
        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
          Me
        </span>
      </h1>

      <div className="max-w-5xl mx-auto border border-cyan-400/30 bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500">

        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col gap-5">

            <input
              name="name"
              className="px-4 py-3 rounded-2xl bg-transparent border border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-400"
              type="text"
              placeholder="Name"
              required
            />

            <input
              name="email"
              className="px-4 py-3 rounded-2xl bg-transparent border border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-400"
              type="email"
              placeholder="Email"
              required
            />

            <input
              name="phoneNumber"
              className="px-4 py-3 rounded-2xl bg-transparent border border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-400"
              type="tel"
              placeholder="Phone Number"
            />

            <input
              name="subject"
              className="px-4 py-3 rounded-2xl bg-transparent border border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-400"
              type="text"
              placeholder="Subject"
            />

          </div>
          <div className="flex flex-col gap-5">

            <textarea
              name="yourMessage"
              rows="10"
              placeholder="Your Message..."
              className="px-4 py-3 rounded-2xl bg-transparent border border-cyan-400 outline-none resize-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              Send Message
            </button>

            {successMessage && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl text-center">
                {successMessage}
              </div>
            )}

          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;