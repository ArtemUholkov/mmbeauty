// document.addEventListener('DOMContentLoaded', () => {
//   const selectDrop = document.querySelector('#countries');

//   fetch('https://restcountries.com/v3.1/all')
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let output = '';
//       let countryArr = [];
//       data.forEach((country) => {
//         countryArr.push(country.name.common);
//       });
//       countryArr.sort();
//       //   output += `<option value="${country.name.common}">${country.name.common}</option>`;
//       countryArr.forEach((item) => {
//         output += `<option value="${item}">${item}</option>`;
//       });
//       selectDrop.innerHTML = output;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
const title = document.querySelector('.title');
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone);
if (
  timezone == 'America/Denver' ||
  timezone == 'America/Los_Angeles' ||
  timezone == 'America/Chicago' ||
  timezone == 'America/New_York' ||
  timezone == 'America/Halifax' ||
  timezone == 'America/St_Johns'
) {
  title.innerHTML = `up to <span class="accent_text">3500 CAD<br />+ 100 FS</span>`;
} else if (timezone == 'Pacific/Auckland' || timezone == 'Pacific/Chatham') {
  title.innerHTML = `up to <span class="accent_text">3500 NZD<br />+ 100 FS</span>`;
} else if (
  timezone == 'Australia/Perth' ||
  timezone == 'Australia/Adelaide' ||
  timezone == 'Australia/Darwin' ||
  timezone == 'Australia/Brisbane' ||
  timezone == 'Australia/Hobart'
) {
  title.innerHTML = `up to <span class="accent_text">3500 AUD<br />+ 100 FS</span>`;
} else {
  title.innerHTML = `up to <span class="accent_text">2500 EUR<br />+ 100 FS</span>`;
}
