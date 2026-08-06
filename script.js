console.log("Javascript berhasil dibaca");

AOS.init({
    duration:1000,
    once:false
});

// Popup Video


const playButton = document.getElementById("playButton");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.getElementById("closeVideo");
const video = document.getElementById("videone");

// Klik tombol play

playButton.onclick = function(){

    videoPopup.style.display = "flex";
    video.play();
}

// nge close tombol X

closeVideo.onclick = function(){
    video.pause();
    video.currentTime = 0;
    videoPopup.style.display = "none";
}

//   mencet area hitam gawe nutup

videoPopup.onclick = function(e){
    if(e.target === videoPopup){
        video.pause();
        video.currentTime = 0;
        videoPopup.style.display = "none";
    }

}


// testimoni woe

const foto = document.getElementById("fotoTesti");
const isi = document.getElementById("isiTesti");
const nama = document.getElementById("namaTesti");
const jabatan = document.getElementById("jabatanTesti");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const card = document.getElementById("cardTestimoni");

const testimonials = [

{

    foto:"assets/testimoni/alissa_wahid.webp",

    isi:"Selamat atas terlaksananya festival DolananYok! ini. Hebat sekali untuk Bayt Al-Hikmah, Pokoknya Top markotop deh.",

    nama:"- Alissa Wahid -",

    jabatan:"Putri Sulung dari Presiden RI ke-4"

},

{

    foto:"assets/testimoni/kyai_idris.webp",

    isi:"DolananYok! merupakan kegiatan yang sangat positif tentunya. Melatih diri untuk relaksasi dari kejenuhan belajar. Dan terjadi sosialisasi yang sangat luar biasa.",

    nama:"KH. Idris Hamid, Lc.",

    jabatan:"Pengasuh PP.Bayt Al-Hikmah dan Salafiyah Pasuruan"

},

{

    foto:"assets/testimoni/taj_yasin.webp",

    isi:"Saya Taj Yasin Maimoen, Wakil Gubernur jawa tengah, Mengapresiasi Pondok Pesantren Bayt Al-Hikmah yang mengajak para santri untuk kembali bermain dan melestarikan dolanan anak melalui Festival DolananYok!. Di tengah perkembangan zaman yang semakin didominasi oleh aktivitas digital, upaya ini menjadi langkah yang sangat positif dalam menghidupkan kembali permainan tradisional sebagai bagian dari warisan budaya. Mari bersama-sama kita lestarikan dolanan anak untuk generasi masa depan.",

    nama:"- Drs. H. Taj Yasin Maimoen -",

    jabatan:"Wakil Gubernur Jawa Tengah"

}

];

let index = 0;

function tampilkanTestimoni(){

    foto.src = testimonials[index].foto;
    isi.textContent = testimonials[index].isi;
    nama.textContent = testimonials[index].nama;
    jabatan.textContent = testimonials[index].jabatan;

    card.classList.remove("animasiMasuk")
    void card.offsetHeight;
    card.classList.add("animasiMasuk")

}

next.onclick = function(){

    card.classList.add("animasiKeluar");

    setTimeout(function(){

        index++;

        if(index >= testimonials.length){

            index = 0;

        }

        tampilkanTestimoni();

        card.classList.remove("animasiKeluar");

    },350);

}

prev.onclick = function(){

    card.classList.add("animasiKeluar");

    setTimeout(function(){

        index--;

        if(index < 0){

            index = testimonials.length-1;

        }

        tampilkanTestimoni();

        card.classList.remove("animasiKeluar");

    },350);

}

tampilkanTestimoni();

//gallery

/* ===========================
      GALLERY
=========================== */

const gallery = document.querySelector(".gallery-track");

const galleryNext = document.querySelector(".gallery-btn.next");
const galleryPrev = document.querySelector(".gallery-btn.prev");

const firstCard = document.querySelector(".gambar");

const gap = parseInt(getComputedStyle(gallery).gap);

const scrollAmount = firstCard.offsetWidth + gap;

let galleryAnimating = false;


// easing
function ease(t){

    return t < 0.5
        ? 4*t*t*t
        : 1 - Math.pow(-2*t+2,3)/2;

}


// animasi scroll
function smoothScroll(distance){

    if(galleryAnimating) return;

    galleryAnimating = true;

    const start = gallery.scrollLeft;
    const target = start + distance;

    const duration = 500;

    let startTime = null;

    function animate(time){

        if(!startTime)
            startTime = time;

        const elapsed = time - startTime;

        const progress = Math.min(elapsed / duration,1);

        gallery.scrollLeft =
            start + (target-start) * ease(progress);

        if(progress < 1){

            requestAnimationFrame(animate);

        }else{

            galleryAnimating = false;

        }

    }

    requestAnimationFrame(animate);

}


// tombol next
galleryNext.onclick = function(){

    smoothScroll(scrollAmount);

}


// tombol prev
galleryPrev.onclick = function(){

    smoothScroll(-scrollAmount);

}

/* ===========================
     DRAG MOUSE
=========================== */

let isDown = false;

let startX;

let scrollLeft;


gallery.addEventListener("mousedown",function(e){

    isDown = true;

    gallery.style.cursor = "grabbing";

    startX = e.pageX - gallery.offsetLeft;

    scrollLeft = gallery.scrollLeft;

});


gallery.addEventListener("mouseleave",function(){

    isDown = false;

    gallery.style.cursor = "grab";

});


gallery.addEventListener("mouseup",function(){

    isDown = false;

    gallery.style.cursor = "grab";

});


gallery.addEventListener("mousemove",function(e){

    if(!isDown) return;

    e.preventDefault();

    const x = e.pageX - gallery.offsetLeft;

    const walk = (x - startX) * 2;

    gallery.scrollLeft = scrollLeft - walk;

});


//hamburger

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.onclick = () => {
    menu.classList.toggle("active");
};
//popup maintenance

const openButtons = document.querySelectorAll('.openBtn');

const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');


openButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalOverlay.classList.add('active');
  });
});


closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});