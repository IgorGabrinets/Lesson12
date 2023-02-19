    let array = ["Text1", "Text2", "Text3", "Text4", "Text5"];
    console.log(array);

    for (let i = 0; i < array.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.classList.add("p" + i);
    document.body.append(paragraph);
    document.querySelector(".p" + i).innerText = array[i];
    }

    //for (let i = 0; i < document.querySelectorAll("p").length; i++) {
    //let paragraphCounter = document.querySelector(".p" + i);
    //function Stars() {
    //    let starString = "";
    //    for (let i = 0; i < paragraphCounter.innerText.length; i++) {
    //    starString += "*";
    //    }
    //    paragraphCounter.innerText = starString;
    //}
    //paragraphCounter.addEventListener("click", Stars);
    //}