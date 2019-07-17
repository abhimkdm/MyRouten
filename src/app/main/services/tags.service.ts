import { Injectable } from "@angular/core";
import { Itag } from "../models/Itag.Interface";

@Injectable({
    providedIn:'root'
})

export class TagsService {

    constructor(){}

    getTags() : Itag[] {
        return [ {'Name' : 'Bank Details'},{'Name' : 'Study'},
                    {'Name' : 'Others'}];
    }
}