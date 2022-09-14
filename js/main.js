const array = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
];

array.forEach(function (item) {
  let list = document.createElement("li");
  let link = document.createElement("a");

  link.innerHTML = item.label;
  link.setAttribute("href", `${item.url}`);
  list.appendChild(link);

  document.querySelector("ol").appendChild(list);
});

//Practice

//Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Example string : 'webmaster'
//Expected Output : 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.

let string = "webmaster";

function changeOrder(string) {
  let changedString = string.split("").sort().join("");
  return changedString;
}

console.log(changeOrder(string));
