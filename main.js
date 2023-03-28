var filtro
var noseX = 0
var noseY = 0

function preload(){
 filtro = loadImage("filtro.png")
}

function setup(){
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("modelo carregado")
}

function gotPoses(results){
 if(results.length > 0){
    noseX = results[0].pose.nose.x-100
    noseY = results[0].pose.nose.y-150
    console.log(noseX, noseY)
 }
 
}

function draw(){
    image(video, 0, 0, 400, 400)
    image(filtro, noseX, noseY, 200, 200)
    tint("pink")
}

function tirar_foto(){
    save("gatinho(a).png")
}
