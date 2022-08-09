song = ""
song2 = ""
leftX = 0
leftY = 0
rightX = 0
rightY = 0

function setup(){
    canvas = createCanvas(600,500)
    canvas.position(450,150)

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
image(video,0,0,600,500)
}

function preload(){
    song = loadSound("song1.mp3")
    song2 = loadSound("song2.mp3")
}

function play(){
    song.play()
}

function modelLoaded(){
    console.log("model loaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftX = results[0].pose.leftWrist.x
        leftY = results[0].pose.leftWrist.y
        rightX = results[0].pose.rightWrist.x
        rightY = results[0].pose.rightWrist.y
    }
}