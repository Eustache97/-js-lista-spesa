const listItem = ["latte", "farina","biscotti", "kiwi", "affettati", "provola", "salmone"];
const ulList = document.querySelector(".market-list");
console.log(ulList);
let i = 0;
while( i < listItem.length ){
    const element = `<li>${listItem[i]}</li>`;
                     console.log(element);
    ulList.innerHTML += element;
    i++;
}
