import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  navLinkEls = document.querySelectorAll('.nav__link');

  
  ngOnInit() {
    this.navLinkEls.forEach(navLinkEl => {
      navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')  
        navLinkEl.classList.add('active');  
      })
    })
  }

}
