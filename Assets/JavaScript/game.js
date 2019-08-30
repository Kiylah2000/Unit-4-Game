 $(document).ready(function(){
    var pink, blue, green, red = 0;
    var userScore = 0;
    var targetScore = 0;
    var win =0;
    var loss = 0;

    function reset(){
    pink = Math.floor(Math.random()*12)+1;
    blue = Math.floor(Math.random()*12)+1;
    green = Math.floor(Math.random()*12)+1;
    red = Math.floor(Math.random()*12)+1;
    userScore = 0;

    targetScore = Math.floor(Math.random()*121)+19;

    console.log(targetScore);
    }

    reset();

    // Here we created an on-click event that responds to button clicks of the crystal image.
    $(".Diamond").on("click", function() {
    var color = $(this).attr("data-color");
    console.log("Diamond Color: "+color);

   if(color==="pink"){
       userScore += pink;
       console.log("New user score:"+userScore);
       $("#uscore").text(userScore);

       if(userScore === targetScore){
           win++;

           reset();
       }
       
       if(userScore > targetScore){
           loss++;

           reset();
       }
       if(color==="blue"){
        userScore += blue;
        console.log("New user score:"+userScore);
        $("#uscore").text(userScore);
 
        if(userScore === targetScore){
            win++;
 
            reset();
        }
        
        if(userScore > targetScore){
            loss++;
 
            reset();
        }
        if(color==="red"){
            userScore += red;
            console.log("New user score:"+userScore);
            $("#uscore").text(userScore);
     
            if(userScore === targetScore){
                win++;
     
                reset();
            }
            
            if(userScore > targetScore){
                loss++;
     
                reset();
            }
            if(color==="green"){
                userScore += green;
                console.log("New user score:"+userScore);
                $("#uscore").text(userScore);
         
                if(userScore === targetScore){
                    win++;
         
                    reset();
                }
                
                if(userScore > targetScore){
                    loss++;
         
                    reset();
                }
            }
        });
