alert("Made By Mahendra Singh");

function play() {
    var randomNumber1 = Math.floor(Math.random() *6 ) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".jpeg";
    
    var randomImageSource = "Image/" + randomDiceImage;
    
    var image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", randomImageSource);
    
    var randomNumber2 = Math.floor(Math.random() *6 ) + 1;
    
    var randomDiceImage2 = "dice" + randomNumber2 + ".jpeg";
    
    var randomImageSource2 = "Image/" + randomDiceImage2;
    
    var image2 = document.querySelectorAll("img")[1];
    
    image2.setAttribute("src", randomImageSource2);

    if(randomNumber1 > randomNumber2)
    {
        document.getElementById("winner").innerHTML = "🎊🎉 Player 1 Wins the MATCH ";
    }
    else if(randomNumber1 < randomNumber2){
        document.getElementById("winner").innerHTML = "Player 2 Wins the MATCH 🎊🎉";
    }
    else{
        document.getElementById("winner").innerHTML = "DRAW";
    }
}
let currentTheme = 'light';
function theme(){
    //theme changer
    if(currentTheme === 'light'){
        document.body.classList.add('dark-theme');
        currentTheme = 'dark';
    }
    else{
        document.body.classList.remove('dark-theme');
        currentTheme = 'light';
    }
}

function footheme(){
        //theme changer
        document.getElementByClass("footer").style.backgroundColor = "pink";
        document.getElementByClass("footer").style.color = "black";
}