git init - tworzy repozytorium
git config --local user.name "Imię" - ustawia lokalną nazwę użytkownika
git config --local user.email "Email" - ustawia lokalny email użytkownika
git status - pokazuje pliki do skomitowania, i pliki które nie są śledzone przez Gita.

git add "nazwaPliku" - dodaje plik do tymczsowego miejsca, które zostaje spakowane do commita.
git add . - dodaje wszystkie pliki do tymczsowego miejsca, które zostaje spakowane do commita.
git log --oneline - pokazuje historię commitów.

git diff - pokazuje zmiany od ostatniego commita

git branch - pokazuje gałęźie i aktualną
git branch "nazwa" - tworzy branch
git switch -c inf04-mb01 - tworzenie nowej gałęzi i przejście na nią
git switch master - powrót na główna gałąź

git merge inf04-mb01 - zmiksowanie zmian z gałęzi z aktualną gałęzią

git remote add origin https://github.com/username/inf04-web.git - dodanie repozytorium zewnętrznego

git push -u origin main - wysłanie aktualnej gałęzi na serwer (np main - ale może ez byc inna, np inf04-mb01

git pull - pobranie najnowszej wersji z serwera

git clone "adres" - pobranie całego repozytorium z serwera