var text = [
  {
    said: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    siadby: "― Albert Einstein",
  },
  {
    said: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    siadby: "― Bernard M. Baruch",
  },
  {
    said: "“In three words I can sum up everything I've learned about life: it goes on.”",
    siadby: "― Robert Frost",
  },
  {
    said: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    siadby: "― Ralph Waldo Emerson",
  },
];

function changeText() {
  var randomIndex = Math.floor(Math.random() * text.length);
  document.getElementById("randomText").innerHTML = text[randomIndex].said;
  document.getElementById("Siadby").innerHTML = text[randomIndex].siadby;
}
