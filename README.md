# Test "Moje dziecko w sieci" - Instrukcja wdrażania na Vercel

## Co to jest?
Interaktywny test dla rodziców opracowany w Fundacji Orange. Pomaga rodzicom ocenić wzorce korzystania z internetu przez ich dzieci.

## Krok po kroku: Jak wdrożyć na Vercel (5 minut)

### KROK 1: Przygotuj projekt na GitHub
1. Utwórz konto na GitHub (https://github.com) - jeśli go nie masz
2. Zaloguj się na GitHub
3. Kliknij "+" w prawym górnym rogu → "New repository"
4. Wpisz nazwę: `test-dziecko-w-sieci`
5. Wybierz "Public"
6. Kliknij "Create repository"

### KROK 2: Przeslij pliki do GitHub
1. Na stronie nowego repozytorium kliknij "uploading an existing file" (jeśli jest taka opcja)
   LUB kliknij "Add file" → "Upload files"
2. Przeslij wszystkie te pliki:
   ```
   package.json
   .gitignore
   public/index.html
   src/App.jsx
   src/index.js
   ```
3. W polu "Commit changes" wpisz: "Initials commit"
4. Kliknij "Commit changes"

**WAŻNE:** Upewnij się, że struktura folderów jest prawidłowa:
```
test-dziecko-w-sieci/
├── package.json
├── .gitignore
├── public/
│   └── index.html
└── src/
    ├── App.jsx
    └── index.js
```

### KROK 3: Zaloguj się na Vercel
1. Przejdź na https://vercel.com
2. Kliknij "Sign up"
3. Kliknij "Continue with GitHub"
4. Autoryzuj Vercel (kliknij "Authorize")

### KROK 4: Wdrażaj projekt na Vercel
1. Na stronie głównej Vercel kliknij "Add New..." → "Project"
2. Wyszukaj i wybierz repozytorium `test-dziecko-w-sieci`
3. Kliknij "Import"
4. W ustawieniach zostaw wszystko domyślnie
5. Kliknij "Deploy"

**Czekaj ~2-3 minuty...**

### KROK 5: Otrzymaj link
Kiedy proces się skończy, zobaczysz ekran z przyciskiem "Visit".
- Kliknij przycisk → otrzymasz publiczny link
- Link wygląda np: `https://test-dziecko-w-sieci.vercel.app`

**To Twój publiczny link do testu!** 🎉

## Co dalej?

### Udostępnij rodzicom:
1. **Bezpośredni link** - wyślij emailem
2. **QR kod** - wygeneruj na https://www.qr-code-generator.com i wydrukuj
3. **Portal szkoły** - umieść link w systemie dziennika
4. **Komunikat do rodziców** - załóż wpis z linkiem

### Przykładowy komunikat:
```
Drodzy Rodzice!

Zachęcamy Was do wypełnienia testu "Moje dziecko w sieci".
To zajmie zaledwie 5 minut, a wynik natychmiast się pojawi.

Link: https://test-dziecko-w-sieci.vercel.app

Test oparty jest na poradniku Fundacji Orange.
```

## Problemy?

| Problem | Rozwiązanie |
|---------|-----------|
| Vercel pokazuje błąd | Czekaj 5 minut, czasem wdrażanie trwa dłużej |
| Nie widzę plików na GitHub | Sprawdź strukturę folderów - muszą być dokładnie w tych ścieżkach |
| Test nie ładuje się | Odśwież stronę (Ctrl+F5) |
| Przycisk "Deploy" jest szary | Czekaj, aż repozytornum się zsynchronizuje |

---
**Powodzenia! 🚀**
