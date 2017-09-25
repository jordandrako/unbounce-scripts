$(() => {
  let startDate;
  let endDate;
  let acceptDate;
  let termName;
  let registerDate;
  let deadlineDate;
  const fall17 = new Date('Jun 5 2017 PST');
  const spring18 = new Date('Aug 1 2017 PST');
  const summer18 = new Date('Dec 20 2017 PST');
  const today = new Date();

  if (today > fall17) {
    startDate = 'June 5, 2017';
    endDate = 'July 31, 2017';
    acceptDate = 'August 2, 2017';
    termName = 'Fall 2017 B term';
    registerDate = 'August 16, 2017';
    deadlineDate = 'August 21, 2017';
  }

  if (today > spring18) {
    startDate = 'August 1, 2017';
    endDate = 'January 7, 2018';
    acceptDate = 'January 10, 2018';
    termName = 'Spring 2018 B term';
    registerDate = 'January 10, 2018';
    deadlineDate = 'January 15, 2018';
  }

  if (today > summer18) {
    startDate = 'January 8, 2018';
    endDate = 'TBD';
    acceptDate = 'TBD';
    termName = 'TBD';
    registerDate = 'TBD';
    deadlineDate = 'TBD';
  }

  $('.startDate').html(startDate);
  $('.endDate').html(endDate);
  $('.acceptDate').html(acceptDate);
  $('.termName').html(termName);
  $('.registerDate').html(registerDate);
  $('.deadlineDate').html(deadlineDate);

  const params = {};
  if (location.search) {
    const parts = location.search.substring(1).split('&');
    for (let i = 0; i < parts.length; i++) {
      const nv = parts[i].split('=');
      if (!nv[0]) continue;
      params[nv[0]] = nv[1] || true;
    }
  }

  $.each(params, (data, val) => {
    $('body').attr(`data-${data}`, val);
  });

  if (params.font) {
    const script = `<link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=${decodeURI(
      params.font,
    )}:400,700">`;
    $('head').append(script);

    const font = params.font.replace('+', ' ');

    $('body').css({
      'font-family': `${font}, sans-serif`,
    });
  }
});
