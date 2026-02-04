const favMovie = 'Drishyam';
let guess = prompt("Guess my favourite Movie");
while((guess!=favMovie) && (guess!="quit")){
    guess = prompt("Wrong guess. try again!!");
}
if(guess==favMovie) console.log("Congrats!! well done.");
else console.log("you quit");