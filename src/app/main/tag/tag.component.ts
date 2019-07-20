import { Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags.service';
import { Itag } from '../models/Itag.Interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: []
})
export class TagComponent implements OnInit {

  public tags : Itag[];

  constructor(private _tagService : TagsService) { }

  ngOnInit() {
   this._tagService.getTags().subscribe(data=> this.InitData(data));
   this._tagService.asyncData().subscribe(data=>this.InitData(data));
  }

  InitData(data : any) {
    console.table(data);
  }

}
