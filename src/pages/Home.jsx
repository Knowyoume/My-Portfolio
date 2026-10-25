import React from "react";


const profile = {
  name: "Suraj Kumar Mahto",
  role: "Frontend Developer",
  email: "your-email@example.com", // Replace with your real email
  linkedin: "https://www.linkedin.com/in/your-linkedin-username/", // Replace with your LinkedIn URL
  github: "https://github.com/your-github-username", // Replace with your GitHub URL
};

const Home = () => {
  return (

    <section className="bg-[#080b18] text-white min-h-screen px-10  pt-32  sm:px-10 md:px-12 w-full" id="home">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  justify-center items-center">
        {/* left side content */}
        <div>
          <p className="text-cyan-400 uppercase text-sm font-bold mb-5">Frontend Developer</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm Suraj
            <br />
            <span className="bg-linear-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">Kumar Mahto</span>
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-xl">
            I'm Computer Science Engineering graduate from RGPV University, focused on building responsive and interactive web experience using modern Frontend Technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:scale-105 transition-all" href="#project">Project</a>
            <a className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:scale-105 transition-all" href="#contact">Contact</a>
           
          </div>
        </div>

        {/* right side content */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-57 h-57 md:w-77 md:h-77 rounded-full border-4 border-cyan-400 p-2 shadow-lg shadow-cyan-400/50">
            <img src={`${import.meta.env.BASE_URL}profile.jpeg`} alt="My_profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
