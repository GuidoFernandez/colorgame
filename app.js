var numSquares=6

var colores=generateRandomColors(6)

var cuadrados=document.querySelectorAll(".square")

var h1=document.querySelector('h1')

var colorDisplay=document.querySelector("#colorDisplay")

var message=document.querySelector("#message")

var resetBtn=document.querySelector('#reset')

var modeBtn=document.querySelectorAll(".mode")

var pickedColor=pickColor()

 colorDisplay.textContent=pickColor()

resetBtn.addEventListener("click",function(){
    reset()
})

for(var i=0 ; i<=cuadrados.length;i++){
    cuadrados[i].style.background=colores[i]
    cuadrados[i].addEventListener("click",function(){
        var clickedColor=this.style.background
        console.log("clicked",clickedColor,"picked",pickedColor)
        if(clickedColor===pickedColor){
            message.textContent="Corectooo!!"
            changeColors(clickedColor)
            h1.style.backgroundColor=clickedColor
        }else{
            this.style.background="#232323"
            message.textContent="Intenta de nuevo!"
        }
    })
}

function changeColors(color){
    for(var i=0;i<cuadrados.length;i++){
        for(var i=0;i<cuadrados.length;i++){
        cuadrados[i].style.background=color
        }
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colores.length)
    return colores[random]
}

function generateRandomColors(num){
    var array=[]
    for(var i =0 ; i<num ; i++){
        array[i]=randomColor()
    }
return array
}

function randomColor(){
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
return "rgb("+r+", "+g+", "+b+")"
}

function reset(){
    console.log("reset")
    colores=generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor
    for(var i=0; i<cuadrados.length;i++){
        if(colores[i]){
            cuadrados[i].style.background=colores[i]
            cuadrados[i].style.display="block"
        }else{
            cuadrados[i].style.display="none"
        }
        h1.style.backgroundColor="steelblue"
    }
    message.textContent=""
}
    


for(var i=0 ; i<=modeBtn.length;i++){
    modeBtn[i].addEventListener("click", function(){             
            modeBtn[0].classList.remove("selected")
           modeBtn[1].classList.remove("selected")
           this.classList.add("selected")
            numSquares=(this.textContent==="Easy"? 3 : 6)
            reset()
     })
}