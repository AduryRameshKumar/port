import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(): void {
    Aos.init()
  }
}
