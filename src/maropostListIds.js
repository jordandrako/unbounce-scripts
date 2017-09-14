function setMaropostListId() {
  // Scope out function and variables
  // Get domain name and url parameters if they don't already exist
  const url = location.host.split('.');
  const domain = url.length <= 2 ? url[0] : url[1] || 'churchleaders';
  const param = window.params ? window.params : {};
  if (!window.params && location.search) {
    const parts = location.search.substring(1).split('&');
    parts.forEach((part) => {
      const key = part.split('=');
      param[key[0]] = key[1] || true;
    });
  }
  // Get the desired default lists from data attribute
  const thisScript = $("script[src*='maropostListIds.js']");
  const defaultList = thisScript.attr('data-defaultList')
    ? thisScript.attr('data-defaultList')
    : domain;
  const mlist = param.mlist ? decodeURI(param.mlist).toLowerCase() : defaultList;
  // Set regex tests
  const lists = {
    churchleaders: '43679,43819',
    sermoncentral: '43911,43908',
    faithit: '43897,43896',
    foreverymom: '43339,43888',
    outreachmagazine: '43903,43902',
    sermonquotes: '43905,43904',
    churchplants: '43895,43893',
  };
  let listIds;
  $.each(lists, (key, value) => {
    if (new RegExp(key, 'gi').test(mlist)) {
      listIds = `48667,${value}`;
    }
  });
  // Append hidden list input
  $('.lp-pom-form form').append(
    `<input id='list_omg' name='list_omg' class='hidden' type='hidden' data-lists=${mlist} value=${listIds}>`,
  );
  // Constantly set the value so users can't edit it manually.
  setInterval(() => {
    $('#list_omg').val(listIds);
  }, 500);
}
// And run it all when jquery loads
$().ready(setMaropostListId());
