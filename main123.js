var btn = document.querySelector('.btn');

btn.addEventListener('click',submitd);

function submitd(e){
    e.preventDefault();
    var text = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;

    localStorage.setItem(text,email);

     ///////

     
}
