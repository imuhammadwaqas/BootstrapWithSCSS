function myFunction() {
    document.getElementById("bmcolor").style.backgroundColor = "lightblue";
    // console.log("javascript is working");
  }
  function color(value){
    document.getElementById("bmcolor").style.backgroundColor = value;
    document.getElementById("nav1").style.background=value;
  }

//   const btn = document.getElementById('cbtn');
  
// btn.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
  
// if(document.body.style.backgroundColor = 'rgb(251, 252, 251)'){
//     document.body.style.backgroundColor = 'rgb(168, 245, 168)';
//     btn.addEventListener('click', function onClick(event){
//         if(document.body.style.backgroundColor = 'rgb(168, 245, 168)'){
//             document.body.style.backgroundColor = 'rgb(247, 173, 173)';
//             btn.addEventListener('click', function onClick(event){
//                 if(document.body.style.backgroundColor = 'rgb(247, 173, 173)')
//                 {
//                     document.body.style.backgroundColor = 'rgb(251, 252, 251)';
//                     btn.addEventListener('click', function onClick(event){});
//                 }
//             });
//         }
//         else
//         console.log("color change 2nd time")
//     });
// }
// else 
// console.log("every thing perfect")

//   // 👇️ optionally change text color
//   // document.body.style.color = 'white';
// });