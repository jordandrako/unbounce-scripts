// eslint-disable-next-line
if (typeof hint !== 'undefined') {
  // lp.jQuery(($) => {
  // Define your placeholder texts here, corresponding to Unbounce's field names
  const inputs = document.querySelectorAll('.lp-pom-form-field input');

  const placeholders = {};
  [].forEach.call(inputs, (input) => {
    placeholders[input.id] = input.id
      .replace('_', ' ')
      .replace(/()[0-9]+/g, '')
      .replace(/\b\w/g, l => l.toUpperCase());
    // eslint-disable-next-line
    input.attributes.placeholder.value = input.id
      .replace('_', ' ')
      .replace(/()[0-9]+/g, '')
      .replace(/\b\w/g, l => l.toUpperCase());
  });

  // Polyfill to add support for browsers like IE<=9
  $(() => {
    if (document.createElement('input').placeholder === undefined) {
      $('html').attr('data-placeholder-focus', 'false');
      $.getScript(
        '//jamesallardice.github.io/Placeholders.js/assets/js/placeholders.jquery.min.js',
        () => {
          $(() => {
            const e = window.module.lp.form.data.validationRules;
            const t = window.module.lp.form.data.validationMessages;
            lp.jQuery.validator.addMethod(
              'notEqual',
              // eslint-disable-next-line
              function(e, t, n) {
                return (
                  this.optional(t) || $(t).attr('data-placeholder-active') !== 'true' || e !== n
                );
              },
              // eslint-disable-next-line
              (e, n) => t[$(n).attr('id')].required,
            );
            // eslint-disable-next-line
            for (const n in placeholders) {
              if ($(`#${n}`).length) {
                if (typeof t[n].required !== 'undefined') {
                  e[n].notEqual = placeholders[n];
                } else {
                  e[n] = {};
                }
              }
            }
          });
        },
      );
    }
  });
}
