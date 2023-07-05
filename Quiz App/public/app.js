 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
 import { getDatabase, ref, onChildAdded} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDOoRuxDmEVP-stgJFpL9_K6S_mlX9FANg",
   authDomain: "quiz-app-ce7c1.firebaseapp.com",
   databaseURL: "https://quiz-app-ce7c1-default-rtdb.firebaseio.com",
   projectId: "quiz-app-ce7c1",
   storageBucket: "quiz-app-ce7c1.appspot.com",
   messagingSenderId: "51776405845",
   appId: "1:51776405845:web:752d1907e136666ce3afdc",
   measurementId: "G-Y3NF7XQ6DC"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const db = getDatabase()

 var loader = document.getElementById("loader")
 var showQuestion = document.getElementById("showQuestion")

 function getDataFromDatabase(){
    loader.style.display = "block"
    showQuestion.style.display = "none"

    const reference = ref(db, 'questions/')
     onChildAdded(reference, function(data){
        console.log(data.val())
        questionsList.push(data.val())
        renderQuestion()
        loader.style.display = "none"
        showQuestion.style.display = "block"
     })
 }
 getDataFromDatabase()







var questionsList = [
    // {
    //     question: "HTML Stands For _______",
    //     answer: "Hyper Text Markup Language",
    //     options:[
    //         "Hyper Text Preprocessor",
    //         "Hyper Text Markup Language",
    //         "Hyper Text Multiple Language",
    //         "Hyper Tool Multi Language",
    //     ]
    // },
    // {
    //     question: "What does CSS stand for _______",
    //     answer: "Cascading Style Sheet",
    //     options:[
    //         "Common Style Sheet",
    //         "Colorful Style Sheet",
    //         "Computer Style Sheet",
    //         "Cascading Style Sheet",
    //     ]
    // },
    // {
    //     question: "What does SQL stand for _______",
    //     answer: "Structured Query Language",
    //     options:[
    //         "Stylish Question Language",
    //         "Stylesheet Query Language",
    //         "Statement Question Language",
    //         "Structured Query Language",
    //     ]
    // },
    // {
    //     question: "What does PHP stand for _______",
    //     answer: "Hypertext Preprocessor",
    //     options:[
    //         "Hypertext Preprocessor",
    //         "Hypertext Programming",
    //         "Hypertext Preprogramming",
    //         "Hometext Preprocessor",
    //     ]
    // },
    // {
    //     question: "What does XML stand for _______",
    //     answer: "eXtensible Markup Language",
    //     options:[
    //         "eXtensible Markup Language",
    //         "eXecutable Multiple Language",
    //         "eXTra Multi-Program Language",
    //         "eXamine Multiple Language",
    //     ]
    // },

]

var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var optionsParent = document.getElementById("optionsParent");

var indexVal = 0;
var marks = 0;

window.checkAnswer = function(answer, selectedOption){
    console.log('Correct Answer:', answer);
    console.log('Selected Option:', selectedOption);
if(answer == selectedOption){
    marks = marks + 1;
}
console.log('Marks:', marks);
nextQue()
}


var finishBtn = document.getElementById("finishBtn")


window.nextQue = function(){

    if(indexVal + 1 == questionsList.length)
    {
        
        alert("Your Score Is "+ marks)
    
        finishBtn.disabled = false
      
    }
    else{
        indexVal++;
        renderQuestion()
    }

    
}
 // Reload the page
finishBtn.addEventListener("click", function() {
   
    location.reload();
  });

function renderQuestion() {
  
   
    currentQuestionNumber.innerHTML = indexVal + 1;
    
    totalQuestionNumber.innerHTML = questionsList.length;
    
    var que = questionsList[indexVal];
    
    displayQuestion.innerHTML = que.question

    optionsParent.innerHTML = ""

    for (var i = 0; i < que.options.length; i++) {
        optionsParent.innerHTML += ` <div class="col-md-6 my-3 ">
        <button onclick="checkAnswer('${que.correctAnswer}', '${que.options[i]}')" class="btn btn-outline-danger py-2 rounded-5 w-100 custom_btn" >${que.options[i]}</button>
       </div>`;
        
    }

}
renderQuestion();



// https://quiz-app-ce7c1.web.app