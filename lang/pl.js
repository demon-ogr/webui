/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Pliki torrent||*.torrent||Wszystkie pliki (*.*)||*.*||"
	, "OK"
	, "Anuluj"
	, "Zastosuj"
	, "Tak"
	, "Nie"
	, "Zamknij"
	, "Preferencje"
	, "Język"
	, "Język:"
	, "Prywatność"
	, "Automatycznie sprawdzaj aktualizacje"
	, "Uaktualniaj do wersji beta"
	, "Wysyłaj anonimowe zapytania o dostępność nowej wersji"
	, "Podczas pobierania"
	, "Dodaj .!ut do nazw nieukończonych plików"
	, "Zawsze rezerwuj miejsce"
	, "Nie przechodź do stanu wstrzymania, jeśli aktywny"
	, "Opcje wyświetlania"
	, "Potwierdzaj usunięcie torrentów"
	, "Potwierdzaj usunięcie trackerów"
	, "Potwierdzaj przy wyjściu"
	, "Alternatywny kolor tła listy"
	, "Pokazuj prędkość na pasku tytułu"
	, "Pokazuj limity na pasku statusu"
	, "Przy dodaniu torrentów"
	, "Nie pobieraj automatycznie"
	, "Aktywuj okno programu"
	, "Pokazuj okno z plikami torrenta"
	, "Zachowanie przy podwójnym kliknięciu"
	, "Dla udostępnianych torrentów:"
	, "Dla pobieranych torrentów:"
	, "Miejsce pobranych plików"
	, "Zapisz nowe zadania w:"
	, "Zawsze pokazuj okno przy ręcznym dodawaniu"
	, "Przenieś zakończone zadania do:"
	, "Dołącz etykietę torrenta"
	, "Przenoś tylko z domyślnego katalogu pobierania"
	, "Lokalizacja plików .torrent"
	, "Przechowuj pliki .torrent w:"
	, "Przenieś pliki .torrent ukończonych zadań do:"
	, "Automatycznie ładuj zadania z:"
	, "Usuń pliki .torrent po załadowaniu"
	, "Port nasłuchu"
	, "Port dla połączeń przychodzących:"
	, "Losuj port"
	, "Losuj port przy starcie programu"
	, "Włącz mapowanie portów UPnP"
	, "Włącz mapowanie portów NAT-PMP"
	, "Serwer proxy"
	, "Typ:"
	, "Proxy:"
	, "Port:"
	, "Uwierzytelnianie"
	, "Użytkownik:"
	, "Hasło:"
	, "Uzyskuj nazwy hostów przez proxy"
	, "Użyj serwera proxy dla połączeń peer-to-peer"
	, "Dodaj wyjątek do Zapory Wind."
	, "Prywatność proxy"
	, "Wyłącz wszystkie lokalne odwołania DNS"
	, "Wyłącz cechy, z których wyciekają dane identyfikacyjne"
	, "Nie zezwalaj na połączenia nieobsługiwane przez proxy"
	, "Globalny limit wysyłania"
	, "Maksymalna predkość (kB/s): [0: bez limitu]"
	, "Automatycznie"
	, "Zmień limit wysyłania, gdy nie pobierasz (kB/s):"
	, "Globalny limit pobierania"
	, "Maksymalna prędkość (kB/s): [0: bez limitu]"
	, "Liczba połączeń"
	, "Maksymalna całkowita liczba połączeń:"
	, "Maksymalna liczba połączonych peerów na torrent:"
	, "Liczba slotów wysyłania na torrent:"
	, "Otwórz dodatkowy slot, gdy prędkość wysyłania < 90%"
	, "Global Rate Limit Options"
	, "Zastosuj limit prędkości do całości ruchu (razem z overhead)"
	, "Zastosuj ograniczenia do połączeń uTP"
	, "Dodatkowe funkcje BitTorrent"
	, "Włącz sieć DHT"
	, "Odpytaj tracker listę peerów"
	, "Włącz DHT dla nowych torrentów"
	, "Włącz wymianę peerów"
	, "Wykrywanie peerów lokalnych"
	, "Ogranicz transfery lokalne"
	, "IP/Nazwa hosta wysyłana do trackera:"
	, "Szyfrowanie"
	, "Wychodzące:"
	, "Akceptuj nieszyfrowane połączenia"
	, "Aktywuj zarządzanie pasmem [uTP]"
	, "Aktywuj wsparcie dla trackerów UDP"
	, "Włącz limit transferu"
	, "Ustawienia limitu transferu"
	, "Typ limitu:"
	, "Limit transferu:"
	, "Okres (dni):"
	, "Historia wykorzystania łącza dla wybranego okresu:"
	, "Wysłano:"
	, "Pobrano:"
	, "Wysłano + pobrano:"
	, "Zakres czasu:"
	, "%d dni"
	, "Wyczyść"
	, "Kolejka"
	, "Maksymalna liczba aktywnych zadań (wysyłania lub pobierania):"
	, "Maksymalna liczba aktywnych pobierań:"
	, "Udostępniaj dopóki [wartości domyślne]"
	, "Minimalne ratio (%):"
	, "Minimalny czas udostępniania (minuty):"
	, "Ustaw wyższy priorytet udostępniania niż pobierania"
	, "Po wysłaniu określonej ilości danych przez zadanie"
	, "Ogranicz prędkość wysyłania do: [0, aby zatrzymać]"
	, "Włącz harmonogram"
	, "Tabela harmonogramu"
	, "Ustawienia harmonogramu"
	, "Limit wysyłania (kB/s):"
	, "Limit pobierania (kB/s):"
	, "Wyłącz DHT przy wyłączaniu"
	, "Włącz interfejs WWW"
	, "Uwierzytelnianie"
	, "Hasło:"
	, "Hasło:"
	, "Włącz konto gościa dla użytkownika o nazwie:"
	, "Dostępność"
	, "Alternatywny port nasłuchu (domyślnie = port protokołu):"
	, "Zablokuj dostęp adresom IP (wielokrotne wpisy separuj za pomocą ,)"
	, "Opcje zaawansowane [UWAGA: Modyfikujesz na własne ryzyko!]"
	, "Wartość:"
	, "Tak"
	, "Nie"
	, "Ustaw"
	, "Okno limitów prędkości [muszą być oddzielone przecinkami]"
	, "Ustaw wartości ręcznie"
	, "Limity wysyłania:"
	, "Limity pobierania:"
	, "Trwałe etykiety [muszą być oddzielone znakiem | ]"
	, "Wyszukiwarki [format: nazwa|adres]"
	, "Ustawienia podstawowe"
	, "Bufor dysku przechowuje w pamięci często używane dane w celu ograniczenia liczby operacji zapisu/odczytu. µTorrent zarządza buforem automatycznie, jednak można zdefiniować własne ustawienia."
	, "Określ rozmiar bufora (MB):"
	, "Ogranicz użycie pamięci, jeśli nie istnieje potrzeba buforowania"
	, "Ustawienia zaawansowane"
	, "Włącz buforowanie zapisu"
	, "Zapisz nieużywane bloki co 2 minuty"
	, "Zapisz natychmiast zakończone fragmenty"
	, "Włącz buforowanie odczytu"
	, "Wyłącz buforowanie odczytu przy niskiej prędkości wysyłania"
	, "Usuń stare bloki z bufora"
	, "Automatycznie zwiększ rozmiar bufora przy błędach"
	, "Wyłącz buforowanie zapisu przez Windows"
	, "Wyłącz buforowanie odczytu przez Windows"
	, "Uruchom program"
	, "Uruchom ten program, gdy torrent zostanie ukończony:"
	, "Uruchom ten program, gdy torrent zmieni stan:"
	, "Można użyć następujących poleceń:\r\n%F - nazwa pobranego pliku (dla torrentów z jednym plikiem)\r\n%D - katalog, do którego zapisywane są pliki\r\n%N - nazwa torrenta\r\n%S - stan torrenta\r\n%L - etykieta\r\n%T - tracker\r\n%M - Wiadomość statusu (taka jak w kolumnie status)\r\n%I - hash w postaci hex\r\n\r\nStan jest kombinacją:\r\nuruchomiony = 1, sprawdzanie = 2, uruchom po sprawdzeniu = 4,\r\nsprawdzony = 8, błąd = 16, zatrzymany = 32, auto = 64, uruchomiony = 128"
	, "Właściwości torrentów"
	, "Trackery (muszą być oddzielone pustą linią)"
	, "Ustawienia łącza"
	, "Limit wysyłania (kB/s): [0: domyślnie]"
	, "Limit pobierania (kB/s): [0: domyślnie]"
	, "Liczba slotów: [0: domyślnie]"
	, "Udostępniaj dopóki"
	, "Nadpisz domyślne ustawienia"
	, "Minimalne ratio (%):"
	, "Minimalny czas udostępniania (w minutach):"
	, "Inne ustawienia"
	, "Tryb initial seeding"
	, "Włącz DHT"
	, "Wymiana peerów"
	, "Kanał"
	, "Adres kanału:"
	, "Własna nazwa"
	, "Subskrypcja"
	, "Nie pobieraj torrentów automatycznie"
	, "Automatycznie pobieraj torrenty udostępnione w kanale"
	, "Użyj inteligentnego filtra odcinków"
	, "Kanały||Ulubione||Historia||"
	, "All Feeds"
	, "Ustawienia filtra"
	, "Nazwa:"
	, "Zawiera:"
	, "Nie zaw.:"
	, "Zapisz w:"
	, "Kanał:"
	, "Jakość:"
	, "Numer odcinka: [np. 1x12-14]"
	, "Filtr sprawdza oryginalną nazwę zamiast rozkodowanej"
	, "Nie pobieraj automatycznie"
	, "Intelig. filtr odc."
	, "Najwyższy priorytet dla zadania"
	, "Sprawdzaj co:"
	, "Etykieta dla nowych:"
	, "Dodaj kanał RSS..."
	, "Edytuj kanał"
	, "Wyłącz kanał"
	, "Aktywuj kanał"
	, "Aktualizuj kanał"
	, "Usuń kanał"
	, "Pobieranie"
	, "Otwórz URL w Przeglądarce"
	, "Dodaj do Ulubionych"
	, "Dodaj"
	, "Usuń"
	, "WSZYSTKIE"
	, "(Wszystkie)"
	, "(zawsze)||(tylko raz)||12 godzin||1 dzień||2 dni||3 dni||4 dni||1 tydzień||2 tygodnie||3 tygodnie||1 miesiąc||"
	, "Dodaj kanał RSS"
	, "Edytuj kanał RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Czy chcesz usunąć kanał RSS \"%s\"?"
	, "Pełna nazwa"
	, "Nazwa"
	, "Odcinek"
	, "Format"
	, "Kodek"
	, "Date"
	, "Kanał"
	, "URL źrodłowy"
	, "IP"
	, "Port"
	, "Klient"
	, "Flagi"
	, "%"
	, "Trafność"
	, "Pobieranie"
	, "Wysyłanie"
	, "Zapytania"
	, "Czekanie"
	, "Wysłano"
	, "Pobrano"
	, "Hasherr"
	, "Prędkość"
	, "Maks. wysyłania"
	, "Maks. pobierania"
	, "W kolejce"
	, "Nieaktywne"
	, "Ukończono"
	, "Pierwszy fragment"
	, "Nazwa"
	, "# fragmentów"
	, "%"
	, "Priorytet"
	, "Rozmiar"
	, "pomiń"
	, "niski"
	, "normalny"
	, "wysoki"
	, "Pobrano:"
	, "Wysłano:"
	, "Seedów:"
	, "Pozostało:"
	, "Prędk. pobierania:"
	, "Prędk. wysyłania:"
	, "Peerów:"
	, "Ratio:"
	, "Zapisany w:"
	, "Suma kontrolna:"
	, "Ogólne"
	, "Transfer"
	, "%d z %d połączonych (%d w kolejce)"
	, "D:%s U:%s - %s"
	, "Kopiuj"
	, "Resetuj"
	, "Bez limitu"
	, "Pokazuj nazwy hostów zamiast IP"
	, "Get File(s)"
	, "Nie pobieraj"
	, "Wysoki priorytet"
	, "Niski priorytet"
	, "Normalny priorytet"
	, "Kopiuj magnet-link"
	, "Usuń dane"
	, "Usuń plik .torrent"
	, "Usuń plik .torrent i dane"
	, "Ponowne sprawdzenie"
	, "Wymuś start"
	, "Etykieta"
	, "Pauza"
	, "Właściwości"
	, "Przesuń do dołu"
	, "Przesuń do góry"
	, "Usuń"
	, "Usuń..."
	, "Start"
	, "Stop"
	, "Aktywne"
	, "Wszystkie"
	, "Ukończone"
	, "Pobierane"
	, "Nieaktywne"
	, "Bez etykiety"
	, "||Dost.||Dostępność"
	, "Dodany"
	, "Data i czas ukończenia"
	, "Postęp"
	, "Pobrano"
	, "Pobieranie"
	, "Szacowane"
	, "Etykieta"
	, "Nazwa"
	, "#"
	, "Peerów"
	, "Pozostało"
	, "Seedów"
	, "Seedy/Peery"
	, "Ratio"
	, "Rozmiar"
	, "URL źrodłowy"
	, "Status"
	, "Wysłano"
	, "Wysyłanie"
	, "Czy na pewno chcesz usunąć %d zaznaczone torrenty i wszystkie pobrane dane?"
	, "Czy na pewno chcesz usunąć zaznaczony torrent i wszystkie pobrane dane?"
	, "Czy na pewno chcesz usunąć %d zaznaczone zadania?"
	, "Czy na pewno chcesz usunąć zaznaczone zadanie?"
	, "Czy chcesz usunąć filtr \"%s\"?"
	, "Sprawdzanie %:.1d%%"
	, "Pobieranie"
	, "Błąd: %s"
	, "Ukończono"
	, "Pauza"
	, "W kolejce"
	, "Seed w kolejce"
	, "Udostępnianie"
	, "Zatrzymano"
	, "Wprowadź etykietę"
	, "Wprowadź nową etykietę dla wybranych torrentów:"
	, "Nowa etykieta..."
	, "Usuń etykietę"
	, "Ogólne||Trackery||Połączenia||Fragmenty||Pliki||Prędkość||Log||"
	, "Dodaj torrent"
	, "Dodaj torrent z adresu"
	, "Pauza"
	, "Ustawienia"
	, "Przesuń do dołu"
	, "Przesuń do góry"
	, "Usuń"
	, "Czytnik RSS"
	, "Start"
	, "Stop"
	, "Plik"
	, "Dodaj torrent..."
	, "Dodaj torrent z adresu..."
	, "Opcje"
	, "Ustawienia"
	, "Pokaż listę kategorii"
	, "Pokaż szczegółowe informacje"
	, "Pokaż pasek stanu"
	, "Pokaż pasek narzędzi"
	, "Ikony w tytułach zakładek"
	, "Pomoc"
	, "Strona internetowa"
	, "Forum µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrenty"
	, "Zatrzymaj wszystkie pliki"
	, "Uruchom wszystkie pliki"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "KB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Zaawansowane"
	, "Ustawienia łącza"
	, "Połączenie"
	, "Bufor dysku"
	, "Katalogi"
	, "Główne"
	, "Harmonogram"
	, "Kolejkowanie"
	, "Dodatkowe ustawienia interfejsu"
	, "Interfejs"
	, "Protokół BitTorrent"
	, "Interfejs WWW"
	, "Limit transferu"
	, "Uruchom program"
	, "Pokaż właściwości||Uruchom/Zatrzymaj||Otwórz katalog||Pokaż pasek pobierania||"
	, "Wyłączone||Włączone||Wymuszone||"
	, "(brak)||Socks4||Socks5||HTTPS||HTTP||"
	, "wysyłanie||pobieranie||wysyłanie + pobieranie||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nazwa"
	, "Wartość"
	, "pn.||wt.||śr.||czw.||pt.||sob.||ndz.||"
	, "Poniedziałek||Wtorek||Środa||Czwartek||Piątek||Sobota||Niedziela||"
	, "Bez limitu"
	, "Pełna szybkość - Używa globalnych limitów"
	, "Limitowany"
	, "Ograniczone - Używa zdefiniowanych ograniczeń"
	, "Tylko seedowanie"
	, "Tylko seedowanie -Tylko uploady (z uwzględnieniem niekompletnych)"
	, "Wyłącz"
	, "Wyłącz - Wyłącza wszystkie niewymuszone torrenty"
	, "<= %d godzin"
	, "(Ignoruj)"
	, "<= %d minut"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];
