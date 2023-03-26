const alertMessage = "If this page has any problem, please be patient. We will update soon and you will be able to use it again!";
alert(alertMessage);

const imageSource = [
    __dirname +"/gameImages/wrong1.jpg",
  __dirname +"/gameImages/correct1.jpg",
  __dirname +"/gameImages/wrong2.jpg",
  __dirname +"/gameImages/correct2.jpg",
  __dirname +"/gameImages/wrong3.jpg",
  __dirname +"/gameImages/correct3.jpg",
  __dirname +"/gameImages/wrong4.jpg",
  __dirname +"/gameImages/correct4.jpg",
  __dirname +"/gameImages/wrong5.jpg",
  __dirname +"/gameImages/correct1.jpg",
  __dirname +"/gameImages/wrong6.jpg",
  __dirname +"/gameImages/correct2.jpg",
  __dirname +"/gameImages/wrong7.jpg",
  __dirname +"/gameImages/correct3.jpg",
  __dirname +"/gameImages/wrong8.jpg",
  __dirname +"/gameImages/correct3.jpg",
  __dirname +"/gameImages/wrong9.jpg",
  __dirname +"/gameImages/correct1.jpg",
  __dirname +"/gameImages/wrong10.jpg",
  __dirname +"/gameImages/correct2.jpg",
  __dirname +"/gameImages/wrong11.jpg",
  __dirname +"/gameImages/correct3.jpg",
  __dirname +"/gameImages/wrong12.jpg",
  __dirname +"/gameImages/correct4.jpg",
  __dirname +"/gameImages/wrong13.jpg",
  __dirname +"/gameImages/correct4.jpg"
];

const myImg = document.getElementById("myImage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function getRandomImageSource() {
  const randomIndex = Math.floor(Math.random() * imageSource.length);
  return imageSource[randomIndex];
}

myImg.src = getRandomImageSource();

yesBtn.addEventListener("click", function() {
  if (myImg.src.includes("correct")) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  myImg.src = getRandomImageSource();
});

noBtn.addEventListener("click", function() {
  if (myImg.src.includes("wrong")) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  myImg.src = getRandomImageSource();
});
