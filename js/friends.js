import loadAllFriends from "./loadFriends.js";
const allFriends = document.querySelector("#friends");
export default function Friends() {
  const arr = [
    {
      id: 1,
      name: "Test User 1",
      email: "shankarlmc012@gmail.com",
      image: "./images/avatar.png",
      status: "available",
    },
    {
      id: 2,
      name: "Test User 2",
      email: "test@gmail.com",
      image: "./images/avatar.png",
      status: "inactive",
    },
    {
      id: 3,
      name: "Test User 3",
      email: "test3@gmail.com",
      image: "./images/avatar.png",
      status: "available",
    },
    {
      id: 4,
      name: "Test User 4",
      email: "test4@gmail.com",
      image: "./images/avatar.png",
      status: "available",
    },
    {
      id: 5,
      name: "Test User 5",
      email: "test5@gmail.com",
      image: "./images/avatar.png",
      status: "away",
    },
  ];
  for (var i = 0; i < arr.length; i++) {
    allFriends.appendChild(loadAllFriends(arr[i]));
  }
}
