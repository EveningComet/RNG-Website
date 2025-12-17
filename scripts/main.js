// Will be used to create the preset buttons
const presetRNGRolls = [
  4,
  6,
  8,
  10,
  12,
  20,
  100
];

// When the page finishes loading, generate the buttons
window.onload = function() {
  setup()
};

function setup() {
  setupPresetRNGButtons();
}

function setupPresetRNGButtons() {
  for(let i = 0; i < presetRNGRolls.length; i++) {
    // Create the button
    let pRNGBtn = document.createElement("button");
    pRNGBtn.innerText = "D" + presetRNGRolls[i];
    pRNGBtn.value = presetRNGRolls[i]
    
    // Make the button a child of the proper container
    document.getElementById("presetRNGButtonsContainer").appendChild(pRNGBtn);
    
    // Register the events and all that jazz
    pRNGBtn.onclick = function() {
      rngBtnClicked(pRNGBtn)
    };
  }
}

function rngBtnClicked(pRNGBtn) {
  let displayText = document.getElementById("presetRollValue");
  let result = Math.floor(Math.random() * pRNGBtn.value) + 1;
  displayText.innerText = result;
}