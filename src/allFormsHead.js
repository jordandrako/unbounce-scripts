// ////// HTTPS Redirect ////// //

// ////// Lytics ////// //
/* eslint-disable */
(window.jstag = (function() {
  function t(t) {
    return function() {
      return t.apply(this, arguments), this;
    };
  }
  function n() {
    const n = ['ready'].concat(c.call(arguments));
    return t(function() {
      n.push(c.call(arguments)), this._q.push(n);
    });
  }
  var i = { _q: [], _c: {}, ts: new Date().getTime(), ver: '2.0.0' },
    c = Array.prototype.slice;
  return (
    (i.init = function(t) {
      return (i._c = t), t.synchronous || i.loadtagmgr(t), this;
    }),
    (i.loadtagmgr = function(t) {
      const n = document.createElement('script');
      (n.type = 'text/javascript'), (n.async = !0), (n.src = `${t.url}/api/tag/${t.cid}/lio.js`);
      const i = document.getElementsByTagName('script')[0];
      i.parentNode.insertBefore(n, i);
    }),
    (i.ready = n()),
    (i.send = n('send')),
    (i.mock = n('mock')),
    (i.identify = n('identify')),
    (i.pageView = n('pageView')),
    (i.bind = t(function(t) {
      i._q.push([t, c.call(arguments, 1)]);
    })),
    (i.block = t(() => {
      i._c.blockload = !0;
    })),
    (i.unblock = t(() => {
      i._c.blockload = !1;
    })),
    i
  );
})()),
  window.jstag.init({
    cid: 'c71db31893a13b8dbeacfde75fb20cf5',
    url: '//c.lytics.io',
    min: true,
    loadid: false,
  });
/* eslint-enable */
