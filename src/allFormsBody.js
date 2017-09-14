// ////// UTM Strings ////// //
const params = {};
if (location.search) {
  const parts = location.search.substring(1).split('&');
  parts.forEach((param) => {
    const key = param.split('=');
    params[key[0]] = key[1] || true;
  });
}
// const adSource = `${params.utm_source}-${params.utm_medium}
// -${params.utm_content}-${params.utm_campaign}-${params.utm_term}`;
const adSource = `${params.utm_source || 'source'}-${params.utm_medium ||
  'medium'}-${params.utm_content || 'content'}-${params.utm_campaign ||
  'campaign'}-${params.utm_term || 'term'}`;
const campaignInput = document.createElement('input');
campaignInput.id = 'campaign_source';
campaignInput.name = 'campaign_source';
campaignInput.type = 'hidden';
campaignInput.value = adSource;

const form = document.querySelector('.lp-pom-form form');
if (form) {
  setInterval(() => {
    if (!document.querySelector('#campaign_source')) {
      form.appendChild(campaignInput);
    } else {
      document.querySelector('#campaign_source').value = adSource;
    }
  }, 500);
}

// ////// geoIp ////// //
const geoipFieldset =
  '<fieldset class="geoip_fields">' +
  '<input type="hidden" class="hidden" name="ip_address_omg" id="ip_address_omg"></input>' +
  '<input type="hidden" class="hidden" name="city_omg" id="city_omg"></input>' +
  '<input type="hidden" class="hidden" name="region_code_omg" id="region_code_omg"></input>' +
  '<input type="hidden" class="hidden" name="region_name_omg" id="region_name_omg"></input>' +
  '<input type="hidden" class="hidden" name="country_omg" id="country_omg"></input>' +
  '<input type="hidden" class="hidden" name="country_code_omg" id="country_code_omg"></input>' +
  '<input type="hidden" class="hidden" name="time_zone_omg" id="time_zone_omg"></input>' +
  '<input type="hidden" class="hidden" name="zip_code_omg" id="zip_code_omg"></input>' +
  '</fieldset>';

$.getJSON('https://freegeoip.net/json/', (geo) => {
  if ($.isEmptyObject(geo) !== true) {
    $('.lp-pom-form form').append(geoipFieldset);
    setInterval(() => {
      $('.geoip_fields #ip_address_omg').val(geo.ip);
      $('.geoip_fields #city_omg').val(geo.city);
      $('.geoip_fields #region_code_omg').val(geo.region_code);
      $('.geoip_fields #region_name_omg').val(geo.region_name);
      $('.geoip_fields #country_omg').val(geo.country_name);
      $('.geoip_fields #country_code_omg').val(geo.country_code);
      $('.geoip_fields #time_zone_omg').val(geo.time_zone);
      $('.geoip_fields #zip_code_omg').val(geo.zip_code);
    }, 100);
  }
});

// ////// Partial Form Save ////// //
/**
 * Do not remove this section; it allows our team to troubleshoot and track feature adoption.
 * TS:0002-04-081
 */
$.getScript(
  'https://cdnjs.cloudflare.com/ajax/libs/garlic.js/1.3.0/garlic-standalone.min.js',
  () => {
    $('form').attr({
      'data-persist': 'garlic',
      'data-destroy': 'false',
    });
  },
);

// ////// Placeholders ////// //
if (typeof hint !== 'undefined') {
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

  /* eslint-disable */
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
              (e, n) => t[$(n).attr('id')].required,
            );
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
/* eslint-enable */

// ////// TrustedForm ////// //
/* eslint-disable */
(function() {
  var field = 'xxTrustedFormCertUrl';
  var provideReferrer = false;
  var tf = document.createElement('script');
  tf.type = 'text/javascript';
  tf.async = true;
  tf.src =
    'http' +
    ('https:' == document.location.protocol ? 's' : '') +
    '://api.trustedform.com/trustedform.js?provide_referrer=' +
    escape(provideReferrer) +
    '&field=' +
    escape(field) +
    '&l=' +
    new Date().getTime() +
    Math.random();
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(tf, s);
})();

// ////// Lytics Email Capture ////// //
$(() => {
  $('#email').change(() => {
    const re =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    const email = $('#email').val();
    if (re.test(email)) jstag.send({ email });
  });
});
/* eslint-enable */
