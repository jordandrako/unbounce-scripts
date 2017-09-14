$(() => {
  // Set box ids (no #)
  const boxes = [
    // Bottom section
    'lp-pom-block-289',
    // iFrame Code box
    'lp-code-295',
    // Copyright line or close button
    'lp-pom-box-324',
  ];

  const iframe = 'iframe[src*="terms"]';
  let initialHeight = $(iframe).outerHeight();

  function resizeSection() {
    const iframeHeight = $(iframe).outerHeight();
    const sectionHeight = $(`#${boxes[0]}`).outerHeight();
    const codeBoxHeight = $(`#${boxes[1]}`).outerHeight();
    const codeBoxOffset = $(`#${boxes[1]}`).offset();
    const difference = iframeHeight - initialHeight;
    initialHeight = iframeHeight;

    $(`#${boxes[0]}`).height(sectionHeight + difference);
    $(`#${boxes[0]}-color-overlay`).height(sectionHeight + difference);
    $(`#${boxes[1]}`).height(iframeHeight + 10);
    $(`#${boxes[2]}`).offset({
      top: codeBoxHeight + codeBoxOffset.top,
    });
  }

  $(iframe).iFrameResize({
    autoResize: true,
  });

  setTimeout(() => {
    $(iframe).resize();
  }, 2000);
  setTimeout(() => {
    $(iframe).resize();
  }, 4000);
  setTimeout(() => {
    $(iframe).resize();
  }, 6000);
  setTimeout(() => {
    $(iframe).resize();
  }, 8000);
  setTimeout(() => {
    $(iframe).resize();
  }, 10000);

  $(window).resize(() => {
    setTimeout(resizeSection, 1000);
  });
});
