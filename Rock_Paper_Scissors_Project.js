/*Welcome to our teams Javascript page for our CFG Javascript Kickstarter project, 
building a simple game using the elements we have learnt , including event listener and getElementbyID
Per best practices, we will be using comments like this to go through our though processes for our project ,
which is a game of rock, paper, scissors*/


/* Firsly the Variable names are set for the areas of the game that will respond and change on user interaction
- if you look at the HTML file, you'll be able to see the id of the areas that will respond to users interaction 
with the game*/

const computer_choice = document.getElementById('computer_choice')
const your_choice = document.getElementById('your_choice')
const the_result = document.getElementById('the_result')


/*We also give all the buttons a variable all at once , using 'document.queryselectorAll' or selecting by element type
, instead of 'getElementById'*/
const the_choices_available = document.querySelectorAll('button')


let user_clicked 
let computer_responded 
let result_displayed

/*Afterwards we add an event listener for the buttons- it is these buttons that serve as the choices that the user 
will choose between and will prompt a response from the computer. Speciically we want it to be the case
that when we click on the button we have accounted for through the_choices_available variable */
const the_choice_displayed = the_choices_available.forEach(the_choices_available => the_choices_available.addEventListener('click',(e) => {
user_clicked = e.target.id
your_choice.innerHTML= user_clicked
generate_computer_choice() 
gettingResult()
}))

/*We then start to create the computers choice which will be randomly selected for each round*/
function generate_computer_choice() {
    const random_number_generated = Math.floor(Math.random() * 3) + 1

/*We then use a if loop to tell us that if the number generated is either 1, 2 or 3
, there will be a corresponding random response of either rock , paper or scissors from the computer too */
    if (random_number_generated === 1){
    computer_responded = 'Rock'
     }

    if (random_number_generated === 2){
    computer_responded = 'Paper'
    }
    
    if (random_number_generated === 3){
    computer_responded = 'Scissors'
    }
computer_choice.innerHTML= computer_responded
}


/*In this case random generated number 1 prints out rock,
 random generated number 2 prints out paper from the computer 
 and
random generated number of 3 prints out scissors*/





function gettingResult(){

    if (computer_responded === user_clicked){
    result_displayed = 'yay! it\'s a draw!'
    }

    if (computer_responded === 'Rock' && user_clicked ==='Paper'){
    result_displayed ='yay! you win'
    }

    if (computer_responded === 'Rock' && user_clicked ==='Scissors'){
    result_displayed = 'No! You Lose!'
    }

    if (computer_responded === 'Paper' && user_clicked ==='Rock'){
    result_displayed = 'No! You Lose!'
    }

    if (computer_responded === 'Paper' && user_clicked ==='Scissors'){
    result_displayed= 'yay! you win'
    }

    if (computer_responded === 'Scissors' && user_clicked === 'Rock'){
    result_displayed = 'yay! you win'
    }

    if (computer_responded === 'Scissors' && user_clicked ==='Paper'){
        result_displayed = 'No! You Lose!'
    }
the_result.innerHTML= result_displayed
}
/*Now we have finished adding the Javscript elements onto the game page from the .js file
; please note that script was used to link this javascript file to the html file too, allowing such 
an interaction to work  */