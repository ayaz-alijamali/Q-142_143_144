// Question ________________________ 142


const delayedHello = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000); // 2000 milliseconds = 2 seconds
  });
  
  // Using the Promise
  delayedHello.then((message) => {
    console.log(message); // Output: Hello, World!
  });

  
  // Question ________________________ 143


  // Define a function that returns a Promise
function divideNumbers(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject(new Error("Division by zero is not allowed."));
      } else {
        resolve(a / b);
      }
    });
  }
  
  // Using the Promise with .then() and .catch()
  divideNumbers(10, 5)
    .then((result) => {
      console.log("Result:", result); // Output: Result: 2
    })
    .catch((error) => {
      console.error("Error:", error.message); // Output: Error: Division by zero is not allowed.
    });
  
  divideNumbers(8, 0)
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error.message); // Output: Error: Division by zero is not allowed.
    });

    
    // Question _________________________ 144


    // Example asynchronous functions (simulated API calls)
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data from API 1"), 2000); // Simulating a 2-second delay
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data from API 2"), 1500); // Simulating a 1.5-second delay
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data from API 3"), 1000); // Simulating a 1-second delay
    });
  }
  
  // Using Promise.all()
  Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
      console.log("All data fetched successfully:", results);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  