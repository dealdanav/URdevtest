const API_URL = 'https://restcountries.com/v3.1/all';
const countriesFlags = document.getElementById('countriesFlags');

fetch(API_URL)
  .then((res) => res.json())
  .then((response) => {
    let countries = response.slice(0, 20);
    console.log(countries);
    countries.forEach((element) => {
        const flag = element.flags.svg;
        const name = element.translations.spa.official;
        const capital = element.capital[0];
        const maps = element.maps.googleMaps;
        const country = new CountryName(flag, name, capital, maps).showCountry();
        return country;
    });
});

class CountryName {
    constructor(flag, name, city, maps) {
      this.flag = flag;
      this.name = name;
      this.city = city;
      this.maps = maps;
    }
    showCountry(){
      const countryCard = document.createElement('div');
      const countryData = `
        <div class="card">
            <div class="card-body">
                <span><img src="${this.flag}" class="card-flag" alt="Bandera ${this.name}"></span>
                <h4>${this.name}</h4>
                <p>Capital: ${this.city}</p>
                <a href=" ${this.maps}" target="_blank" rel="noopener noreferrer">Ver en Google mpas</a>
            </div>
        </div>`;
      countryCard.className = 'country-card col-3';
      countryCard.innerHTML = countryData
      countriesFlags.appendChild(countryCard);
    }
}