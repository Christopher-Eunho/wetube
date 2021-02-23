import regeneratorRuntime from "regenerator-runtime"; //https://github.com/babel/babel/issues/9849

const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;


const startRecording = () => {
    // Recorded data are available once the recording is finished.
    videoRecorder = new MediaRecorder(streamObject); 
    videoRecorder.start() // parameter means how often(milli sec) it will save the data
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);

}

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = "Start recording";
}

const handleVideoData = (event) => {
    const {data : videoFile} = event; // same as videoFile = event.data;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile); // Create an url from the recorded videoFile
    link.download = "recorded.webm"; // the name of the file. webm is an open source for videos
    document.body.appendChild(link);
    link.click(); // made up click to down load the link I created.
}

//use media api MediaDevices to record with users' camera
const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { width: 1280, height: 720 }
      });
      videoPreview.srcObject = stream;
      videoPreview.muted = true;
      videoPreview.play();
      recordBtn.innerHTML = "Stop recording";
      streamObject = stream;
      startRecording();
    } catch (error) {
        console.log(error);
    
      recordBtn.innerHTML = "☹️ Cant record";
      
    } finally {
        recordBtn.removeEventListener("click", getVideo);  
    }
  };

function init() {
    recordBtn.addEventListener("click", getVideo);
}


if (recorderContainer){
    init();
}