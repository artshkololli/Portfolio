//Demo modal
var modal = document.getElementById("myModal");

var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "Demo/"+img1.alt+"_Demo.gif";
  captionText.innerHTML = img1.alt +" App-Demo";
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "Demo/"+img2.alt+"_Demo.gif";
  captionText.innerHTML = img2.alt +" App-Demo";
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "Demo/"+img3.alt+"_Demo.gif";
  captionText.innerHTML = img3.alt +" App-Demo";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

//Loader

var preloader = document.getElementById('loader');
setTimeout(function preLoaderHandler(){
    preloader.style.display = 'none';
},2300)