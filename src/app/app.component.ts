import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POSTs';



  posts =[
    {
    title: 'premierPost',  
    content: 'ecrivez votre blog ici',  
    loveIts: 'number',  
    created_at: 'Date'
    },
  
    {
      title: 'deuxiemePost',  
      content: 'string',  
      loveIts: 'number',  
      created_at: 'Date'
      },
    
   ] ;
     

  ajouterUnPost(){
this.posts.push({
  title: 'nouveauPost',  
  content: 'stringmonContent',  
  loveIts: 'number',  
  created_at: 'Date'
  });
  }


  effacerUnPost(){
    let number = this.posts.length;
    this.posts.splice(number-1,1);
  }
  
  getColor(){
    return 'green';
  }


}