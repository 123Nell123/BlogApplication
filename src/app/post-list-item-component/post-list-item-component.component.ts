import { getUrlScheme } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

 @Input() title: string='titreExemple';  
 @Input() content: string='contentExemple';  
  loveIts: number=1; 
  created_at: Date;





/* mettre un bool ici */
monHumeur:boolean=true;





  constructor() { 

  this.created_at= new Date();
 
  }

  ngOnInit(): void {
   
  }


  getpostTitle()  {
    return this.title;
  }

  getContent()  {
    let contentModif = this.content;
    contentModif.toUpperCase;
      return contentModif;
  }

  
  getLoveIt()  {
    return this.loveIts;
  }

  onIncrementLoveIts()  {
    console.log("button love");
  this.loveIts++;
  this.monHumeur= true;
  return  this.loveIts;

  }

  onIncrementNoLoveIts()  {
    console.log("button love");
  this.loveIts--;
  this.monHumeur= false;
  return  this.loveIts;
  }




}
