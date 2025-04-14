document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");
    video.play().catch((err) => {
      console.error("Autoplay failed:", err);
    });
  });
  