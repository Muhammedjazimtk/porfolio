
import './App.css';
import 'animate.css';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';



function App() {
  const [navbar,setNavbar] = useState(false);
  const changeNavbar = ()=>{
    if (window.scrollY > 100){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changeNavbar);





  return (
    <div class="flex flex-col h-screen bg-black m-0">
    {/*header*/}  
      <div className='flex w-screen min-h-[50px] fixed z-10 '>
        <div className='flex justify-start items-center p-9 w-1/2 group-hover:opacity-100 transition duration-200'>
        <div className='bg-pink-600 h-10 w-10 absolute rounded-lg blur-lg opacity-75 '></div>
          <a href='#'><img alt='' src='./images/favicon-32x32.png' className='relative h-10 w-10 '></img></a>
        </div>
        <div className='flex justify-end w-1/2 items-center gap-5 mr-10'>
          <h3 className='text-[#EA047E] font-semibold pr-10'><a href='#about'>About</a></h3>
          <h3 className='text-[#EA047E] font-semibold pr-10'>Projects</h3>
          <h3 className='text-[#EA047E] font-semibold pr-10'><a href="mailto:jazimsadath@gmail.com">Contact</a></h3>
        </div>
 

      </div>

      {/*body */}
      <div className='flex flex-col justify-center min-h-screen m-0 gap-2'>
      <div className='flex '>
        <div className='flex flex-col w-1/2 justify-center'>
        <h1 className='text-2xl text-[#EA047E] ml-[300px] font-semibold'>Hey, I'm Jazim ,</h1>
        
        <h1 className='flex text-2xl text-[#EA047E] ml-[300px] font-semibold gap-2 font-Oswals'>I'm a<span className='underline'><Typewriter 
        options={{
          strings: ['Developer </>', 'Student. :)','Learner.'],
          autoStart: true,
          loop: true,
        }}
        /></span></h1> </div>
      <div className='flex items-center justify-center  w-1/2'>
      <img className='animate__animated animate__jackInTheBox w-[500px]' src='./images/1.png'  alt=''></img>
      </div>
      </div>
        
        
        

      </div>
      <div className='bg-black h-screen pb-10'>
        <div className='flex justify-center items-center' id='about'>
          <div className='flex gap-12'>
            <img src='./images/j.jpg' className='rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg' alt='' width={350}></img>
            <div className='flex flex-col'>
              <p className='text-white text-sm'> A BIT ABOUT ME</p>
              <p className='text-white text-sm '>Curerently, I'm a student at <span className='font-extrabold underline'>Cochin University of Science And Technology.</span><br></br> I'm a passionate <span className='font-extrabold underline'>Web Developer</span> who loves to learn new Technologies </p>
              <p className='text-white text-sm '>and loves to collaborate</p>
              <p className='text-white  text-sm pt-7'>Want to work together?<span className='font-extrabold underline'><a href="mailto:jazimsadath@gmail.com">Contact me.</a></span></p>
            </div>
            
          
          </div>

        </div>
      
      
      </div>

      <div className='bg-black h-screen pb-10'>

        <div className='flex items-center'>
        </div>
      
      
      
      </div>
    </div>
  );
}

export default App;
