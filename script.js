// Select inputs and list
const stepInput = document.getElementById("step-input");
const addStepBtn = document.getElementById("add-step");
const stepsList = document.getElementById("steps-list");

// Add new step
addStepBtn.addEventListener("click", () => {
    const text = stepInput.value.trim();
    if(text !== ""){
        const step = createStep(text);
        stepsList.appendChild(step);
        stepInput.value = "";
    }
});

// Create a step element
function createStep(text){
    const step = document.createElement("div");
    step.className = "task";
    step.textContent = text;

    // Click to mark as completed
    step.addEventListener("click", () => {
        step.classList.toggle("completed");
    });

    return step;
}

// Predefined steps to avoid drugs
const defaultSteps = [
    "Learn about the dangers of drugs",
    "Say 'No' to peer pressure",
    "Surround yourself with positive friends",
    "Find healthy hobbies",
    "Talk to a trusted adult when in trouble",
];

defaultSteps.forEach(s => stepsList.appendChild(createStep(s)));
