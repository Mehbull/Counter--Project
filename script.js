var counter = document.querySelector(".counter");
var Followers = document.querySelector(".Followers");
console.log("Test")

let count =1;
setInterval(()=>{
   if (count < 1000) {
    count++;
    counter.innerHTML = count;
   }
} ,1)

setTimeout(()=>{
    Followers.innerText = "Follwers in Instagram!";
}, 5000);


