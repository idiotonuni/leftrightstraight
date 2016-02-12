$(document).ready(function() {
    //set the width the the height to make a square
    //$(".arrow").width($(".arrow").height());
    var supportsVibrate = "vibrate" in navigator;
    $('.icon').click(function() {
        if (supportsVibrate) {
            navigator.vibrate(100);
        }
        var rand = Math.random();
        var randomColor = '#'+(Math.random().toString(16) + '000000').slice(2, 8);
        $("body").css("background-color",randomColor);
        $('meta[name=theme-color]').attr('content', randomColor);
        if(rand < .333){
            if(getText() == "Left"){
                setLeft("Still Left");
            }else if(getText() == "Still Left"){
                setLeft("Still Left...");
            }else if(getText() == "Still Left..."){
                setLeft("Seriously Still Left");
            }else if(getText() == "Seriously Still Left"){
                rand = Math.random();
                if(rand < .5){
                    setRight();
                }else{
                    setStraight();
                }
            }else{
                setLeft();
            }
        }else if(rand < .666){
            if(getText() == "Straight"){
                setStraight("Still Straight");
            }else if(getText() == "Still Straight"){
                setStraight("Still Straight...");
            }else if(getText() == "Still Straight..."){
                setStraight("Seriously Still Straight");
            }else if(getText() == "Seriously Still Straight"){
                rand = Math.random();
                if(rand < .5){
                    setRight();
                }else{
                    setLeft();
                }
            }else{
                setStraight();
            }
        }else{
            if(getText() == "Right"){
                setRight("Still Right");
            }else if(getText() == "Still Right"){
                setRight("Still Right...");
            }else if(getText() == "Still Right..."){
                setRight("Seriously Still Right");
            }else if(getText() == "Seriously Still Right"){
                rand = Math.random();
                if(rand < .5){
                    setLeft();
                }else{
                    setStraight();
                }
            }else{
                setRight();
            }
        }
    });
    function setRight(directionString){
        $(".arrow").css("transform","rotate(0deg)");
        if(arguments.length==0){
            setText("Right");
        }else{
            setText(directionString);
        }
    }
    function setLeft(directionString){
        $(".arrow").css("transform","rotate(-180deg)");
        if(arguments.length==0){
            setText("Left");
        }else{
            setText(directionString);
        }
    }
    function setStraight(directionString){
        $(".arrow").css("transform","rotate(-90deg)");
        if(arguments.length==0){
            setText("Straight");
        }else{
            setText(directionString);
        }
    }
    function setText(directionString){
        $(".text").text(directionString);
    }
    function getText(){
        return $(".text").text();
    }
});
