//For dark mode

var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
icon.onclick = function () {
  //Adding dark-theme class to our body.
  document.body.classList.toggle("dark-theme");
  //putting trasitionDuration of 2s in body tag
  document.body.style.transitionDuration = "2s";
  //Changing moon icon to Sun
  //Also changing our Logo as per the theme
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.png";
    logo.src = "Images/light-logo.png";
  } else {
    icon.src = "Images/moon.png";
    logo.src = "Images/dark-logo.png";
  }
};

//For Image Slider//
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `$(index * 100)%`;
});

const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
};
const goPrev = () => {
  if (counter != 0) {
    counter--;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
//For contact submission form//
function popup() {
  //Storing the value from our input box in their respective variable
  var Name = document.getElementById("Name").value;
  var Email = document.getElementById("Email").value;
  var Number = document.getElementById("number").value;
  var Gender = document.getElementById("Gender").value;
  var Message = document.getElementById("Message").value;

  //Creating a variable CustomerInfo that store all values from Form in suitable formate
  var CustomerInfo =
    "Full Name : " +
    Name +
    "\n" +
    "Email : " +
    Email +
    "\n" +
    "Mobile Number : " +
    Number +
    "\n" +
    "Gender : " +
    Gender +
    "\n" +
    "Message : " +
    Message;

    if(Name == '' || Email == '' || Number == '' || Gender =='', Message == ''){
        alert("Please Complete your form before submitting");
    }
    else{
  //Creating a popup that will display the CustomerInfo.
  alert("Thank you for contacting us.\n" + CustomerInfo);
    }
}
