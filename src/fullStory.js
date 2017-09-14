const id = Date.now();

function fullStoryPayload() {
  const emailInput = document.querySelector('input#email');
  let userEmail;
  if (emailInput) {
    userEmail = emailInput.value;
  }

  const firstNameInput = document.querySelector('input#first_name');
  const lastNameInput = document.querySelector('input#last_name');
  let userName;
  if (firstNameInput && lastNameInput) {
    userName = `${firstNameInput.value} ${lastNameInput.value}`;
  } else if (firstNameInput && !lastNameInput) {
    userName = firstNameInput.value;
  } else if (!firstNameInput && lastNameInput) {
    userName = lastNameInput.value;
  } else {
    userName = `User ${id}`;
  }

  FS.identify(`User${id}`, {
    displayName: userName,
    email: userEmail,
  });
}

function yourSubmitFunction(e, $) {
  e.preventDefault();
  try {
    fullStoryPayload();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } finally {
    // This submits the form. If your code is asynchronous, add to callback instead
    $('.lp-pom-form form').submit();
  }
}

$(() => {
  $('.lp-pom-form .lp-pom-button')
    .unbind('click tap touchstart')
    .bind('click.formSubmit', (e) => {
      if ($('.lp-pom-form form').valid()) yourSubmitFunction(e, $);
    });
  $('form')
    .unbind('keypress')
    .bind('keypress.formSubmit', (e) => {
      if (
        e.which === 13 &&
        e.target.nodeName.toLowerCase() !== 'textarea' &&
        $('.lp-pom-form form').valid()
      ) {
        yourSubmitFunction(e, $);
      }
    });
});
