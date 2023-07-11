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

