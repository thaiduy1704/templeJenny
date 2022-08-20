import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import CONFIG from "../config";

const requestFile: AxiosInstance = axios.create({
    baseURL: CONFIG.BASE_URL,

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
    responseType: "blob",
});

requestFile.interceptors.request.use((config: AxiosRequestConfig) => {
    const newConfig = { ...config };

    return newConfig;
});

requestFile.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
});

export default requestFile;
