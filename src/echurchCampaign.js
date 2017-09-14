$(() => {
  let ebook;
  let source;
  if (window.location.href.indexOf('toxic-leadership') > 0) {
    ebook = 'neverhire';
  }
  if (window.location.href.indexOf('engagement-guide') > 0) {
    ebook = 'churchengagement';
  }
  if (window.location.href.indexOf('social-media') > 0) {
    ebook = 'churchsocialmediaguide';
  }
  if (window.location.href.indexOf('persona-worksheet') > 0) {
    ebook = 'worksheet-persona';
  }
  if (window.location.href.indexOf('content-marketing') > 0) {
    ebook = 'contentmarketingforchurches';
  }
  if (window.location.href.indexOf('multisite-killer') > 0) {
    ebook = 'megachurchkiller';
  }
  if (window.location.href.indexOf('social-ads') > 0) {
    ebook = 'socialadsforchurches';
  }
  const query = window.location.search.replace('?', '');
  if (/fb/gi.test(query) || /facebook/gi.test(query)) {
    source = 'social-facebook';
  } else if (/html/gi.test(query)) {
    source = 'eblast';
  } else {
    source = 'advert';
  }
  if ($('#campaign').length) {
    $('#campaign').val(`${source}-outreach-ebook-${ebook}`);
  } else {
    $('.lp-pom-form form').append(
      `<input type="hidden" id="campaign" name="campaign" class="hidden" value="${source}-outreach-ebook-${ebook}"></input>`,
    );
  }
});
