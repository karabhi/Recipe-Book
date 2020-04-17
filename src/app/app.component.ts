import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentNavigationPage = "recipes";
  
  navigationPageChange(page : string){
    // console.log(page)
    this.currentNavigationPage = page
  }
}
