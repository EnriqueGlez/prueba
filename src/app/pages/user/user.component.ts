import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  img: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onChange($event): void{
    this.convertTobase64($event.target);
  }

  convertTobase64(inputValue: any): void {

    var file:File = inputValue.files[0];


    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' )
    {
      var myReader:FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.img = myReader.result;
      }
      myReader.readAsDataURL(file);
    }

  }

}
