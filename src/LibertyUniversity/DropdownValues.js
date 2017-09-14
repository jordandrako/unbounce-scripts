$(() => {
  // \/\/\/\/\/\// Program Codes //\/\/\/\/\/\//
  // The dropdown's ID (without #)
  const dropdownProgram = 'program_of_interest';

  // Option Groups
  const optionGroups = {
    Undergrad: 'ug',

    'Juris Master:': 'jm',
    'Master of Arts:': 'ma',
    'Master of Arts in Christian Ministry:': 'mcm',
    'Master of Arts in Global Studies:': 'mgs',
    'Master of Arts in Religion:': 'mar',
    'Master of Arts in Teaching:': 'mat',
    'Master of Arts in Theological Studies:': 'mts',
    'Master of Business Administration:': 'mba',
    'Master of Divinity:': 'mdv',
    'Master of Education:': 'med',
    'Master of Fine Arts:': 'mfa',
    'Master of Law:': 'llm',
    'Master of Public Administration:': 'mpa',
    'Master of Public Health:': 'mph',
    'Master of Religious Education:': 'mre',
    'Master of Science:': 'ms',
    'Master of Science in Nursing:': 'msn',
    'Master of Theology:': 'thm',

    'Doctor of Business Administration:': 'dba',
    'Doctor of Ministry:': 'dmn',
    'Doctor of Nursing Practice:': 'dnp',
    'Doctor of Philosophy:': 'phd',
    'Doctor of Worship Studies:': 'dws',
    'Doctor of Education:': 'edd',
    'Education Specialist:': 'eds',
  };

  // Map of old to new values
  const ug = {
    'AA: Education (Non-Licensure)': 'EDUC-AA-D',
    'AA: Interdisciplinary Studies': 'INDS-AA-D',
    'AA: Religion': 'RLGN-AA-D',
    'BS: Aeronautics in Aviation Maintenance Management': 'AVMM-BS-D',
    'BS: Business Administration: Digital Marketing and Advertising': 'BADM-BS-D',
    'BS: Business Administration: Finance': 'BAFI-BS-D',
    'BS: Business Administration: General': 'BAGE-BS-D',
    'BS: Business Administration: Project Management': 'BAPM-BS-D',
    'BS: Business Administration: Public Administration': 'BAPA-BS-D',
    'BS: Business Administration: Strategic Marketing Management': 'BAMM-BS-D',
    'BS: Christian Leadership and Management': 'CLEM-BS-D',
    'BS: Criminal Justice': 'CJUS-BS-D',
    'BS: Criminal Justice: Crime Scene Investigation': 'CJCS-BS-D',
    'BS: Early Childhood Education in Interdisciplinary Studies': 'EDCI-BS-D',
    'BS: Government: Pre-Law': 'GVPL-BS-D',
    'BS: Government: Public Administration': 'GVPA-BS-D',
    'BS: History': 'HISR-BS-D',
    'BS: Information Systems: Accounting Information Systems': 'ISAI-BS-D',
    'BS: Information Systems: Database': 'ISDB-BS-D',
    'BS: Information Technology: Web and Mobile Programming': 'ITWP-BS-D',
    'BS: Interdisciplinary Studies': 'INDS-BS-D',
    'BS: Psychology': 'PSYC-BS-D',
    'BS: Psychology: Christian Counseling': 'PYCC-BS-D',
    'BS: Psychology: Crisis Counseling': 'PYCR-BS-D',
    'BS: Psychology: Developmental Psychology': 'PSDP-BS-D',
    'BS: Psychology: Life Coaching': 'PYLC-BS-D',
    'BS: Psychology: Military Resilience': 'PYMR-BS-D',
    'BS: Religion: Biblical and Theological Studies': 'RLBT-BS-D',
    'BS: Religion: Christian Counseling': 'RLCC-BS-D',
    'BS: Religion: Christian Ministries': 'RLCH-BS-D',
    'BS: Religion: Evangelism': 'REVA-BS-D',
    'BS: Social Work': 'SOWK-BS-D',
    'BS: Special Education: Interdisciplinary Studies': 'SPEI-BS-D',
  };

  const dba = {
    'DBA: Accounting': 'DBAC-DBA-D',
    'DBA: Finance': 'DBFI-DBA-D',
    'DBA: Healthcare Management': 'DBHM-DBA-D',
    'DBA: Human Resources': 'DBHR-DBA-D',
    'DBA: Information Systems': 'DBAI-DBA-D',
    'DBA: International Business': 'DBIB-DBA-D',
    'DBA: Leadership': 'DBLD-DBA-D',
    'DBA: Marketing': 'DBMK-DBA-D',
    'DBA: Non-Profit Leadership & Management': 'DBNP-DBA-D',
    'DBA: Project Management': 'DBPM-DBA-D',
    'DBA: Strategic Management': 'DBSM-DBA-D',
    'DBA: Supply Chain Management and Logistics': 'DBSC-DBA-D',
  };

  const dmn = {
    'DMN: Discipleship': 'DMDS-DMN-D',
    'DMN: Evangelism and Church Planting': 'DMEC-DMN-D',
    'DMN: Expository Preaching': 'DMHM-DMN-D',
    'DMN: Pastoral Counseling': 'DMPC-DMN-D',
    'DMN: Pastoral Leadership': 'DMLE-DMN-D',
    'DMN: Worship': 'DMWS-DMN-D',
  };

  const dnp = {
    'DNP: Doctor of Nursing Practice': 'DRNP-DNP-D',
  };

  const phd = {
    'PHD: Counselor Education and Supervision': 'DCED-PHD-D',
    'PHD: Theology and Apologetics': 'DTHA-PHD-D',
  };

  const dws = {
    'DWS: Doctor Of Worship Studies': 'DWRS-DWS-D',
  };

  const edd = {
    'EDD: Christian Leadership': 'DECL-EDD-D',
    'EDD: Community Care & Counseling: Marriage & Family': 'DCMF-EDD-D',
    'EDD: Community Care & Counseling: Pastoral Counseling': 'DCPC-EDD-D',
    'EDD: Curriculum and Instruction': 'DECI-EDD-D',
    'EDD: Curriculum and Instruction/Elementary Education': 'DECE-EDD-D',
    'EDD: Curriculum and Instruction/Middle-Grades Education': 'DECM-EDD-D',
    'EDD: Curriculum and Instruction/Secondary Education': 'DECS-EDD-D',
    'EDD: Curriculum and Instruction/Special Education': 'DECP-EDD-D',
    'EDD: Educational Leadership': 'DELE-EDD-D',
  };

  const eds = {
    'EDS: Curriculum and Instruction': 'EDSC-EDS-D',
    'EDS: Curriculum and Instruction/Elementary Education': 'EDSN-EDS-D',
    'EDS: Curriculum and Instruction/Middle-Grades Education': 'EDSM-EDS-D',
    'EDS: Curriculum and Instruction/Secondary Education': 'EDSS-EDS-D',
    'EDS: Curriculum and Instruction/Special Education': 'EDSP-EDS-D',
    'EDS: Educational Leadership': 'EDSE-EDS-D',
  };

  const jm = {
    'JM: American Legal Studies': 'AMLS-JM-D',
    'JM: International Legal Studies': 'ILGS-JM-D',
  };

  const llm = {
    'LLM: International Legal Studies': 'INLS-LLM-D',
  };

  const ma = {
    'MA: Addictions Counseling': 'ADCN-MA-D',
    'MA: Applied Psychology: Developmental Psychology': 'PSAD-MA-D',
    'MA: Applied Psychology: Industrial Organizational Psychology': 'PSAI-MA-D',
    'MA: Christian Apologetics (Non-Thesis)': 'CANT-MA-D',
    'MA: Communication': 'COMM-MA-D',
    'MA: Ethnomusicology': 'ETHN-MA-D',
    'MA: Executive Leadership': 'MAEL-MA-D',
    'MA: History: Comprehensive Track': 'HISN-MA-D',
    'MA: Human Services Counseling: Addictions and Recovery': 'HCAR-MA-D',
    'MA: Human Services Counseling: Business': 'HCBM-MA-D',
    'MA: Human Services Counseling: Christian Ministries': 'HCCM-MA-D',
    'MA: Human Services Counseling: Criminal Justice': 'HCCJ-MA-D',
    'MA: Human Services Counseling: Crisis Response and Trauma': 'HCCT-MA-D',
    'MA: Human Services Counseling: Executive Leadership': 'HCEL-MA-D',
    'MA: Human Services Counseling: Family Advocacy, Public Policy, and the Future': 'HCFP-MA-D',
    'MA: Human Services Counseling: Health and Wellness': 'HCHW-MA-D',
    'MA: Human Services Counseling: Life Coaching': 'HCLC-MA-D',
    'MA: Human Services Counseling: Marriage and Family': 'HCMF-MA-D',
    'MA: Human Services Counseling: Military Resilience': 'HCMR-MA-D',
    'MA: Interdisciplinary Studies': 'INDS-MA-D',
    'MA: Marriage and Family Therapy': 'COMF-MA-D',
    'MA: Music and Worship': 'MSWP-MA-D',
    'MA: Music Education': 'MMED-MA-D',
    'MA: Pastoral Counseling: Addictions and Recovery': 'PCAE-MA-D',
    'MA: Pastoral Counseling: Community Chaplaincy': 'PCCC-MA-D',
    'MA: Pastoral Counseling: Crisis Response and Trauma': 'PCCR-MA-D',
    'MA: Pastoral Counseling: Discipleship and Church Ministry': 'PCDH-MA-D',
    'MA: Pastoral Counseling: Leadership': 'PCLD-MA-D',
    'MA: Pastoral Counseling: Life Coaching': 'PCLH-MA-D',
    'MA: Pastoral Counseling: Marriage and Family Studies': 'PCFS-MA-D',
    'MA: Pastoral Counseling: Marriage and Family': 'PCMA-MA-D',
    'MA: Pastoral Counseling: Military Resilience': 'PCME-MA-D',
    'MA: Pastoral Counseling: Parent and Child/Adolescent': 'PCPA-MA-D',
    'MA: Pastoral Counseling: Theology': 'PCTE-MA-D',
    'MA: Pastoral Counseling': 'PCPO-MA-D',
    'MA: Professional Counseling (60-hour)': 'COEX-MA-D',
    'MA: Professional Writing': 'PRWR-MA-D',
    'MA: Public Policy: Campaigns and Elections': 'MAPC-MA-D',
    'MA: Public Policy: International Affairs': 'MAPI-MA-D',
    'MA: Public Policy: Middle East Affairs': 'MAPM-MA-D',
    'MA: Public Policy: Public Administration': 'MAPA-MA-D',
    'MA: Public Policy': 'MAPP-MA-D',
    'MA: Strategic Communication': 'SCCM-MA-D',
    'MA: Worship Studies: Ethnomusicology': 'MWET-MA-D',
    'MA: Worship Studies: Leadership': 'MWLD-MA-D',
    'MA: Worship Studies: Worship Techniques': 'MWWT-MA-D',
  };

  const mar = {
    'MAR: Biblical Studies': 'MRBS-MAR-D',
    'MAR: Christian Apologetics': 'CHAP-MAR-D',
    'MAR: Church History': 'MRCH-MAR-D',
    'MAR: Community Chaplaincy': 'RLCT-MAR-D',
    'MAR: Discipleship and Church Ministry': 'MRCD-MAR-D',
    'MAR: Evangelism and Church Planting': 'MRCG-MAR-D',
    'MAR: Global Studies': 'MRGS-MAR-D',
    'MAR: Homiletics': 'MRHM-MAR-D',
    'MAR: Leadership': 'MRLD-MAR-D',
    'MAR: Pastoral Counseling': 'MRPC-MAR-D',
    'MAR: Pastoral Ministry': 'MRPM-MAR-D',
    'MAR: Theology': 'MRTH-MAR-D',
    'MAR: Worship': 'MRWR-MAR-D',
  };

  const mat = {
    'MAT: Elementary Education': 'MTEL-MAT-D',
    'MAT: Middle Grades Education': 'MTMI-MAT-D',
    'MAT: Secondary Education': 'MTSC-MAT-D',
    'MAT: Special Education': 'MTSL-MAT-D',
  };

  const mba = {
    'MBA: Accounting': 'MBAA-MBA-D',
    'MBA: American Legal Studies': 'MBAS-MBA-D',
    'MBA: Criminal Justice': 'MBAJ-MBA-D',
    'MBA: Finance': 'MBAF-MBA-D',
    'MBA: General (36-hour)': 'MBAT-MBA-D',
    'MBA: Healthcare Management': 'MBAC-MBA-D',
    'MBA: Human Resources': 'MBAH-MBA-D',
    'MBA: International Business': 'MBAI-MBA-D',
    'MBA: International Legal Studies': 'MBIL-MBA-D',
    'MBA: Leadership': 'MBAL-MBA-D',
    'MBA: Marketing': 'MBAK-MBA-D',
    'MBA: Non-Profit Leadership & Management': 'MBAN-MBA-D',
    'MBA: Project Management': 'MBAM-MBA-D',
    'MBA: Public Administration': 'MBAD-MBA-D',
    'MBA: Public Relations': 'MBAP-MBA-D',
    'MBA: Strategic Management': 'MBNP-MBA-D',
    'MBA: Supply Chain Management & Logistics': 'MBSC-MBA-D',
  };

  const mcm = {
    'MCM: Community Chaplaincy': 'CMCC-MCM-D',
    'MCM: Discipleship and Church Ministry': 'MMDC-MCM-D',
    'MCM: Evangelism and Church Planting': 'MMEC-MCM-D',
    'MCM: Global Studies': 'MMGS-MCM-D',
    'MCM: Homiletics': 'MMHM-MCM-D',
    'MCM: Leadership': 'MMLD-MCM-D',
    'MCM: Pastoral Counseling': 'MMPC-MCM-D',
    'MCM: Pastoral Ministries': 'MMPM-MCM-D',
    'MCM: Worship': 'MMWR-MCM-D',
  };

  const mdv = {
    'MDV: Biblical Languages (75 Hour)': 'MDBL-MDV-D',
    'MDV: Biblical Languages (90 Hour)': 'MDBG-MDV-D',
    'MDV: Biblical Studies': 'MDBT-MDV-D',
    'MDV: Chaplaincy (75 hour)': 'MDCL-MDV-D',
    'MDV: Christian Apologetics': 'CHAP-MDV-D',
    'MDV: Church History': 'MDCR-MDV-D',
    'MDV: Community Chaplaincy (Non-Thesis)': 'MCCN-MDV-D',
    'MDV: Community Chaplaincy (Thesis)': 'MCCT-MDV-D',
    'MDV: Discipleship and Church Ministry': 'MDDC-MDV-D',
    'MDV: Evangelism and Church Planting': 'MDCG-MDV-D',
    'MDV: Global Studies': 'MDGS-MDV-D',
    'MDV: Healthcare Chaplaincy (Non-Thesis)': 'MHLN-MDV-D',
    'MDV: Healthcare Chaplaincy (Thesis)': 'MHLT-MDV-D',
    'MDV: Homiletics': 'MDHM-MDV-D',
    'MDV: Leadership': 'MDLD-MDV-D',
    'MDV: Military Chaplaincy (Non-Thesis)': 'MILN-MDV-D',
    'MDV: Military Chaplaincy (Thesis)': 'MILT-MDV-D',
    'MDV: Pastoral Counseling': 'MDPC-MDV-D',
    'MDV: Pastoral Ministries': 'MDPT-MDV-D',
    'MDV: Theology': 'MDTO-MDV-D',
    'MDV: Worship Studies': 'MDWS-MDV-D',
  };

  const med = {
    'MED: Administration and Supervision: Teacher Licensure': 'MEAS-MED-D',
    'MED: Program Specialist: Math Specialist': 'MEMS-MED-D',
    'MED: Program Specialist: Reading Specialist': 'MERS-MED-D',
    'MED: School Counseling: Teacher Licensure': 'MESC-MED-D',
    'MED: Teaching and Learning: Early Childhood Education': 'MTEC-MED-D',
    'MED: Teaching and Learning: Educational Technology and Online Instruction': 'MTTO-MED-D',
    'MED: Teaching and Learning: Elementary Education': 'MTLE-MED-D',
    'MED: Teaching and Learning: English': 'MTEN-MED-D',
    'MED: Teaching and Learning: Gifted Education': 'MTGE-MED-D',
    'MED: Teaching and Learning: History': 'MTHI-MED-D',
    'MED: Teaching and Learning: Leadership': 'MTLD-MED-D',
    'MED: Teaching and Learning: Middle Grades': 'MTLM-MED-D',
    'MED: Teaching and Learning: Special Education': 'MTLS-MED-D',
    'MED: Teaching and Learning: Student Services': 'EDTL-MED-D',
    'MED: Teaching and Learning': 'MTCL-MED-D',
  };

  const mfa = {
    'MFA: Graphic Design': 'GRDG-MFA-D',
  };

  const mgs = {
    'MGS: Master of Arts in Global Studies': 'MAGP-MGS-D',
  };

  const mpa = {
    'MPA: Business & Government': 'MPAB-MPA-D',
    'MPA: Healthcare': 'MPAH-MPA-D',
    'MPA: Law & Public Policy': 'MPAL-MPA-D',
    'MPA: Master of Public Administration': 'MPAD-MPA-D',
    'MPA: Public & Non-Profit Management': 'MPAP-MPA-D',
  };

  const mph = {
    'MPH: Global Health': 'MPHG-MPH-D',
    'MPH: Health Promotion': 'MPHP-MPH-D',
    'MPH: Nutrition': 'MPHN-MPH-D',
  };

  const mre = {
    'MRE: Master of Religious Education': 'MRED-MRE-D',
  };

  const ms = {
    'MS: Accounting': 'ACCT-MS-D',
    'MS: Audit & Financial Reporting': 'MSAA-MS-D',
    'MS: Biomedical Sciences': 'MBIS-MS-D',
    'MS: Business': 'MSAB-MS-D',
    'MS: Criminal Justice: Forensic Psychology': 'CJFP-MS-D',
    'MS: Criminal Justice: Homeland Security': 'CJHS-MS-D',
    'MS: Criminal Justice: Public Administration': 'CJPA-MS-D',
    'MS: Criminal Justice': 'CJUS-MS-D',
    'MS: Cyber Security': 'MCYS-MS-D',
    'MS: Exercise Science: Clinical': 'ESCN-MS-D',
    'MS: Exercise Science: Community Physical Activity': 'ESCA-MS-D',
    'MS: Exercise Science: Human Performance': 'ESHP-MS-D',
    'MS: Exercise Science: Nutrition': 'ESNT-MS-D',
    'MS: Financial Services': 'MSAS-MS-D',
    'MS: Forensic Accounting': 'MSAF-MS-D',
    'MS: Health Informatics': 'HTIN-MS-D',
    'MS: Healthcare Administration: Accounting': 'MSHA-MS-D',
    'MS: Healthcare Administration: Finance': 'MSHF-MS-D',
    'MS: Healthcare Administration: Human Resources': 'MSHR-MS-D',
    'MS: Healthcare Administration: Leadership': 'MSHL-MS-D',
    'MS: Healthcare Administration: Marketing': 'MSHM-MS-D',
    'MS: Healthcare Administration: Non-Profit Management': 'MSHN-MS-D',
    'MS: Healthcare Administration: Project management': 'MSHP-MS-D',
    'MS: Healthcare Administration: Public Administration': 'MSHB-MS-D',
    'MS: Healthcare Administration: Public Relations': 'MSHU-MS-D',
    'MS: Healthcare Administration: Strategic Management': 'MSHT-MS-D',
    'MS: Healthcare Administration: Supply Chain Management and Logistics': 'MSHC-MS-D',
    'MS: Healthcare Administration': 'HCAD-MS-D',
    'MS: Information Systems: Information Assurance': 'MIIA-MS-D',
    'MS: Information Systems: Technology Management': 'MITM-MS-D',
    'MS: Information Technology: Network Design & Security': 'ITND-MS-D',
    'MS: Information Technology: Software Design & Management': 'ITSD-MS-D',
    'MS: Leadership': 'MSAL-MS-D',
    'MS: Marketing: Digital Marketing and Advertising': 'MSMD-MS-D',
    'MS: Marketing: Project Management': 'MSMP-MS-D',
    'MS: Marketing: Public Relations': 'MSMR-MS-D',
    'MS: Marketing: Sports Marketing and Media': 'MSMS-MS-D',
    'MS: Political Science': 'MPSC-MS-D',
    'MS: Sport Management (Non-Thesis)': 'SMGT-MS-D',
    'MS: Sport Management: Outdoor Adventure Sport (Non-Thesis)': 'SMTO-MS-D',
    'MS: Sport Management: Outdoor Adventure Sport (Thesis)': 'SMON-MS-D',
    'MS: Sport Management: Sport Administration (Non-Thesis)': 'SMTA-MS-D',
    'MS: Sport Management: Sport Administration (Thesis)': 'SMTT-MS-D',
    'MS: Sport Management: Tourism (Non-Thesis)': 'SMTR-MS-D',
    'MS: Sport Management: Tourism (Thesis)': 'SMTH-MS-D',
    'MS: Taxation': 'MSAT-MS-D',
  };

  const msn = {
    'MSN: Nurse Educator': 'MNED-MSN-D',
    'MSN: Nursing Administration': 'MNAD-MSN-D',
    'MSN: Nursing Informatics': 'MNNI-MSN-D',
  };

  const mts = {
    'MTS: Biblical Studies': 'MATB-MTS-D',
    'MTS: Church History': 'MATR-MTS-D',
    'MTS: Theology': 'MATT-MTS-D',
  };

  const thm = {
    'THM: Biblical Studies': 'LBIB-THG-D',
    'THM: Biblical Studies (Non-Thesis)': 'TNBS-THM-D',
    'THM: Christian Apologetics (Thesis)': 'CANT-THM-D',
    'THM: Church History (Non-Thesis)': 'TNCH-THM-D',
    'THM: Global Studies (Non-Thesis)': 'TNGS-THM-D',
    'THM: Homiletics (Non-Thesis)': 'TNHM-THM-D',
    'THM: Theology (Non-Thesis)': 'TNTH-THM-D',
  };

  const valuesNursing = {
    'MSN: Nurse Educator': 'MNED-MSN-D',
    'MSN: Nursing Administration': 'MNAD-MSN-D',
    'MSN: Nursing Informatics': 'MNNI-MSN-D',
    'DNP: Doctor of Nursing Practice': 'DRNP-DNP-D',
  };

  // // NOT VALID FOR SCHOLARSHIP ////
  // 'AA: Accounting': 'ACCT-AA-D',
  // 'AA: Business': 'BUSI-AA-D',
  // 'AA: Criminal Justice': 'CJUS-AA-D',
  // 'AA: Early Childhood Education': 'EDCE-AA-D',
  // 'AA: Information Systems': 'ISYS-AA-D',
  // 'AA: Paralegal Studies': 'PLST-AA-D',
  // 'AA: Psychology: Christian Counseling': 'PYCC-AA-D',
  // 'AA: Psychology': 'PSYC-AA-D',
  // 'AAS: Medical Office Assistant': 'AMOA-AAS-D',
  // 'BFA: Graphic Design': 'GRDG-BFA-D',
  // 'BS: Accounting': 'ACCT-BS-D',
  // 'BS: Aviation': 'AVAT-BS-D',
  // 'BS: Biblical and Educational Studies': 'BLES-BS-D',
  // 'BS: Business Administration: Automotive Dealership Management': 'BAAD-BS-D',
  // 'BS: Business Administration: Communications': 'BACM-BS-D',
  // 'BS: Business Administration: Economics': 'BAEC-BS-D',
  // 'BS: Business Administration: Entrepreneurship': 'BAEP-BS-D',
  // 'BS: Business Administration: Financial Planning': 'BAFP-BS-D',
  // 'BS: Business Administration: Green and Sustainable Management': 'BASM-BS-D',
  // 'BS: Business Administration: Healthcare Management': 'BAHC-BS-D',
  // 'BS: Business Administration: Human Resource Management': 'BAHR-BS-D',
  // 'BS: Business Administration: International Business': 'BAIB-BS-D',
  // 'BS: Business Administration: Leadership': 'BABL-BS-D',
  // 'BS: Business Administration: Marketing Analytics': 'BAMA-BS-D',
  // 'BS: Business Administration: Marketing: Sales Management and \
  // Professional Selling': 'BASP-BS-D',
  // 'BS: Criminal Justice: Business Administration and Management': 'CJBA-BS-D',
  // 'BS: Criminal Justice: Criminal Psychology': 'CJCP-BS-D',
  // 'BS: Criminal Justice: Homeland Security': 'CJHS-BS-D',
  // 'BS: Criminal Justice: Juvenile Justice': 'CJJJ-BS-D',
  // 'BS: Criminal Justice: Public Administration': 'CJPA-BS-D',
  // 'BS: Elementary Education in Interdisciplinary Studies': 'EDIS-BS-D',
  // 'BS: Government: National Security': 'GVNS-BS-D',
  // 'BS: Government: Politics and Policy': 'GVPP-BS-D',
  // 'BS: Healthcare Administration': 'HLAD-BS-D',
  // 'BS: Informatics: Healthcare Informatics': 'IFHC-BS-D',
  // 'BS: Information Systems: Data Networking': 'ISDN-BS-D',
  // 'BS: Information Systems: Information Assurance': 'ISIA-BS-D',
  // 'BS: Information Technology: Application and Database Development': 'ITAD-BS-D',
  // 'BS: Information Technology: Data Networking and Security': 'ITDS-BS-D',
  // 'BS: Information Technology: Gaming Design': 'ITGD-BS-D',
  // 'BS: Paralegal Studies': 'PLST-BS-D',
  // 'BS: Political Science': 'POSC-BS-D',
  // 'BS: Psychology: Addiction and Recovery': 'PYSA-BS-D',
  // 'BS: Psychology: Criminal Psychology': 'PSCP-BS-D',
  // 'BSN: Nursing for RNs: Post Licensure': 'NURP-BSN-D',

  // // Append the option groups
  if ($(`select#${dropdownProgram}`).length > 0) {
    $(`select#${dropdownProgram}`).append('<option value="UNDE-BS-D">Undecided/Unknown</option>');
    if (window.location.href.indexOf('-nursing') <= 0) {
      // Add every option group
      $.each(optionGroups, (valName, valId) => {
        $(`select#${dropdownProgram}`).append(
          `<optgroup label="${valName}" id="${valId}"></optgroup>`,
        );
      });

      // Add all options to respective groups
      $.each(ug, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#ug');
      });

      $.each(jm, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#jm');
      });

      $.each(ma, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#ma');
      });

      $.each(mcm, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mcm');
      });

      $.each(mgs, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mgs');
      });

      $.each(mar, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mar');
      });

      $.each(mat, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mat');
      });

      $.each(mts, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mts');
      });

      $.each(mba, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mba');
      });

      $.each(mdv, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mdv');
      });

      $.each(med, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#med');
      });

      $.each(mfa, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mfa');
      });

      $.each(llm, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#llm');
      });

      $.each(mpa, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mpa');
      });

      $.each(mph, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mph');
      });

      $.each(mre, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#mre');
      });

      $.each(ms, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#ms');
      });

      $.each(msn, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#msn');
      });

      $.each(thm, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#thm');
      });

      $.each(dba, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#dba');
      });

      $.each(dmn, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#dmn');
      });

      $.each(dnp, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#dnp');
      });

      $.each(phd, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#phd');
      });

      $.each(dws, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#dws');
      });

      $.each(edd, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#edd');
      });

      $.each(eds, (oldVal, newVal) => {
        $(`<option value="${newVal}">${oldVal}</option>`).appendTo('optgroup#eds');
      });
    }

    // // Append nursing options
    if (window.location.href.indexOf('-nursing') > 0) {
      $.each(valuesNursing, (oldVal, newVal) => {
        $(`select#${dropdownProgram}`).append(`<option value="${newVal}">${oldVal}</option>`);
      });
    }
  }

  // \/\/\/\/\/\// END PROGRAM CODES //\/\/\/\/\/\//

  // \/\/\/\/\/\// START TIME TO CONTACT //\/\/\/\/\/\//

  // The dropdown's ID (without #)
  const dropdownTime = 'time_to_contact';

  // Map of old to new values
  const valuesTime = {
    '8AM - 12PM': '1',
    '12PM - 5PM': '2',
    '5PM - 9PM': '3',
  };

  // Append the options
  if ($(`select#${dropdownTime}`).length > 0) {
    $.each(valuesTime, (oldVal, newVal) => {
      $(`select#${dropdownTime}`).append(`<option value="${newVal}">${oldVal}</option>`);
    });
  }

  // \/\/\/\/\/\// END TIME TO CONTACT //\/\/\/\/\/\//
}); // END lp.jQuery
