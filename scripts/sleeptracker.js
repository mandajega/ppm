// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

function addSleep() {
    // Get the input values
    var date = document.getElementById("date").value;
    var hours = parseFloat(document.getElementById("hours").value);
  
    // Calculate the sleep quality based on the number of sleep hours
    var quality;
    if (hours >= 8) {
      quality = 5; // Excellent
      remark = "Excellent";
    } else if (hours >= 7) {
      quality = 4; // Good
      remark = "Good";
    } else if (hours >= 6) {
      quality = 3; // Fair
      remark = "Fair";
    } else if (hours >= 5) {
      quality = 2; // Poor
      remark = "Poor";
    } else {
      quality = 1; // Very Poor
      remark = "Very Poor";
    }
  
    // Record the sleep log
    var sleepLog = document.getElementById("log");
    var sleepEntry = document.createElement("li");
    sleepEntry.textContent = "Date: " + date + " | Hours of Sleep: " + hours + " | Sleep Quality: " + quality + 
     " | Remarks : " + remark;
    sleepLog.appendChild(sleepEntry);
  
    // Calculate and display the average sleep quality
    calculateAverageQuality();
  }
  
  function calculateAverageQuality(){
    var sleepEntries = document.querySelectorAll("#log li");
    var totalQuality = 0;
  
    // Calculate the sum of sleep qualities
    for (var i = 0; i < sleepEntries.length; i++) {
      var entryText = sleepEntries[i].textContent;
      var quality = parseInt(entryText.substring(entryText.lastIndexOf("Quality: ") + 9));
      totalQuality += quality;
    }
  
    // Calculate the average sleep quality
    var averageQuality = totalQuality / sleepEntries.length;
  
    // Display the average sleep quality
    var averageElement = document.getElementById("average");
    averageElement.textContent = "Average Sleep Quality: " + averageQuality.toFixed(2);
  }