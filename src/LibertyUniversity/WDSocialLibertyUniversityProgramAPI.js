// https://tc39.github.io/ecma262/#sec-array.prototype.includes
/* eslint-disable */
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
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
          (typeof x === "number" &&
            typeof y === "number" &&
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
    }
  });
}
/* eslint-enable */

$(document).ready(() => {
  $(() => {
    // Programs that aren't eligible for the scholarship
    const unqualifiedPrograms = [
      "UNDE-BS-D",
      "AMOA-AAS-D",
      "AVAT-BS-D",
      "AVME-BS-D",
      "BACM-BS-D",
      "BAEC-BS-D",
      "BAFP-BS-D",
      "BAIB-BS-D",
      "BAMA-BS-D",
      "BAMM-BS-D",
      "BAPA-BS-D",
      "BUSI-AA-D",
      "CJCS-BS-D",
      "CJJJ-BS-D",
      "CJPA-BS-D",
      "CJSI-BS-D",
      "COMM-MA-D",
      "EDIS-BS-D",
      "EDSC-EDS-D",
      "EDSE-EDS-D",
      "EDUC-AA-D",
      "ESNT-MS-D",
      "GRDG-BFA-D",
      "GVNS-BS-D",
      "GVPL-BS-D",
      "GVPP-BS-D",
      "HCCM-MA-D",
      "HISR-BS-D",
      "IFHC-BS-D",
      "INDS-AA-D",
      "INDS-BS-D",
      "ISAI-BS-D",
      "ISDN-BS-D",
      "ISIA-BS-D",
      "ISIN-BS-D",
      "ITAD-BS-D",
      "ITWP-BS-D",
      "MBIS-MS-D",
      "MBIS-MS-D",
      "MTEC-MED-D",
      "PLST-BS-D",
      "PSDP-BS-D",
      "PSYC-AA-D",
      "PYCR-BS-D",
      "PYSA-BS-D",
      "REVA-BS-D",
      "RLCC-BS-D",
      "RLGI-BS-D",
      "SPCU-BS-D"
    ];

    const graduateOnly = true;

    // Whether or not we've hit the graduate level lead cap
    const graduateCapMet = false;

    // The degree levels eligible for the scholarship
    const qualifiedDegreeLevels = [
      !graduateOnly && "Associate",
      !graduateOnly && "Bachelor",
      // Only include graduate level if cap not reached
      !graduateCapMet && "Master",
      !graduateCapMet && "Doctorate"
    ];

    const endpoint =
      "https://s3-us-west-2.amazonaws.com/omg--all/ub-scripts/LibertyUniversity/LU-Programs.json";

    const programDropdown = document.querySelector("#program_of_interest");

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
    programOption = document.createElement("option");
    programOption.value = "UNDE-BS-D";
    programOption.text = "Undecided";
    programDropdown.appendChild(programOption);

    $.getJSON(endpoint, programs => {
      // Sort programs by description alphabetically
      programs.sort(sortBy("ProgramDisplay", false, a => a.toUpperCase()));

      // Sort into groups
      qualifiedDegreeLevels.forEach(level => {
        // Only create option groups if graduate level if cap not reached
        if (level !== false) {
          programGroup = document.createElement("optgroup");
          programGroup.label = level;
          programGroup.id = `${level}Group`;
          programGroup.text = level;
          programs.forEach(program => {
            if (
              program.isDeleted === false &&
              program.Campus === "D" &&
              program.DegreeLevel === level &&
              unqualifiedPrograms.includes(program.ProgramCode) === false
            ) {
              // Set data attribute for degree level
              programOption = document.createElement("option");
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
      // const input = document.createElement("input");
      // input.id = "degree_interest";
      // input.name = "degree_interest";
      // input.hidden = true;
      // input.type = "hidden";
      // input.className = "hidden";
      // input.value = programDropdown.dataset;
      // const degreeLevelInput = document.querySelector("#degree_interest");
      // function programChanged() {
      //   const degreelevel = programDropdown
      //     .querySelector(":checked")
      //     .getAttribute("data-degreelevel");
      //   input.value = degreelevel;
      //   if (!degreeLevelInput) {
      //     document.querySelector(".lp-pom-form form").appendChild(input);
      //   } else {
      //     degreeLevelInput.value = degreelevel;
      //   }
      // }
      // programDropdown.addEventListener("change", programChanged);
      // setInterval(programChanged, 1000);
    });

    // Set time to contact options
    const timeToContactOptions = {
      "8AM - 12PM": "1",
      "12PM - 5PM": "2",
      "5PM - 9PM": "3"
    };

    // TODO: Use es6 instead of jQuery for this dropdown
    // Append the options
    if ($("#time_to_contact").length) {
      $.each(timeToContactOptions, (time, optionValue) => {
        $("#time_to_contact").append(
          `<option value="${optionValue}">${time}</option>`
        );
      });
    }
  });
});
