// try catch in javascript


try {let a = 
    console.log(a);
} catch(error) {
    // console.log(error);
    console.log("error aagaya")
    console.log(error.name, error.message);;
}

// finally

try{
    //code that might cause an error
} catch (error) {
    // Code that runs *if* an error happens
} finally {
    // code that always runs (error or not
}

try{
    let output = 10 / 0;
    console.log(output)
    console.log(output + a )
} catch (error) {
    console.log("Error");
    console.log(error.name, error.message);
} finally {
    console.log("Hello I ll be there");

// Throw

try{
    let age = 15;
    if (age < 18) {
        throw "You must be 18 older"
        // throw is alternative for console.log()
    }
    console.log("welcome");
     }