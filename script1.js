const body = document.querySelector("body");
const iniwp = [];
iden = 1;
iniwp[1] = wallpaper.src;
iniwp[2] = wallpaper2.src;
iniwp[3] = wallpaper3.src;
iniwp[4] = wallpaper4.src;
katakata = kalimat.innerHTML;
pesanAkhir2 = pesanAkhir.innerHTML;
kalimat.innerHTML = "";
pesanAkhir.innerHTML = "";
const swalst = Swal.mixin({
  timer: 2500,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});
audio = new Audio("" + linkmp3.src);
ftganti = 0;
fungsi = 0;
fungsiAwal = 0;
deffotostiker = fotostiker.src;
function berjatuhan() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  body.appendChild(heart);
}
setInterval(function name(params) {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);
Content.style = "opacity:1;margin-top:14vh";
const swals = Swal.mixin({
  allowOutsideClick: false,
  imageHeight: 80,
  cancelButtonColor: "#FF0040",
});
