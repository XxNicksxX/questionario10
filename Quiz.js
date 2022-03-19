class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  question.hide()
     background("yellow")

     var title=createElement("h1")
     title.html("resultado do questionario")
     title.position(425,0)
     
     Contestant.getPlayerInfo()
    
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("jogador que respondeu a resposa certa é destacado na cor verde",130,230);
       var display_answer=230

    }

   for (var plr in allContestants){

    var correctAns = "2";

    if (correctAns === allContestants[plr].answer){
    fill("Green")
    }
     else{
     fill("red")
     
    }
    display_answer+=30
    text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answer)
    } 
  
  }
}
