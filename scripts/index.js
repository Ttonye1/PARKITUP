let searchBtn=document.querySelector(".searchBtn");
let closeBtn=document.querySelector(".closeBtn");
let searchbox=document.querySelector(".searchbox");

searchBtn.addEventListener('click', () => {
    searchbox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
 });

 closeBtn.addEventListener('click', () => {
    searchbox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
 });

  