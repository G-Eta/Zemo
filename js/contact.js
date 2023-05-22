function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gekpo5@gmail.com",
        Password : "5C4148F5C9F5CC318DB2F051DC70C522C264",
        To : 'gekpo5@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form",
        Body : "Name: " + document.getElementById('name').value
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Phone no: " + document.getElementById('phone').value
            + "<br> Message: " + document.getElementById('message').value


    }).then(
      message => alert("Submitted")
    );
    
}
