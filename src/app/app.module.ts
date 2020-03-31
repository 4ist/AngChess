import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraveyardComponent } from './graveyard/graveyard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SidebarComponent,
    GraveyardComponent,
    MainMenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
