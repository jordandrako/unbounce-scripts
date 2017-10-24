const thisScript = $("script[src*='FBPixelEvent.js']");
const value = thisScript.attr('data-value') || 0;
let faceBookPixelLoaded = false;
let tryFB = null;

function tryFBEvent() {
  faceBookPixelLoaded = true;
  try {
    // fbq('track', 'Lead', {
    fbq('trackCustom', 'CPL Lead', {
      value,
      currency: 'USD',
    });
  } catch (err) {
    faceBookPixelLoaded = false;
  }

  if (faceBookPixelLoaded) {
    clearInterval(tryFB);
  }
}

tryFB = setInterval(() => {
  tryFBEvent();
}, 500);
