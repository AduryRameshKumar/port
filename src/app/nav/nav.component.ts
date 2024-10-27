import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
}
