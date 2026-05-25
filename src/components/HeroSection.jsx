import HeroImg from "../images/HeroImg.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="min-h-[80%] flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20  gap-10 bg-black text-white">
      <div className="flex-1 space-y-6 text-center lg:text-left">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Hi, It's{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
            Abubakar
          </span>
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold">
          I am a{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            Full Stack Developer
          </span>
        </h3>

        <p className="text-gray-300 text-sm md:text-base leading-7 max-w-2xl">
          I am passionate about full-stack development and constantly improving
          my skills in modern web technologies. I enjoy building functional,
          scalable, and visually appealing web applications by working across
          both front-end and back-end development. I am eager to contribute to
          real-world projects and create seamless user experiences with
          efficient server-side solutions.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 text-2xl">
          <a
            className="hover:scale-105 duration-300 transition-all hover:drop-shadow-[0_0_8px_cyan]"
            href="https://github.com/mrabubakar743"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            className="hover:scale-105 duration-300 transition-all hover:drop-shadow-[0_0_8px_cyan]"
            href="https://instagram.com/mr_abubakar_____"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            className="hover:scale-105 duration-300 transition-all hover:drop-shadow-[0_0_8px_cyan]"
            href="https://linkedin.com/in/abubakar-shahzad-b79516396/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

          <a href="#contact">
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300">
            Hire Me
          </button>
          </a>

          <a href="#contact">
  <button className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300">
    Contact Me
  </button>
</a>
        </div>
      </div>
      <div>
        <div className="absolute w-50 sm:w-60 md:w-70 lg:w-100 h-75 sm:h-75 md:h-112.5 lg:h-130 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <img
          src={HeroImg}
          alt="HeroImg"
          className="mt-4
      relative
      w-45 sm:w-55 md:w-65 lg:w-95
      rounded-full
      border-4 border-cyan-400
      object-cover

      shadow-[0_0_40px_rgba(34,211,238,0.7)]
      hover:shadow-[0_0_70px_rgba(34,211,238,1)]

      ring-4 ring-cyan-400/30
      hover:scale-105

      transition-all duration-500
    "
        />
      </div>
    </section>
  );
};

export default HeroSection;