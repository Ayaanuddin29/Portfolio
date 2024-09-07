import { style } from "../style"
const Contact = () => {
  return (
    <div className="bg-primary w-full h-full rounded-2xl">
        <h1 className={` ${style.heroHeadText} mx-[20px] lg:mx-[180px]`}>Contact:</h1>
        <h3 className="mx-[20px] lg:mx-[180px]">Phone No:<span className="text-[orange]">9347160972</span></h3>
        <h3 className="mx-[20px] lg:mx-[180px]">Email:<span className="text-[white]">khajaayaan2912@gmail.com</span></h3>
        <h3 className="mx-[20px] lg:mx-[180px]">Address:<span className="text-[green]">Hyderabad</span></h3>
    </div>
    
  )
}

export default Contact