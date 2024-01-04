import pelari from "../../assets/20231228_150140.png"
impogiy rt pelari2 from "../../assets/20231228_150516.png"
import pelari3 from "../../assets/20231228_150247.png"
import logo from "../../assets/abb64494-83ff-402a-a50e-175430a134fb.png"
import Aos from "aos"
import React,{useEffect, useState} from "react"
import "aos/dist/aos.css"
import "./home.css"

const Home = () => {
	
	const [konsepBg, setKonsepBg] = useState(false)
	
	useEffect(() => {
		Aos.init({duration: 10})
	}, [])
  const changeBackground = () => {
    if(window.scrollY >= 1 ) {
    	setKonsepBg(true)
    } else{
    	setKonsepBg(false)
    }
   }

  window.addEventListener('scroll', changeBackground)
	
	return(		
      <>
      <div className="w-full p-5 absolute ml-[6rem] ">
		      <nav className="z-50 font-[SupplyLight] text-black bg-white uppercase font-bold text-2xl fixed ml-[50rem] text-red-700">
		        <spam className="h-[-1rem] px-2 hover:bg-black hover:h-[1rem]">home</spam>
		        <spam className="px-2">product</spam>
		        <spam className="px-2">about</spam>
		        <spam className="px-2">excess</spam>a
		      </nav>
      </div>
      
        <div className="bg-[#FCE6CF] w-full h-[47rem] overflow-x-hidden">
          <div className={konsepBg ? 'bgActive' : 'bgAja'}>
          <div className="bg-[#FCE6CF] w-[35rem] h-32 absolute mt-[8rem] ml-[26rem]"></div>
              <span className=" font-[RightGrotesk]  text-9xl absolute italic z-30 font-bold uppercase ml-[26rem] mt-[7rem] ">ortuseight</span>

              
              <div className="bg-red-700 absolute w-[30rem] h-[5rem] mt-[11rem] ml-[26rem]"></div>
              

          </div>
          
          <div className="w-full z-30  absolute font-[RightGrotesk]  h-[15rem]">
              <span className=" font-[] text-9xl absolute italic  font-bold uppercase ml-[26rem] mt-[7rem] ">give  it  all</span>
              
              <div className="bg-red-700 w-[30rem] h-[5rem] mt-[11rem] ml-[26rem]"></div>
   
          </div>


          
            <div className="absolute border-solid border-b-4 border-l-4 shadow-2xl  border-white w-[78rem] h-[18rem] rounded-bl-full	 bg-red-700 ml-[2rem] mt-[29rem] z-20"></div>
            <div className="absolute border-solid border-b-4 border-l-4 shadow-2xl  border-white w-[72rem] h-[15rem] rounded-bl-full bg-red-700 ml-[8rem] mt-[25rem] z-20"></div>
            <div className="absolute border-solid border-b-4 border-l-4 shadow-2xl  border-white w-[66rem] h-[15rem] rounded-bl-full bg-red-700 ml-[14rem] mt-[17.4rem] z-20"></div>
            <div className="absolute  border-white w-[60rem] h-[15rem] rounded-bl-full border-b-8 border-white bg-[#FCE6CF] ml-[20rem] mt-[8.5rem] z-20"></div>
            <img className="absolute z-20 w-[14.5rem] h-auto mt-[16.5rem] ml-[12rem]" src={pelari} alt=""/>
            <img className="absolute z-20 w-[14.5rem] h-auto mt-[23rem] ml-[39rem]" src={pelari2} alt=""/>
            <img className="absolute z-30 w-[14.5rem] h-auto mt-[18rem] ml-[65rem]" src={pelari3} alt=""/>
        </div>
      </>
		)
}
export default Home