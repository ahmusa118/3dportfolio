import React,{useState,useEffect} from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { useNavigate } from 'react-router-dom'
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";

const icons = {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
}
const ExperienceCard=({experience,onClick})=>{
  const icon = icons[experience.icon];

  return(
<VerticalTimelineElement  contentStyle={{background:'#1d1836', color:'#fff'}} contentArrowStyle={{borderRight:'7px solid'}} date={`${new Date(experience.startdate).toDateString()} - ${new Date(experience.enddate).toDateString()}`} iconStyle={{background:experience.iconBg}}
icon={
  <div  className='flex justify-center items-center w-full h-full'>
    <img src={icon} alt={experience.project_name} className='w-[60%] h-[60%] object-contain' />
  </div>
}

>
<div >
<button onClick={onClick} >Click to see</button>
  <h3 className='text-white text-[24px]'>{experience.title}</h3>
  <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>
    {experience.project_name}
  </p>
</div>
<ul className='mt-5 list-disc ml-5 space-y-2'>
{experience.points.map((point,index)=>(
  <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>

{point}
  </li>
))}
</ul>

</VerticalTimelineElement>)
}
const Experience = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/allprojects`,{method:'GET'}); // Replace with the correct API URL
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
  const navigate=useNavigate()
const handleClick=(key)=>{

navigate('/gallery',{state:{details:key,projects:projects}})
}
  return (
  <>
  <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>What I have done so far</p>
   <h2 className={styles.sectionHeadText}>Work Experience</h2>
  </motion.div>
  <div className='mt-20 flex flex-col'>
    <VerticalTimeline>

      {projects.map((experience,index)=>(

        <ExperienceCard key={index} experience={experience} onClick={()=>handleClick(experience)}/>
    

      ))}
    </VerticalTimeline>
  </div>
  </>
  )
}

export default SectionWrapper(Experience,'work')