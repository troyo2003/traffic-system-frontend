// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Emergency Buttons
function sendSOS() {
    alert("SOS Message Sent to Emergency Contacts!");
}

function callPolice() {
    alert("Calling Police...");
    window.location.href = "tel:100";
}

function playAlarm() {
    const alarm = new Audio("alarm-sound.mp3");
    alarm.play();
    alert("Loud Alarm Activated!");
}

// Fetch Routes (Same Logic)
document.getElementById("fetchRoutesBtn").addEventListener("click", () => {
    const destination = document.getElementById("destination").value;

    if (!destination) {
        alert("Please enter a destination.");
        return;
    }

    const routes = [
        { mode: "Bus", time: "15 mins", reliability: "High" },
        { mode: "Train", time: "10 mins", reliability: "Medium" },
        { mode: "Walking", time: "30 mins", reliability: "High" },
        { mode: "Bicycle", time: "20 mins", reliability: "Medium" }
    ];

    const tableBody = document.querySelector("#routeTable tbody");
    tableBody.innerHTML = ""; // Clear old data

    routes.forEach(route => {
        const row = `
            <tr>
                <td>${route.mode}</td>
                <td>${route.time}</td>
                <td>${route.reliability}</td>
                <td><button onclick="redirectToGoogleMaps('${destination}', '${route.mode}')">Select</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
});

function redirectToGoogleMaps(destination, mode) {
    const travelMode = mode.toLowerCase();
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=${travelMode}`;
    window.open(url, "_blank");
}



