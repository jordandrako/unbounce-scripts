// Fixed Menu (Header AND footer) v1
// Args
$(() => {
  const thisScript = $("script[src*='fixedHeaderFooter.js']");
  const header = `#lp-pom-box-${thisScript.attr('data-header')}`;
  const footer = `#lp-pom-box-${thisScript.attr('data-footer')}`;
  let removeSection;
  if (thisScript.attr('data-remove-section')) {
    removeSection = `#lp-pom-block-${thisScript.attr('data-remove-section')}`;
  }

  // Header Left
  const headerCSS = {
    position: 'fixed',
    left: '0',
    top: '0',
    bottom: 'auto',
    width: '100%',
    'z-index': '899',
  };
  const headerOverlayCSS = {
    position: 'fixed',
    left: '0',
    top: '0',
    bottom: 'auto',
    width: '100%',
    'z-index': 'auto',
    'border-style': 'none none none none',
  };
  const headerChildrenCSS = {
    position: 'fixed',
    left: 'auto',
    top: '0',
    bottom: 'auto',
    width: '100%',
    'z-index': '999',
    'border-style': 'none none none none',
    'border-width': '0',
    background: 'none',
  };

  const headerParent = $(header).parent();
  const headerClone = $(header).clone();

  headerClone
    .appendTo(headerParent)
    .css(headerCSS)
    .children()
    .remove();
  headerClone.addClass('header-bg');
  $(header).css(headerChildrenCSS);
  $(`${header}-color-overlay`)
    .appendTo(headerClone)
    .css(headerOverlayCSS);

  // Footer
  const footerCSS = {
    position: 'fixed',
    left: '0',
    top: 'auto',
    bottom: '0',
    width: '100%',
    'z-index': '899',
  };
  const footerOverlayCSS = {
    position: 'fixed',
    left: '0',
    top: 'auto',
    bottom: '0',
    width: '100%',
    'z-index': 'auto',
    'border-style': 'none none none none',
  };
  const footerChildrenCSS = {
    position: 'fixed',
    left: 'auto',
    top: 'auto',
    bottom: '0',
    width: '100%',
    'z-index': '999',
    'border-style': 'none none none none',
    'border-width': '0',
    background: 'none',
  };

  const footerParent = $(footer).parent();
  const footerClone = $(footer).clone();

  footerClone
    .appendTo(footerParent)
    .css(footerCSS)
    .children()
    .remove();
  footerClone.addClass('footer-bg');
  $(footer).css(footerChildrenCSS);
  $(`${footer}-color-overlay`)
    .appendTo(footerClone)
    .css(footerOverlayCSS);

  if (removeSection) {
    console.log(`Removing ${removeSection}`);
    $(removeSection).remove();
  }
  const height = $(header).outerHeight();

  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll >= height) {
      $(header).addClass('scroll');
      $(headerClone).addClass('scroll');
    } else {
      $(header).removeClass('scroll');
      $(headerClone).removeClass('scroll');
    }
  });
});
