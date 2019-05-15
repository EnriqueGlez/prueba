import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search: string;

  @Input() public isActive: boolean;

  @Output() public myOutput = new EventEmitter();

  constructor() {
    this.isActive = false;
    this.search = '';
  }

  ngOnInit(): void {
  }

  // Change value of Sidebar
  public toggleClass(): void {
     this.isActive ? this.isActive = false : this.isActive =  true;
     this.myOutput.emit( this.isActive );
  }
}
