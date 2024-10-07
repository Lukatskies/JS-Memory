// Define witch object with characteristics //
const witch = {
    name: "Severus Snape",  
    age: 43,                
    healthPoints: 85,       
    isGood: false,          
    hatColor: "Black",      
    manaPoints: 100,        
    hasBroomstick: true,    
    familiarType: "Cat",    
    level: 5,               
    goodAtMagic: true       
};
// Display witch characteristics in HTML //
function displayCharacteristics() {
    const paragraphs = document.querySelectorAll(".container p");
    paragraphs[0].textContent = witch.name;          
    paragraphs[1].textContent = witch.age;           
    paragraphs[2].textContent = witch.healthPoints;   
    paragraphs[3].textContent = witch.isGood ? "Good" : "Evil"; 
    paragraphs[4].textContent = witch.hatColor;      
    paragraphs[5].textContent = witch.manaPoints;   
    paragraphs[6].textContent = witch.hasBroomstick ? "Yes" : "No"; 
    paragraphs[7].textContent = witch.familiarType;  
    paragraphs[8].textContent = witch.level;         
    paragraphs[9].textContent = witch.goodAtMagic ? "Yes" : "No"; 
}
    // Function to display characteristics //
displayCharacteristics();