srk = 'Darr Kiran.mp3';
bshah = 'shehar ki ladki.mp3';
lx = 0;
ly = 0;
rx = 0;
ry = 0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(425, 210);

    camera = createCapture(VIDEO);
    camera.position(canvas.x, canvas.y);

    poseNet = ml5.poseNet('posenet', modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload() {
    loadSound(srk);
    loadSound(bshah);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log('Got Results');
        console.log(result);

        lx = result[0].pose.leftWrist.x;
        ly = result[0].pose.leftWrist.y;
        rx = result[0].pose.rightWrist.x;
        ry = result[0].pose.rightWrist.y;
    }
}