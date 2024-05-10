# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

När jag påbörjade detta projekt följde jag en tutorialvideo via Youtube för "createBrowserRouter"-delen,
och då jobbade dem i main.jsx istället för App.jsx, så därför har även jag jobbat i main.jsx som huvuddelen.
Jag har använt mig av en återanvändbar header-komponent som följer med alla mina sidor. Har även använt mig av en
återanvändbar komponent för animerad bakgrund till alla mina SPA-sidor, det är den glimmande stjärnbakgrunden.
Var tvugnen att dra ner på antalet stjärnor då sidan blev så fruktansvärt seg annars.
Jag har använt mig av React Router för mina 4 olika vyer, det är min start, en "about", en "projekt" och ett
kontaktformulär på en "contact"-page.
Jag har använt mig av props på samtliga för att kunna skicka data mellan komponenter.
I project-sidan har jag använt mig av ett externt API enligt genomgången vi hade på lektion om ämnet,
jag har valt att inte använda min egen github då det inte finns särskilt många projekt där.
Jag tror jag lyckats att använda mig av global statehantering med redux för mitt kontaktformulärs-del.
Jag har försökt att ha en struktur bland mina filer, men det har bara blivit halvbra. Men dugligt ändå.
Den här kursen har varit otroligt svår på grund av flera olika anledningar.
Den störta är att jag känner att jag knappt förstår mig på Javascript, kursen innan, som är otroligt central och
viktig när man ska börja lära sig React, vilket gör det hela svårare. Flera videos jag tittat på har framhävt att
det knappt är nån idé att ge sig in på react om man inte har riktigt bra koll på javascript. Och då känns det ju såklart extra tungt.
En stor del av den här kursen tycker jag har "försvunnit", det var först det fysiska träffarna, som inte gav nånting för utbildningens del denna gång tyävrr, det har varit en del röda dagar, sjukdomar och diverse trassel som gjort att flertalet inplanerade lektioner försvunnit och hela upplägget och hanteringen känns katastrofal, och att det varit
97% självstudier, men man har inte kunnat bolla tankar och ställa frågor så ofta som man velat för att kunna öka sin förståelse inom ämnet, och innan du tänker "men fråga dina klasskamrater", så är det inte allt för ofta flera är inne på discord-kanalen, och sen är det ju faktiskt inte mina klasskamrater som ska ge utbildningen. Det har ändå varit andra klasskamrater som ställt upp och haft genomgång och codealong med hälften av klassen som deltagande på sin egen fritid, så det ger intrycket av att vi är flera som känner samma sak om denna kursutbildning.
Jag har suttit parallelt med javascript-tutorials för att kunna traggla mig någorlunda igenom detta.
Jag vill lära mig, jag är ivrig att lära mig, men det blir jäkligt svårt när det sällan finns möjlighet att ställa frågor, få förklarat svåra moment, få exempel osv när lektioner försvinner i tomma intet.
Jag hoppas jag lyckats någorlunda att träffa de tekniska kraven för den här individuella uppgiften, och jag sitter ofta och går igenom just javascript och läser om redux och ser videos om ämnet för att öka förståelsen men det är knepigt.
