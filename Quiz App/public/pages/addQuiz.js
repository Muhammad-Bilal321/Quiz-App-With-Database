// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getDatabase,set,ref,push} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
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
  measurementId: "G-Y3NF7XQ6DC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()

var question = document.getElementById("question");
var option = document.getElementById("option");
var optionList = document.getElementById("optionList");
var correctAnswerElem = document.getElementById("correctAnswerElem");

var options = []; 
var correctAnswer;

function renderOptions() {
  optionList.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    optionList.innerHTML += ` 
        <li onclick="setCorrectAnswer('${options[i]}')" class="p-2 my-2 fs-5 bg-light rounded shadow bg-light">
        ${options[i]}
        </li>`;
  }
}

window.addOption = function () {
  options.push(option.value);
  console.log(options);
  renderOptions();
};
window.setCorrectAnswer = function (a) {
  correctAnswer = a;
  correctAnswerElem.innerHTML = correctAnswer;
};

window.submitQuestion = function () {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer,
  };

  obj.id = push(ref(db, 'questions/')).key

 const reference = ref(db, `questions/${obj.id}`)
 set(reference, obj)

  console.log(obj);
};
