function setup() {
  // Get the canvas that Processing-js will use
  let canvas = createCanvas(400, 400);
  canvas.parent('canvasContainer');
}

//button to main
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('mainButton');
  button.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:3000/MainPage/index.html"; // Replace with your desired URL
  });
});

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }


  //Webcam code
  const videoElement = document.getElementById('videoElement');
  const canvasElement = document.getElementById('canvasElement');
  const photoElement = document.getElementById('photoElement');
  const startButton = document.getElementById('startButton');
  const captureButton = document.getElementById('captureButton');
  const stopButton = document.getElementById('stopButton');
  const downloadButton = document.getElementById('downloadButton');

  let stream;
  
  async function startWebcam() {
      try {
          stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoElement.srcObject = stream;
          startButton.disabled = true;
          captureButton.disabled = false;
          stopButton.disabled = false;
          downloadButton.disabled = true;
      } catch (error) {
          console.error('Error accessing webcam:', error);
      }
  }
  
  startButton.addEventListener('click', startWebcam);
  
  function capturePhoto() {
      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;
      canvasElement.getContext('2d').drawImage(videoElement, 0, 0);
      const photoDataUrl = canvasElement.toDataURL('image/jpeg');
      photoElement.src = photoDataUrl;
      photoElement.style.display = 'block';
      downloadButton.disabled = false;
  }
  captureButton.addEventListener('click', capturePhoto);

  function stopWebcam() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null;
        startButton.disabled = false;
        captureButton.disabled = true;
        stopButton.disabled = true; 
        downloadButton.disabled = true;
    }
}
  stopButton.addEventListener('click', stopWebcam);

  function downloadPhoto() {
    const link = document.createElement('a');
    link.href = photoElement.src;
    link.download = 'captured_photo.jpg';
    link.click();
    photoElement.style.display = 'none'; // Hide the photo after downloading
    downloadButton.disabled = true; // Disable download button after downloading
  }
  downloadButton.addEventListener('click', downloadPhoto);
  