import { Injectable } from "@angular/core";
import { Itag } from "../models/Itag.Interface";
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TagsService {

    private baseUrl ="http://localhost:3000/tags";

    constructor(private _http : HttpClient) { }

    getTags(): Observable<Itag[]> { 
        return this._http.get<Itag[]>(this.baseUrl);
    }

    asyncData() : Observable<number> {
        const remoteData : Observable<number> = interval(1000);
        return remoteData;
    }
}