# Hópverkefni 2

Verkefnið fólst í því að smíða prótótýpu af fyrirlestravef fyrir vefforritun. Unnið var mikið með Javascript og CSS.

## Uppsetning

Einfaldasta leiðin til að keyra verkefni er með því að fara í rót verkefnisins í skipanalínu og framkvæma eftirfarandi skipanir:

* npm install
* npm run dev

Fyrri skipunin sækir og setur upp eftirfarandi:
* Concurrently
* Babel
* Rollup
* Sass
* Browser-sync

og seinni skipunin keyrir allan pakkan og heldur hjólunum gangandi. 

## Skipulag

### HTML

index.html skráin er lítil enda notuðum við javascript til að útbúa flest allt html.

### Javascript
allar javascript skrárnar eru pakkaðar saman í dist/bundle.js.

index.js checkar hvort maður er á forssíðunni eða fyrirlestri og birtir viðeigandi html.
list.js teiknar upp htmlið fyrir forsíðuna.
lecture.js teiknar upp htmlið fyrir fyrirlesturinn sem linkað er frá og sækjir gögnin frá lecture.json og birtir þau.
helpers.js hjálparföll sem minnka copy paste.
converter.js er sama og helpers en er aðeins nákvæmar í því sem hann gerir.
storage.js náðum ekki að klára.

### CSS

Allar scss skrárnar eru pakkaðar saman í dist/styles.css

config.scss inniheldur grunnstillingar.
index.scss inniheldur stillingar fyrir forsíðu en er síðan skipt upp í
forLestrar.scss líka til að auðvelda skriftir á verkefninu.
styles.scss pakkar öllu saman og inniheldur nokkar almennar stillingar.


# Hópurinn
Verkefnið er unnið af
* Breki Ingibjargarson (bri11@hi.is)
* Halldór Jens (HJV6@hi.is)
* Valdimar björnsson (vab19@hi.is)
