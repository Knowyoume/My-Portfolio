import React from 'react'


const About = () => {
  return (
    <section className='min-h-screen bg-[#0808b18] text-white px-10 pt-32 pb-16' id="about">
      <div className='max-w-5xl mx-auto'>
        {/* heading */}
      <h1 className='text-4xl font-bold md:text-5xl '>About Me</h1>
      <p className='mt-7 text-gray-300 text-lg'>A simple introduction to my background and what I build.</p>

      {/*  about me */}
      <div className='mt-10 p-6 md:p-8  bg-[#141722] border border-cyan-400 rounded-2xl hover:scale-105 hover:border-cyan-400/50 transition-all'>
        <p className='text-gray-300 text-base md:text-lg leading-8'>
          I am a Computer Science Engineering graduate from RGPV University. I work with HTML, CSS, JavaScript and React.js, with basic knowledge of Git, GitHub and Tailwind CSS. I’m looking for opportunities where I can improve my skills and contribute to real-world projects.<br /> I enjoy creating clean and interactive user interfaces that provide a smooth and engaging user experience across different devices. I am continuously improving my frontend development skills by learning new technologies, practicing coding, and working on personal projects that help me strengthen my problem-solving abilities and practical knowledge.
        </p>
      </div>
      </div>
    </section>
  )
}

export default About

