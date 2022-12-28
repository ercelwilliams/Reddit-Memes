function fetchMemes() {
  var after = "";
  color();

  if (document.querySelector("#memes")) {
    document.gquerySelector("#memes").remove();
  }

  let parentdiv = document.createElement("div");
  parentdiv.id = "memes";
  let memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  fetch(`https://www.reddit.com/r/shitposting.json?after=${after}`)
    .then((response) => response.json())
    .then((body) => {
      after = body.data.after;
      let counter = 0;
      for (let index = 0; index < body.data.children.length; index++) {
        if (body.data.children[index].data.post_hint === "image" && counter < 3) {
          let div = document.createElement("div");
          let h4 = document.createElement("h4");
          let image = document.createElement("img");
          image.src = body.data.children[index].data.url_overridden_by_dest;
          h4.textContent = body.data.children[index].data.title;
          div.appendChild(h4);
          div.appendChild(image);
          memeContainer.appendChild(div);
          counter++;
        }
      }
      parentdiv.appendChild(memeContainer);
      document.body.appendChild(parentdiv);
    })
    .catch((e) => {
      console.log(e);
    });
}
