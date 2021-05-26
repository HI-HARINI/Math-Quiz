player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="Question turn-"+player1_name;
document.getElementById("playeranswer").innerHTML="Answer turn-"+player2_name;
function send(){
get_word1=document.getElementById("number1").value;
get_word2=document.getElementById("number2").value;
get_word=get_word1*get_word2
word=get_word;
console.log("wordInLowerCase"+word);

question_word="<h4 id='word_display'> q. "+get_word1+" X"+get_word2+"</h4>" ;
inputbox="<br>Answer:<input type='type' id='input_check_box'>";
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=question_word+inputbox+checkbutton
document.getElementById("output").innerHTML=row
document.getElementById("word").value="";
}
question_turn="player1"
answer_turn="player2"
function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer;
    console.log("answerinlowercase"+answer);
    if (answer==word){
        if (answer_turn=="player1"){
            player1_score=player1_score+1
        document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player1_score  
        }
    }
    if (question_turn=="player1"){
        question_turn="player2"
        document.getElementById("playerquestion").innerHTML="question_turn"+player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("playerquestion").innerHTML="question_turn"+player1_name   
    }
    if (answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("playeranswer").innerHTML="answer_turn"+player2_name
    }
    else{
        answer_turn="player1"
        document.getElementById("playeranswer").innerHTML="answer_turn"+player1_name   
    }
    document.getElementById("output").innerHTML="";
}