import { IdType } from ".";

interface IInitialSignInValues {
    email: string;
    password: string;
}
interface ISignInRequest {
    email: string;
    password: string;
}
interface ISignInResponse {
    jwtToken: string;
}

interface ISignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'patient',
}