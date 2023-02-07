var noseX = 0
var noseY = 0
var diference = 0
var rightWristX = 0
var leftWristX = 0

function setup() {
    var video = createCapture(VIDEO)
    video.size(550,500)
    var canvas = createCanvas(550,550)
    var posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Modelo foi carregado com sucesso!")
}

function gotPoses(results, error) {
    if (error) {
         console.log(error)
    }
    if (results.length>0) {
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        rightWristX = results[0].pose.rightWrist.x
        leftWristX = results[0].pose.leftWrist.x
        diference = Math.floor(leftWristX - rightWristX)
    }
}

function draw() {
    background("black")
    fill("black")
    stroke("white")
    square(noseX, noseY, diference)
}