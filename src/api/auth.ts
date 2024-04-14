import { axiosInstanceBookingDoctor } from "@/config/axios/axiosClient";
import {
    ISignInRequest,
    ISignInResponse,
    ISignUpRequest
} from "@/models/interfaces";


const REST = "";

export const signInAPI = async (payload: ISignInRequest): Promise<ISignInResponse> => {
    const url = `${REST}/authenticate`;
    const body = {
        ...payload,
    };
    const response = await axiosInstanceBookingDoctor.post<ISignInResponse>(url, body);
    return response.data;
};

export const signUpAPI = async (payload: ISignUpRequest) => {
    const url = `${REST}/sign-up`;
    const body = {
        ...payload,
    };
    const response = await axiosInstanceBookingDoctor.post(url, body);
    return response.data;
};