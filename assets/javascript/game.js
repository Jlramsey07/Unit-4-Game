$( document ).ready(function(){
  var cpuRandom=Math.floor(Math.random()*100+25)
  // Seclects random number that user should target
  $('#targetNumber').text(cpuRandom);
  // Appending random number to the targetNumber id 
  var random1= Math.floor(Math.random()*28+1)
  var random2= Math.floor(Math.random()*28+1)
  var random3= Math.floor(Math.random()*28+1)
  var random4= Math.floor(Math.random()*28+1)
  // Giving each Crystal a random number value
  // Random number has to be between 1 - 28
  // 
  var totalScore= 0; 
  var wins= 0;
  var losses = 0;
  
  
$('#Wins').text(wins);
$('#Losses').text(losses);
//Game will reset if win/loss
function reset(){
      cpuRandom=Math.floor(Math.random()*101+19);
      
      $('#targetNumber').text(cpuRandom);
      random1= Math.floor(Math.random()*11+1);
      random2= Math.floor(Math.random()*11+1);
      random3= Math.floor(Math.random()*11+1);
      random4= Math.floor(Math.random()*11+1);
      totalScore= 0;
      $('#finalTotal').text(totalScore);
      } 
/// These two functions adds tally to win /loss column depending on outcome
function congrats(){

  wins++; 
  
  $('#Wins').text(wins);
  var playAgain = confirm("You WON!!! Play again keep your streak going!!!");
  if(playAgain) { 
    reset();
  }
  
}

function tryAgain(){

  losses++;
  $('#Losses').text(losses);
  var playAgain = confirm("AWW man you loss!!! Would you like to try again?");
  if(playAgain) { 
    reset();
  }
  
}
//sets the click for each crystal
  $('#first').on ('click', function(){
    totalScore = totalScore + random1;
    
    $('#finalScore').text(totalScore); 
          //sets win/lose conditions
        if (totalScore == cpuRandom){
          congrats();
        }
        else if ( totalScore > cpuRandom){
          tryAgain();
        }   
  })  
  $('#second').on ('click', function(){
    totalScore = totalScore + random2;
    
    $('#finalScore').text(totalScore); 
        if (totalScore == cpuRandom){
          congrats();
        }
        else if ( totalScore > cpuRandom){
          tryAgain();
        } 
  })  
  $('#third').on ('click', function(){
    totalScore = totalScore + random3;
    
    $('#finalScore').text(totalScore);
//sets win/lose conditions
          if (totalScore == cpuRandom){
          congrats();
        }
        else if ( totalScore > cpuRandom){
          tryAgain();
        } 
  })  
  $('#fourth').on ('click', function(){
    totalScore = totalScore + random4;
    
    $('#finalScore').text(totalScore); 
      
          if (totalScore == cpuRandom){
          congrats();
        }
        else if ( totalScore > cpuRandom){
          tryAgain();
        }
  });   
}); 

 

