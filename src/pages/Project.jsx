import React from 'react'

const projects = [
  {
    title: "Diploma Learning Website",
    description: "An educational website that brings semester-wise syllabus and study notes together for diploma students.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://knowyoume.github.io/Easy_Learn/", // Replace with live project or GitHub repository URL
  },
  {
    title: "More Projects",
    description: "Add another project with its purpose, technologies, and a live demo or repository link.",
    tech: ["React", "JavaScript"],
    link: "#",
  },
];


const services = [
    {
        title: "Responsive Development",
        description:
            "Clean layouts designed to work across desktop, tablet and mobile screens."
    },
    {
        title: "Interactive UI",
        description:
            "Component-based interfaces and JavaScript interactions that make websites easier to use."
    },
    {
        title: "Modern Visual Design",
        description:
            "Clear typography, spacing, visual hierarchy and polished interface details."
    },
    {
        title: "Performance",
        description:
            "Structured frontend development with attention to smooth rendering and asset loading."
    }
];



const Project = () => {
  return (
    <section className='min-h-screen  pt-32 px-6' id="project">
      <div className='max-w-5xl mx-auto'>
        {/* heading */}
        <h1 className='text-4xl md:text-5xl font-bold'>Our Project</h1>
        <p className='font-semibold text-2xl mt-4 text-gray-300'>What I have built</p>

{/* project */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
        {projects.map((project,index) => 
        <article className='p-6 md:p-8  bg-[#141722] border border-e-cyan-400 rounded-2xl transition-all hover:scale-105 hover:border-cyan-400/50 hover:shadow-lg' key={index}>

          {/* project title */}
          <h3 className='text-xl md:text-2xl font-bold'>{project.title}</h3>

          {/* project description */}
          <p className='text-gray-300 mt-4 leading-relaxed'>{project.description}</p>

          {/* Technologies I used */}
          <div className='flex flex-wrap gap-2 mt-5'>
            {project.tech.map((item) => 
            <span key={item} className='px-3 py-1.5 border rounded-full text-sm text-gray-300'>
              {item}
            </span>
          )}
          </div>
          <a href={project.link} className="inline-flex mt-6 p-1 text-purple-400 font-semibold">
          View Project
          </a>
        </article> )}
        </div>
      </div>

      {/*  dummy data  for what i focused on */}

      <section className='min-h-screen  pt-32 px-6 '>
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold'>What I Focus On</h1>
          <div className='mt-14  grid grid-cols-1 md:grid-cols-2 gap-5'>
            {services.map((service, index) => 
            <article className='border rounded-2xl bg-[#141722]  border-cyan-400 px-6 py-4 transition-all hover:scale-105 hover:border-cyan-400/50 ' key={index}>
              <h3 className='text-2xl font-semibold'>
              {service.title}
              </h3>
              <p className='text-gray-300'>
                {service.description}
              </p>
            </article>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Project