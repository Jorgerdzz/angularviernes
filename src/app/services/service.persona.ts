import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import axios from "axios";

@Injectable()
export class ServicePersona{

    constructor(private _http:HttpClient){

    }

    getPersonas(): Promise<any>{
        let url = environment.urlApiPersonas;
        let request = "api/personas";
        let promise = new Promise((resolve)=>{
            // this._http.get(url + request).subscribe(response=>{
            //     resolve(response);
            // }) CON HTTP
            // axios.get(url + request).then(response=>{
            //     resolve(response.data)
            // }) CON AXIOS
            fetch(url + request).then(response=>{
                return response.json()
            }).then(data => resolve(data))
        })
        
        return promise;
    }

}