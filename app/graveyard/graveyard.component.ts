import { Component, OnInit } from '@angular/core';

import { GameService } from "../game.service";

@Component({
  selector: 'app-graveyard',
  templateUrl: './graveyard.component.html',
  styleUrls: ['./graveyard.component.css']
})
export class GraveyardComponent implements OnInit {
  counter = Array;
  constructor(private serv: GameService) { }

  ngOnInit() {
  }


}
