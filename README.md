# 🏠 3D Vizualizace Domu – Konfigurátor Tvoje Hnízdo

Tento projekt slouží jako 3D modul pro konfigurátor domů **Tvoje Hnízdo**. Umožňuje zobrazovat interaktivní 3D modely domů s možností výběru typu dispozice (2+kk, 3+kk, 4+kk) a změny barvy střechy v reálném čase.

## ✨ Funkce
- 🏗️ Načítání 3D modelů dle zvolené dispozice.
- 🎨 Interaktivní změna barvy střechy.
- 🔄 Orbitální kamera s otáčením, přiblížením a oddálením.
- 📦 Připraveno na rozšíření o další typy domů, terasy, textury atd.

## 🗂 Struktura projektu
```
konfigurator_3d_modul/
├── index.html               # Hlavní stránka s výběrovými prvky a vizualizací
├── js/
│   └── viewer.js            # JavaScript pro 3D scénu (Three.js)
├── models/
│   ├── model1.glb           # Model domu 2+kk
│   ├── model2.glb           # Model domu 3+kk
│   └── model3.glb           # Model domu 4+kk
```

## 🚀 Jak spustit

### Lokálně:
1. Nainstalujte např. Python nebo Node.js.
2. Spusťte jednoduchý server:

```bash
# Python
python3 -m http.server

# nebo Node.js (pokud máte nainstalováno)
npx serve .
```

3. Otevřete v prohlížeči `http://localhost:8000` nebo `http://localhost:3000`

### Online (GitHub Pages):
1. Nahrajte celý projekt do GitHub repozitáře.
2. Aktivujte GitHub Pages:  
   **Settings → Pages → Source: `main` / root**.
3. Vizualizace poběží na:  
   `https://vas-username.github.io/konfigurator-3d/`

## 🔗 Propojení s konfigurátorem

Lze jednoduše vložit do vašeho konfigurátoru pomocí `<iframe>`:

```html
<iframe 
  src="https://vas-username.github.io/konfigurator-3d/" 
  width="100%" height="600" style="border: none;">
</iframe>
```

### Pro interaktivní propojení použijte `postMessage API` (viz dokumentace v `viewer.js`).

## 📦 Použité knihovny

- [Three.js](https://threejs.org/) – 3D engine pro web.
- GLTFLoader – pro načítání `.glb` modelů.
- OrbitControls – ovládání scény myší.

---

© 2025 [Tvoje Hnízdo](https://tvojehnizdo.cz) – Všechna práva vyhrazena.