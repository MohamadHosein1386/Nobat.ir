import { useDispatch, useSelector } from "react-redux"
import { DoctorType } from "../servises/getDoctors";
import { Link } from "react-router-dom";
import { deleteFavaritDoctor } from "../featchers/FavaritDoctorReducer";
import toast from "react-hot-toast";
import Modal from "./Modal";
import PhoneModal from "./PhoneModal";


interface HasFavaritType{
    favaritDoctor:{
        favaritDoctors:DoctorType[]
    } 
}


export default function RednderImgageFavariteDoctors() {

  function handleHasFavarit(id:string) {
    dispatch(deleteFavaritDoctor(id));
    toast.success("با موفقیت از لیست موردعلاقه حذف شد");
  }

  const dispatch = useDispatch();
  const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);
  if(!favaritDoctors || favaritDoctors.length === 0 )return null;


  return (
    <div className=" flex flex-col gap-[2.5rem]">
            { favaritDoctors.map((res)=>
                      <div key={res.id} className=" relative flex justify-center items-center rounded-[1.3rem] border-[#ffff] border-[4px] custom_shadow6 mt-[-1rem] w-[100%] bg-[#f9f9f9] h-[18rem]">
                        <div className=" flex flex-col items-center">
                            <div className=" relative">
                                <Link to={`/${res.id}`}>
                                  <img className=" rounded-[50%] size-[6.5rem] sm:size-[8rem]  object-cover" src={res.image} alt="" />
                                </Link>
                                <Modal>
                                  <Modal.Open openwindowName="Phone">
                                      <button className=" flex items-center bg-[#fff] border-none rounded-[50%] bottom-[0] justify-center w-[2.5rem] text-[#000] text-[1.5rem] h-[2.5rem] absolute custom_shadow8">
                                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className=" size-[1em] " xmlns="http://www.w3.org/2000/svg"><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg>
                                      </button>
                                  </Modal.Open>
                                      <Modal.Window center={true} name="Phone" >
                                          <PhoneModal phone={res.phone} />
                                      </Modal.Window>
                                </Modal>
                              
                            </div>
                            <Link to={`/${res.id}`}>
                              <h3 className=" mt-[.6rem] hover:text-[#007bff] text-sm sm:text-[1rem] transition font-semibold ">دکتر{res.name}</h3>
                            </Link>
                            <Link to={`/${res.id}`}>
                              <h3 className=" hover:text-[#007bff] transition text-[#005761] text-[.78rem] sm:text-[1rem] font-bold ">متخصص {res.specialty}</h3>
                            </Link>
                            <button onClick={()=>handleHasFavarit(res.id)} className=" transition-all ease-in delay-100  pb-[.4rem] bg-[#ffff] hover:text-[#ffff] hover:bg-[red] border-[1px] rounded-[2rem] border-[red] mt-[1.5rem] text-[red] text-sm font-bold  h-[2rem] w-[10rem] ">حذف کردن</button>

                        </div>
                      </div>
                )
            }
    </div>
  )
}
