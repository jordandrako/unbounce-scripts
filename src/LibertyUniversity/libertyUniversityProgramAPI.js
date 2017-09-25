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
];

const qualifiedDegreeLevels = ['Associate', 'Bachelor', 'Master', 'Doctorate'];
const endpoint = 'https://s3-us-west-2.amazonaws.com/omg--all/LU-Programs.json';
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
  programs.sort(sortBy('ProgramDisplay', false, a => a.toUpperCase()));
  // Sort into groups
  qualifiedDegreeLevels.forEach((level) => {
    programGroup = document.createElement('optgroup');
    programGroup.label = level;
    programGroup.id = `${level}Group`;
    programGroup.text = level;
    programs.forEach((program) => {
      if (
        program.isDeleted === false &&
        // TODO: If the 'R' campus is what we need to filter????
        program.Campus !== 'R' &&
        program.DegreeLevel === level &&
        unqualifiedPrograms.includes(program.ProgramCode) === false
      ) {
        programOption = document.createElement('option');
        programOption.value = program.ProgramCode;
        programOption.text = program.ProgramDisplay;
        programGroup.appendChild(programOption);
      }
    });
    programDropdown.appendChild(programGroup);
  });
});
