export default function metaTags() {
  var metaDesc = document.createElement("meta");
  metaDesc.name = "description";
  metaDesc.content = "this is test chatting appp";

  var metaKeyword = document.createElement("meta");
  metaKeyword.name = "keywords";
  metaKeyword.content = "chat app, messenger";

  var author = document.createElement("meta");
  author.name = "author";
  author.content = "Shankar Lamichhane";

  document.querySelector("head").appendChild(metaDesc);
  document.querySelector("head").appendChild(metaKeyword);
  document.querySelector("head").appendChild(author);
}
