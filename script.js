var c = document.getElementById('c')
var ctx = c.getContext('2d');
        var bird = new Image(); //create a bird
        bird.src = "bird.png" 
        var scor = new Audio();
       scor.src = "score.wav";
       var die = new Audio();
       die.src = "die.wav";
       var flap = new Audio();
       flap.src = "flap.wav";
       var hit = new Audio();
       hit.src = "hit.wav";
       var bX = 0;
       var bDY = 0;
       var score = 0;
       var bestScore = 0; 
       var interval = 30;
       var bSize = 30;
       var pillarWidth = 30;
       var NorthPillarBottomY = 30;
       var bY = 250;
       var gap = 250;  
       var canvasSize = 500;
       var pillarX = 500;
        c.onclick = () => ((bDY = 9), (flap.play()))
        setInterval(() => {
             ctx.fillStyle = "#009A17";
            ctx.fillRect(0, 0, canvasSize, canvasSize); //Draw grass green
            bY -= bDY -= 1; // Gravity
            ctx.drawImage(bird, bX, bY, bSize * (1.5), bSize); // Draw bird
            ctx.fillStyle = "red";
            pillarX -= 12;
            pillarX < -pillarWidth && ((pillarX = canvasSize), (NorthPillarBottomY = gap * Math.random()));
            ctx.fillRect(pillarX, 0, pillarWidth, NorthPillarBottomY); //Draw top pipe
            ctx.fillRect(pillarX, NorthPillarBottomY + gap, pillarWidth, canvasSize); //Draw bottom pipe
            ctx.fillStyle = "black"
            ctx.fillText(`Score: ${score}`, 20, 35); score++;scor.play();
            bestScore = bestScore < score ? score : bestScore;
            ctx.fillText(`Best: ${bestScore}`, 20, 60);
            (((bY < NorthPillarBottomY || bY > NorthPillarBottomY + gap) && pillarX < bSize * (1.5)) || bY > canvasSize) && // Bird falls off screen
            ((bDY = 0), (bY = 250), (pillarX = canvasSize), (score = 0), die.play()); // Bird died
        }, interval)                     