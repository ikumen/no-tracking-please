
function removeURLRedirectTracking() {
  const aTags = document.getElementsByTagName('a');
  for (let i=0; i < aTags.length; i++) {
    const a = aTags[i];
    const {host, pathname, search} = a;
    if (host === 'www.google.com' && pathname === '/url') {
      var params = search
        .slice(1)    /* remove leading ? */
        .split('&')  /* split into key/value pair */
        .reduce((m, p) => {
          const [k, v] = p.split('=');  /* split key and value */
          m[k] = v;
          return m;
        }, {});

      a.href = decodeURIComponent(params['q']);
    }
  }
}

removeURLRedirectTracking();

