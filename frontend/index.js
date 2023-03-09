
 async function fetchData(url){
  const result =  await fetch(url)
  .then((response) => { return  response.json()})
  
  .then((data) => {return data})
  document.getElementById("heading2").innerHTML = result[1].name
  document.getElementById("image2").innerHTML = result[1].img_url
  document.getElementById("desc2").innerHTML = result[1].description
  document.getElementById("price2").innerHTML = result[1].price
  console.log(result[1].name)
  console.log(result[1].img_url)
  console.log(result[1].description)
  console.log(result[1].price)
 }
 function btn1Pressed() {
   fetchData("http://localhost:3000/breakfast")
};
function onClickButton1(){
  btn1Pressed();

}
