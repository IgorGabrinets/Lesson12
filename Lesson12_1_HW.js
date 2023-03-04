//Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на другой текст. На данном этапе делать процесс обратимым при повторном клике необязательно.

let array = ["Text1", "Text2", "Text3", "Text4", "Text5"];

let mainParagraph = document.createElement("p");
document.body.append(mainParagraph);

for (let i = 0; i < array.length; i++) {
        let paragraph = document.createElement("p");
        //paragraph.classList.add("p");
        paragraph.innerText = array[i];
        mainParagraph.append(paragraph);
        paragraph.addEventListener("click", function () {
                paragraph.innerText = " A n n ý ";
        });
}