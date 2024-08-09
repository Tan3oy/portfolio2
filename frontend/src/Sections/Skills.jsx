import React from 'react';
import SkillProgressBar from '../Components/SkillProgressBar';

const Skills = () => {
  const items=[
    { skills: 'TailWind', percentage: 65},
    { skills: 'React', percentage: 75 },
    { skills: 'Javascript', percentage: 80}
  ]
  return (
    <div className='flex justify-center items-center'>
      { items.map((items,index)=>(
        <SkillProgressBar key={index} skill={items.skills} targetpercentage={items.percentage}/>
      ))}
      
    </div>
  );
};

export default Skills;
