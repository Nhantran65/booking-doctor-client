import { AUTH_KEY, TOKEN } from "@/models/constants/common";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import queryString from "query-string";
import { Cookies } from "react-cookie";

const axiosInstance = (baseURL: string) => {
    const axiosClient = axios.create({
        baseURL,
        headers: {
            "content-type": "application/json",
        },
        paramsSerializer: (params) => queryString.stringify(params),
    });
    axiosClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
        const cookies = new Cookies();
        const token = cookies.get(TOKEN);
        const authKey = cookies.get(AUTH_KEY);

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        if (authKey) {
            config.headers["AuthKey"] = authKey;
        }
        return config;
    });
    axiosClient.interceptors.response.use(
        (response: AxiosResponse) => {
            if (response && response.data) {
                return response.data;
            }
            if (typeof response.data === "boolean") {
                return response.data;
            }
            if (response.status === 204 && response.config.method === "get") {
                return {
                    pageNumber: 1,
                    pageSize: 10,
                    results: [],
                    totalNumberOfPages: 0,
                    totalNumberOfRecords: 0,
                };
            }
            return response;
        },
        (error) => {
            // Handle errors
            throw error;
        }
    );

    return axiosClient;
};

const axiosInstanceJfw = axiosInstance(import.meta.env.VITE_JFW_API);
const axiosInstanceVardytest = axiosInstance(import.meta.env.VITE_VARDYTEST_API);

export { axiosInstanceJfw, axiosInstanceVardytest };
