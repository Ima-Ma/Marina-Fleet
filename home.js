var $grid = $('.item-details').isotope({
  // options
});
// filter items on button click
$('.item-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$(document).on('click' , 'ul li' , function(){
  $(this).addClass('active').siblings().removeClass('active')
})

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

 
  function validation() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    let Message = document.getElementById('message').value;
 
    let fullnameCheck = /^[A-Za-z]+[0-9]*$/;
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let PasswordCheck =  /^[A-Za-z]+[0-9]*$/;
    let MessageCheck =   /^[A-Za-z]+[0-9]*$/;
 
    if (fullnameCheck.test(fullname)) {
      document.getElementById('fullnameerror').innerHTML = "";
    }
    else {
      document.getElementById('fullnameerror').innerHTML = "** invalid fullname";
      return false;
 
    }
    if (emailCheck.test(email)) {
      document.getElementById('emailerror').innerHTML = "";
    }
    else {
      document.getElementById('emailerror').innerHTML = "** invalid email";
      return false;
 
    }
    if (PasswordCheck.test(Password)) {
      document.getElementById('passworderror').innerHTML = "";
    }
    else {
      document.getElementById('passworderror').innerHTML = "** invalid Country";
      return false;
 
    }
    if (MessageCheck.test(Message)) {
        document.getElementById('messageerror').innerHTML = "";
      }
      else {
        document.getElementById('messageerror').innerHTML = "** invalid Message";
        return false;
   
      }
      if(fullnameCheck.test(fullname) && emailCheck.test(email) && PasswordCheck.test(Password) && MessageCheck.test(Message)){
        Swal.fire({
          title: 'Form has been submitted',
          confirmButtonText: 'OK'
        })
        return false;
      }
      else{
        alert("Invalid");
        return false; 
      }
 
  }
  
