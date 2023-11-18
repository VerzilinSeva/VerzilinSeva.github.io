html, body {
  font-family: monospace;
  font-size: 20px;
  }
body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	background-color: bisque;
}

.myButton{
	margin-top:40vh;
	height: 5vh;
	width: 15vw;
	max-width: 200px;
	min-width: 100px;
	min-height: 40px;
	background-color: beige;
	border-radius: 0.6em;
}

textarea{
	resize: none;
}

#slide{
	display: flex;
	justify-content: space-around;
	margin-top: 5vh;
	border-radius: 0.6em;
}

@media (min-width: 400px ) {
	#myForm {
		width: 25vw;
		min-width: 380px;
		height: 50vh;
		min-height: 480px;
		padding: 18px 9px;
		border-radius: 4px;
		background: beige;
		position: fixed;
		top: 0; left: 0; right: 0; bottom: 0;
		margin: auto;
		display: none;
		opacity: 0;
		z-index: 1;
		text-align: center;
	}

	#lete,#close{
		border-radius: 0.6em;
	}
	.pole{
		display: flex;
    	flex-direction: column;
    	align-items: flex-start;
    	margin-top: 2vh;
	}
}

@media (max-width: 400px) {
	#myForm {
		width: 80vw;
		max-width: 380px;
		height: 80vh;
		max-height: 480px;
		border-radius: 4px;
		padding: 5px 9px;
		background: rgb(177, 177, 177);
		position: fixed;
		top: 0; left: 0; right: 0; bottom: 0;
		margin: auto;
		display: none;
		opacity: 0;
		z-index: 1;
		text-align: center;
		
	}
	#lete,#close{
		border-radius: 0.6em;
	}
	#email_polz,#mes,#name_polz,#num,#txt{
		max-width: 60vw;
	
	}
	.pole{
		margin-top: 2vh;
		text-align: left;
		max-width: 65vw;
	}
}

#myOverlay {
	z-index: 0;
    position: fixed;
    background: rgba(0,0,0,.7);
    height: 100%;
    cursor: pointer;
    display: none;
}
