import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {ArticleService} from '../../app/services/article-service';
import {Article} from '../../models/Article';
import {global} from '../services/global';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  providers:[ArticleService]
})
export class ArticlePage implements OnInit {
  public url:string;
  public article: Article= new Article("","","","");
  constructor(public _articleService:ArticleService, private _route: ActivatedRoute, private _router: Router) { this.url=global.url}

  ngOnInit() {
this._route.params.subscribe(params=>{
  let id= params['id'];
    this._articleService.getArticle(id).subscribe(
      response=>{
          if(response.article){
            console.log(response.article.Name);
            this.article=response.article;
            console.log(this.article);
          }else{
            this._router.navigate(['/home']);
          }
      }, error=>{
        console.log(error);
         this._router.navigate(['/home']);

      }
    )

})


  }

}
