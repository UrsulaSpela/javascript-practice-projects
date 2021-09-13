let colorBox = document.querySelectorAll(".box")

// // colorBox.addEventListener("click", function(){
// //     for(let i=0; i<colorBox.length; i++){
// //         colorBox[i].classList.toggle("red")
// //     }
// // })

for(let i=0; i<colorBox.length; i++){
    colorBox[i].addEventListener("click", function(){
        colorBox[i].classList.toggle("blue")
    })
}



//  for (let i = 0; i < cbox.length; i++) {
//      cbox[i].addEventListener("click", function() {
//        cbox[i].classList.toggle("blue");
//      });
//  }


