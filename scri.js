const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.style.color ="red";
para.textContent = "This is the paragraph text-content!";

const head3 = document.createElement("h3");
head3.textContent = "This is the heading 3 text-content!";
head3.style.color = "blue";

const div1 = document.createElement("div");
div1.style.backgroundColor = "pink";
div1.style.border = "2px solid black";

const head1 = document.createElement("h1");
head1.textContent = "i am in a div!";



const para1 = document.createElement("p");
para1.textContent = "me too!";

div1.appendChild(head1);
div1.appendChild(para1);


container.appendChild(content);
container.appendChild(para);
container.appendChild(head3);

container.appendChild(div1);

