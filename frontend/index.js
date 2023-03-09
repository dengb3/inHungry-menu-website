// General idea for data
// title id1 = resArray[0].name
// url id1 = resArray[0].img_url
// description id1 = resArray[0].description

async function fetchData(url) {
  const result = await fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log("data", data);
      return data;
    });
  //document.getElementById("heading1").innerHTML = result[0].name;
  //document.getElementById("image1").innerHTML = result[0].name;
  //document.getElementById("heading1").innerHTML = result[0].name;
  //document.getElementById("heading1").innerHTML = result[0].name;
  const elementIds = [
    ["heading1", "image1", "desc1", "price1"],
    ["heading2", "image2", "desc2", "price2"],
    ["heading3", "image3", "desc3", "price3"],
    ["heading4", "image4", "desc4", "price4"],
  ];
  for (let i = 0; i < elementIds.length - 1; i++) {
    for (let j = 0; j < elementIds[i].length - 1; j++) {
      console.log("result[i].name", result[i].name);
      console.log("result[i].img_url", result[i].img_url);
      console.log("result[i].description", result[i].description);
      console.log("result[i].price", result[i].price);
      document.getElementById(elementIds[i][j]).innerHTML = result[i].name;
      document.getElementById(elementIds[i][j]).innerHTML = result[i].img_url;
      document.getElementById(elementIds[i][j]).innerHTML =
        result[i].description;
      document.getElementById(elementIds[i][j]).innerHTML = result[i].price;
    }
  }
}

function btn1Pressed() {
  fetchData("http://localhost:3000/breakfast");
}
function onClickButton1() {
  btn1Pressed();
}

//   document.getElementById("heading1").innerHTML = data[0].name
