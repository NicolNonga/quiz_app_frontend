import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoadingJsFile{
  constructor(){

  }


  public loadingMainJs(urls: string){
              let node = document.createElement('script');
              node.src= urls;
              node.type= 'text/javascript';
              document.getElementsByTagName('head')[0].appendChild(node)
  }


}