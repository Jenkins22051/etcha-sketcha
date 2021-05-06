const Container = document.querySelector("#Container");
let numOfTimes = 256;
for (let i = 0;i <numOfTimes;i++) {
    const singleCell = document.createElement ("div");
    singleCell.textContent = "Hello";
    singleCell.style.color = "Green";
    singleCell.classList.add("bg-red")
    singleCell.addEventListener('click', () => {
        alert ("Hello World");
    });
    Container.appendChild(singleCell);
}
