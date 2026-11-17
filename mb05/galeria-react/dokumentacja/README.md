## Funkcjonalność


Strona główna pokazuje zdjęcia zapisane w pamięci serwera. Plik bazowy, który się domyslnie uruchamia, to photos.json, w folderze public.

 Można usuwać zdjęcia, po czym po odświeżeniu strony, strona wraca do pierwotnego stanu.

Przycisk "losuj nowe zdjęcie" losuje liczbę, która odpowiada numerowi zdjęcia z serwisu picsum.photos

Użytkownik może przeglądać każde zdjęcie osobno, klikając na przycisk "Powiększ". Może tez je dodawać do ulubionych.

## Uruchomienie

Aplikacja webowa działająca w technologii react, z użyciem Reacta.  Aplikacja uruchamia się na porcie http://localhost:5173/

Aby uruchomić aplikację, nalezy przejść do mb05/galeria-react i wpisać ```npm run dev```

## Struktura

Aplikacja używa schematu z Vite. Zasoby publiczne (np zdjęcia i pliki json), znajdują się w folderze "public".
W folderze src znajdują sie pliki tworzące aplikację, np. App.jsx - określające ścieżki plików.
Aplikacja używa stylowania za pomocą Bootstrapa.

Folder "pages" zawiera konkretne podstrony aplikacji.
Folder "components" zawiera komponenty
Folder "services" zawiera funkcje związane z pobieraniem zdjęć