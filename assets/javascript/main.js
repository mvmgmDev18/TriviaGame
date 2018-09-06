var questions = [{
    ques: "What's the git command that downloads your repository from GitHub to your computer?",
    ans: ["git push", "git fork", "git clone", "git commit"],
    name: "quesOne",
    correct: "git clone",
    divClass: ".quesOne",
},

{
    ques: "How do you create a copy of a lab under your own GitHub account so that you can solve the lab?",
    ans: ["Forking it via the GitHub interface.", "git fork", "git clone", "git pull-request"],
    name: "quesTwo",
    correct: "Forking it via the GitHub interface.",
    divClass: ".quesTwo",
},

{
    ques: "What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?",
    ans: ["git push", "git fork", "git clone", "git commit"],
    name: "quesThree",
    correct: "git push",
    divClass: ".quesThree",
},

{
    ques: "How do you check the state of your local git repository since your last commit?",
    ans: ["git check", "git status", "git commit", "git diff"],
    name: "quesFour",
    correct: "git status",
    divClass: ".quesFour",
},

{
    ques: "How do you stage files for a commit?",
    ans: ["git stage", "git commit", "git add", "git reset"],
    name: "quesFive",
    correct: "git add",
    divClass: ".quesFive",
},

{
    ques: "What's a shortcut to staging all the changes you have?",
    ans: ["git commit add .", "git commit .", "git add .", "git push -am \"Message\""],
    name: "quesSix",
    correct: "git add .",
    divClass: ".quesSix",
},

{
    ques: "How do you supply a commit message to a commit?",
    ans: ["git message \"I'm coding\"", "git add \"I'm coding\"", "git commit \"I'm coding\"", "git commit -m \"I'm coding\""],
    name: "quesSeven",
    correct: "git commit -m \"I'm coding\"",
    divClass: ".quesSeven",
},

{
    ques: "What is the correct commit syntax for all changes with a message?",
    ans: ["git message -am \"I'm coding\"", "git add -a \"I'm coding\"", "git commit -a \"I'm coding\"", "git commit -am \"I'm coding\""],
    name: "quesEight",
    correct: "git commit -am \"I'm coding\"",
    divClass: ".quesEight",
},

{
    ques: "How do you submit a solution to Learn?",
    ans: ["git submit", "git pull-request", "Learn submit", "Git commit –am \“Done with Lab\”"],
    name: "quesNine",
    correct: "Learn submit",
    divClass: ".quesNine",
},

{
    ques: "What comes first, staging with git add . or committing with git commit?",
    ans: ["Staging your commits with git add", "Committing with git commit", "git stage", "git commit"],
    name: "quesTen",
    correct: "Staging your commits with git add",
    divClass: ".quesTen",
}]

var labels = ["first", "second", "third", "fourth"];

var startGame = $("#start-btn").on('click', function () {

    $(this).parent().hide();
    $(".container").show();
    countdown(90);
    questionDisplay();
});

var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();

    for (var j = 0; j < 10; j++) {
        $(".questions").append('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class = "ques-title">' + questions[j].ques + '</div>');
            console.log(questions);
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type ="radio" name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for ="' + labels[i] + '">' + questions[j].ans[i] + '</label>');

        }
    }
}

var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name= "' + questions[i].name + '"]:checked').val() === questions[i].correct) {
                    correctAnswers++;
                    console.log("this is correct! number:" + i);
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number: " + i);
                };
            }
            $("#correctEndTime").append(correctAnswers);
                    // console.log(correctAnswers);
            $("#wrongEndTime").append(wrongAnswers);
                // console.log(wrongAnswers);
            $("#timesUp").fadeIn(1000).show();

            clearInterval(timer);
            return;
        }
    }, 1000);

    $("#sub-but").on("click", function () {
        clearInterval(timer);
    })
};

var gradeQuiz = $("#sub-but").on("click", function () {
// console.log(gradeQuiz);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    // console.log(wrongAnswers);
    var unAnswered = 0;

    for (var i = 0; i < 10; i++) {
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;

        } else {
            wrongAnswers++;
        };
    };
    countdown();

    $(".container").fadeOut(500);

    $("#answerScreen").show();

    $("#correctAnswers").append(correctAnswers);
    // console.log(correctAnswers);

    $("#wrongAnswers").append(wrongAnswers);
});
