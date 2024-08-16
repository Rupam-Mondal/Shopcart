import AxiosInstance from "../helpers/AxiosInstance";

export async function Fetchdata(){
    try{
        const response = await AxiosInstance.get('')
        return response.data
    }
    catch(e){
        console.log(e)
        return null
    }
}