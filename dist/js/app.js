var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
var stopBtn = document.getElementById('stopBtn');
var DiffCam = null;

var screenWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var screenHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

function init() {
    DiffCamEngine.init({
        video: video, //The <video> element for showing the live webcam stream
        motionCanvas: canvas, //The <canvas> element for showing the visual motion heatmap
        initSuccessCallback: initSuccess,
        initErrorCallback: initError,
        captureCallback: capture,
        captureIntervalTime: 100, //Number of ms between capturing images from the stream
        captureWidth: screenWidth - 150, //Width of captured images from stream
        captureHeight: screenHeight - 150, //Height of capture images from stream
        pixelDiffThreshold: 120, //Minimum difference in a pixel to be considered changed
        scoreThreshold: 85,  //	Minimum number of changed pixels for an image to be considered as having motion
        diffWidth: 800, //Width of (usually downsized) images used for diffing and showing motion
        diffHeight: 600 //Height of (usually downsized) images used for diffing and showing motion
    });
}


function initSuccess() {
    DiffCamEngine.start();
    stopButton(DiffCamEngine);
}

function stopDiffCam() {
    DiffCamEngine.stop();
}


function initError() {
    alert('Error.');
}

function capture(payload) {
    score.textContent = payload.score;
}

function stopButton(DiffCamEngine) {
    stopBtn.addEventListener('click', function () {
        DiffCamEngine.stop();
        score.textContent = 0;
    });
}


init();
