import { Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: []
})
export class TagComponent implements OnInit {

  public tags : any;

  constructor(private _tagService : TagsService) { }

  ngOnInit() {
   this.tags =  this._tagService.getTags();
  }

}
