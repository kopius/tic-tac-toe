# Tic Tac Toe

A browser-based Tic-Tac-Toe game.

## Technologies used:

-   HTML/CSS/JavaScript front end
-   Ruby-on-Rails back end with an API provided by General Assembly course staff
-   jQuery for DOM manipulation and event handling
-   AJAX for server requests
-   Structure and style achieved with the help of Bootstrap and SASS
-   Version control and client hosting via GitHub

## Planning \& Development

[This
document](https://github.com/kopiusmaximus/game-project-scope-study/blob/response/study.md)
tells a bit about how I got started with the project.

I knew that I wanted the game to be visually simple. I opted for a minimialist
layout that ultimately changed very little from my original wireframes:

-   [Wireframe 1](https://github.com/kopiusmaximus/game-project-scope-study/blob/response/assets/images/wireframe-1.png)
-   [Wireframe 2](https://github.com/kopiusmaximus/game-project-scope-study/blob/response/assets/images/wireframe-2.png)

This simple aesthetic is reinforced by a mild, coffee-and-cream color scheme;
all-lowercase typography; and laconic directions infused with light snark.

Most components of the app fell into one of two categories: authentication and
gameplay. This division informed my separation of concerns in the project's
directory structure, as well as providing a framework for the app's view states.
You may notice that the two main boxes on the page are dual-functioning:
depending on the current view state, they house either authentication forms or
key game components.

Swapping view states was a later addition to the project, however. I began with
basic authentication forms and a rough 3x3 grid for the game board. Before
writing any of the game logic, I established communication with the API via AJAX
calls. Once I had the server returning a new game object, I attached it to the
app and referenced it continually as I began coding up the rules of the game. By
doing things in this order, I avoided time spent rewriting my game logic to
accommodate the object format dictated by the API.

With the game logic in place and needing little adjustment, I began developing
the rest of the site's core components:

-   a basic color palette and typography
-   functions to paint the board with x's and o's, then clear it for new games
-   different views and the jQuery show/hide calls necessary to transition
between them
-   alert messages to help guide the user through gameplay and site navigation.

Lastly, I went through a final process of refactoring the code, finding the
natural break points within long processes and breaking them out into separate
functions. I added comments and renamed functions for improved readability. The
result is a clean codebase with minimal repetition and excellent separation of
concerns.

## User Stories

For additional perspective on my planning process, here are a few of the early
user stories that drove development:

-   *As a user, I want to create an account so I can keep track of how many games
I have played.*

-   *As a user, I want to change my password so I can protect my account if I
think my previous password has been compromised.*

-   *As a user, I want to sign out so I can protect my account when I'm done
playing.*

-   *As a user, I want to start a game so I can play Tic-Tac-Toe in the browser
window with a friend.*

-   *As a user, I want the app to "know" the rules of Tic-Tac-Toe so I can't
accidentally make an illegal move or keep playing after a game has ended.*

-   *As a user, I want the ability to start a new game at any time so I don't
have to finish games whose eventual outcome is already obvious.*

As you can see, these stories outline the core of the user experience in the
deployed app. Referring back to these short narratives kept me focused on
developing the project's essential features.

## Future Development

A few unsolved problems that would be tackled in future versions of the project:

#### Better optimization for mobile

The game currently renders reasonably well on small screens if they are held
sideways, but there is definitely room to improve the mobile experiences. More
tinkering with the formatting at smaller breakpoints could yield a much more
responsive UX overall.

#### Animated transitions

Aesthetics took a backseat to core functionality in the first version of this
project, but now that the game logic is sound, there is a lot that could be
done to improve the look and feel of the site. Animated transitions between
view states would be a great addition.

#### Competing on multiple devices

I would have loved to tackle this challenge in the first iteration of the
project, but there simply wasn't time. Enabling players to complete online from
multiple devices is the next level for this browser game, and a great way to
leverage a better user experience from what I've already developed.

#### Support in-game chat between players

My favorite online games all have an internal chat function, where players can
greet each other, discuss strategy, exchange trash-talk. Even a simple remark of
"gg", posted at the end of a hard-fought game, adds a human element to the
online gaming experience. I'd love to add chat functionality to tic-tac-toe and
see what kind of chatter this classic game evokes from players.
