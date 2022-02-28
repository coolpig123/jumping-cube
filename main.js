const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 700
canvas.height = 700
ctx.fillStyle = "green"
ctx.fillRect(100,100,200,200)
var y = 50
var vel = 0
var acc = 0.05
var color
function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0;i<5;i++){
        ctx.fillRect(i*80+150,y,50,50)
        
    }
    if(y >= canvas.height-50){
        vel = -8
        color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()
        ctx.fillStyle = color
        canvas.style.border = "5px solid "+color
    }
    
    y += vel
    vel += acc
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop())