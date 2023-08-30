// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };


  document.getElementById('toggle-btn').addEventListener('click', function() {
    var content = document.querySelector('.content');
    
    if (content.classList.contains('show-content')) {
      content.classList.remove('show-content');
      this.textContent = 'Read More';
    } else {
      content.classList.add('show-content');
      this.textContent = 'Read Less';
    }
  });

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    window.location.href = "PMH.html";
  });