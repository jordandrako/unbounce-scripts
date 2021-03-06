// https://tc39.github.io/ecma262/#sec-array.prototype.includes
/* eslint-disable */
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      const o = Object(this);
      const len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      const n = fromIndex | 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === 'number' &&
            typeof y === 'number' &&
            isNaN(x) &&
            isNaN(y))
        );
      }
      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }
      return false;
    },
  });
}
/* eslint-enable */

$(() => {
  // Programs that aren't eligible for the scholarship
  const unqualifiedPrograms = [
    'UNDE-BS-D',
    'ACCT-AA-D',
    'BUSI-AA-D',
    'CJUS-AA-D',
    'EDCE-AA-D',
    'ISYS-AA-D',
    'PLST-AA-D',
    'PYCC-AA-D',
    'PSYC-AA-D',
    'AMOA-AAS-D',
    'GRDG-BFA-D',
    'ACCT-BS-D',
    'AVAT-BS-D',
    'BLES-BS-D',
    'BAAD-BS-D',
    'BACM-BS-D',
    'BAEC-BS-D',
    'BAEP-BS-D',
    'BAFP-BS-D',
    'BASM-BS-D',
    'BAHC-BS-D',
    'BAHR-BS-D',
    'BAIB-BS-D',
    'BABL-BS-D',
    'BAMA-BS-D',
    'BASP-BS-D',
    'CJBA-BS-D',
    'CJCP-BS-D',
    'CJHS-BS-D',
    'CJJJ-BS-D',
    'CJPA-BS-D',
    'EDIS-BS-D',
    'GVNS-BS-D',
    'GVPP-BS-D',
    'HLAD-BS-D',
    'IFHC-BS-D',
    'ISDN-BS-D',
    'ISIA-BS-D',
    'ITAD-BS-D',
    'ITDS-BS-D',
    'ITGD-BS-D',
    'PLST-BS-D',
    'POSC-BS-D',
    'PYSA-BS-D',
    'PSCP-BS-D',
    'NURP-BSN-D',
    'ESHP-MS-D',
  ];

  // Whether or not we've hit the graduate level lead cap
  const graduateCapMet = false;

  // The degree levels eligible for the scholarship
  const qualifiedDegreeLevels = [
    'Associate',
    'Bachelor',
    // Only include graduate level if cap not reached
    !graduateCapMet && 'Master',
    !graduateCapMet && 'Doctorate',
  ];

  const endpoint =
    'https://s3-us-west-2.amazonaws.com/omg--all/ub-scripts/LibertyUniversity/LU-Programs.json';

  const programDropdown = document.querySelector('#program_of_interest');

  let programGroup;
  let programOption;

  // Sorting function
  function sortBy(field, reverse, primer) {
    const key = function k(y) {
      return primer ? primer(y[field]) : y[field];
    };
    return function sortAlpha(a, b) {
      const A = key(a);
      const B = key(b);
      let sort;
      if (A < B) {
        sort = -1;
      } else if (A > B) {
        sort = 1;
      } else {
        sort = 0;
      }
      return sort * [1, -1][+!!reverse];
    };
  }

  // Set and append default options
  programOption = document.createElement('option');
  programOption.value = 'UNDE-BS-D';
  programOption.text = 'Undecided';
  programDropdown.appendChild(programOption);

  $.getJSON(endpoint, (programs) => {
    // Sort programs by description alphabetically
    programs.sort(sortBy('ProgramDisplay', false, (a) => a.toUpperCase()));

    // Sort into groups
    qualifiedDegreeLevels.forEach((level) => {
      // Only create option groups if graduate level if cap not reached
      if (level !== false) {
        programGroup = document.createElement('optgroup');
        programGroup.label = level;
        programGroup.id = `${level}Group`;
        programGroup.text = level;
        programs.forEach((program) => {
          if (
            program.isDeleted === false &&
            program.Campus === 'D' &&
            program.DegreeLevel === level &&
            unqualifiedPrograms.includes(program.ProgramCode) === false
          ) {
            // Set data attribute for degree level
            programOption = document.createElement('option');
            programOption.value = program.ProgramCode;
            programOption.text = program.ProgramDisplay;
            programOption.dataset.degreelevel = level;
            programGroup.appendChild(programOption);
          }
        });
        programDropdown.appendChild(programGroup);
      }
    });
    // On change set degreeLevel field
    const input = document.createElement('input');
    input.id = 'degree_interest';
    input.name = 'degree_interest';
    input.hidden = true;
    input.type = 'hidden';
    input.className = 'hidden';
    input.value = programDropdown.dataset;
    const degreeLevelInput = document.querySelector('#degree_interest');
    function programChanged() {
      const degreelevel = programDropdown
        .querySelector(':checked')
        .getAttribute('data-degreelevel');
      input.value = degreelevel;
      if (!degreeLevelInput) {
        document.querySelector('.lp-pom-form form').appendChild(input);
      } else {
        degreeLevelInput.value = degreelevel;
      }
    }
    programDropdown.addEventListener('change', programChanged);
    setInterval(programChanged, 1000);
  });

  // Set time to contact options
  const timeToContactOptions = {
    '8AM - 12PM': '1',
    '12PM - 5PM': '2',
    '5PM - 9PM': '3',
  };

  // TODO: Use es6 instead of jQuery for this dropdown
  // Append the options
  if ($('#time_to_contact').length) {
    $.each(timeToContactOptions, (time, optionValue) => {
      $('#time_to_contact').append(
        `<option value="${optionValue}">${time}</option>`,
      );
    });
  }
});
