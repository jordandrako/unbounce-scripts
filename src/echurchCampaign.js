$(() => {
  let ebook;
  let source;
  // Define utm campaign name based on url pathname
  const campaignUTMValues = {
    'toxic-leadership': 'neverhire',
    'engagement-guide': 'churchengagement',
    'social-media': 'churchsocialmediaguide',
    'persona-worksheet': 'worksheet-persona',
    'content-marketing': 'contentmarketingforchurches',
    'multisite-killer': 'megachurchkiller',
    'social-ads': 'socialadsforchurches',
  };
  // Set ebook utm variable
  $.each(campaignUTMValues, (urlPath, utmValue) => {
    if (location.pathname.indexOf(urlPath) >= 0) {
      ebook = utmValue;
    }
  });
  // Test url parameters for utm ad source and set source variable
  const query = window.location.search.replace('?', '');
  if (/fb/gi.test(query) || /facebook/gi.test(query)) {
    source = 'social-facebook';
  } else if (/html/gi.test(query)) {
    source = 'eblast';
  } else {
    source = 'advert';
  }
  // If #Campaign doesn't exit, make it.
  if (!$('#Campaign').length) {
    $('.lp-pom-form form').append(
      `<input type="hidden" id="Campaign" name="Campaign" class="hidden" value="${source}-outreach-ebook-${ebook}"></input>`,
    );
  }
  // Apply value on timer
  setInterval(() => {
    $('#Campaign').val(`${source}-outreach-ebook-${ebook}`);
  }, 550);
});
