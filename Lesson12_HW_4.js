let amgList = ['/merc-amg-c63.jpg',];
  
  for (let i = 0; i < amgList.length; i++) {
    let amg = document.createElement("div");
    amg.classList.add("amg" + i);
    amg.innerHTML = amgList[i];
    document.body.append(amg);
  }
  
  document.body.append(document.createElement("div"));
  let picturesArray = document.querySelectorAll("div");
  picturesArray[picturesArray.length - 1].className = "central";
  
  for (let i = 0; i < amgList.length; i++) {
    function Magnifier() {
      picturesArray[picturesArray.length - 1].innerHTML = amgList[i];
    }
    document.querySelector(".amg" + i).addEventListener("click", Magnifier);
  }