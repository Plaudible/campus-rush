function myFunction(numQuestions) {
    for (i = 0; i < numQuestions; i++) {

      write ("Question 1")
      input (value="")


    return 0
  }
}

//HTML DOM Objects
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
//var quizImg = document.getElementById("quizImg");
var questionIndex = 0;
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");

const questionsList = [{
  question: "In The Fellowship of the Ring, what does Gandalf do to the ring to make its secret inscription visible?",
  choiceA: "Heat it in the fire",
  choiceB: "Grind it down",
  choiceC: "Destroy it",
  choiceD: "Performs a covering spell",
  correctAnswer: "A"
}, {
  question: "What country borders Sudan to the north?",
  choiceA: "Mozambique",
  choiceB: "Burkina Faso",
  choiceC: "Nigeria",
  choiceD: "Egypt",
  correctAnswer: "D"
}, {
  question: "What artist painted the American Gothic?",
  choiceA: "Edward Hopper",
  choiceB: "Grant Wood",
  choiceC: "Jackson Pollock",
  choiceD: "Mary Cassatt",
  correctAnswer: "B"
}, {
  question: "What is the most populous bird in the world?",
  choiceA: "Starling",
  choiceB: "Pigeon",
  choiceC: "Chicken",
  choiceD: "Dove",
  correctAnswer: "C"
}, {
  question: "What is the study of soil called?",
  choiceA: "Dendrology",
  choiceB: "Pedology",
  choiceC: "Soilology",
  choiceD: "Geology",
  correctAnswer: "B"
}, {
  question: "Who was the first US President?",
  choiceA: "John Adams",
  choiceB: "Thomas Jefferson",
  choiceC: "George Washington",
  choiceD: "Abraham Lincoln",
  correctAnswer: "C"
}, {
  question: "How many days can a cockroach live without its head?",
  choiceA: "6",
  choiceB: "7",
  choiceC: "8",
  choiceD: "9",
  correctAnswer: "D"
}, {
  question: "What distance did the Romans once define as a thousand paces?",
  choiceA: "A mile",
  choiceB: "A kilometer",
  choiceC: "1000 steps",
  choiceD: "1000 yards",
  correctAnswer: "A"
}, {
  question: "What berries did pregnant women of the Middle Ages avoid for fear their children would be born with birthmarks?",
  choiceA: "Blueberries",
  choiceB: "Strawberries",
  choiceC: "Cranberries",
  choiceD: "Lingonberries",
  correctAnswer: "B"
}, {
  question: "On which river is the Asian city of Mandalay situated?",
  choiceA: "Irrawaddy River",
  choiceB: "Yangtze River",
  choiceC: "Mekong River",
  choiceD: "Ganges River",
  correctAnswer: "A"
}, {
  question: "How many wine gallons does a half pipe barrel contain?",
  choiceA: "45",
  choiceB: "63",
  choiceC: "24",
  choiceD: "96",
  correctAnswer: "B"
},{
  question: "Who was Henry VIII's first wife?",
  choiceA: "Catherine Parr",
  choiceB: "Anne of Cleves",
  choiceC: "Catherine of Aragon",
  choiceD: "Jane Seymour",
  correctAnswer: "C"
},{
  question: "Which element of the periodic table is named for a Jewish woman?",
  choiceA: "Hassium",
  choiceB: "Uranium",
  choiceC: "Roentgenium",
  choiceD: "Meitnerium",
  correctAnswer: "D"
},{
  question: "Which US state is nicknamed the Cornhusker state?",
  choiceA: "Wisconsin",
  choiceB: "Idaho",
  choiceC: "Nebraska",
  choiceD: "Kansas",
  correctAnswer: "C"
},{
  question: "Who met in groups of 13, also called covens?",
  choiceA: "Witches",
  choiceB: "Orcs",
  choiceC: "Harpees",
  choiceD: "Mermaids",
  correctAnswer: "A"
},{
  question: "What is the name of the bartender in the Billy Joel song Piano Man?",
  choiceA: "Brian",
  choiceB: "John",
  choiceC: "Will",
  choiceD: "Ron",
  correctAnswer: "B"
},{
  question: "What island was the scene of a nuclear accident in 1979?",
  choiceA: "Seychelles",
  choiceB: "Three Mile Island",
  choiceC: "Japan",
  choiceD: "Santa Catalina Island",
  correctAnswer: "B"
},{
  question: "Somniphobia is a fear of what?",
  choiceA: "Being awake",
  choiceB: "Insomnia",
  choiceC: "Sleep",
  choiceD: "Orifices",
  correctAnswer: "C"
},{
  question: "Who would use a mashie niblick?",
  choiceA: "Fireman",
  choiceB: "Baseball player",
  choiceC: "Chef",
  choiceD: "Golfer",
  correctAnswer: "D"
},{
  question: "What is a somnambulist?",
  choiceA: "A tired person",
  choiceB: "An insomniac",
  choiceC: "Sleeptalker",
  choiceD: "Sleepwalker",
  correctAnswer: "D"
},{
  question: "Which continent is the natural habitat of the Ostrich?",
  choiceA: "Africa",
  choiceB: "Australia",
  choiceC: "Asia",
  choiceD: "South America",
  correctAnswer: "A"
},{
  question: "Suriname is part of which content?",
  choiceA: "North America",
  choiceB: "South America",
  choiceC: "Africa",
  choiceD: "Asia",
  correctAnswer: "B"
},{
  question: "How many years did it take to build the Taj Mahal?",
  choiceA: "22",
  choiceB: "27",
  choiceC: "13",
  choiceD: "5",
  correctAnswer: "A"
},{
  question: "Which Japanese company manufactured the final videocassette recorder on July 22, 2016?",
  choiceA: "Mitsubishi",
  choiceB: "Rakuten",
  choiceC: "Funai",
  choiceD: "Sumitomo Mitsui",
  correctAnswer: "C"
},{
  question: "What year did Cambodia gain its independence from France?",
  choiceA: "2001",
  choiceB: "1989",
  choiceC: "1976",
  choiceD: "1953",
  correctAnswer: "D"
},{
  question: "Where in the body are the adenoids?",
  choiceA: "Nasal cavity",
  choiceB: "Upper thighs",
  choiceC: "Ear canals",
  choiceD: "Fingertips",
  correctAnswer: "A"
},{
  question: "How many times are traditional Mexican refried beans fried?",
  choiceA: "Once",
  choiceB: "Twice",
  choiceC: "Three times",
  choiceD: "Four Times",
  correctAnswer: "A"
},{
  question: "What is the largest artery in the human body?",
  choiceA: "Head and neck arteries",
  choiceB: "Aorta",
  choiceC: "Torso arteries",
  choiceD: "Abdomen arteries",
  correctAnswer: "B"
},{
  question: "Hamlet was the prince of which European kingdom?",
  choiceA: "Germany",
  choiceB: "Spain",
  choiceC: "Sweden",
  choiceD: "Denmark",
  correctAnswer: "D"
},{
  question: "How many states existed when George Washington was elected?",
  choiceA: "13",
  choiceB: "9",
  choiceC: "11",
  choiceD: "12",
  correctAnswer: "C"
},{
  question: "What color is vermilion a shade of?",
  choiceA: "Red",
  choiceB: "Blue",
  choiceC: "Green",
  choiceD: "Yellow",
  correctAnswer: "A"
},{
  question: "What is a Googol?",
  choiceA: "1 followed by 100 zeroes",
  choiceB: "1 followed by 1000 zeroes",
  choiceC: "A number close to infinity",
  choiceD: "1 followed by 500 zeroes",
  correctAnswer: "A"
},{
  question: "What are the bumps on the tongue that carry the taste buds called?",
  choiceA: "Villi",
  choiceB: "Papillae",
  choiceC: "Follicles",
  choiceD: "Warts",
  correctAnswer: "B"
},{
  question: "In Greek mythology, who was Icarus' father?",
  choiceA: "Polybus",
  choiceB: "Hermes",
  choiceC: "Daedalus",
  choiceD: "Helios",
  correctAnswer: "C"
},{
  question: "Which vitamin group, important for vision and boneg rowth, includes retinol?",
  choiceA: "Vitamin D",
  choiceB: "Vitamin C",
  choiceC: "Vitamin B",
  choiceD: "Vitamin A",
  correctAnswer: "D"
},{
  question: "What kind of animals are Pinky and The Brain?",
  choiceA: "Squirrels",
  choiceB: "Chipmunks",
  choiceC: "Rats",
  choiceD: "Lab Mice",
  correctAnswer: "D"
},{
  question: "Lake of the Ozarks is located in which US state?",
  choiceA: "Tennessee",
  choiceB: "Arkansas",
  choiceC: "Mississippi",
  choiceD: "Missouri",
  correctAnswer: "D"
},{
  question: "What is Prince's surname?",
  choiceA: "Nadella",
  choiceB: "Ralph",
  choiceC: "Nelson",
  choiceD: "Jenkins",
  correctAnswer: "C"
},{
  question: "On which river is the Asian city of Mandalay situated?",
  choiceA: "Irrawaddy River",
  choiceB: "Yangtze River",
  choiceC: "Mekong River",
  choiceD: "Ganges River",
  correctAnswer: "A"
},{
  question: "What is the state capital of the New York?",
  choiceA: "New York City",
  choiceB: "Buffalo",
  choiceC: "Albany",
  choiceD: "Washington DC",
  correctAnswer: "C"
},{
  question: "What temperature (Fahrenheit) does water freeze?",
  choiceA: "-5",
  choiceB: "0",
  choiceC: "500",
  choiceD: "32",
  correctAnswer: "D"
},{
  question: "Pupaphobia is the fear of what?",
  choiceA: "Puppets",
  choiceB: "Pupae",
  choiceC: "Cocoons",
  choiceD: "Butterflies",
  correctAnswer: "A"
},{
  question: "Where do fallen Norse warriors go?",
  choiceA: "Valhalla",
  choiceB: "Asgard",
  choiceC: "Alfheim",
  choiceD: "Muspelheim",
  correctAnswer: "A"
},{
  question: "Who wrote the 1969 novel The Godfather?",
  choiceA: "Roald Dahl",
  choiceB: "Mario Puzo",
  choiceC: "Harper Lee",
  choiceD: "Madeline L'Engle",
  correctAnswer: "B"
},{
  question: "What does an anemometer measure?",
  choiceA: "Air quality",
  choiceB: "Wind speed",
  choiceC: "Altitude",
  choiceD: "Oxygen levels",
  correctAnswer: "B"
},{
  question: "What mountain is the tallest point in Canada?",
  choiceA: "Columbia",
  choiceB: "Robson",
  choiceC: "Logan",
  choiceD: "Saint Elias",
  correctAnswer: "C"
},{
  question: "On which river is the Asian city of Mandalay situated?",
  choiceA: "Irrawaddy River",
  choiceB: "Yangtze River",
  choiceC: "Mekong River",
  choiceD: "Ganges River",
  correctAnswer: "A"
},{
  question: "What is the name of the Alicia Keys backup singer who won season 2 of The Voice?",
  choiceA: "Cassadee Pope",
  choiceB: "Kelly Clarkson",
  choiceC: "Jermaine Paul",
  choiceD: "Blake Shelton",
  correctAnswer: "C"
},{
  question: "What event is the subject of John Reed's book Ten Days that Shook the World?",
  choiceA: "The Fukushima Daichi nuclear disaster",
  choiceB: "The French Revolution",
  choiceC: "1906 California Earthquake",
  choiceD: "The Russian Revolution",
  correctAnswer: "D"
},{
  question: "How many compartments does a cow's stomach have?",
  choiceA: "2",
  choiceB: "4",
  choiceC: "6",
  choiceD: "7",
  correctAnswer: "B"
},];

