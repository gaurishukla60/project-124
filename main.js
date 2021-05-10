
leftwristx=0;
rightwristx=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(650,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("posenet is started");
}
function draw()
    {
      background('#663046');
      fill('#A91BOD');
      text('Gauri',50,400);
     textSize(difference);
     }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            leftwristx=results[0].pose.leftWrist.x;
            rightwristx=results[0].pose.rightWrist.x;
            console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx);
            difference=floor(leftwristx-rightwristx);
        }

    }
