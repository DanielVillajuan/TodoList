import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { METHOD } from '../enums/Method';

export class HttpRequest {
    private readonly axiosInstance: AxiosInstance;
    private readonly axiosAbort: AbortController;

    constructor(baseURL: string, timeout: number = 5000){
        this.axiosInstance = axios.create({ baseURL, timeout });
        this.axiosAbort = new AbortController();
    }
    
    private async request<T>( method: METHOD,{ endpoint, data, params }: { endpoint: string, data?: T, params?: AxiosRequestConfig }): Promise<T>{
        const config: AxiosRequestConfig = { ...params };
        config.signal =  this.axiosAbort.signal;
        const  response =  method === METHOD.GET || method === METHOD.DELETE ? await this.axiosInstance[method]<T>(endpoint,config) : await this.axiosInstance[method]<T>(endpoint,data,config);
        return response.data;
    }

    async get<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T>{
        return await this.request(METHOD.GET, { endpoint, params });
    }

    async delete<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T>{
        return await this.request(METHOD.DELETE, { endpoint, params });
    }

    async post<T>(endpoint: string, data?: T ,params?: AxiosRequestConfig): Promise<T>{
        return await this.request(METHOD.POST, { endpoint, data, params });
    }
    
    async put<T>(endpoint: string, data?: T ,params?: AxiosRequestConfig): Promise<T>{
        return await this.request(METHOD.PUT, { endpoint, data, params });
    }
}