var questions = getRandom(questionsList, 10);

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

//updates questions array
function callPhpFile(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhr.open("GET", "createQuestions.php");
  xhr.send();
  xhr.onload = function () {
    var javar = this.response;
    console.log("Loaded: "+javar);
    
    if (xhr.status != 200) {
        alert('Error '+xhr.status+': '+xhr.statusText); // e.g. 404: Not Found
    } else { // xhr.responseXML is the server response
        var questDoc, qList, qs, as, i;
        questDoc = xhr.responseXML;
        console.log('Question Document: '+questDoc);
        if (questDoc != null) { //update questions from default
		  qs = questDoc.getElementsById("question");
          as = questDoc.getElementsById("answer");
          qList = [];
          for (i = 0; i < x.length; i++){
            qList.push({question: qs[i].nodeValue,
              choiceA: as[i*5+0].nodeValue,
              choiceB: as[i*5+1].nodeValue,
              choiceC: as[i*5+2].nodeValue,
              choiceD: as[i*5+3].nodeValue,
              correctAnswer: as[i*5+4].nodeValue});
          }
        }
    }
  };
};

//getQuestion function
function getQuestion() {
  quiz.style.textAlign = "center";
  quiz.style.display = "block";
  quiz.style.paddingLeft = "50%";
  quiz.style.paddingRight = "50%";
  quiz.style.width = "100%";
  choiceResponse.style.display = "none";
  let q = questions[questionIndex];
  quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
  quizQuestion.setAttribute("class","label");
  //quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
  optionA.innerHTML = q.choiceA;
  optionB.innerHTML = q.choiceB;
  optionC.innerHTML = q.choiceC;
  optionD.innerHTML = q.choiceD;
  choices.style.display = "block";
}

