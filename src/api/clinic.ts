// import { axiosInstanceBookingDoctor } from "@/config/axios/axiosClient";
// import { IBrandInfo, IGetListBrandsParams } from "@/models/interfaces";

// const REST = "clinic/all";

// export const getListClinicAPI = async (params?: IGetListBrandsParams): Promise<IBrandInfo[]> => {
//     const url = `${REST}`;
//     const response = await axiosInstanceBookingDoctor.get(url, {
//         params,
//     });

//     return response.data;
// };

export const getListClinicAPI = async () => {
    const response = await fetch('http://localhost:8082/clinic/all');
    return response.json();
};