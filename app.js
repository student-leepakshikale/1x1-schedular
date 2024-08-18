// Get the modal popup containers
var signInModal = document.getElementById("signInModal");
var registerModal = document.getElementById("registerModal");

// Get the buttons to trigger the modal popups
var signInButton = document.getElementById("signInButton");
var registerButton = document.getElementById("registerButton");

// Get the close buttons
var closeModal = document.getElementById("closeModal");
var closeRegisterModal = document.getElementById("closeRegisterModal");

// Get the links to switch between sign in and register
var registerLink = document.getElementById("registerLink");
var signInLink = document.getElementById("signInLink");

// When the user clicks the sign in button, open the sign in modal popup
signInButton.addEventListener("click", function() {
  signInModal.style.display = "block";
});

// When the user clicks the register button, open the register modal popup
registerButton.addEventListener("click", function() {
  registerModal.style.display = "block";
});

// When the user clicks the close button, close the modal popup
closeModal.addEventListener("click", function() {
  signInModal.style.display = "none";
});

closeRegisterModal.addEventListener("click", function() {
  registerModal.style.display = "none";
});

// When the user clicks outside the modal popup, close it
window.addEventListener("click", function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
});

// When the user clicks the register link, switch to the register modal popup
registerLink.addEventListener("click", function() {
  signInModal.style.display = "none";
  registerModal.style.display = "block";
});

// When the user clicks the sign in link, switch to the sign in modal popup
signInLink.addEventListener("click", function() {
  registerModal.style.display = "none";
  signInModal.style.display = "block";
});

// Add event listeners to the form submit buttons
document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // TO DO: Add sign in logic here
  console.log("Sign in form submitted");
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // TO DO: Add register logic here
  console.log("Register form submitted");
});












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

 