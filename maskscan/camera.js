const cameraBtn = document.getElementById("camera-anchor");

cameraBtn.onclick = () => {
  

    const canvas = document.querySelector("#defaultCanvas0");
    // scale the canvas accordingly
    const video = document.querySelector("video");
    // draw the video at that frame
    canvas.getContext('2d')
    .drawImage(video, 0, 0, video.width, video.height);
    // convert it to a usable data URL
    const dataURL = canvas.toDataURL();

    sessionStorage.setItem("img-taken", dataURL);

    window.location.href = "/edit.html";
}