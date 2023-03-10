async function fetchData(url) {
  const result = await fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log("data", data);
      return data;
    });

  const elementIds = [
    ["heading1", "image1", "desc1", "price1"],
    ["heading2", "image2", "desc2", "price2"],
    ["heading3", "image3", "desc3", "price3"],
    ["heading4", "image4", "desc4", "price4"],
  ];

  for (let i = 0; i < elementIds.length; i++) {
    for (let j = 0; j < elementIds[i].length; j++) {
      document.getElementById(elementIds[i][0]).innerHTML = result[i].name;
      document.getElementById(elementIds[i][1]).src = result[i].img_url;
      document.getElementById(elementIds[i][2]).innerHTML =
        result[i].description;
      document.getElementById(elementIds[i][3]).innerHTML = result[i].price;
    }
  }
}

// const myImage = new Image(100, 200);
// myImage.src = "/images/pankackes.jpg";
// document.body.getElementById(image1).appendChild(myImage);

function btn1Pressed() {
  fetchData("http://localhost:3000/breakfast");
}
function btn2Pressed() {
  fetchData("http://localhost:3000/lunch");
}
function btn3Pressed() {
  fetchData("http://localhost:3000/dinner");
}
function btn4Pressed() {
  fetchData("http://localhost:3000/drinks");
}

function onClickButton1(btnNum) {
  console.log("btnNum", btnNum);
  switch (btnNum) {
    case 1:
      btn1Pressed();
      break;

    case 2:
      btn2Pressed();
      break;

    case 3:
      btn3Pressed();
      break;

    case 4:
      btn4Pressed();
      break;
    default:
      btn1Pressed();
      break;
  }
}
