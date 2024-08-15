// Sample data for mentors and availability
const mentors = {
    "fmcg-sales": [
        { name: "Manish Shah", availableSlots: ["7:00 PM - 7:30 PM", "7:30 PM - 8:00 PM"] },
        { name: "Priyanka Bansal", availableSlots: ["8:00 PM - 8:30 PM", "8:30 PM - 9:00 PM"] }
    ],
    "equity-research": [
        { name: "Anurag Pathak", availableSlots: ["6:00 PM - 6:30 PM", "6:30 PM - 7:00 PM"] },
        { name: "D.S.Shahakar", availableSlots: ["7:30 PM - 8:00 PM", "8:00 PM - 8:30 PM"] }
    ],
    "digital-marketing": [
        { name: "Rohini Surve", availableSlots: ["5:00 PM - 5:30 PM", "5:30 PM - 6:00 PM"] }
    ]
};

function handleFormSubmission(event) {
    event.preventDefault();

    const area = document.getElementById('area').value;
    const preferredMentor = document.getElementById('mentor').value.trim();
    const duration = document.getElementById('duration').value;

    let selectedMentor;
    let availableSlot;

    if (preferredMentor) {
        // Find the preferred mentor if specified
        const mentor = mentors[area].find(m => m.name.toLowerCase() === preferredMentor.toLowerCase());
        if (mentor) {
            selectedMentor = mentor;
            availableSlot = mentor.availableSlots[0]; // Assume the first slot is chosen for simplicity
        } else {
            alert("Preferred mentor not available. Selecting a random available mentor.");
        }
    }

    // If no preferred mentor or not available, select any available mentor
    if (!selectedMentor) {
        for (const mentor of mentors[area]) {
            if (mentor.availableSlots.length > 0) {
                selectedMentor = mentor;
                availableSlot = mentor.availableSlots[0];
                break;
            }
        }
    }

    if (selectedMentor && availableSlot) {
        const sessionDetails = `Mentor: ${selectedMentor.name}, Area: ${area}, Slot: ${availableSlot}, Duration: ${duration} minutes`;

        // Calculate the payment amount
        let amount;
        if (duration === "30") {
            amount = 2000;
        } else if (duration === "45") {
            amount = 3000;
        } else if (duration === "60") {
            amount = 4000;
        }

        document.getElementById('session-details').innerText = sessionDetails;
        document.getElementById('total-amount').innerText = `Total Amount: ₹${amount}`;
        document.getElementById('confirmation').style.display = "block";

        // Remove the selected slot to simulate booking
        selectedMentor.availableSlots.shift();
    } else {
        alert("No mentors available for the selected area. Please try another time or area.");
    }
}

function confirmSession() {
    alert("Session confirmed! Redirecting to payment...");
    // Add payment processing logic here
}

 