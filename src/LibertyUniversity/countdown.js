$(() => {
  let hours;
  let minutes;
  let seconds;
  let urgent;
  let text;
  const deadline = new Date('January 22, 2018 23:59:59');

  const countDownText = '.countdown-text';

  function setCountdown() {
    const today = new Date();
    const remainingSeconds = Math.floor((deadline - today) / 1000);
    const remainingTime = {
      days: Math.floor(remainingSeconds / (60 * 60 * 24)),
      hours: Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((remainingSeconds % (60 * 60)) / 60),
      seconds: remainingSeconds % 60,
    };
    const days = remainingTime.days;
    if (remainingTime.hours < 10) {
      hours = `0${remainingTime.hours}`;
    } else {
      hours = remainingTime.hours;
    }
    if (remainingTime.minutes < 10) {
      minutes = `0${remainingTime.minutes}`;
    } else {
      minutes = remainingTime.minutes;
    }
    if (remainingTime.seconds < 10) {
      seconds = `0${remainingTime.seconds}`;
    } else {
      seconds = remainingTime.seconds;
    }


    if (today < deadline && days <= 90) {
      urgent = days < 60 ? `<span class="large">Don't wait!</span>&nbsp;` : '';
      if (days === 1) {
        text = `${urgent}Classes start in <strong>${days} Day.</strong>`;
      } else if (days === 0) {
        text = `Classes start today! <strong>${hours}:${minutes}:${seconds}</strong>`;
      } else {
        text = `${urgent}Classes start in <strong>${days} Days.</strong>`;
      }
      $('.countdown-text').html(text);
      return;
    }
    $(countDownText).empty();
  }
  setCountdown();
  setInterval(setCountdown, 1000);
  return text;
});
