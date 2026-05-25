import { Monitor, Server } from "lucide-react";

const ServicesInfo = () => {
    const ServicesInfo = [
        {
            img: <Monitor size={100} className="text-cyan-400" />,
            heading: "Frontend",
            details:
                "Frontend services typically refer to the technologies, processes, and support involved in building the user-facing part of websites, web apps, and mobile applications. These services focus on how users interact with a product visually and functionally.",
        },
        {
            img: <Server size={100} className="text-cyan-400" />,
            heading: "Backend",
            details:
                "Backend services refer to the server-side components and infrastructure that power applications behind the scenes. They manage business logic, databases, authentication, APIs, processing, and communication between systems.",
        },
    ];

    return (
        <div id="services" className="bg-[#020617] min-h-screen w-full text-white font-[Poppins] py-16">
            <div className="mb-14">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold tracking-wide">
                    My Services
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
                
                {ServicesInfo.map((service, index) => (
                    <div
                        key={index}
                        className="group border border-cyan-400/30 bg-white/5 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                            {service.img}
                        </div>
                        <h2 className="text-3xl font-bold mb-4">
                            {service.heading}
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            {service.details}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesInfo;