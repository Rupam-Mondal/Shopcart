import axios from "axios"
import { Fakestoreget } from "./Constants"

const AxiosInstance = axios.create({
    baseURL: Fakestoreget,
})
export default AxiosInstance