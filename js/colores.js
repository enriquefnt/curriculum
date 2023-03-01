/*
const box = document.getElementsByClassName('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});*/

document.getElementById("box").addEventListener("mouseover", function() {
    document.getElementById("box").style.backgroundColor = "rgb(10, 160, 140)";
});
    
document.getElementById("box").addEventListener("mouseout", function() {
    document.getElementById("box").style.backgroundColor = "rgb(85, 185, 130)";
});

document.getElementById("box2").addEventListener("mouseover", function() {
    document.getElementById("box2").style.backgroundColor = "rgb(10, 160, 140)";
});
    
document.getElementById("box2").addEventListener("mouseout", function() {
    document.getElementById("box2").style.backgroundColor = "rgb(85, 185, 130)";
});

document.getElementById("box3").addEventListener("mouseover", function() {
    document.getElementById("box3").style.backgroundColor = "rgb(10, 160, 140)";
});
    
document.getElementById("box3").addEventListener("mouseout", function() {
    document.getElementById("box3").style.backgroundColor = "rgb(85, 185, 130)";
});