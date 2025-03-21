import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";
import { pageSize } from "../Constants/PageSize";

export default function useDoctors() {
    const [searchParams ]=useSearchParams();

    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "" ;
    const page = Number(searchParams.get("page")) || 1;


    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search , page],
        queryFn:getchDoctors
    });
    

    // filter
    const doctorsFilter = data?.filter((res)=> city === "" ? res : res.address.split("،")[0].includes(city))
    .filter((item)=> specialty === "" ? item : item.specialty.includes(specialty) );
     

    // pagination
    const doctors = doctorsFilter?.slice((page - 1) *pageSize , page * pageSize);
    const totalPages = Math.ceil(( doctorsFilter?.length || 0 ) / pageSize);


    //search
    const tehranSearch = data?.filter((doctor)=> doctor.address.split("،")[0].includes("تهران"));    
    const searchDoctors = tehranSearch?.filter((item)=> search == "" ? "" : search.split(" ").every((word)=>(item.name.includes(word) || item.specialty.includes(word)))  )

    return {doctors , totalPages   , isLoading ,searchDoctors};
}
