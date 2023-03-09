// General idea for data
// title id1 = resArray[0].name
// url id1 = resArray[0].img_url
// description id1 = resArray[0].description
 async function fetchData(url){
  const result =  await fetch(url)
  .then((response) => { return  response.json()})
  
  .then((data) => {return data})
  document.getElementById("heading1").innerHTML = result[0].name
  console.log(result[0].name)
 }
 function btn1Pressed() {
   fetchData("http://localhost:3000/breakfast")
};
function onClickButton1(){
  btn1Pressed();

}


//   document.getElementById("heading1").innerHTML = data[0].name