<script>
       // JavaScript to display the current time
       function updateTime() {
           const currentTimeElement = document.getElementById("current-time");
           const now = new Date();
           const hours = now.getHours().toString().padStart(2, "0");
           const minutes = now.getMinutes().toString().padStart(2, "0");
           const seconds = now.getSeconds().toString().padStart(2, "0");
           currentTimeElement.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
       }

       // Update the time every second
       setInterval(updateTime, 1000);

       // Initial call to display the time
       updateTime();
</script>
