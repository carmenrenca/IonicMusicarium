import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/Article';
import {ArticleService} from '../services/article-service';
import {global} from '../../app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ArticleService]
})
export class HomePage implements OnInit {
public articles: Article[];
public url:string;
  constructor(
    private _articleService : ArticleService
  ) { this.url= global.url}

  ngOnInit() {
this._articleService.getArticles().subscribe(
      response=>{
        console.log("RESPONDE"+response.message)
        if(response.status=="success"){
          this.articles= response.articles;
        }else{
          
        }
          console.log(  this.articles);
      }, 
      error=>{
        console.log(error+"error");
      }
    );
  }

}
