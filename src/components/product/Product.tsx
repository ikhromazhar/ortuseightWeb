import sepatu1 from "../../assets/1646815463-isirv-removebg-preview.png"
import sepatu2 from "../../assets/1650270880-zuutu-removebg-preview.png"
import sepatu3 from "../../assets/1678153915-yz1rt-removebg-preview.png"
import sepatu4 from "../../assets/1690960395-xkgla-removebg-preview.png"
import sepatu5 from "../../assets/1701761614-207aw-removebg-preview.png"
import maskot from "../../assets/20240101_220809.png"
const Product = () => {
	return(
		   <div className="z-20 bg-[#FCE6CF] w-full h-screen">
		     <div className="absolute bg-gradient-to-t from-green-700 to-emerald-700 w-[120%] h-[38rem] ml-[-7rem] mt-[8rem] rotate-[-8deg]">
		        <div className="text-4xl rotate-[8.5deg] mt-32 ml-52 font-[newsflash]">
		           <span className="text-white">CHAMPIONS ARE <br/> MADE IN THE SHADOW,<br/> CELEBRATE IN THE LIGHT<br/></span>
		           <span className="text-white text-xl  font-[SupplyLight] font-bold">Better Go Than Never<br/></span>
		           <span className="text-white text-xl font-bold font-[SupplyLight] ">#GiveItAll</span>
		           <img className="w-[25rem] absolute ml-[45rem] mt-[-15rem]" src={maskot} alt=""/>
		       </div>
		     </div>
          
		   </div>
		)
}
export default Product