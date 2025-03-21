import { useDispatch, useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import PhoneModal from "./PhoneModal";
import { delefNobatDoctors } from "../featchers/AddTrunsDoctor";
import findNextAvailableDaysInWeek, { getToday } from "../featchers/getPersianDay";
import { WorkingHoursType } from "../servises/getDoctors";


interface TyppeDoctor {
  name: string;
  specialty: string;
  from: string;
  to: string;
  image: string;
  nobatDay: string;
  id:string,
  isDayNobat:boolean ,
  phone:string,
  workingOurs:WorkingHoursType[]
}
interface TypeNobatDoctors {
  nobatDoctors: {
    NobatDoctors: TyppeDoctor[];
  };
}

export default function DoctorTurns() {
  const dispatch =useDispatch();

  const { NobatDoctors } = useSelector((res: TypeNobatDoctors) => res.nobatDoctors);
  const { user } = useUser();
  const [ activeIndex, setActiveIndex] = useState<number | null>(null);


  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  }


  function handleIsAcsepting(name: string) {
    const doctor = NobatDoctors.find((res) => res.name === name);
    
    if (!doctor) return false; // اگر دکتری پیدا نشد، نوبت ندارد
    
    const nobatDay = doctor.nobatDay as string;
    const currentDay = getToday().Today;
    
    const workingHours1 = doctor.workingOurs.map((res) => res.day) as string[];
    const isTodayAcsepting = findNextAvailableDaysInWeek(workingHours1).map((res) => res.nextDay);
    
    const timeDoctor = doctor.from as string;
    const [fromHour, fromMinute] = timeDoctor.split(":").map(Number);
    const slotTime = fromHour * 60 + fromMinute;
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    // بررسی اینکه آیا امروز نوبت دارد یا نه
    const isToday = currentDay === nobatDay;
    const fromTimeIsPassed = isToday ? (currentTime <= slotTime) : true;

    console.log("Current Time:", currentTime);
    console.log("Slot Time:", slotTime);
    console.log("Nobat Day:", nobatDay);
    console.log("Current Day:", currentDay);
    console.log("Is Today Acsepting:", isTodayAcsepting);
    console.log("From Time Is Passed:", fromTimeIsPassed);

    return isTodayAcsepting.includes(nobatDay) && fromTimeIsPassed;
  }



   
  if(NobatDoctors.length !== 0)return (

    <section>
      <div className="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem] md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem">
          <div className=" w-[100%] flex justify-center items-center gap-[1rem]">
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
              <div className=" w-[16rem]  text-[#cdcdcd]  text-[.9rem] sm:text-[1rem] "> نوبت های من </div>
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
           </div>
      </div>
      <div className=" max-w-[54rem] px-[1.5rem] mx-auto flex items-center justify-between md:px-[4rem] pt-[.7rem] ">
        <div className=" flex flex-col w-[100%] ">
          {NobatDoctors.map((resp, index) => (
            <div key={index}>
              {activeIndex === index ? 
              (
                <div className="">
                      <div className=" py-[1.5rem] relative flex justify-center items-center rounded-[1.3rem] border-[#ffff] border-[4px] custom_shadow6 mt-[-1rem] w-[100%] bg-[#f9f9f9] ">
                          <div className=" flex flex-col w-[100%] ">
                            <div className=" flex flex-col items-center">
                                  <div className=" relative">
                                    <Link to={`/${resp.id}`}>
                                        <img className=" rounded-[50%] size-[6.5rem] sm:size-[8rem] object-cover" src={resp.image} alt="" />
                                    </Link>
                                    <Modal>
                                        <Modal.Open openwindowName="phoneNobat">
                                          <button className=" flex items-center bg-[#fff] border-none rounded-[50%] bottom-[0] justify-center w-[2.5rem] text-[#000] text-[1.5rem] h-[2.5rem] absolute custom_shadow8">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg>
                                          </button>
                                        </Modal.Open>
                                        <Modal.Window center={true} name="phoneNobat">
                                            <PhoneModal phone={resp.phone} />
                                        </Modal.Window>
                                    </Modal>
                                  </div>
                                  <Link to={`/${resp.id}`}>
                                        <h3 className=" mt-[.6rem] hover:text-[#007bff] transition sm:text-[1rem] text-[.9rem] font-semibold ">دکتر{resp.name}</h3>
                                  </Link>
                                  <Link to={`/${resp.id}`}>
                                        <h3 className=" hover:text-[#007bff] transition text-[#005761] m:text-[1rem] text-[.8rem]  font-bold ">متخصص {resp.specialty}</h3>
                                  </Link>
                            </div>
                            <div className=" flex flex-col gap-[4px] mx-auto w-[100%] sm:w-[80%] px-[3rem] mt-[2rem]">
                               <div className=" bg-[#ffff] w-[100%] px-[.5rem] py-[.7rem] flex items-center justify-between">
                                  <p className=" sm:text-[1rem] text-[.9rem] font-bold text-[#000000a6]"> نام بیمار</p>
                                  <p className=" sm:text-[1rem] text-[.9rem] font-bold text-[#000000a6]">{user?.name}</p>
                               </div>
                               <div className=" bg-[#ffff] w-[100%] px-[.5rem] py-[.7rem] flex items-center justify-between">
                                  <p className=" text-sm font-bold text-[#000000a6]"> زمان ویزیت</p>
                                  <p className=" text-sm font-bold text-[#000000a6]">
                                   {handleIsAcsepting(resp.name) ?
                                    <div className=" flex flex-col items-center sm:block ">
                                       <span>  {resp.from} تا {resp.to}  </span>
                                       <span> {resp.nobatDay} </span>
                                    </div>
                                    :
                                    <span className=" text-[.6rem] sm:text-[.9rem] text-[red] ">تاریخ نوبت شما گذشته است </span>
                                   }
                                  </p>
                               </div>

                               <button onClick={()=>{dispatch(delefNobatDoctors(resp.id))}} className=" transition-all ease-in delay-100 pb-[.4rem] bg-[#ffff] hover:text-[#ffff] hover:bg-[red] border-[1px] rounded-[2rem] border-[red] mt-[1.5rem] text-[red] text-sm font-bold  h-[2.5rem] w-full ">  حذف و لغو این نوبت  </button>
                            </div>
                            <div>
                               <Modal>
                                 <Modal.Open openwindowName="phoneNobat2">
                                      <div className=" flex items-center justify-center border-[1px] border-[black]  bg-[#ffff] rounded-full w-[82%] h-[2.8rem] mt-[1.5rem] mx-auto ">
                                        <div className=" cursor-pointer hover:text-[#007bff] transition flex gap-[.4rem] justify-center items-center">
                                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{fontSize:"1.5rem"}}  ><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg>
                                              <span>تماس با مطب</span>
                                        </div>
                                      </div>  
                                 </Modal.Open>
                                 <Modal.Window center={true} name="phoneNobat2">
                                      <PhoneModal CloseModal={()=>{}} phone={resp.phone} />
                                 </Modal.Window>
                               </Modal>
                            </div>  
                          </div>
                          <button className=" absolute top-[1rem] right-[1rem]" onClick={()=>handleClick(index)}>
                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
                          </button>
                         
                      </div>
                </div>
              )
               : 
              (
              <div  onClick={() => handleClick(index)}  className="flex gap-[2rem] cursor-pointer pb-[1.2rem] border-b-[1px] w-[100%]">
                <div className="flex justify-between items-center w-[100%] mt-[1.2rem]">
                  <div className="flex gap-[.5rem]">
                    <img className="max-w-[3.5rem] h-[3.5rem] object-cover" src={resp.image} alt="" />
                    <div>
                      <h2 className="text-sm sm:text-[1rem] font-medium mb-[.4rem] text-[#3c4e00]">{resp.name}</h2>
                      <p className="text-sm sm:text-[1rem] text-[#3c4e00]">متخصص {resp.specialty}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    {handleIsAcsepting(resp.name) ?
                      <div className="flex flex-col items-center ">
                        <span className=" text-sm sm:text-[1rem] ">  {resp.from} تا {resp.to}  </span>
                        <span className=" text-sm sm:text-[1rem] ">{resp.nobatDay}</span>
                      </div>
                      :
                      <span className=" text-[.6rem] sm:text-[.9rem] text-[red]">تاریخ نوبت شما گذشته است </span>
                    }
                  </div>
                </div>
              </div>
              )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  else return(
    <div className="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem">
      <div className=" w-[100%] flex justify-center items-center gap-[1rem]">
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
              <div className=" w-[30%] text-[#cdcdcd]"> نوبت های من </div>
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
           </div>
          <div className="  flex flex-col justify-center items-center w-[100%] text-center ">
              <svg  fill="#6c757d65" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{fontSize:"1.75rem"}}><path fill-rule="evenodd" d="M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path></svg>
              <h2 className=" font-medium text-[#6c757d65] ">  هنوز شما نوبتی ثبت نکرده اید  </h2>
          </div>
    </div>
  )
}