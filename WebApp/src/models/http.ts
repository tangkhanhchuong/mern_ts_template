export interface IAxiosConfig {
    headers: object | undefined,
    params: object | undefined
}

export enum HttpMethods {
    get = 'get',
    post = 'post',
    patch = 'patch',
    put = 'put',
    delete = 'delete',
    options = 'options'
}

export interface IHttpRequestProps {
    endpoint: string
    method: string | undefined
    bodyParameters: object | undefined
    query: object | undefined
    requireToken: false | undefined
}

export interface IHttpResponseProps<T> {
    data: T
    status: number
    statusText: string
}

