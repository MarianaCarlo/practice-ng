import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  name:string = 'mariana';
  lastName:string = 'carlo';
  ngOnInit() {
    
  }

}


