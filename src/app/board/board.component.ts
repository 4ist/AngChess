import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { GameService } from "../game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {
  counter = Array;

  constructor(private serv: GameService) {}

  ngOnInit() {}

  getTileColor(n) {
    //get the tile color for the nth tile
    var rowVal = Math.floor(n / 8) % 2;
    var color;

    if (n % 2 == rowVal) {
      color = "white";
    }
    else {
      color = "black"
    }
    return color;
  }

  select(id): void {


    //piece selection/movement logic
    console.log(id);
    const elems = document.querySelectorAll('input[type=checkbox]');
    /* for (let element of elems) {  //replace with an int
        element.checked = false;
    } */
    for (let i = 0; i < elems.length; i++){
      (<HTMLInputElement >elems[i]).checked = false;
    }

    if (this.serv.lastSelected == ""
      && document.getElementById(id).innerText != "") {

      //select tile
      (<HTMLInputElement>document.getElementById(id).previousSibling).checked = true;
      this.serv.lastSelected = id;
    }
    else if (id != this.serv.lastSelected
      && this.serv.lastSelected != "") {

      //new tile; make move
      this.serv.makeMove(this.serv.lastSelected, id);
      this.serv.lastSelected = "";
    }
    else {
      //same tile; no move
      this.serv.lastSelected = "";
    }
  }



  setTextColors() {}



}
