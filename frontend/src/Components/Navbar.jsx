import React from 'react'
import {delay, motion} from 'framer-motion'


const Navbar = () => {

  const navTitle = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition:{  
        delay:0.6,   
        duration:1.2
      }
    }
  };
  const navLinks = {
    hidden: {
      opacity: 0,
      x: -30
  
    },
    visible: {
      opacity: 1,
      x: 0,
      transition:{
        type: "spring",
        bounce: 0.4,
        stiffness: 20,
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }    
  }

  const links=[ "Home" , "About" , "Skills" , "About" ];

  return (
    <div className="wrapper flex justify-between [background-color:rgb(1,11,30)] h-20 items-center font-bold">
      <motion.div 
      variants={navTitle}
      initial="hidden"
      animate="visible"
      className='text-3xl text-white cursor-pointer'>Tanmoy .
      </motion.div>


      <motion.ul  //Navbar links
        variants={navLinks}
        initial="hidden"
        animate="visible"
        className="flex gap-14 mr-8 items-center"
      >
        {links.map((items) => (
          <motion.li key={items} variants={navLinks} className='text-white'>{items}</motion.li>
        ))}
      </motion.ul>
      
    </div>
  )
}

export default Navbar