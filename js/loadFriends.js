export default function loadAllFriends(friends) {
  var parentDiv = document.createElement("div");
  parentDiv.className = "friend";
  parentDiv.key = friends.id;
  parentDiv.setAttribute("available-friend", friends.id);

  parentDiv.innerHTML =
    '<img src="' +
    friends.image +
    '" /><p><strong>' +
    friends.name +
    "</strong><br /><span>" +
    friends.email +
    '</span></p><div class="status ' +
    friends.status +
    '"></div>';

  return parentDiv;
}
