import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() sideBarHandller = new EventEmitter();
  isShowSideBar: boolean;
  constructor() { }

  ngOnInit() {
  }

  sideNavBarHandller() {
    this.isShowSideBar = !this.isShowSideBar;
    this.sideBarHandller.emit(this.isShowSideBar);
  }

  closeSideNav() {
    this.isShowSideBar = false;
  }

}
