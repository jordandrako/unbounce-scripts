const geoipFieldset =
  '<fieldset class="geoip_fields">' +
  '<input type="hidden" class="hidden" name="ip_address_omg" id="ip_address_omg"></input>' +
  '<input type="hidden" class="hidden" name="city_omg" id="city_omg"></input>' +
  '<input type="hidden" class="hidden" name="region_code_omg" id="region_code_omg"></input>' +
  '<input type="hidden" class="hidden" name="region_name_omg" id="region_name_omg"></input>' +
  '<input type="hidden" class="hidden" name="country_omg" id="country_omg"></input>' +
  '<input type="hidden" class="hidden" name="country_code_omg" id="country_code_omg"></input>' +
  '<input type="hidden" class="hidden" name="time_zone_omg" id="time_zone_omg"></input>' +
  '<input type="hidden" class="hidden" name="zip_code_omg" id="zip_code_omg"></input>' +
  '</fieldset>';

$.getJSON('https://freegeoip.net/json/', (geo) => {
  if ($.isEmptyObject(geo) !== true) {
    $('.lp-pom-form form').append(geoipFieldset);
    setInterval(() => {
      $('.geoip_fields #ip_address_omg').val(geo.ip);
      $('.geoip_fields #city_omg').val(geo.city);
      $('.geoip_fields #region_code_omg').val(geo.region_code);
      $('.geoip_fields #region_name_omg').val(geo.region_name);
      $('.geoip_fields #country_omg').val(geo.country_name);
      $('.geoip_fields #country_code_omg').val(geo.country_code);
      $('.geoip_fields #time_zone_omg').val(geo.time_zone);
      $('.geoip_fields #zip_code_omg').val(geo.zip_code);
    }, 100);
  }
});
