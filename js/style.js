document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen preloader
    var preloader = document.getElementById("preloader");
    // Mengambil elemen konten utama
    var mainContent = document.getElementById("main-content");

    // Menyembunyikan preloader setelah halaman dimuat
    setTimeout(function() {
      preloader.style.display = "none";
      mainContent.style.display = "block"; // Menampilkan konten utama
    }, 2000); // Ganti nilai 2000 dengan durasi yang diinginkan (dalam milidetik)
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
