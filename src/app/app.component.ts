import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  initialActive: boolean;

  constructor(){
    this.initialActive = false;
  }

  public activeSidevar(data: any): void{
    this.initialActive = data;
  }
}
