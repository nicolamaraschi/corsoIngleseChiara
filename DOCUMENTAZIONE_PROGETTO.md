# 📘 Documentazione del Progetto: English Tutor Website (Chiara D'Alessandro)

Questo documento costituisce la guida e spiegazione tecnica completa del progetto **`english-tutor-website`**, sviluppato per la promozione online dell'attività di insegnamento privato di **Chiara D'Alessandro** (Milano e Online).  
La documentazione copre l'intero ciclo di vita dell'applicazione: dall'architettura del codice e organizzazione dei contenuti, alla suite di test E2E, fino alla gestione del controllo versione con **Git/GitHub** e al deployment in produzione su **Vercel**.

---

## 1. 🎯 Panoramica e Obiettivi del Sito

Il sito è concepito come una **landing page moderna, elegante e ad altissima conversione**, progettata per essere raggiunta principalmente tramite **QR Code** (es. su biglietti da visita o volantini).

### Obiettivi chiave di user experience (UX):
- **Immediatezza nei primi 3 secondi**: l'utente comprende subito chi è l'insegnante, cosa offre, per chi è indicato il servizio e come prenotare una prova gratuita.
- **Supporto multi-dispositivo**: design responsive al 100%, ottimizzato per smartphone, tablet e schermi desktop.
- **Conversione guidata su WhatsApp**: ogni pulsante di contatto genera un URL precompilato (con dati sullo studente, livello, obiettivo e modalità preferita) per facilitare il primo contatto senza barriere.

---

## 2. 🛠 Stack Tecnologico & Architettura del Codice

Il progetto si trova nella cartella principale:
```text
/Users/nicolamaraschi/Documents/corsoIngleseChiara/english-tutor-website
```