// start quiz
function beginQuiz() {
  callPhpFile();//update questions array
  start.style.display ="none";
  getQuestion();
  quiz.style.display = "block";
}

// show score function
function showScore() {
  quiz.style.display = "none";
  scoreBlock.style.display = "block";
  scoreBlock.innerHTML = "<p> You scored " + score + " out of " + questions.length + "!</p>";
  //this if-else if-else is preferable with 10 questions
  if (score < 4) {
    scoreMessage.innerHTML = "<p>Touch up on your trivia. Refresh for new questions, or try again!</p>";
  }
  else if (score < 8) {
    scoreMessage.innerHTML = "<p>Good job. Refresh for new questions, or try again!</p>";
  }
  else {
    scoreMessage.innerHTML = "<p>Great work! Refresh for new questions, or try again.</p>";
  }
  scoreMessage.style.display = "block";
  quizAgain.style.display = "block";

  scoreBlock.setAttribute("class","label"); 
  scoreMessage.setAttribute("class","label");
  quizAgain.setAttribute("class","buttonlogin");
}

//function to check if answer is correct
function check(answer) {
  if (questionIndex < questions.length - 1) {
    setTimeout(getQuestion,500);
}
  else {
    setTimeout(showScore,500);
}

if (answer == questions[questionIndex].correctAnswer) {
  score++;
  questionIndex++;
  choices.style.display = "none";
  choiceResponse.innerHTML= '<p style="color:green">Correct!</p>';
  choiceResponse.style.display = "block";
  choiceResponse.setAttribute("class","label");
}
else {
  questionIndex++;
  choices.style.display = "none";
  choiceResponse.innerHTML= '<p style="color:red">Incorrect!</p>';
  choiceResponse.style.display = "block";
  choiceResponse.setAttribute("class","label");
  }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}

