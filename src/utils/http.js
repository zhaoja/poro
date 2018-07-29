import axios from 'axios';
import { stringify, parse } from 'qs';
const httpConfig = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "token, host, x-real-ip, x-forwarded-ip, accept, content-type",
    }
};

const $http = (url, option = {}, header = {} ) => {
    return axios.request({url, headers: { ...httpConfig.headers, ...header }, ...option })
        .then((resp) => {
            if(resp.status >= 400){
                throw new Error('400+Error');
            }
            return resp
        })
        .then((resp) => {
            try{
                return resp.data
            }catch(e){
                throw new Error('JSONError');
            }
        }) 
};

const httpMiddleware = {
    'get'    :  (url, param = {}) => ( $http(`${url}?${stringify({ ...param, _k: new Date().getTime() } )}`,{ method: 'GET'})),
    'post'   :  (url, param = {}) => ( $http(url, { method: 'POST', data: stringify({ ...param, _k: new Date().getTime() } ) }) ),
    'put'    :  (url, param = {}) => ( $http(url, { method: 'PUT', data: stringify({ ...param, _k: new Date().getTime() } ) }) ),
    'delete' :  (url, param = {}) => ( $http(`${url}?${stringify({ ...param, _k: new Date().getTime() } )}`, { method: 'DELETE' }) ),
    'option' :  (url, param = {},header={ "Content-Type": "application/json" } ) => ( $http(url, { method: 'POST',data: param  },header) ),
};

export default httpMiddleware;