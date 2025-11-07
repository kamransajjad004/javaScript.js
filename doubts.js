// Switch Case
/* difference */ "./22.js"

for (let i = 1; i <= 5; i++){
    let row = "";
    console.log(row, "Outer loop");
    for (let j = 1; j <= i; j++){
        row += "* ";
        console.log(row, "Inner loop");
    }
    console.log(row,"answer");
}