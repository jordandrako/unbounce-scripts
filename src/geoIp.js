const ubform = document.querySelector('.lp-pom-form form');
const geofieldset = document.createElement('fieldset');
geofieldset.className = 'geoip_fields';
geofieldset.innerHTML = document.querySelector('#geoip').innerHTML;

fetch('https://freegeoip.net/json/')
  .then(res => res.json())
  .then((geo) => {
    ubform.appendChild(geofieldset);
    setInterval(() => {
      document.querySelector('.geoip_fields #ip_address_omg').value = geo.ip;
      document.querySelector('.geoip_fields #city_omg').value = geo.city;
      document.querySelector('.geoip_fields #region_code_omg').value = geo.region_code;
      document.querySelector('.geoip_fields #region_name_omg').value = geo.region_name;
      document.querySelector('.geoip_fields #country_omg').value = geo.country_name;
      document.querySelector('.geoip_fields #country_code_omg').value = geo.country_code;
      document.querySelector('.geoip_fields #time_zone_omg').value = geo.time_zone;
      document.querySelector('.geoip_fields #zip_code_omg').value = geo.zip_code;
    }, 100);
  });
