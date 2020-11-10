// SCAN
async function faceDetection() {
    const loading = document.querySelector(".loading");
    loading.style.display = "flex";

    // Access-Control-Allow-Origin 
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');

    const input = document.getElementById("image");
    const detection = await faceapi.detectSingleFace(input).withFaceLandmarks();

    const displaySize = {width: input.width, height: input.height};
    const resizedDetection = faceapi.resizeResults(detection, displaySize);

    const mask = document.getElementById("mask");
    const {landmarks} = resizedDetection;
    const { imageWidth, positions } = landmarks;

    const { _x: x, _y: y } = positions[1];

    const height = Math.sqrt(
        Math.pow(position[1]._x - position[8]._x, 2) + 
            Math.pow(position[1]._y - position[8]._y, 2)
    );
    
    mask.width = imageWidth;
    mask.height = height * 0.9;
    mask.style.transform = `translate(${x + imageWidth * 0.03}px,
        ${y - height * 0.05}px)`;

    loading.style.display = "none";
    mask.style.opacity = 1;
}

faceDetection();