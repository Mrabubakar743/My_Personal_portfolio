import AboutImg from "../images/Aboutimg.png";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div id="about" className="bg-black text-white flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20 py-16">
      <div>
        <div className="absolute w-50 sm:w-60 md:w-70 lg:w-100 h-75 sm:h-75 md:h-112 lg:h-128 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>

        <img
          src={AboutImg}
          alt="About"
          className="
            relative
            mt-4

            w-45 sm:w-55 md:w-65 lg:w-95

            rounded-full
            border-4 border-cyan-400
            ring-4 ring-cyan-400/30
            object-cover

            shadow-[0_0_40px_rgba(34,211,238,0.7)]
            hover:shadow-[0_0_70px_rgba(34,211,238,1)]

            hover:scale-105
            transition-all duration-500
          "
        />
      </div>
      <div className="max-w-2xl text-center lg:text-left space-y-6">

        <h1 className="text-3xl md:text-4xl font-bold">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            Me
          </span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base leading-7">
  I am a full-stack developer passionate about building modern, responsive,
  and user-friendly web applications. I enjoy working with both front-end
  and back-end technologies to create smooth and efficient digital solutions.
  I am always learning and improving my skills to build better real-world
  projects.
</p>

        <Link to="/readmore" className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300">
          Read More
        </Link>

      </div>
    </div>
  );
};

export default AboutInfo;