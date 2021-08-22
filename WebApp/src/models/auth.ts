import { IUserProps } from "./user"

export interface ISignInResponseData {
    accessToken: string
    user: IUserProps
}