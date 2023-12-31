import { BrowserRouter,Routes,Route } from "react-router-dom"
import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas,Gallery, Feedbacks} from './components'
const App=()=> {


  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<>
   <div className="relative z-0 bg-primary">
<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
<Navbar />
<Hero />
</div>
<About />
<Experience />
<Tech />
<Works />
<Feedbacks />
<div className='relative z-0'>
<Contact />
<StarsCanvas />

</div>
   </div>
   </>}/>
   <Route path='/gallery' element={
     <div className="relative z-0 bg-primary ">
     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center  '>
   <Gallery />
   </div>
   </div>
   } />
   </Routes>
   </BrowserRouter>
  )
}

export default App
