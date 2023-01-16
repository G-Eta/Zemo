const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } 
  steps[index].classList.add("active");
}


function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "gekpo5@gmail.com",
      Password : "5C4148F5C9F5CC318DB2F051DC70C522C264",
      To : 'gekpo5@gmail.com',
      From : document.getElementById('email').value,
      Subject : "New Contact Form",
      Body : "First Name: " + document.getElementById('fname').value
          + "<br> Last Name: " + document.getElementById('lname').value
          + "<br> Email: " + document.getElementById('email').value
          + "<br> Phone Number: " + document.getElementById('phone').value
          + "<br> Age: " + document.getElementById('age').value
          + "<br> Gender: " + document.getElementById('gender').value
          + "<br> Do you have fever: " + document.getElementById('fever').value
          + "<br> Where on skin: " + document.getElementById('skin').value
          + "<br> How long since symptomps: " + document.getElementById('symptoms').value
          + "<br> Any itching: " + document.getElementById('itch').value
          + "<br> Any allergies: " + document.getElementById('allergies').value
          + "<br> Allergy: " + document.getElementById('allergy').value
          + "<br> Any thing worsens it: " + document.getElementById('worse').value
          + "<br> what worsens it: " + document.getElementById('worsens').value
          + "<br> File: " + document.getElementById('file').value


  }).then(
    message => alert("Submitted")
  );
  
}

function myFunc() {
  window.location.href("./about.html");
}