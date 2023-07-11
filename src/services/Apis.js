import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const loginfunction=async(data,header)=>{
    return await commonrequest('POST',`${BASE_URL}/auth/login`,data,header)
}
export const registerfunction=async(data,header)=>{    
    return await commonrequest('POST',`${BASE_URL}/auth/register`,data,header)
}
export const forgotpasswordfunction=async(data,header)=>{    
    return await commonrequest('POST',`${BASE_URL}/auth/forgotpassword`,data,header)
}
export const passwordresetfunction=async(data,id,token)=>{
    return await commonrequest('POST',`${BASE_URL}/auth/resetpassword/${id}/${token}`,data)
}

// export const usergetfunction=async(search,gender,sort,page)=>{
//     return await commonrequest('GET',`${BASE_URL}/user/getallusers?search=${search}&gender=${gender}&sort=${sort}&page=${page}`,"")    
// }

// export const deletefunction=async(id)=>{
//     return await commonrequest('DELETE',`${BASE_URL}/user/delete/${id}`,{})    
// }

// export const getsingleuserfunction=async(id)=>{
//     return await commonrequest('GET',`${BASE_URL}/user/getuser/${id}`,"")
// }

// export const editfunction=async(id,data,header)=>{
//     return await commonrequest('PUT',`${BASE_URL}/user/edit/${id}`,data,header)
// }

// export const exporttocsvfunction=async()=>{
//     return await commonrequest('GET',`${BASE_URL}/user/userexport`,"")
// }