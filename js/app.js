import SearchUser from "./searchUser.js";
import Friends from "./friends.js";
import metaTags from "./meta.js";
import SendMessage from "./uploadMessage.js";
import Messages from "./messages.js";

const search = document.getElementById("searchfield");
const msgInput = document.querySelector("#sendmessage input");
const chatbox = document.querySelector("#chatbox");
const profile_p = document.querySelector("#profile p");
const profile = document.querySelector("#profile");
const chatMessage = document.querySelector("#chat-messages");
const cx = document.querySelector(".cx");
const cy = document.querySelector(".cy");
const friendList = document.querySelector("#friendslist");
const chatView = document.querySelector("#chatview");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("#chat-with-friends");
const ownProfile = document.querySelector(".own-profile");
const profileCard = document.querySelector(".profile-card-container");
const closeProfileCard = document.querySelector(".close-profile-card");

let searchingContact = "";
let message = "";
let receiverUser = null;

Friends();
metaTags();

ownProfile.addEventListener("click", () => {
  profileCard.classList.add("active");
});

closeProfileCard.addEventListener("click", () => {
  profileCard.classList.remove("active");
});

const friends = document.querySelectorAll(".friend");

search.addEventListener("focusin", (event) => {
  if (event.target.value == "Search contacts...") {
    event.target.value = "";
  }
});
search.addEventListener("focusout", (event) => {
  if (event.target.value == "") {
    event.target.value = "Search contacts...";
  }
});
search.addEventListener("keyup", (event) => {
  searchingContact = event.target.value;
  if (searchingContact !== "") {
    SearchUser(searchingContact);
  }
});

msgInput.addEventListener("focusin", (event) => {
  if (event.target.value == "Send message...") {
    event.target.value = "";
  }
});
msgInput.addEventListener("focusout", (event) => {
  if (event.target.value == "") {
    event.target.value = "Send message...";
  }
});
msgInput.addEventListener("keyup", (event) => {
  message = event.target.value;
});

for (const friend of friends) {
  friend.addEventListener("click", function (event) {
    receiverUser = friend.getAttribute("available-friend");
    var childTop = friend.offsetTop - friend.offsetLeft;
    var imageSrc = friend.querySelector("img").src;

    var top = childTop + 12 + "px";

    var image = document.createElement("img");
    image.src = imageSrc;
    image.style.top = top;
    image.classList.add("floatingImg");

    chatbox.append(image);

    setTimeout(function () {
      profile_p.classList.add("animate");
      profile.classList.add("animate");
    }, 100);

    setTimeout(function () {
      chatMessage.classList.add("animate");
      cx.classList.add("s1");
      cy.classList.add("s1");

      setTimeout(function () {
        cx.classList.add("s2");
        cy.classList.add("s2");
      }, 100);

      setTimeout(function () {
        cx.classList.add("s3");
        cy.classList.add("s3");
      }, 200);
    }, 150);

    const floatImage = document.querySelector(".floatingImg");

    floatImage.style.top = "10px";
    floatImage.style.width = "40px";
    floatImage.style.left = "8px";

    profile_p.innerHTML = "";

    var name = friend.querySelector("p strong").textContent;
    var email = friend.querySelector("p span").textContent;

    var nameHolder = document.createElement("span");
    nameHolder.className = "profile__name";
    nameHolder.innerHTML = name;

    // profile_p.textContent = name;
    var emailHolder = document.createElement("span");
    emailHolder.className = "profile__email";
    emailHolder.innerHTML = email;

    profile_p.appendChild(nameHolder);
    profile_p.appendChild(emailHolder);
    // document.querySelector("#profile span").textContent = email;

    var userAvatar = document.querySelectorAll(".message:not(.right) img");

    for (const avatar of userAvatar) {
      avatar.src = imageSrc;
    }

    // hiding the friend list div
    friendList.style.display = "none";
    chatView.style.display = "block";

    // load all the messages for clicked users

    closeBtn.addEventListener("click", function () {
      chatMessage.classList.remove("animate");
      profile.classList.remove("animate");
      profile_p.classList.remove("animate");

      ["s1", "s2", "s3"].map((e) => cy.classList.remove(e));
      ["s1", "s2", "s3"].map((e) => cx.classList.remove(e));

      var parentObj = floatImage.parentNode;
      if (parentObj) {
        parentObj.removeChild(floatImage);
      }

      setTimeout(function () {
        chatView.style.display = "none";
        friendList.style.display = "block";
        msgInput.value = "Send message...";
      }, 50);
    });

    Messages(111, receiverUser);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  msgInput.value = "";

  // this section is only for testing purpose
  var mainMessageDiv = document.createElement("div");

  if (message !== "") {
    mainMessageDiv.className = "message right";
    mainMessageDiv.innerHTML =
      '<img src="./images/avatar.png" /><div class="bubble">' +
      message +
      '<div class="corner"></div><span>1 min</span></div>';

    chatMessage.appendChild(mainMessageDiv);
    // delete this section after database was added

    SendMessage({
      sender: 1111,
      receiver: receiverUser,
      message,
    });
  }

  chatMessage.scroll({ top: chatMessage.scrollHeight, behavior: "smooth" });
});
