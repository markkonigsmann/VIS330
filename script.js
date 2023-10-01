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


// Function to display the user's current location
       function showLocation(position) {
           const latitude = position.coords.latitude;
           const longitude = position.coords.longitude;

           // Display the location on the page
           const locationElement = document.getElementById("location");
           locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
       }

       // Function to handle location retrieval error
       function showError(error) {
           const locationElement = document.getElementById("location");
           switch (error.code) {
               case error.PERMISSION_DENIED:
                   locationElement.textContent = "User denied the request for geolocation.";
                   break;
               case error.POSITION_UNAVAILABLE:
                   locationElement.textContent = "Location information is unavailable.";
                   break;
               case error.TIMEOUT:
                   locationElement.textContent = "The request to get user location timed out.";
                   break;
               case error.UNKNOWN_ERROR:
                   locationElement.textContent = "An unknown error occurred.";
                   break;
           }
       }

       // Check if geolocation is supported by the browser
       if ("geolocation" in navigator) {
           // Get the user's location
           navigator.geolocation.getCurrentPosition(showLocation, showError);
       } else {
           const locationElement = document.getElementById("location");
           locationElement.textContent = "Geolocation is not supported by this browser.";
       }
