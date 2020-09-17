import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages1',
  templateUrl: './pages1.component.html',
  styleUrls: ['./pages1.component.scss']
})
export class Pages1Component implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public onLogout(): void {
    this.authService.logout();
  }

}
