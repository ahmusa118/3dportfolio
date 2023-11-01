import React from 'react'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'
  
const Gallery= () => {
  const [projects, setProjects] = useState([]);
  const location=useLocation()
const {details}=location.state


  return (
    <>
     <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>My Works</p>
   <h2 className={styles.sectionHeadText}>Gallery.</h2>
  </motion.div>
<div className='w-full flex'>
  <motion.p variants={fadeIn('','',0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    The following projects showcase my skills and experience through real world examples of my work.
  </motion.p>
</div>
<div className='mt-20 flex flex-wrap gap-7'>

{details.images.map((i)=>(
  <motion.div variants={fadeIn('up', 'spring', 1 * 0.5, 0.75)}>
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
   
  <div className='relative w-full h-[230px]'>
    
<img  key={details._id} className='w-full h-full object-cover rounded-2xl' alt={details.title}  src={`http://localhost:3000/ind/${i.replace('uploads/', '')}`}  />
<div className='absolute inset-0 flex justify-end m-3 card-img_hover'></div>
</div>
</Tilt>
      </motion.div>
))}



</div>
    </>
  )
}

export default SectionWrapper(Gallery, '')