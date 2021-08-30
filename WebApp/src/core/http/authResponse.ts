import { 
    IHttpRequestProps, 
    IUserProps, 
    ISignInResponseData 
} from "@root/model"
import httpResponse from "./httpResponse"

export default {
    signIn: (user: IUserProps) => {
        const signInRequestProps = { endpoint: "/auth/sign-in", method: "post", bodyParameters: user } as IHttpRequestProps
        return httpResponse<ISignInResponseData>(signInRequestProps)
    },
    
    signUp: (user: IUserProps) => {
        const signUpRequestProps = ({ endpoint: "/auth/sign-up", method: "post", bodyParameters: user } as IHttpRequestProps)
        return httpResponse<ISignInResponseData>(signUpRequestProps)
    }
}