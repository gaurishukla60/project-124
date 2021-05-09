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
    }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
        }
    }
