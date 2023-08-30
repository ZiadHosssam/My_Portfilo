const toggel = document.getElementById("light");
const toggeldark = document.getElementById("dark");
const body = document.querySelector('body');
toggel.addEventListener('click', function(){
    this.classList.add('hidden');
    toggeldark.classList.remove("hidden");
    body.classList.remove("dark");
    body.classList.add("light");
})
toggeldark.addEventListener('click', function(){
    this.classList.add('hidden');
    toggel.classList.remove('hidden');
    body.classList.remove("light");
    body.classList.add("dark");
})
