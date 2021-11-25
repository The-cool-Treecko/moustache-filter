var nose_x;
var nose_y; 

function preload() {
    noseImg = loadImage("https://i.postimg.cc/vH3qYRwG/THE-MOUSTACHE-EQUATION-04.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = "+nose_x);
        console.log("nose y = "+nose_y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(noseImg,nose_x-25, nose_y+5,50,30);
}

function saveImg() {
    save("image.png");
}