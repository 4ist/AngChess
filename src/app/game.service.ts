import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  lastSelected = ""
  moveHistory = [];

  ids = [];
  initialState = [];
  boardState = {}
  pieceMap = {

    //white pawns
    "A2": "\u2659",
    "B2": "\u2659",
    "C2": "\u2659",
    "D2": "\u2659",
    "E2": "\u2659",
    "F2": "\u2659",
    "G2": "\u2659",
    "H2": "\u2659",

    //black pawns
    "A7": "\u265F",
    "B7": "\u265F",
    "C7": "\u265F",
    "D7": "\u265F",
    "E7": "\u265F",
    "F7": "\u265F",
    "G7": "\u265F",
    "H7": "\u265F",

    //Rooks
    "A1": "\u2656", "H1": "\u2656",
    "A8": "\u265C", "H8": "\u265C",

    //Knights
    "B1": "\u2658", "G1": "\u2658",
    "B8": "\u265E", "G8": "\u265E",

    //Bishops
    "C1": "\u2657", "F1": "\u2657",
    "C8": "\u265D", "F8": "\u265D",

    //Queens
    "D1": "\u2655",
    "D8": "\u265B",

    //Kings
    "E1": "\u2654",
    "E8": "\u265A",

  }

  wPieces = ["\u2659", "\u2656", "\u2658", "\u2657", "\u2655", "\u2654"];
  bPieces = ["\u265F", "\u265C", "\u265E", "\u265D", "\u265B", "\u265A"];
  
  wGrave = [];
  bGrave = [];
  constructor() {
    
    var alphs = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (var j = 8; j >= 1; j--) {
      for (var i = 0; i < 8; i++) {
        this.ids.push(alphs[i] + j);
        this.initialState.push();
      }
    }


    for (var i = 0; i < 64; i++) {
      this.boardState[this.ids[i]] = this.initialState[i];
    }
    this.reset();
    console.log(this.bPieces);
    console.log(this.wPieces);
  }
  ngOnInit() {
    
  }
  
  //raiseEvent() {
  //  console.log("raise event");
  //  this.receivedFilter.emit();
  //}

  reset() { 
    for (var i = 0; i < this.ids.length; i++) {
      var tempTile = document.getElementById(this.ids[i]);

      //other pieces
      if (this.pieceMap[this.ids[i]]) {
        this.boardState[this.ids[i]]  = this.pieceMap[this.ids[i]]
      }
      //empty tile
      else {
        this.boardState[this.ids[i]]  = "";
      }
    }
    this.wGrave = [];
    this.bGrave = [];
    this.moveHistory = [];
    console.log("Board was reset");

  }

  makeMove(src, dst) {
    //brute force movement method
    console.log("moving:" + src + ">" + dst)
    this.moveHistory.push([src, this.boardState[src],
      dst, this.boardState[dst]]);

    //add dst piece to grave
    if (this.bPieces.includes(this.boardState[dst])){
      this.bGrave.push(this.boardState[dst]);
    }
    else if (this.wPieces.includes(this.boardState[dst])){
      this.wGrave.push(this.boardState[dst]);
    }

    //move piece
    this.boardState[dst] = this.boardState[src];
    this.boardState[src] = "";
    console.log(this.bGrave);
    console.log(this.wGrave);
 
  }

  undo() {
    //undo last move from moveHistory array
    if (this.moveHistory.length < 1) {
      //TODO: throw error message 
      console.log("null undo")
    }

    if (this.moveHistory.length > 0) { 
      console.log("undoing last move");

      var lastMove = this.moveHistory.pop();

      for (var i = 0; i < this.bGrave.length; i++) {
        if (this.bGrave[i] == lastMove[3]) {
          delete this.bGrave[i];
          break
        }
      }
      for (var i = 0; i < this.wGrave.length; i++) {
        if (this.wGrave[i] == lastMove[3]) {
          delete this.wGrave[i];
          break
        }
      }
      
      console.log(lastMove);
      //lastMove = [srcTile, srcPiece, dstTile, dstPiece]
      this.boardState[lastMove[0]] = lastMove[1];
      this.boardState[lastMove[2]] = lastMove[3];
    }
  }

  adminFillGrave() {

    this.wGrave = ["\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659",
                  "\u2656", "\u2658", "\u2657",
                  "\u2656", "\u2658", "\u2657",
                  "\u2655", "\u2654"];

    this.bGrave = ["\u265F", "\u265F", "\u265F", "\u265F", "\u265F", "\u265F", "\u265F", "\u265F",
                  "\u265C", "\u265E", "\u265D",
                  "\u265C", "\u265E", "\u265D",
                  "\u265B", "\u265A"];

  }
}



