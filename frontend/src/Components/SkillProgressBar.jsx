import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';


const SkillProgressBar = ({ skill, targetpercentage }) => {
  const [percentage, setPercentage]=useState(0);
  useEffect(()=>{
    let progress=0;
    const interval=setInterval(()=>{
      progress+=1;
      setPercentage(progress);
      if(progress===targetpercentage){
        clearInterval(interval);
      }
    }, 40)
  },[targetpercentage])
  return (
    <div className='w-28 m-3'>     
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#00bfff',
          trailColor: 'd6d6d6',
        })}
      />
      
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {skill}
      </div>

    </div>
  );
};

export default SkillProgressBar;