### Tecnologie Core
- **Framework & Build Tool**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (con [Vite](https://vitejs.dev/) come bundler ultra-veloce).
- **UI & Design System**: [Material UI (MUI) v5](https://mui.com/) + **Emotion** (`@emotion/react`, `@emotion/styled`) con palette colori personalizzata, tipografia moderna e componenti accessibili.
- **Iconografia**: `@mui/icons-material` importato tramite **importazioni nominative ESM** (es. `import { ChatRounded as ChatRoundedIcon } from '@mui/icons-material'`) per garantire ottimizzazione del tree-shaking e perfetta compatibilità di build.

---

## 3. 📂 Struttura del Progetto e Modello dei Dati

L'architettura separa rigorosamente **la logica di presentazione** (i componenti UI) dai **contenuti del sito**, rendendo l'aggiornamento dei testi immediato senza modificare il codice dell'interfaccia.

```text
english-tutor-website/
├── public/
│   ├── favicon.svg              # Icona del sito
│   ├── robots.txt               # Indicizzazione motori di ricerca
│   └── sitemap.xml              # Mappa del sito
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ContactDialog.tsx    # Modale interattiva di contatto precompilata
│   │   │   ├── SectionHeading.tsx   # Intestazione coerente per ogni sezione
│   │   │   └── WhatsAppButton.tsx   # Bottone di conversione con trigger modale
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navbar sticky responsive con menu e call-to-action
│   │   │   ├── Footer.tsx           # Piè di pagina con recapiti e link rapidi
│   │   │   └── SectionContainer.tsx # Wrapper con spaziature uniformi
│   │   └── sections/
│   │       ├── HeroSection.tsx          # Sezione principale di impatto visivo
│   │       ├── AboutSection.tsx         # Presentazione qualifiche e metodo
│   │       ├── ServicesSection.tsx      # Card dei 5 percorsi formativi
│   │       └── LessonDetailsSection.tsx # Modalità (Online/Presenza) e tariffe
│   ├── content/
│   │   └── siteContent.ts       # UNICO PUNTO DI VERITÀ PER TUTTI I CONTENUTI
│   ├── theme/
│   │   └── theme.ts             # Configurazione del Design System MUI (Colori/Font)
│   ├── types/
│   │   └── content.ts           # Interfacce TypeScript del modello dati
│   ├── utils/
│   │   └── whatsapp.ts          # Utility per composizione messaggi e link wa.me
│   ├── App.tsx                  # Root principale della Single Page Application
│   └── main.tsx                 # Entry-point dell'applicazione
├── tests/
│   └── landing-page.spec.ts     # Suite completa di test E2E (Playwright)
├── index.html                   # HTML con metadati SEO e JSON-LD
├── package.json                 # Dipendenze e script di build/test
└── vite.config.ts               # Configurazione del compilatore Vite
```

### Unico Punto di Verità per i Contenuti (`src/content/siteContent.ts`)
Tutte le informazioni relative a **Chiara D'Alessandro** (titoli, telefono WhatsApp, introduzioni, recensioni, elenco dei 5 percorsi di studio e qualifiche) sono centralizzate nell'oggetto `siteContent`. Modificare o estendere il sito richiede soltanto la modifica di questo singolo file TypeScript.

---

## 4. 🚀 SEO, Metadati e Accessibilità (WCAG)

Nel file **`index.html`** sono implementate tutte le best practice di ottimizzazione per i motori di ricerca e la condivisione sui social network:
- **Title Tag & Description**: ottimizzati per la keyword *"Lezioni private di inglese a Milano e online"*.
- **Open Graph (Facebook/LinkedIn) & Twitter Cards**: pronti per l'anteprima grafica durante le condivisioni sui social e chat.
- **Schema.org JSON-LD**: blocco di dati strutturati (`Person` e `Service`) per indicare a Google identità, professione, area geografica e contatti di **Chiara D'Alessandro**.
- **Accessibilità (WCAG 2.5.3 - Label in Name)**: i pulsanti evitano `aria-label` statici in sovrapposizione al testo visibile, facendo coincidere etichetta e nome accessibile per gli screen reader.
- **Prestazioni**: le immagini hero utilizzano il caricamento prioritario (`loading="eager"`).

---

## 5. 🧪 Testing End-to-End (E2E) con Playwright

La qualità e stabilità dell'applicazione è garantita da una suite di test **End-to-End** con **Playwright** (`tests/landing-page.spec.ts`), eseguita in parallelo su **5 engine browser/viewport differenti**:
- **Desktop Chromium** (Google Chrome / Edge)
- **Desktop Firefox**
- **Desktop WebKit** (Apple Safari)
- **Mobile Chrome** (Viewport emulato smartphone)
- **Mobile Safari** (Viewport emulato iPhone SE, iPhone 12, iPad)

### Cosa verificano i test E2E:
1. **Caricamento pagina e semantica**: presenza del singolo tag `<h1/>` e delle call-to-action principali.
2. **Navigazione interna**: corretto scorrimento verso le ancore (`#chi-sono`, `#percorsi`, `#modalita-prezzi`).
3. **Modale guidata di contatto**: apertura del Dialog al click sulla card di un percorso, con precompilazione della categoria scelta.
4. **Validazione dei campi**: controllo visivo degli errori del form (`Campo obbligatorio`) per i campi obbligatori del modulo.
5. **Generazione accurata URL WhatsApp**: verifica che l'invio del modulo reindirizzi correttamente ai server di WhatsApp (`wa.me` / `api.whatsapp.com`) con il messaggio di testo codificato in URL in modo perfetto.
6. **Responsive Layout**: convalida dell'assenza di scroll orizzontale o rotture visive in 4 risoluzioni (320x568, 390x844, 768x1024, 1440x900).

> **Risultato della validazione**: **45 test su 45 superati (100% Pass Rate)**.

---

## 6. 📦 Workflow di Controllo Versione (Git & GitHub)

Il progetto è gestito con Git all'interno del workspace di sviluppo (`/Users/nicolamaraschi/Documents/corsoIngleseChiara`).

- **Repository Remoto GitHub**: [https://github.com/nicolamaraschi/corsoIngleseChiara.git](https://github.com/nicolamaraschi/corsoIngleseChiara.git)
- **Ramo Principale**: `main`
- **Politica `.gitignore`**: esclude automaticamente dalla history di Git le directory di build (`node_modules/`, `dist/`), i log del sistema operativo (`.DS_Store`) e i report temporanei generati da Playwright (`/test-results/`, `/playwright-report/`).

---

## 7. 🌐 Deployment Live su Vercel

L'applicazione è stata pubblicata sul servizio cloud ad alte prestazioni **Vercel**, avvalendosi del rilevamento nativo di Vite e dell'infrastruttura Edge per una velocità di caricamento globale immediata.

### URL Ufficiali in Produzione:
- **URL Pubblico Principale**: [**https://english-tutor-website-one.vercel.app**](https://english-tutor-website-one.vercel.app)
- **URL di Deployment (Deploy ID)**: [https://english-tutor-website-lcd9vpn8l-nicolamaraschis-projects.vercel.app](https://english-tutor-website-lcd9vpn8l-nicolamaraschis-projects.vercel.app)
- **Pannello di Monitoraggio (Inspector)**: [Vercel Project Dashboard](https://vercel.com/nicolamaraschis-projects/english-tutor-website/9qe5i38nwKK43oEXaSXbcN4SDbxF)

---

## 8. 💻 Guida Operativa / How-To (Comandi Utili)

Di seguito sono descritti i comandi di riferimento da terminale per operare sul progetto, aggiornare i contenuti e ripubblicare online:

### 1. Sviluppo in Locale
```bash
# Entra nella cartella del sito
cd /Users/nicolamaraschi/Documents/corsoIngleseChiara/english-tutor-website

# Avvia il server di sviluppo locale (http://localhost:5173)
npm run dev
```

### 2. Controllo Qualità e Test E2E
```bash
# Esegui il controllo dei tipi TypeScript e la build locale
npm run build

# Esegui l'intera suite di test Playwright su tutti i browser
npm run test:e2e

# Visualizza l'interfaccia interattiva di Playwright
npx playwright test --ui
```

### 3. Aggiornamento Codice su GitHub
```bash
# Dalla root del repository (/Users/nicolamaraschi/Documents/corsoIngleseChiara)
git add .
git commit -m "feat: aggiornamento contenuti o componenti"
git push origin main
```

### 4. Pubblicazione su Vercel
```bash
# Dalla cartella del sito (english-tutor-website/)
# Pubblica una nuova build di produzione ad alte prestazioni in meno di 2 secondi
npx -y vercel@latest --prod --yes
```

---

*Documentazione prodotta e revisionata per il progetto **english-tutor-website** — 2026.*
