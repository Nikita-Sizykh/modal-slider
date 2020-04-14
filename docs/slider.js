let openModal = document.getElementById('open-modal-new');
let modal = document.getElementById('modal');
let slides = document.getElementsByClassName('slide');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let closeBtn = document.getElementById('close');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function pagingSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
//Функция открывает модальное окно
openModal.onclick = function() {
    modal.style.display = 'block';
    this.style.display = 'none';
}

//Функция закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = 'none';
    openModal.style.display = 'block';
}

//Функция показывает следующий слайд
prevBtn.onclick = function() {
    pagingSlides(-1);
}
//Функция показывает предыдущий слайд
nextBtn.onclick = function() {
    pagingSlides(1);
}
