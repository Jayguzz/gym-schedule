console.log('Happy developing ✨')
// Function to toggle the visibility of the day's schedule
function toggleSchedule(day) {
    var scheduleDetails = document.getElementById(day);

    // Toggle the visibility of the schedule
    if (scheduleDetails.style.display === "none" || scheduleDetails.style.display === "") {
        scheduleDetails.style.display = "block";  // Show the schedule
    } else {
        scheduleDetails.style.display = "none";  // Hide the schedule
    }
}
