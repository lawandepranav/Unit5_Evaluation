 var names =JSON.parse(localStorage.getItem('name')) || [];
 
 
 var res = fetch("https://dog.ceo/api/breeds/image/random");

 response.then(function (result) {
  result.json().then((result1) => {
     console.log(result1)
    throw Error("Error")
  })
}).catch(function (error) {
  console.log("Error ", error)
}) 

