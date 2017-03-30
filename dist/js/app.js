var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
var stopBtn = document.getElementById('stopBtn');
var DiffCam = null;

function init() {
    DiffCamEngine.init({
        video: video, //The <video> element for showing the live webcam stream
        motionCanvas: canvas, //The <canvas> element for showing the visual motion heatmap
        initSuccessCallback: initSuccess,
        initErrorCallback: initError,
        captureCallback: capture,
        captureIntervalTime: 100, //Number of ms between capturing images from the stream
        captureWidth: 800, //Width of captured images from stream
        captureHeight: 600, //Height of capture images from stream
        pixelDiffThreshold: 100, //Minimum difference in a pixel to be considered changed
        scoreThreshold: 64,  //	Minimum number of changed pixels for an image to be considered as having motion
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
