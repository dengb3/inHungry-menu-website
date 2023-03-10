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

  // console.log("result", result[3].price);

  // let elementIds = [[]]

  // for (let x = 0; x < 4; x++) {
  //   aVariable = x++;
  //   elementIds.push = [
  //     ["heading" + a, "image" + a, "desc" + a, "price" + a]
  //   ]

  // }
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
      //j += 1;
      document.getElementById(elementIds[i][1]).innerHTML = result[i].img_url;
      document.getElementById(elementIds[i][2]).innerHTML =
        result[i].description;
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

//   document.getElementById("heading1").innerHTML = data[0].name
