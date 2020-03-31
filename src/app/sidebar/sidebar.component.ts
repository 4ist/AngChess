import { Component, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from "../game.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  themeOpened = false;
  dark = "#BFD3C1";
  light = "#FFE5D4";
  currentMenuNav = "";
  currentMenuView = "";
  currentThemeView = "";
  loopingThemes = false;

  constructor(private serv: GameService) {}

  ngOnInit(): void { }

  toggleNav(nav, view, navLabel) {
    console.log("nav:" + nav + " last nav:" + this.currentMenuNav);
    console.log("view:" + view + " last view:" + this.currentMenuView);
   
    if (nav == this.currentMenuNav) {
      document.getElementById(this.currentMenuView).hidden = true;
      this.currentMenuNav = "";
      this.currentMenuView = "";
      this.closeNav(nav);
    }
    else {
      console.log("else");
      if (this.currentMenuNav != "" && this.currentMenuView != "") {
        document.getElementById(this.currentMenuNav).style.backgroundColor = 'var(--light)';
        document.getElementById(this.currentMenuView).hidden = true;
      }
      document.getElementById('navLabel').innerText = navLabel;
      this.currentMenuNav = nav;
      this.currentMenuView = view;
      this.openNav(nav);
    }
  }

  openNav(nav) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("sidebar").style.marginLeft = "250px";
    document.getElementById(nav).style.backgroundColor = 'var(--dark)';
    document.getElementById(this.currentMenuView).hidden = false;
  }

  closeNav(nav) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidebar").style.marginLeft = "0px";
    document.getElementById(nav).style.backgroundColor = 'var(--light)'; 

    //close themes also
    this.themeOpened = false;
    document.getElementById("themeItems").style.height = "0px";
    document.getElementById("openThemes").style.color = "#818181";
  }


  toggleThemes(container, label) {
    console.log("Current view:" + this.currentThemeView);
    console.log("Loading view:" + container);

    if (container == this.currentThemeView) {
      console.log("closing");
      this.currentThemeView = "";
      this.closeThemeMenu(container, label)
    }
    else {
      if (this.currentThemeView != "") {
        console.log("close current menu");
        this.closeThemeMenu(this.currentThemeView, label);
        this.currentThemeView = container;
        
      }
      console.log("opening new menu");
      this.currentThemeView = container;
      this.openThemeMenu(container, label); 
    }
  }

  openThemeMenu(container, label) {
    document.getElementById(container).style.height = "100px";
    document.getElementById(label).style.color = "#f1f1f1";
    this.themeOpened = true;
  }

  closeThemeMenu(container, label) {
    this.themeOpened = false;
    document.getElementById(container).style.height = "0px";
    document.getElementById(label).style.color = "#818181";
  }

  setTheme(light, dark) {
    this.light = light;
    this.dark = dark;
    console.log("Light:" + light);
    console.log("Dark:" + dark);
    document.documentElement.style.setProperty('--light', light);
    document.documentElement.style.setProperty('--dark', dark);
  }

  setCustomTheme() {
    var light = (<HTMLInputElement>document.getElementById("lightTxt")).value;
    var dark = (<HTMLInputElement>document.getElementById("darkTxt")).value;

    console.log("Light:" + light);
    console.log("Dark:" + dark);

    this.setTheme(light, dark);
  }

  setRandomTheme() {
    var lmin = 100;
    var lmax = 200;

    var dmin = 50
    var dmax = 150;

    var lr = Math.floor(Math.random() * (+lmax - +lmin) + +lmin).toString(16); 
    var lg = Math.floor(Math.random() * (+lmax - +lmin) + +lmin).toString(16); 
    var lb = Math.floor(Math.random() * (+lmax - +lmin) + +lmin).toString(16); 
    var light = "#" + lr + lg + lb;
    
    var dr = Math.floor(Math.random() * (+dmax - +dmin) + +dmin).toString(16); 
    var dg = Math.floor(Math.random() * (+dmax - +dmin) + +dmin).toString(16); 
    var db = Math.floor(Math.random() * (+dmax - +dmin) + +dmin).toString(16); 
    var dark = "#" + dr + dg + db;

    this.setTheme(light, dark);
  }

  toggleLoopTheme() {
    console.log('toggle loop theme');
    console.log(this.loopingThemes);
    if (this.loopingThemes == false) {
      this.loopingThemes = true;
      document.getElementById("loopTheme").style.color = "#f1f1f1";
      this.setRandomTheme();
      this.loopTheme();
    }
    else {
      this.loopingThemes = false;
      document.getElementById("loopTheme").style.color = "#818181";
    }
  }
  
  loopTheme() {
    console.log('loopem');
    setTimeout(() => {
      if (this.loopingThemes) {
        this.setRandomTheme();
        this.loopTheme();
      }
    }, 5000);
  } 








}
