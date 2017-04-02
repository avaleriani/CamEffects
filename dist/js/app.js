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
        captureIntervalTime: 45, //Number of ms between capturing images from the stream
        captureWidth: 1024, //Width of captured images from stream
        captureHeight: 768, //Height of capture images from stream
        pixelDiffThreshold: 64, //Minimum difference in a pixel to be considered changed
        scoreThreshold: 32,  //	Minimum number of changed pixels for an image to be considered as having motion
        diffWidth: 640, //Width of (usually downsized) images used for diffing and showing motion
        diffHeight: 480 //Height of (usually downsized) images used for diffing and showing motion
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
