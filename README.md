# Personal Trainer

Personal Trainer on Reactilla ja TypeScriptillä toteutettu frontend-sovellus personal trainer -yrityksen asiakas- ja harjoitustietojen hallintaan. Sovellus käyttää valmista REST API:a, josta haetaan asiakkaat ja harjoitukset.
Tämä README-tiedosto on osittain generoitu tekoälyn avulla (ChatGPT, uusin versio).

## Sovelluksen ominaisuudet

Sovelluksessa voi:

- tarkastella asiakkaita taulukossa
- lisätä uuden asiakkaan
- muokata asiakkaan tietoja
- poistaa asiakkaan
- tarkastella harjoituksia taulukossa
- lisätä asiakkaalle uuden harjoituksen
- poistaa harjoituksen
- tarkastella harjoituksia kalenterinäkymässä
- viedä asiakastiedot CSV-tiedostoon

## Käytetyt teknologiat

- React
- TypeScript
- Vite
- Material UI
- AG Grid
- React Big Calendar
- Day.js
- REST API

## REST API

Sovellus käyttää kurssin tarjoamaa personal trainer -rajapintaa.

API-dokumentaatio:

```txt
https://juhahinkula.github.io/personaltrainerdocs/