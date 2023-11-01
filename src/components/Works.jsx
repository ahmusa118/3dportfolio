import React from 'react'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import {useState,useEffect} from 'react'
const ProjectCard=({index,title,description,tags,images,source_code_link})=>{

  return(
<motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
 <Tilt options={{max:45,scale:1, speed:450}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
<div className='relative w-full h-[230px]'>
<img
        key={index}
        src={`http://localhost:3000/ind/${images[0]?.replace('uploads/', '')}`}
        alt={title}
        className='w-full h-full object-cover rounded-2xl'
      />



<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
<div onClick={()=>window.open(source_code_link,"_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>

  <img src={github} alt={github} className='w-1/2 h-1/2 object-contain' />
</div>
</div>
</div>
<div className='mt-5'>
  <h3 className='text-white font-bold text-[24px]'>{title}</h3>
  <p className='mt-2 text-secondary text-[14px]'>{description}</p>
</div>
<div className='mt-4 flex flex-wrap gap-2'>
  {tags.map((tag)=>(
<p key={tag.name} className={`text-[14px] ${tag.color}`}>
  #{tag.name}
</p>
  ))}
</div>
 </Tilt>
</motion.div>
  )
}
const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/allprojworks`,{method:'GET'}); // Replace with the correct API URL
        if (response.ok) {
          const data = await response.json();
          setProjects(data); // Set the state with the retrieved data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
     <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>My Works</p>
   <h2 className={styles.sectionHeadText}>Projects.</h2>
  </motion.div>
<div className='w-full flex'>
  <motion.p variants={fadeIn('','',0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    The following projects showcase my skills and experience through real world examples of my work.
  </motion.p>
</div>
<div className='mt-20 flex flex-wrap gap-7'>
  {projects.map((project,index)=>(
    <ProjectCard key={project._id} index={index} {...project} />
  ))}

</div>
    </>
  )
}

export default SectionWrapper(Works, '')