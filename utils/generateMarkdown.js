// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license=license.toLowerCase();
  let badge="";
  switch (license){
    case "apache":
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case "boost":
      badge =`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    case "bsd3":
      badge=`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case "bsd2":
      badge`[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "cc0":
      badge=`[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      break;
    case "eclipse":
      badge=`[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break;
    case "gnugpl3":
      badge=`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
  }
  return badge;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  license=license.toLowerCase();
  let link="";
  switch (license){
    case "apache":
      link = `https://opensource.org/licenses/Apache-2.0`
      break;
    case "boost":
      link =`https://www.boost.org/LICENSE_1_0.txt`
      break;
    case "bsd3":
      link=`https://opensource.org/licenses/BSD-3-Clause`
      break;
    case "bsd2":
      link=`https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case "cc0":
      link=`https://creativecommons.org/publicdomain/zero/1.0/`
      break;
    case "eclipse":
      link=`https://opensource.org/licenses/EPL-1.0`
      break;
    case "gnugpl3":
      link=`https://www.gnu.org/licenses/gpl-3.0`
      break;
  }
  return link;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  license=license.toLowerCase();
  let text=`This project is covered under the ${license} license. `;
  switch (license){
    case "apache":
      license ="Apache License 2.0"
      text += `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      break;
    case "boost":
      license="GNU General Public License v3.0"
      text +=`Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
      break;
    case "bsd3":
      license ="BSD 3-Clause 'New' or 'Revisited' License"
      text+=`A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the project or its contributors to promote derived products without written consent.`
      break;
    case "bsd2":
      license="BSD 2-Clause 'Simplified' License"
      text+=`A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause. Both have very minute differences to the MIT license.`;
      break;
    case "cc0":
      license ="Creative Commons Zero v1.0 Universal"
      text+=`The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.`
      break;
    case "eclipse":
      license ="Eclipse Public License 2.0"
      text+=`This commercially-friendly copyleft license provides the ability to commercially license binaries; a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones.`
      break;
    case "gnugpl3":
      license ="GNU Affero General Public License v3.0"
      text+=`Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`
      break;
  }
  return text;
}

function generateMarkdown(data) {
  return `# ${data.projTitle} 
  ${renderLicenseBadge(data.license)} \n
  ${renderLicenseLink(data.license)}\n
  
  # Description
  ${data.desc} \n

  # Table of Contents
  [Description](#description) \n
  [Table of Contents](#table-of-contents) \n
  [Installation](#installation) \n
  [Usage](#usage) \n
  [License](#license) \n
  [How to Contribute](#contributing)\n
  [Testing](#tests)\n
  [Questions about the project](#questions)\n
  
  # Installation
  ${data.installation}\n
  
  # Usage
  ${data.usage}\n
  
  # License
  ${renderLicenseSection(data.license)}\n
  
  # Contributing
  ${data.contribution}\n
  
  # Tests
  ${data.test}\n
  
  # Questions
  ${data.url}
  Please checkout my Github at:
  https://github.com/${data.url}\n

  For any questions about the project please send me an email at ${data.email}`
}

module.exports = generateMarkdown;
