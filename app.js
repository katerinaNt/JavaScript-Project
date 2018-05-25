
var scores , roundScores , activePlayer , dice , gamePlaying , dice2;


init();



document.querySelector('.btn-roll').addEventListener('click' , function(){
	if(gamePlaying){

		var dice = Math.floor(Math.random() * 6) + 1;
		// var dice2 = Math.floor(Math.random() * 6) +1;

		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + dice + '.png';

		// var diceDom = document.querySelector('.dice2');
		// diceDom.style.display = 'block';
		// diceDom.src = 'dice-' + dice + '.png';

	if (dice !== 1 ) {
		roundScores += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScores;
	}
	else{
			
			nextPlayer();
		 //document.querySelector('.dice').style.display = 'none';
	}
	}
	
});


document.querySelector('.btn-hold').addEventListener('click' , function(){

	scores[activePlayer] += roundScores;

	document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

	if(scores[activePlayer] >= 20){
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	}
	else{
		nextPlayer();
	}
		
		
});


document.querySelector('.btn-new').addEventListener('click' , init);

function init(){

scores = [0,0];
roundScores = 0;
activePlayer = 0 ;

document.querySelector('.dice').style.display = 'none';
// document.querySelector('.dice2').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
 gamePlaying = true;

document.querySelector('#name-0' ).textContent = 'Player-1';
document.querySelector('#name-1' ).textContent = 'Player-2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-1').innerHTML = '<b>' + dice + '</b';


function nextPlayer(){

			//next player
		 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		 roundScores = 0;
		 document.querySelector('#current-0' ).textContent = 0;
		 document.querySelector('#current-1' ).textContent = 0;

		 document.querySelector('.player-0-panel').classList.toggle('active');
		 document.querySelector('.player-1-panel').classList.toggle('active');

}
