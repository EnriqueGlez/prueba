import { Component, OnInit, Input } from '@angular/core';

// Services
import { SlidebarService } from './slidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SlidebarService]
})
export class SidebarComponent implements OnInit {

  @Input() public activeSlidebar: boolean;
  items: any;

  constructor(
    public navigation: SlidebarService
  ) {
    this.navigation.getNavigation().subscribe(
      (items) =>
      {
        this.items = items['navigation'];
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
