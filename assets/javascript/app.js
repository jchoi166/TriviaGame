var wrongQuestions = 0
var rightQuestions = 0

var questionsArr = [
    
    {id : 0,
     question : "What is the title of the second Avengers movie?",
     choices :["Infinity War", "The Prisoner of Azkaban", "Age of Ultron", "The Dark Knight Rises"],   
     rightAnswer : 3,
    },
    {id : 1,
     question : "Which two actors have played the Incredible Hulk in the Marvel Universe?",
     choices : ["Ed Norton + Mark Ruffalo", "Jackie Chan + Chris Tucker", "Chris Evans + Chris Pratt", "Lou Ferrigno"],   
     rightAnswer : 1,
    },
    {id : 2,
     question : "What is Bucky Barnes' (The Winter Soldier) real first name?",
     choices : ["James", "Scott", "Francis", "Steve"],   
     rightAnswer : 1,
    },
    {id : 3,
     question : "How many of the original 6 Avengers don't have superpowers?",
     choices : ["1", "2", "3", "4"],   
     rightAnswer : 3,
    },
    {id : 4,
     question : "What is Thor's hammer's Name?",
     choices : ["Excalibur", "Frank", "Mjolnir", "MC Hammer"],   
     rightAnswer : 3,
    },
    {id : 5,
     question : "What is Captain America's shield made of?",
     choices : ["Adamantium", "Mithril", "Valyrian Steel", "Vibranium"],   
     rightAnswer : 4,
    },
    {id : 6,
     question : "What is the name of Tony Stark's AI computer?",
     choices : ["Ultron", "Jarvis", "Winston", "Alpha"],   
     rightAnswer : 2,
    },
    {id : 7,
     question : "Where does Dr. Strange go to seek out a cure for his hands?",
     choices : ["Mongolia", "Thailand", "Wakanda", "Tibet"],   
     rightAnswer : 4,
    }
]   

questionsArr.forEach(function(question){
    
    $('.container').append(`
    <div class="row">
         <h5 class="question">${question.question}</h5>
         
                <p>
                  <label>
                     <input class = "choice" data-choice="1" name="question-${question.id}" type="radio" >
                     <span>${question.choices[0]}</span>
                  </label>
                </p>
         
         
                <p>
                  <label>
                     <input class = "choice" data-choice="2" name="question-${question.id}" type="radio" >
                     <span>${question.choices[1]}</span>
                  </label>
                </p>
         
         
                <p>
                  <label>
                     <input class = "choice" data-choice="3" name="question-${question.id}" type="radio" >
                     <span>${question.choices[2]}</span>
                  </label>
                </p>


                <p>
                  <label>
                     <input class = "choice" data-choice="4" name="question-${question.id}" type="radio" >
                     <span>${question.choices[3]}</span>
                  </label>
                </p>
                                       
          <p class="answer-${question.id}" style="visibility: hidden" >${question.rightAnswer}</p>
            
    </div>
    `)
})

var qChoice0
var qChoice1
var qChoice2
var qChoice3
var qChoice4
var qChoice5
var qChoice6
var qChoice7

$(document).on('click', '.choice', function(){
    console.log($(this).attr('name'))
    console.log($(this).attr('data-choice'))
    let temp = $(this).attr('name').split('-')
    let qID = temp[1]
    window[`qChoice${qID}`] = $(this).attr('data-choice')
})

$('.finishQuiz').on('click', function(){

    count = 0
    
    for (let i=0; i<questionsArr.length; i++){
        $(`.answer-${i}`).css('visibility','visible')
        if (window[`qChoice${i}`] === questionsArr[i].rightAnswer){
            count++
        }
    }
    if (count === 8){
        alert('Perfect Score!')
        
    }
    else{
        alert('So Close! Try Again!')
        console.log(count)
    }
})