import React from 'react'

const contactDetails = [
    {
        title: "Email",
        value: "surajkumarcsemahto@gmail.com",
        link: "mailto:surajkumarcsemahto@gmail.com"
    },
    {
        title: "GitHub",
        value: "github.com/yourusername",
        link: "https://github.com/Knowyoume"
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/yourusername",
        link: "https://www.linkedin.com/in/suraj-kumar-mahto"
    },
    {
        title: "Resume",
        value: "View My Resume",
        link: "https://drive.google.com/file/d/15XTcRZ9YS_KJuRPR1_Zt6W7u9QX9MtDD/view?usp=drivesdk"
    }
];


const Contact = () => {
  return (
    <section className='min-h-screen pt-32 py-6 px-10 sm:px-6' id="contact">
      <div className='max-w-5xl mx-auto w-full min-w-0'>
        <h1 className='text-2xl md:text-5xl font-bold'>
          Let's Connect
        </h1>
        <p className='text-gray-300 font-semibold mt-5'>
          Replace the placeholders below with your real contact details and links.
        </p>
        <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
          {contactDetails.map((details,index) => 
          <article className='min-w-0 px-5 py-4 p-6 md:p-8 border rounded-2xl bg-[#141722] border-cyan-400 transition-all hover:scale-105 hover:border-cyan-400/50' key={index}>
            <h3 className='text-xl md:text-2xl font-bold'>{details.title}</h3>
            <a className='block min-w-0 text-gray-300 mt-4 leading-relaxed break-all' href={details.link} >{details.link}</a>
          </article> 
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact