# Tic Tac Toe

A browser-based Tic-Tac-Toe game.

<!-- FINAL README MUST DO THE FOLLOWING
<!--  -->
Technologies used:
-html/css/javascript front end
-back end is a ruby-on-rails server with an API provided by General Assembly
-jQuery is used for DOM manipulation and event handling
-AJAX is used to make server requests
-structure and style are achieved with the help of Bootstrap and SASS

Planning \& Development

[This
document](https://github.com/kopiusmaximus/game-project-scope-study/blob/response/study.md)
tells a bit about how I got started with this project.

I knew that I wanted the game to be visually simple. I opted for a minimialist
layout that ultimately changed very little from my original wireframes:

-   [Wireframe 1](https://github.com/kopiusmaximus/game-project-scope-study/blob/response/assets/images/wireframe-1.png)
-   [Wireframe 2](https://github.com/kopiusmaximus/game-project-scope-study/blob/response/assets/images/wireframe-2.png)

This simple aesthetic is reinforced by a mild, coffee-and-cream color scheme;
all-lowercase typography; and laconic directions infused with light snark.

Most components of the app fell into one of two categories: authentication and
gameplay. This division informed my separation of concerns in the project's
directory structure, as well as providing a framework for the app's view states.
You may notice that the two main boxes on the page house are dual-functioning:
depending on the current view state, they house either authentication forms or
key game components.

For additional perspective on my planning process, here are a few of the early
user stories that drove development:

-   _As a user, I want to create an account so I can keep track of how many games
I have played._

-   As a user, I want to change my password so I can protect my account if I
think my previous password has been compromised.

-   As a user, I want to sign out so I can protect my account when I'm done
playing.

-   As a user, I want to start a game so I can play Tic-Tac-Toe in the browser
window with a friend.

-   As a user, I want the app to "know" the rules of Tic-Tac-Toe so I can't
accidentally make an illegal move or keep playing after a game has ended.

-   As a user, I want the ability to start a new game at any time so I don't
have to finish games whose eventual outcome is already obvious.

<!--
-talk about how i started by communicating with the API, instead of leaving that
until the end. this informed how I wrote the game logic, ensuring that my front
end handled game state in a way that made it easy to patch game updates to the
server.
-->

List unsolved problems which would be fixed in future iterations.
<!--
-talk about better optimization for mobile?
-talk about competing on multiple devices
-anything else I didn't tackle that I wanted to -->

Link to wireframes and user stories.

-link to my project planning repo's study.md file

-->
