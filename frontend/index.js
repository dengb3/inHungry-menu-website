// General idea for data
// title id1 = resArray[0].name
// url id1 = resArray[0].img_url
// description id1 = resArray[0].description


document.getElementById("btn1").addEventListener("click", btn1Pressed);

function btn1Pressed() {
    fetch("http://localhost:3000/breakfast")
    .then((response) => response.json())
    .then((data) => console.log(data));
};