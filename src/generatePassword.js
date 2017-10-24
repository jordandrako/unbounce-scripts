function generatePassword(length) {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let retVal = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
const myForm = document.querySelector('.lp-pom-form form');
if (myForm) {
  const pw = document.createElement('input');
  pw.type = 'hidden';
  pw.hidden = true;
  pw.className = 'hidden';
  pw.id = 'password_omg';
  pw.name = 'password_omg';
  pw.value = generatePassword(16);
  myForm.appendChild(pw);
}
