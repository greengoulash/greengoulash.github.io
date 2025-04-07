// Get the video element and text box
const videoElement = document.getElementById("mainVideo");
const textBox = document.getElementById("text-box");

// Remove box styling from the text box
textBox.style.background = "none";
textBox.style.padding = "0";
textBox.style.border = "none";
textBox.style.fontSize = "1.5em";
textBox.style.color = "white";
textBox.style.cursor = "pointer";
textBox.style.textShadow = "1px 1px 3px rgba(0,0,0,0.7)";

// Array of video sources
const videos = [
  "videos/Truism.mp4",
  "videos/Truism2.mp4",
  "videos/Truism3.mp4"
];

// Object to store playback positions
const videoPositions = {
  "videos/Truism.mp4": 0,
  "videos/Truism2.mp4": 0,
  "videos/Truism3.mp4": 0
};

// Currently playing video index
let currentVideoIndex = 0;

// Flag to track if the first click has happened
let firstClickDone = false;

// Load the initial video (muted and looped)
videoElement.src = videos[currentVideoIndex];
videoElement.muted = true;
videoElement.loop = true;
videoElement.load();

// Function to switch to a random new video
function switchVideo() {
  // On the first click, unmute
  if (!firstClickDone) {
    videoElement.muted = false;
    firstClickDone = true;
  }

  // Save the current playback position
  const currentVideo = videos[currentVideoIndex];
  videoPositions[currentVideo] = videoElement.currentTime;

  // Pick a new random video index, different from the current
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * videos.length);
  } while (newIndex === currentVideoIndex);

  // Update the current index
  currentVideoIndex = newIndex;
  const newVideo = videos[currentVideoIndex];

  // Load and set time to the saved position if any
  videoElement.src = newVideo;
  videoElement.load();
  videoElement.loop = true; // Ensure looping
  videoElement.onloadedmetadata = () => {
    videoElement.currentTime = videoPositions[newVideo] || 0;
    videoElement.play();
  };
}

// Add click event to the text box
textBox.addEventListener("click", switchVideo);