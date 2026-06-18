import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-[#020617] text-white p-10 '>
            <div className="flex items-center justify-center gap-4  text-2xl">
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
            <div className="mt-6">
                <ul className="flex justify-center items-center gap-3 md:gap-12 text-[17px] font-medium text-gray-300">
                    <li><a href="/" className="hover:text-cyan-400 hover:border-b hover:border-cyan-400">Home</a></li>
                    <li><a href="#about" className="hover:text-cyan-400 hover:border-b hover:border-cyan-400">About</a></li>
                    <li><a href="#services" className="hover:text-cyan-400 hover:border-b hover:border-cyan-400">Services</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400 hover:border-b hover:border-cyan-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400 hover:border-b hover:border-cyan-400">Contact</a></li>
                </ul>
            </div>
            <hr className="text-cyan-400" />
            <div className="mt-2 text-center text-sm">
                <p className="text-gray-600">Muhammad Abubakar | All Right reserved</p>
            </div>
        </div>
    )
}

export default Footer
