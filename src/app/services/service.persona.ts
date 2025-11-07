import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersona{

    constructor(private _http:HttpClient){

    }

    getPersonas(): Promise<any>{
        let url = environment.urlApiPersonas;
        let request = "api/personas";
        let promise = new Promise((resolve)=>{
            this._http.get(url + request).subscribe(response=>{
                resolve(response);
            })
        })
        return promise;
    }

}