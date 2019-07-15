# AngChess
Front end chess app made w/ Angular 8. 

![](https://github.com/4ist/AngChess/blob/master/screenshots/pinkPurp.PNG)

The two graveyard pannels on the right populate as the game progresses 

![](https://github.com/4ist/AngChess/blob/master/screenshots/showGraveyard.PNG)
![](https://github.com/4ist/AngChess/blob/master/screenshots/zoomGraveyard.PNG)

Users can input their own custom themes or generate random themes 

![](https://github.com/4ist/AngChess/blob/master/screenshots/customTheme.PNG)
![](https://github.com/4ist/AngChess/blob/master/screenshots/BoardCloseup.PNG)
![](https://github.com/4ist/AngChess/blob/master/screenshots/emptyBoard.PNG)

There are a few game tools to allow correction for user error 

![](https://github.com/4ist/AngChess/blob/master/screenshots/toolsNav.PNG)


The goal of this application was to gain experience with Angular, as I had little prior front end experience. 

The chess aspect of the application was designed to replicate the functionality of a real life chess board, i.e. there is no rule implementation. I originally intended to add game rules, but decided that it would distract me from my original goal of front-end familiarization. 

The code is generally structured according to the following UML diagram:

![](https://github.com/4ist/AngChess/blob/master/screenshots/UML.PNG)


Current bugs:

There are some detected 'errors' where I reference attributes of arbitrary objects. Typescript alerts that the generic object types I am referncing do not have these attributes, but the secific objects actually do. The code functions as intended, however I need to figure out another workaround because these errors sometimes get in the way of compilation. If compiling from command line, I have to comment out a few lines in board.component.ts and sidebar.component.ts, compile, then uncomment/save the lines
