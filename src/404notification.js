function slackPayload() {
  // Grab URL
  const badurl = `@channel *A user has hit this URL:*\n<${window.location.href.split('?')[0]}>`;

  let utms;
  let emailVal;
  let userEmail;

  // Grab UTMs
  if (window.location.search.length > 0) {
    const utmArray = window.location.search.replace('?', '').split('&');
    utms = `\n*Here are the UTMs:*\n${utmArray.join('\n')}`;
  } else {
    utms = '';
  }

  // Get user's email if entered
  const email = document.querySelector('input#email');
  if (email) {
    emailVal = email.value;
  } else {
    emailVal = '';
  }
  if (emailVal.length > 0) {
    userEmail = `\n*Email:*\n<${emailVal}>`;
  } else {
    userEmail = '';
  }

  // Set the whole string
  const text = badurl + utms + userEmail;

  // Use domain as slackbot name
  const username = `${window.location.href
    .toUpperCase()
    .split('/')[2]
    .split('.')[1]} 404 Bot`;

  // Set payload value
  const payloadVal = `{"text": "${text}", "username":"${username}" }`;
  const payload = document.querySelector('#payload');
  if (payload) {
    payload.value = payloadVal;
  } else {
    return false;
  }
  return payloadVal;
}

function yourSubmitFunction(e, $) {
  e.preventDefault();
  try {
    slackPayload();
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
