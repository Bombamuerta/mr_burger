const myForm = document.querySelector('#idform');
const orderBtn = document.querySelector('#orderBtn');

orderBtn.addEventListener('click', event => {
 event.preventDefault();

 if (validateForm(myForm)) {
  const FormData = {
   name: myForm.elements.name.value,
   phone: myForm.elements.phone.value,
   comment: myForm.elements.comment.value
  };

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(JSON.stringify(FormData));
  xhr.addEventListener('load', () => {
   console.log(xhr.response);
   if (xhr.response.status) {
    console.log('все ок');
   }
  });
 }
});

function validateForm(form) {
 let valid = true;

 if (!validateField(form.elements.name)) {
  valid = false;
 }
 if (!validateField(form.elements.phone)) {
  valid = false;
 }
 if (!validateField(form.elements.comment)) {
  valid = false;
 }
 return valid;
}

function validateField(field) {
 field.nextElementSibling.textContent = field.validationMessage;
 return field.checkValidity();
}
