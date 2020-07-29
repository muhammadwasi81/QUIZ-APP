window.onload = function(){
    show(0)
}
//questions
let questions = [
    {
      id: 1,
      question: "HTML is what type of language?",
      answer: "Markup Language",
      options: [
        "Scripting Language",
        "Markup Language",
        "Programming Language",
        "Network Protocol"
      ]
    },
    {
      id: 2,
      question: "Who is Known as the father of World Wide Web (WWW)?",
      answer: "Tim Berners-Lee",
      options: [
        "Robert Cailliau",
        "Tim Thompson",
        "Charles Darwin",
        "Tim Berners-Lee"
      ]
    },
    {
      id: 3,
      question: "Which of the following is not a browser?",
      answer: "Microsofts Bing",
      options: [
        "Netscape Navigator",
        "Mozilla Firefox",
        "Microsofts Bing",
        "Opera"
      ]
    },
    {
      id: 4,
      question: "HTML tags are surrounded by which type of brackets?",
      answer: "Angle",
      options: [
        "Curly",
        "Round",
        "Squart",
        "Angle"
      ]
    },
    {
      id: 5,
      question: "HTML web pages can be read and rendered by?",
      answer: "Web Browser",
      options: [
        "Compiler",
        "Interpreter",
        "Server",
        "Web Browser"
      ]
    },
    {
      id: 6,
      question: "The attribute of <form> tag?",
      answer: "Both (a)&(b)",
      options: [
        "Method",
        "Action",
        "Both (a)&(b)",
        "None of these"
      ]
    },
    {
      id: 7,
      question: "Which of the following attributes is used to add link to any element?",
      answer: "href",
      options: [
        "link",
        "ref",
        "href",
        "newref"
      ]
    },
    {
      id: 8,
      question: "What is the HTML attribute used to reference the location of an image inside the <img> tag?",
      answer: "src",
      options: [
        "src",
        "href",
        "link",
        "location"
      ]
    },
    {
      id: 9,
      question: "www is based on which model?",
      answer: "Client-server",
      options: [
        "Local-server",
        "Client-server",
        "3-tier",	
        "None of these"
      ]
    },
    {
      id: 10,
      question: "The attribute, which define the relationship between current document and HREF'ed URL is?",
      answer: "REL",
      options: [
        "REL",
        "URL",
        "REV",	
        "All of these"
      ]
    },
  
  ];





function submitForm(e){
    e.preventDefault(); //stop the behaviour
  //submit form validation
    let name = document.forms["welcome_form"]["name"].value;
    if(name == ""){
      alert("Name must be filled out");
      return false;
    }
    //store names
    sessionStorage.setItem("name" , name);
    
    location.href = "quiz.html"; 
    
}
//submit form validation


let question_count = 0;
let point = 0;

function next(){

    let user_answer = document.querySelector("li.option.active").innerHTML;

    //check answer by the user
    if(user_answer == questions[question_count].answer){
        point += 10;
        sessionStorage.setItem("points" , point);
    }
    if(question_count == questions.length -1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(myTime);
    location.href = "end.html";
    return;
    }
    
    

  
    question_count++;
    show(question_count)
}
function show(count){
    let question = document.getElementById('questions');

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<h3>Q${question_count +1}. ${questions[count].question} 
        <ul class="option_group">
                  
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
      </ul> </h3>`
      
      toggleActive()
}

function toggleActive(){
    let option = document.querySelectorAll('li.option');

    for(let i = 0; i<option.length; i++){
        option[i].onclick = function(){
            for(let j = 0; j < option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active");
        }
    }
}



