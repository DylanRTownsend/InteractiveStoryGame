//****** OPTION FIND AN INN ******
			op0_3.style.display = "none";
			op0_1.style.display = "none";
			op0_2.style.display = "none";
			openScene0_2.style.display = "none";
			openScene0_3.style.display = "block";
			innKeeper.style.display = "block";
			speechMessage.style.display = "block";
			speechMessage1.style.display = "block";
			speechMessage2.style.display = "block";
			speechMessage3.style.display = "block";
			document.querySelector("#speechMessage").innerHTML = "Welcome weary traveler.";
			document.querySelector("#speechMessage1").innerHTML = "The kitchen is closed, and so is the bar,";
			document.querySelector("#speechMessage2").innerHTML = "but I can offer you a warm bed for the night.";
			document.querySelector("#speechMessage3").innerHTML = "What to say you?";


			setTimeout(function(){
			speechMessage.style.display = "none";
			speechMessage1.style.display = "none";
			speechMessage2.style.display = "none";
			speechMessage3.style.display = "none";
			op0_0.style.display = "block";
			op0_1.style.display = "block";
			op0_2.style.display = "block";
			document.querySelector("#op0_2").innerHTML = "That sounds perfect. (Rest)";
			document.querySelector("#op0_1").innerHTML = "I would rather sleep in the woods than here!!! (Leave)";
			document.querySelector("#op0_0").innerHTML = "(Fight him and take his money.)";
			}, 5000);

//****** OPTION ONE ******
			
			document.querySelector("#op0_0").onclick = function(){
				robThePlace()};
				function robThePlace(){
				op0_0.style.display = "none";
				op0_1.style.display = "none";
				op0_2.style.display = "none";
				speechBox.style.display = "none";
				box2.style.display = "grid";
				fightTxt0.style.visibility = "visible";
				fightTxt1.style.visibility = "visible";
				fightTxt2.style.visibility = "visible";
				fightTxt3.style.visibility = "visible";
				attackMessage.style.color = "red";
				};

			document.querySelector("#fightTxt0").onclick = function(){
				pleaseDontHurtMe()};
				function pleaseDontHurtMe(){
				box2.style.display = "none";
				fightTxt0.style.visibility = "hidden";
				fightTxt1.style.visibility = "hidden";
				fightTxt2.style.visibility = "hidden";
				fightTxt3.style.visibility = "hidden";
				speechBox.style.display = "block";
				speechMessage.style.display = "block";
				speechMessage1.style.display = "block";
				speechMessage2.style.display = "block";
				speechMessage3.style.display = "block";
				document.querySelector("#speechMessage").innerHTML = "Please dont hurt me...";
				document.querySelector("#speechMessage1").innerHTML = "...please don't hurt me...";
				document.querySelector("#speechMessage2").innerHTML = "...please don't hurt me...";
				document.querySelector("#speechMessage3").innerHTML = "HELP!!!!";
				};










