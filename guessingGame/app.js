const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Enter your guess");
while(true){
    if(guess=="quit"){
        console.log("YOU QUIT!!");
        break;
    }
    if(guess == random){
        console.log("you guessed right. It was",random);
        break;
    }
    else if(guess<random){
        guess = prompt("Hint: Your guess is too small.Please try again");
    }
    else guess = prompt("Hint: Your guess is too large.Please try again");
}