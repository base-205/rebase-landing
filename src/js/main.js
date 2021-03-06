function toggleModal() {
    let modal = document.getElementById(this.event.target.dataset.modal);
    modal.classList.toggle("open")
}

const   movementStrength = 25,
        bgObj = document.body

let height = movementStrength / window.innerHeight;
let width = movementStrength / window.innerWidth;

document.addEventListener('mousemove', function (e) {
    let pageX = e.pageX - (window.innerWidth / 2),
        pageY = e.pageY - (window.innerHeight / 2),
        newvalueX = width * pageX * -1 - 25,
        newvalueY = height * pageY * -1 - 50;

    bgObj.style.backgroundPosition = `${newvalueX}px ${newvalueY}px`;
});
