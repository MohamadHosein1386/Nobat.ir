import { useNavigate, useSearchParams } from "react-router-dom";
import useDoctors from "../hooks/useDoctors";
import { specialties } from "../servises/filterspecialty";
import Spinner from "../ui/Spinner";
import { lenghfWords } from "../HelperFunction/lenghWords";
import LinkFooter from "../ui/LinkFooter";
import StarRating from "../ui/StarRating";


export default function Home() {
  const navigate = useNavigate();
  
  const {doctors  ,isLoading , totalPages}=useDoctors();
  const [searchparams ,setSerchparams]=useSearchParams();
  
  
  const city = searchparams.get("city") ;
  const specialty = searchparams.get("specialty");
  
  
  function handleFilterLi(key:string , value:string) {  
    searchparams.set(key, value);
    searchparams.delete("page");
    setSerchparams(searchparams);
  }
  
  function handlePaginationLi(key:string , value:number) {  
    searchparams.set(key , String(value));
    setSerchparams(searchparams);
  }
   

  if(isLoading) return <Spinner />;
  if(doctors?.length === 0) return <h1 className=" text-xl font-semibold  py-[6rem] text-center">متسفانه دکتری وجود ندارد</h1>;


  return (
    <section className=" w-full">
     <div className="  max-w-[68rem] mx-auto  px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem]">
       <h1 className=" md:text-right md:mb-[3.4rem] md:mt-[-.8rem] text-center text-[1.3rem] sm:text-[1.3rem] font-medium text-[#044c6a] mb-[1.3rem] mt-[1.4rem]"> { (city || specialty ) !== null ? ` لیست آدرس و تلفن ، پزشکان ${specialty !== null ? specialty : "" }  ${city !== null ? city : ""} ` : `` }</h1> 
       <div className=" w-[100%] flex  md:mt-[-2.5rem]  md:gap-[2.8rem]  ">
           <div className="hidden md:block ">
              <ul className=" mr-[1.2rem] w-[11rem] ">
                {specialties.map((res)=> <li onClick={()=>{handleFilterLi("specialty" , res) }} key={res} className=" font-semibold text-[.9rem] cursor-pointer hover:text-[#363636] list-disc mb-[.8rem] text-[#363636ab] hover:font-semibold">{res}</li>)}
              </ul>
           </div>
           <div className="  w-full flex flex-col">
            
                 <ul className=" w-full flex flex-wrap gap-[1rem]">{doctors?.flatMap((res)=>
                   <li onClick={()=>navigate(`/${res.id}`)}  className=" cursor-pointer w-[100%] xl:w-[22rem] border-b-[1px] border-b-[#ececec] md:border-[1px] md:border-solid md:border-[#ececec] rounded-[.25rem] flex flex-col justify-between  md:px-[1rem] py-[.5rem] h-[11.5rem]" key={res.id}>
                    <div className=" flex justify-between ">
                       <div className=" flex flex-col">
                        <div>
                          <h2 className=" text-lg font-semibold pt-[.5rem]">{res.name}</h2>
                           <p className=" bg-[#f8feff] text-[#004d6c] mt-[1rem]  max-w-fit">متخصص {res.specialty}</p>
                           {res.accepting_patients && <div className=" mt-[1.3rem]"> <span className=" text-[.7rem] font-semibold text-[#bababa] ml-[.4rem]">نوبت دهی  </span> <span className=" pb-[.1rem] rounded-[4px] px-[.4rem]  text-[.8rem]  bg-[#75950c15]   text-[#75950cb3]"> اینترنتی</span></div>}
                        </div>
                      
                       </div>
                       
                        <img className=" mt-[.5rem] w-[5rem] h-[6rem] object-cover" src={res?.image} alt="" />
                    </div>
                      <div className=" flex justify-between items-center mb-[.5rem]">
                        <p className=" text-[#878787] text-[.8rem] font-semibold">{lenghfWords(res.address , 3)}</p>
                        <div className="  flex gap-[.5rem] items-center">
                           <span className="  text-[.7rem] text-[#878787] font-semibold">120 نفر </span>
                          <StarRating rating={res.rating} />
                        </div>
                      </div>
                   </li>
                )}</ul>
                  {
                     <div className=" flex justify-center gap-[.5rem] pt-[2rem] ">
                       {Array.from({length : totalPages} , (__ , index)=>(
                     <button onClick={()=>handlePaginationLi("page",index+1)} key={index +1} className=" transition ease-in delay-75 hover:bg-[#77777745] text-[.85ren] rounded-[50%] w-[2rem] h-[2rem] text-black custom_shadow3 bg-[#fff] flex justify-center items-center" >
                        {index+1}
                     </button>
                       ))}
                     </div>
                  }
           </div>
          
       </div>
     </div>
       <LinkFooter href="https://drhast.com/q" titel="پرسش و پاسخ"  />
    
    </section>
  )
}
