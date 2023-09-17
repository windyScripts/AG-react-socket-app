# Full Stack Application Submission For Alter Games

frontend first, then backend.

finish components on frontend 1
    ActiveGame almost done except for submitformhandler.
    joinroomhandler for gamelistentry not done.
    ~~Need to update time for expiration time for room.~~
    use navigate.
Create entries on navbar for new components 2
Add default loaded component on frontend 3
styling 5
socket io commands 2
linting 4
figure out score submission and saving 1
get questions from quiz api 1

Add socket functionality
finish controllers and adjust services to work properly.

deploy staggered to render and netlify
upload project to github

---

Things to do:

Backend:

~~Set up services~~ one service left to figure out
~~Set up controllers~~ requires editing
Set up socket commands
    create socketid
    add user to room
    send scores and end game
update routes
    room routes are not done.
Frontend:

Set up components with folder
figure out how to make network requests and send them
set up frontend validation for rooms
set up ui

https://opentdb.com/

socket operations: 
join room,
start game,
end game.

pages:
scores
join game/ create game
register
login
game: question component, time component, ~~submit component~~ Make the container a form and give submission instructions.

major things left:

controllers haven't been done -> requires socket command setup and frontend setup

auth isn't done yet completely.

models are fine, so are routes, services may need change depending on controllers

frontend:

pages need setting up, socket commands need to be added.