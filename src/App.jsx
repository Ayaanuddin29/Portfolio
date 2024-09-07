import { BrowserRouter } from "react-router-dom"
import {About,Contact,Hero,Navbar,Works,StarsCanvas, Tech, Feedbacks} from './components'

function App() {

  return (
    <div>
     <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
     <About/>
      <Tech/>
     <Works/>
      <div className="relative z-0">
            <Contact/>
            
      </div>
      </div>
     </BrowserRouter>
    </div>
  )
}

export default App
