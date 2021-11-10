export default function loadMessages(image, message, classname) {
  var parentDiv = document.createElement("div");
  parentDiv.className = "message " + classname;

  parentDiv.innerHTML =
    '<img src="' +
    image +
    '" /><div class="bubble">' +
    message.content +
    '<div class="corner"></div><span>' +
    message.sendAt +
    "</span></div>";

  return parentDiv;
}
