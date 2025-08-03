# Giełda wierzytelności – Rekrutacja KRD

Aplikacja React do przeglądania i filtrowania wierzytelności.
Projekt powstał w ramach zadania rekrutacyjnego do Kaczmarski Group.

## Funkcje

- Sortowanie i filtrowanie dłużników po nazwie lub NIP
- Wyświetlanie szczegółów zadłużenia
- Szybkie wyszukiwanie z walidacją
- Responsywny interfejs
- Loader animowany na start
- Testy jednostkowe (Vitest)

## Instalacja

```sh
npm install
```

## Uruchomienie aplikacji

```sh
npm run dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:5173](http://localhost:5173).

## Budowanie produkcyjne

```sh
npm run build
```

## Testy

```sh
npm run test
```

Testy znajdują się w katalogu [`src/tests/`](src/tests/).

## Struktura projektu

- [`src/components/`](src/components/) – komponenty UI i widoki
- [`src/hooks/`](src/hooks/) – hooki React
- [`src/api/`](src/api/) – komunikacja z API
- [`src/utils/`](src/utils/) – funkcje pomocnicze
- [`src/types/`](src/types/) – typy TypeScript
- [`src/styles/`](src/styles/) – style LESS
- [`src/tests/`](src/tests/) – testy jednostkowe

## Konfiguracja API

Adres API ustawiany jest w pliku [.env.local](.env.local):

```
VITE_API_URL = "https://rekrutacja-webhosting-it.krd.pl/api/Recruitment"
```

## Technologie

- React 19
- TypeScript
- Vite
- LESS
- Vitest

---
