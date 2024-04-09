import React, { Dispatch, SetStateAction } from "react";
import ReactQuill from "react-quill";

export type TId = number;
export type TDate = Date | string;
export type TSetState<T> = Dispatch<SetStateAction<T>>;

interface IPaginationParams {
    pageNumber?: number;
    pageSize?: number;
    isPagination?: boolean;
}
interface IPagination {
    totalItems: number;
    totalPractices?: number;
    numberOfCurrentPage?: number;
    totalPages?: number;
}
interface IListResponse<T> {
    items: T[];
    pagination: IPagination | null;
}
interface IListResponseVDT<T> {
    contents: T[];
    pagination: IPagination | null;
}
interface IBreadcrumb {
    link?: string;
    name: string;
}
interface IResponse<T> {
    statusCode?: number;
    data: T | null;
}
interface IOptionsSelect {
    value: string;
    label: string;
}
type TObjectHasKeyAsString<T> = {
    [key: string]: T;
};
