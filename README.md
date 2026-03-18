🌍 Ecoblog - Viaggio nel Pianeta

Un sito web **Single Page Application (SPA)** simulata, sviluppata in **Vanilla JavaScript**, che permette di navigare tra diverse sezioni (Home, Articoli, Chi Siamo, Contatti) senza ricaricare la pagina. 
Il progetto è stato realizzato per mettere alla prova le mie competenze su **Bootstrap 5**, gestione del DOM e validazione dei form.

> **Nota sul progetto:** Questo è un progetto formativo. Il contenuto testuale è stato generato con l'ausilio di AI per simulare un blog reale, permettendomi di concentrarmi sulla struttura del codice, sulla responsività e sull'interattività.

### Tech Stack
  HTML5: semantica seo friendly e accessibile.
  CSS3 & Bootstrap5: personalizzazione di elementi e utilizzo di componenti responsive per approccio mobile first
  JavaScript (ES6): 
  - Gestione della navigazione SPA tramite manipolazione delle classi (`d-none`) e dell'hash URL.
  - Ascolto degli eventi (`scroll`, `hashchange`, `submit`).
  - Validazione personalizzata dei form con feedback visivo.
  - Creazione dinamica di elementi DOM (alert di successo).
 
### Funzionalità Implementate
  1. Navigazione SPA: Il sito non ricarica mai la pagina. La navigazione avviente tramite la funzione `navigateTo()` che gestisce il cambio vista nascondendo/mostrando le sezioni e aggiornando l'URL hash.
  2. Scroll-to-Top Intelligente: Un pulsante "Torna su" appare dinamicamente solo quando l'utente scorre oltre una certa percentuale della pagina (calcolata tramite `window.scrollY`).
  3. Form Interattivo:
    - Feedback visivo (verde/rosso) in tempo reale.
    - Messaggio di successo generato dinamicamente dopo l'invio, senza ricaricare la pagina.
  4. Responsive Design: Testato su mobile, tablet e desktop grazie alle classi utility di Bootstrap 5.
  5. Dark Mode di default: Impostazione di base del tema scuro tramite attributi `data-bs-theme`, per agevolare la lettura e ridurre l'affaticamento oculare.

  
### Live demo:
   - greensync.altervista.org
   - disponibile anche in locale:
     1.  Clona il repo: `git clone `
     2.  Apri la cartella in VS Code.
     3.  Usa l'estensione **Live Server** su `index.html`.
       
### 📸 Screenshot
![Schermata del 2026-03-18 18-40-51](https://github.com/user-attachments/assets/5ae2f80a-a9ef-4939-b607-5b90fe7986ce)

![Schermata del 2026-03-18 18-51-03](https://github.com/user-attachments/assets/0bdb6bb1-2315-453a-a388-ce679f9361c9)

### 🤝 Contatti

Sono aperto a feedback, consigli e opportunità di collaborazione!

    LinkedIn: https://www.linkedin.com/in/cosimo-francesco-di-ruscio
    Email: cosimof.diruscio@tutamail.com
 

