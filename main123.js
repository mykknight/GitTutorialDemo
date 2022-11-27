 var btn = document.querySelector('.btn');

 btn.addEventListener('click',submitd);
 function submitd(e){
    e.preventDefault();
     var text = document.querySelector('#name').value;
     var email = document.querySelector('#email').value;

    var myobj = {
        name: text,
        emailid: email

    };


     localStorage.setItem(myobj.name,JSON.stringify(myobj));

      ///////


}

// let myobj = {
//     name: "Domestic",
//     age: 56
//   };

//   let myobj_serialized = JSON.stringify(myobj);
//   //console.log(myobj_serialized);

//   localStorage.setItem("myObj", myobj_serialized);

//   //let myobj_deserialized = JSON.parse(localStorage.getItem("myObj"));


//   console.log(myobj_deserialized);

