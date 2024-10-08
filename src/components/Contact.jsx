import { style } from "../style"
import {useState,useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({name:'',email:'',message:'',})
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
  e.preventDefault();
  setLoading(true);
  //template_c7kvdnf
//service_taupiba
//ylIDllAZxWXCE7PdV
  emailjs.send(
    'service_taupiba',
    'template_c7kvdnf',
    {
      from_name:form.name,
      to_name:'Ayaan',
      from_email:form.email,
      to_email:'khajaayaan2912@gmail.com',
      message:form.message,
    },
    'ylIDllAZxWXCE7PdV'
  ).then(()=>{
    setLoading(false);
    alert('Thank you I will get back to you as soon as possible.')
    setForm({
      name:'',
      email:'',
      message:'',
    })
  },(error)=>{
    setLoading(false);
    console.log(error);
    alert('Something went wrong')
  }
  )}
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div variants={slideIn('left','tween',0.2,0.1)} className="flex-[0.75] bg-black-100 rounded-2xl p-8">
     <p className={`${style.sectionSubText}`}>Get in Touch</p>
     <h3 className={style.sectionHeadText}>Contact.</h3>
    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex-col gap-8">
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Name</span>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Whats your name" className="rounded-lg py-4 px-6 bg-teritary placeholde:text-secondary text-white outlined-none border-none font-medium"/>
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Email</span>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="@gmail.com" className="rounded-lg py-4 px-6 bg-teritary placeholde:text-secondary text-white outlined-none border-none font-medium"/>
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Message</span>
        <textarea type="text" name="message" value={form.message} onChange={handleChange} placeholder="enter your message" className="rounded-lg py-4 px-6 bg-teritary placeholde:text-secondary text-white outlined-none border-none font-medium"/>
      </label>
      <button type='submit' className="bg-teritary outline-none font-bold text-white w-fit py-3 px-8 shadow-md shadow-primary rounded-xl mt-[10px]">{loading?'Sending..':'Send'}</button>
    </form>
    </motion.div>
    <motion.div variants={slideIn('right','tween',0.2,0.1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
<EarthCanvas/>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");