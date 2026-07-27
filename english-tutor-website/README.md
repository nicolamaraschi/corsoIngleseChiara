# English Tutor Website

Progetto di una landing page statica, performante e accessibile per un'insegnante privata di inglese.

## Requisiti

- Node.js >= 18
- NPM >= 9

## Installazione

```bash
npm install
```

## Avvio Locale

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`.

## Build

Per compilare l'applicazione per la produzione:

```bash
npm run build
```

Il risultato sarà generato nella cartella `dist`.

## Test

Il progetto include test End-to-End scritti con Playwright.
Per avviare i test (assicurarsi di avere installato i browser di playwright con `npx playwright install`):

```bash
npm run test:e2e
```

Altri comandi utili:
- `npm run typecheck`: verifica i tipi TypeScript
- `npm run lint`: verifica la sintassi e la formattazione tramite ESLint

## Struttura del Progetto

```
english-tutor-website/
├── public/                 # File statici (favicon, robots, sitemap, media)
├── src/
│   ├── app/App.tsx         # Composizione delle sezioni
│   ├── components/         # Componenti UI (layout, sections, common)
│   ├── content/            # Contenuti modificabili (siteContent.ts)
│   ├── styles/             # CSS Globale minimale
│   ├── theme/              # Tema Material UI
│   ├── types/              # Tipizzazione dei contenuti
│   ├── utils/              # Utility (WhatsApp)
│   └── main.tsx            # Entry point
└── tests/                  # Test Playwright
```

## Modificare i contenuti

Tutti i testi del sito si trovano in `src/content/siteContent.ts`.
È possibile cambiare:
- Il nome e la bio dell'insegnante
- Le qualifiche
- Le testimonianze
- I percorsi e le loro opzioni
- Le modalità di lezione e i prezzi

## Configurare il numero WhatsApp

1. Copiare `.env.example` in `.env`
2. Modificare il valore `VITE_WHATSAPP_PHONE` con il prefisso internazionale (es. `393401234567`)
3. Assicurarsi che il numero non abbia "+", spazi o trattini.

In assenza del `.env`, verrà utilizzato il numero di fallback in `siteContent.ts`.

## Sostituire immagini e video

I media si trovano nella cartella `public/media/`.

Formati consigliati:

- **Ritratto**: WebP con fallback JPG, orientamento verticale (es. 4:5), 1200x1500px, ottimizzato (<300KB).
- **Video**: MP4 (H.264) e WebM, verticale (1080x1920), durata circa 30s, peso ottimizzato.
- **Poster video**: Immagine WebP per l'anteprima del video (1080x1920, <150KB).

Per aggiornare i percorsi dei file modificati, aggiornare la configurazione in `siteContent.ts`.

## Deploy Statico

Il sito è una SPA (Single Page Application) statica senza routing complesso.
1. Eseguire `npm run build`
2. Caricare i contenuti della cartella `dist/` sul servizio di hosting statico (es. Vercel, Netlify, GitHub Pages, Firebase Hosting, o un classico server Apache/Nginx).
