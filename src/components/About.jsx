import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {style} from '../style'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
const ServiceCard=({index,title,icon})=>{
return(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn("right","spring",index*0.5,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h2 className='text-white text-[20px] font-bold text-center'>{title}</h2>
      </div>
    </motion.div>
  </Tilt>
)
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={style.sectionSubText}>Introduction</p>
      <h2 className={style.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a skilled software developer with experienc in Javascript,Python and Java, and expertise in frameworks like React,Node.js,Express.js,Three.js.I'm a quick learner and collabrate closely with clients top create efficient,sclalable,and user-friendly solutions that solve real world problems lets work together.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 xs:mx-[100px] lg:mx-[auto] md:mx-[auto] sm:mx-auto'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,'about')