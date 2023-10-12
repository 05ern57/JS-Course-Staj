'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// AJAX is stands for Async Javascript And XML and XML is document format that is used to tranfer data
// API's must have CORS because without CORS we can not acces 3rd party API. CORS stands for (Cross Origin Resource Sharing(Çapraz Kaynak Paylaşımı))

// the oldschool way of doing http AJAX in js is:
// const request = new XMLHttpRequest();
// first we are defining to what type of request like 'GET, POST etc.' - GET for getting information from an API - POST for uploading the information to API- then we are defining the url wich the AJAX call will be made.
// request.open('GET', 'https://restcountries.com/v2/name/deutschland');
// we are sending the request to the url that we past in by send() method
// request.send();
// also we can not do 'const data = request.send();' because result(request.send()) is not there yet i mean the AJAX call that we send off is being done in the background while the rest of the code is running, so the data fetches at the background

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(request.responseText);
//   console.log(data);

//   const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${String(
//               (data.population / 1000000).toFixed(1)
//             )} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             } / ${data.currencies[0].symbol}</p>
//         </div>
//     </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });

// const getCountriesData = function (countryName) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     const html = `
//           <article class="country">
//               <img class="country__img" src="${data.flags.png}" />
//               <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${String(
//                     (data.population / 1000000).toFixed(1)
//                   )} people</p>
//                   <p class="country__row"><span>🗣️</span>${
//                     data.languages[0].name
//                   }</p>
//                   <p class="country__row"><span>💰</span>${
//                     data.currencies[0].name
//                   } / ${data.currencies[0].symbol}</p>
//               </div>
//           </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// we have mültiple AJAX call right here we can understand this easily ny reloading the page the order of the cards will change and it means some of them last long to load(data arives at slightly  different time) at the backgroud
// also it means asyncronous functions are non blocking because as i mentioned every time we reload the page the country cards order will change when the data arrives it fires the load event first
// getCountriesData('türkiye');
// getCountriesData('USA');
// getCountriesData('portugal');
// getCountriesData('spain');

// if we want to load these cards in a specific order, we need to chain these methods and we call this callback hell

// HOW REQUESTS and RESPONSES WORK
// first we got url it includes http(protokol)/domain(to memorize easily people use domain names isntead of IP addresses)/resource(i guess like path)
// when we access any web server browser makes a request to DNS than DNS matches the URL to the server's IP address  after this DNS send back to real IP address. After that TCP(Transmission Control Protocol) is being established between browser and server. This connection maintains entire time to transfer all data. after this connection we can finaly we can do HTTP(Hypertext Transfer Protocol) Request. This rquest includes HTTP method and request target and htttp version + http request headers like host information in there and many more than the body if our request is POST request  than the server sends the http response and it has the http version and stattuse code and status message than http response headers than the body that we want know the information this is simply what happens when we send the request or reach to a servers API but if we want access to services web page there will be many more requests and responses like first we send request than we get html and  than the scanning the needed assets of html file like js file for every file there will be another http requests. There can be multiple requests and responses happening at the same time so when it happens too much connection get slow so that is the reason connection sometimes can be limited
// how TCP works behind the seens? first tcp breaks the request a thousand chunks. the reason for this to make request arrive as quick as possible than sends back the small chunks and makes sure all the packages arrived by controlling the IP addresses of the chunks
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//   });
// };

// getCountry('portugal');
// getCountryAndNeighbour('portugal');

// const renderCountry = function (data, className = 'country') {
//   // variables
//   const name = data.name.common;
//   const png = data.flags.png;
//   const region = data.region;
//   const pop = data.population;
//   const lang = Object.values(data.languages)[0];
//   const cur = Object.values(data.currencies)[0].name;
//   const curSym = Object.values(data.currencies)[0].symbol;

//   // html tags
//   const html = `
//     <article class="${className}">
//         <img class="country__img" src="${png}" />
//         <div class="country__data">
//             <h3 class="country__name">${name}</h3>
//             <h4 class="country__region">${region}</h4>
//             <p class="country__row"><span>👫</span>${String(
//               (pop / 1000000).toFixed(1)
//             )} Million People</p>
//             <p class="country__row"><span>🗣️</span>${lang}</p>
//             <p class="country__row"><span>💰</span>${cur} / ${curSym}</p>
//         </div>
//     </article>
//   `;
//   // adding html to add
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // making visible to tag
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // sending a request to API
//   const req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();

//   req.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // rendering the tag
//     renderCountry(data, 'country');

//     // storing the neighbours codes
//     const neighbours = data.borders;

//     neighbours.forEach(bor => {
//       const req2 = new XMLHttpRequest();
//       // sending requests by using the country's code (look carefuly this time url is different)
//       req2.open('GET', `https://restcountries.com/v3.1/alpha/${bor}`);
//       req2.send();

//       req2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);

//         renderCountry(data2, 'neighbour');

//         // i can add many more requests. we call this situation to callback hell, callback inside of an callback and one another and...
//       });
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('canada');
// getCountryAndNeighbour('mexico');

// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');

// const getCountryAndNeighbour = function (country) {
//   const req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   req.addEventListener('load', function () {
//     if (req.status === 200) {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data); // Veriyi burada işleyebilirsiniz.
//     } else {
//       console.error('Hata: İstek başarısız oldu.');
//     }
//   });

//   req.send();
// };

// getCountryAndNeighbour('turkey');,

// to prevent writing hell of callbacks developers use promises

// this simply and how we use fetchAPI- fetchAPI is promise based so what is promise how we use pormises: look under the line 2000

const reqTry = fetch('https://restcountries.com/v3.1/name/portugal');

// firtly we use promises by creating it then using it but when we use fetchAPI we dont need to creat a Promise instead whenever we call the fetch() function it creates automaticaly

// const getCountryData = function (country) {
// const req1 = fetch(`https://restcountries.com/v3.1/name/${country}`);
// };
