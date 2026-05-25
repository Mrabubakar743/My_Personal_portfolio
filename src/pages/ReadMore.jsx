import Navbar from "../components/Navbar";

const ReadMore = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-[Poppins]">

      <Navbar />

      <div className="flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl">

          <p className="text-gray-300 text-sm md:text-base leading-6 tracking-wide bg-white/5 p-6 md:p-8 rounded-2xl border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            My name is Muhammad Abubakar, and I am currently pursuing a BS in Computer Science at NCBA&E, where I am in my 4th semester. Alongside my academic journey, I have built a strong foundation in Full Stack Web Development through continuous self-learning and hands-on practice.
            <br /> <br />
            I have developed frontend skills in HTML, CSS, JavaScript, React, and Tailwind CSS, along with backend knowledge including databases, MongoDB, and API testing using Postman. While my university provided the roadmap, I took the initiative to expand my expertise through online resources, practical implementation, and real-world projects.
            <br /> <br />
            As a passionate self-learner, I enjoy exploring new technologies and solving problems through code. I am a quick learner, hardworking, and highly motivated to grow in the software industry. During my Full Stack journey, I learned how to adapt quickly, research independently, and transform ideas into functional applications.
            <br /> <br />
            I have worked on multiple real-world projects that strengthened both my technical and problem-solving skills, and now I am confident and ready to begin my professional career in a collaborative and growth-oriented company. My goal is not only to write code, but to create impactful digital experiences that make a difference.

          </p>

        </div>
      </div>
    </div>
  );
};

export default ReadMore;