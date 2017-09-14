const params = {};
if (location.search) {
  const parts = location.search.substring(1).split('&');
  parts.forEach((param) => {
    const key = param.split('=');
    params[key[0]] = key[1] || true;
  });
}
// const adSource = `${params.utm_source}-${params.utm_medium}
// -${params.utm_content}-${params.utm_campaign}-${params.utm_term}`;
const adSource = `${params.utm_source || 'source'}-${params.utm_medium ||
  'medium'}-${params.utm_content || 'content'}-${params.utm_campaign ||
  'campaign'}-${params.utm_term || 'term'}`;
const campaignInput = document.createElement('input');
campaignInput.id = 'campaign_source';
campaignInput.name = 'campaign_source';
campaignInput.type = 'hidden';
campaignInput.value = adSource;

const form = document.querySelector('.lp-pom-form form');
if (form) {
  setInterval(() => {
    if (!document.querySelector('#campaign_source')) {
      form.appendChild(campaignInput);
    } else {
      document.querySelector('#campaign_source').value = adSource;
    }
  }, 500);
}
