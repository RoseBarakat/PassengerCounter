//document.getElementById("count").innerText = 5;
let saveT = document.getElementById("save")
let countT = document.getElementById("count")
let T= document.getElementById("textt")
let count = 0

function increment(){
count = count  + 1
countT.innerText = count
console.log(count)

}
function Save(){
let count1 = count + "-"
T.textContent = T.textContent + count1
countT.innerText = 0
count = 0
}
