import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class SlidebarService {

  navigationUrl = 'assets/navigation.json';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getNavigation() {
    return this.http.get(this.navigationUrl);
  }

}