function addCurrentTime() {
  const timeContainer = document.getElementById("time");
  const messageDiv = document.getElementById("message");
  const button = document.getElementById("restButton");

  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const currentTime = `${hours}:${minutes}:${seconds}`;

    if (timeContainer) timeContainer.textContent = currentTime;
    console.log(currentTime);
  };

  updateTime();
  setInterval(updateTime, 1000);


  button.addEventListener("click", () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const currentTime = `${hours}:${minutes}:${seconds}`;
    messageDiv.textContent = `Now: ${currentTime} — It's the time when your rest time have to begin ;-) !`;
  });
}

window.addEventListener("load", addCurrentTime);
