import loadMessages from "./loadMessages.js";
const chatMessages = document.querySelector("#chat-messages");
export default function Messages(sender, receiver) {
  const userDetails = [
    {
      sender: 111,
      receiver: 2,
      userImage: "./images/avatar.png",
      message: [
        {
          id: 1,
          content: "hello this is test message",
          sendAt: "2 min",
        },
        {
          id: 1,
          content: "this is reply",
          sendAt: "1 min",
        },
      ],
    },
  ];

  var className = "";
  chatMessages.innerHTML = "";
  if (userDetails[0].sender === sender) {
    className = "right";
  }

  if (
    (userDetails[0].sender === sender &&
      userDetails[0].receiver === parseInt(receiver)) ||
    (userDetails[0].receiver === sender &&
      userDetails[0].sender === parseInt(receiver))
  ) {
    chatMessages.appendChild(document.createElement("label"));
    for (var i = 0; i < userDetails[0].message.length; i++) {
      chatMessages.appendChild(
        loadMessages(
          userDetails[0].userImage,
          userDetails[0].message[i],
          className
        )
      );
    }
  } else {
    var infoDiv = document.createElement("div");
    infoDiv.className = "information";
    infoDiv.innerHTML = "<p>No messages were available for this user.</p>";

    chatMessages.appendChild(infoDiv);
  }
}
