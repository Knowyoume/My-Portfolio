import React from 'react'

const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Git", "GitHub", "Responsive UI"];

const Skills = () => {
  return (
    <section className='min-h-screen pt-32 px-6' id="skill">
      <div className='max-w-5xl mx-auto'>
        {/* heading */}
        <h1 className='text-4xl md:text-5xl font-bold'>Skill</h1>
        <p className='font-semibold text-2xl mt-4 text-gray-300'>Frontend and design technologies.</p>

        {/* grid  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
          {skills.map((skill) =>
             <div className='flex justify-center items-center bg-[#141722]  p-5 rounded-2xl border border-cyan-400 text-white font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:border-cyan-400/50 hover:shadow-lg' key={skill}>
              {skill}
              </div>)}
        </div>
      </div>
    </section>
  )
}

export default Skills