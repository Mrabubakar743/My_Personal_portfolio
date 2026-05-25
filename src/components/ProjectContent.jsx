import ProjectImg1 from "../images/ProjectImg1.jpeg";
import ProjectImg2 from "../images/ProjectImg2.jpeg";
import ProjectImg3 from "../images/ProjectImg3.jpeg";
import ProjectImg4 from "../images/ProjectImg4.jpeg";
import ProjectImg5 from "../images/ProjectImg5.jpeg";
import ProjectImg6 from "../images/ProjectImg6.jpeg";

const ProjectContent = () => {
    const ProjectInfo = [
        {
            img: ProjectImg1,
            heading: "Personal Portfolio",
            about:
                "I’m a passionate Full Stack Developer who loves building modern, responsive, and user-friendly websites.",
        },
        {
            img: ProjectImg2,
            heading: "Gymora",
            about:
                "Gymora is a responsive fitness and gym website that offers workout programs, trainer details, membership plans, and an engaging user experience with modern web technologies.",
        },
        {
            img: ProjectImg3,
            heading: "Netflix Clone",
            about:
                "A Netflix clone is a video streaming web application designed to replicate the core features and user experience of Netflix.",
        },
        {
            img: ProjectImg4,
            heading: "E-Commerce Website",
            about:
                "Trendora is an e-commerce website that offers seamless online shopping with product browsing, cart management, secure authentication, and responsive design.",
        },
        {
            img: ProjectImg5,
            heading: "Fast Food Website",
            about:
                "Food website built using HTML, CSS, and JavaScript with responsive design, interactive UI components, and visually appealing layouts.",
        },
        {
            img: ProjectImg6,
            heading: "Pagination",
            about:
                "Pagination system built with React to display data across multiple pages with smooth navigation.",
        },
    ];

    return (
        <div id="projects" className="bg-[#020617] min-h-screen w-full text-white font-[Poppins]">
            <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center py-10 font-extrabold tracking-wide">
                    My Projects
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {ProjectInfo.map((project, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden border border-cyan-400/40 bg-white/5 backdrop-blur-lg flex flex-col gap-4 p-5 rounded-2xl text-white shadow-[0_0_20px_rgba(34,211,238,0.25),inset_0_0_25px_rgba(34,211,238,0.15)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4),inset_0_0_40px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-500"
                    >
                        <div>
                            <img
                                src={project.img}
                                alt={project.heading}
                                className="rounded-xl h-52 w-full object-cover"
                            />
                            <h2 className="text-2xl font-bold mt-4">
                                {project.heading}
                            </h2>
                            <p className="text-gray-300 mb-16 text-sm leading-relaxed mt-2">
                                {project.about}
                            </p>
                            <a href="https://github.com/mrabubakar743">
                                <button className="absolute bottom-5 mt-5 px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                                View Project
                            </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectContent;