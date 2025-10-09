console.log("start");

setTimeout(() => {
    console.log("fetching data ....")
}, 3000);

console.log("End");

//A callback is a function passed as an argument to another function which is executed later when a task is done. 

function greetUser(name, callback){
    console.log("Welcome " + name); //ternary operator 
    callback()
}

function sayGoodbye (){
    console.log("Goodbye!");
}
greetUser("focus", sayGoodbye) // saygoodbye is passed as a callback to greet(

// OR

function greet(name, callback){
    console.log("Hi " + name);
    callback()  // it will run after greeting
}
function bye(){
    console.log("Goodbye");
}
greet("DAMMy", bye) // bye is passed as a callback to greet()



function downloadFile(filename, callback) {
    console.log(`Downloading ${filename}...`);
    setTimeout(() => {
       console.log(`${filename} downloaded succesfully`);
       callback()
    }, 3000)
}
function processFile(){
    console.log("processing file");
}
downloadFile("data.zip", processFile)



// promise is an object representing a value that will be available now, later or never 
//  pending - operation still running
// fullfill- success (resolved)
// rejected - failed (error)


// let payment = new Promise((resolve, rejected) => {
//           let paymentSuccesfully = true; 

//           if (paymentSuccesfully) {
//             resolve ("payment received")
//           } else {
//             rejected("payment failed")
//           }
// })

// payment.then(message => console.log(message)) 
// .catch(error => console.log(error));




function payment(){
    return new Promise ((resolve, rejected) =>{
        console.log("payment");
        let paymentSuccesfully = true

        if (paymentSuccesfully) {
            resolve ("payment received")
          } else {
            rejected("payment failed")
          }
    })
}
payment()
.then(message => console.log(message)) 
.catch(error => console.log(error));



function fetchUserData(){
    return new Promise((resolve, rejected) =>{
        console.log("feching user data...");
        setTimeout(() => {
            let success = false 
            if (success) {
                resolve({name : "Basit", track : "Web2"})
            } else {
                rejected("Failed to fetch data")
            } 
        }, 4000 )
    })
}

fetchUserData()
.then(data => console.log("user Data", data))
.catch(err => console.log(err))
.finally(() => console.log("Done Fetching"))


// asynch /await
// The async keyword declares a function that returns a Promise, while the await keyword
//  pauses the function's execution until the Promise it's waiting for resolves,
//  yielding the result or throwing an error.

function delayMessage(){
    return new Promise(resolve => {
        setTimeout(() => resolve("This messag appears after 5secs"), 5000)
    })
}

async function showMessge() {
    console.log("starting..");
    let message = await delayMessage()
    console.log(message);
    console.log("Finished");
}
showMessge()

// OR

function loginUser(){
    return new Promise(resolve => {
        setTimeout (() => resolve("user Logged in", 1000))
    })
}
function getuserPost(){
    return new Promise(resolve => {
        setTimeout(() => resolve(["post1", "post2", "post3"]),1500)
    })
}
async function displayUserPost() {
    console.log("fetching login");
    let user = await loginUser()
    console.log(user);

    console.log("Fechting Post");
    let Post = await getuserPost()
    console.log("User Posts",Post);

    console.log("done");
}

displayUserPost()



//  Error Handling


function fetchProduct() {
    return new Promise((resolve, reject) => {
        let available = false
        setTimeout (() => {
            if (available) resolve("product fetch succesfully")
                else reject("product not available")
        }, 6000) 
    })
}

async function loadProduct() {
    try {
        let result = await fetchProduct()
        console.log(result);
    } catch(error) {
        console.error("Error:", error);
    } finally {
        console.log("process completely");
    }
}
loadProduct()


async function runTask(){
    try {
        console.log("Starting task...");
        await new Promise((resolve) => setTimeout(resolve, 1000))
            throw new Error("something went wrong ")
    } catch(error) {
        console.log("caught an error", error.message);
    } finally {
        console.log("Task Ended");
    }
}
runTask()



// real life flow example(cohort simulation)


async function joinCohort(student){
    console.log(`processing admission for ${student}`);

    try{
        let admission = await new Promise((resolve) =>{
            setTimeout(() => resolve("Admission Aproved"), 2000)
        })
            console.log(admission);

            let courseStart = await new Promise((resolve) =>{
                 setTimeout(() => resolve("course Started succcesfuly"), 1500) 
    })

        console.log(courseStart);
        } catch (error) {
            console.log("Admission Failed", error);
        }finally {
            console.log("process complete");
        }
}
joinCohort("sis")

