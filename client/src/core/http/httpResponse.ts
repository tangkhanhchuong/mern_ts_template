import axios from 'axios'

import { 
    IHttpRequestProps, 
    IHttpResponseProps, 
    IAxiosConfig,
    HttpMethods    
} from "@root/models/http"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SYSTEM_URL,
})

const httpResponse = <T>({ endpoint, method = 'get', bodyParameters,  query, requireToken = false }: IHttpRequestProps)
                    : Promise<IHttpResponseProps<T>> | undefined => {
    
    let config: IAxiosConfig | undefined
    if (requireToken) {
        const authInfo: string | null = localStorage.getItem("authInfo")
        if(!authInfo)   return

        const accessToken = JSON.parse(authInfo)["accessToken"]
        config = {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: query,
        }
    }

    if (!(Object.values(HttpMethods) as string[]).includes(method)) return
    switch (method) {
        case HttpMethods.get:
        case HttpMethods.delete:
        case HttpMethods.options:
            return axiosClient[method](endpoint, config)
    }             
    return axiosClient[method as HttpMethods](endpoint, bodyParameters, config)
}

export default httpResponse