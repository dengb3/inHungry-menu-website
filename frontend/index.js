
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

  document.getElementById("price4").innerHTML = result[3].price;
  for (let i = 0; i < elementIds.length; i++) {
    // console.log(`loopI: ${i}`);
    for (let j = 0; j < elementIds[i].length; j++) {
      // console.log(`loopJ:${j}`);
      // console.log("result[i].name", result[i].name);
      // console.log("result[i].img_url", result[i].img_url);
      // console.log("result[i].description", result[i].description);
      // console.log("result[i].price", result[i].price);

      document.getElementById(elementIds[i][0]).innerHTML = result[i].name;
      document.getElementById(elementIds[i][1]).src = result[i].img_url;
      document.getElementById(elementIds[i][2]).innerHTML = result[i].description;
      document.getElementById(elementIds[i][3]).innerHTML = result[i].price;
    }
  }
}

function btn1Pressed() {
  fetchData("http://localhost:3000/breakfast");
}

function btn2Pressed() {
  fetchData("http://localhost:3000/lunch");
}

function btn3Pressed() {
  fetchData("http://localhost:3000/dinner");
}


function onClickButton1() {
  btn1Pressed();
}

function onClickButton2() {
  btn2Pressed();
}

function onClickButton3() {
  btn3Pressed();
}


