let amgList = ['merc-amg-a45.jpg', 'merc-amg-c63.jpg', 'mercedes-amg-e63.jpg', 'mercedes-amg-s63.jpg'];
  
  for (let i = 0; i < amgList.length; i++) {
    let amg = document.createElement("div");
    //amg.classList.add("amg" + i);
    amg.innerHTML = amgList[i];
    document.body.append(amg);
  }
  
  document.body.append(document.createElement("div"));
  let pictures = document.querySelectorAll("div");
  pictures[pictures.length - 1].className = "central";
  
  for (let i = 0; i < amgList.length; i++) {
    function Manage() {
      pictures[pictures.length - 1].innerHTML = amgList[i];
    }
    document.querySelector(".amg" + i).addEventListener("click", Manage);
  }












