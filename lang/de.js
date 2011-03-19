/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Torrent Dateien||*.torrent||Alle Dateien (*.*)||*.*||"
	, "OK"
	, "Abbruch"
	, "Anwenden"
	, "Ja"
	, "Nein"
	, "Schließen"
	, "Einstellungen"
	, "Spracheinstellungen"
	, "Sprache:"
	, "Persönliche Einstellungen"
	, "Automatisch auf Updates prüfen"
	, "Auch Betaversionen installieren"
	, "Erlaube das Senden anonymer Information beim Updaten"
	, "beim Download"
	, "An unfertige Dateien .!ut anhängen"
	, "Speicher für Dateien vorbelegen"
	, "Kein Standby solange noch Torrents aktiv sind"
	, "Anzeigeeinstellungen"
	, "Löschen von Torrents bestätigen"
	, "Löschen von Trackern bestätigen"
	, "Zeige Dialogfenster beim Beenden"
	, "Abwechselnder Listenhintergrund"
	, "Zeige aktuelle Geschwindigkeiten"
	, "Geschwindigkeitslimits anzeigen"
	, "Beim Hinzufügen von Torrents"
	, "Download nicht automatisch starten"
	, "Aktiviere das Programmfenster"
	, "Zeige Fenster mit Dateien innerhalb des Torrents"
	, "Aktionen bei Doppel-Klick [auf einen Torrent]"
	, "Für das Seeden:"
	, "Für das Downloaden:"
	, "Speicherort für die heruntergeladene Dateien"
	, "Neue Downloads ins Verzeichnis:"
	, "Dialog bei manuellem Hinzufügen"
	, "Verschiebe fertige Downloads nach:"
	, "den Gruppennamen anhängen"
	, "Verschieben nur aus dem Standard-Downloadverzeichnis"
	, "Speicherort für die .torrent-Dateien"
	, ".torrent-Dateien speichern in:"
	, "Verschiebe fertige .torrents nach:"
	, "Lade .torrents automatisch aus:"
	, "Lösche geladene .torrents"
	, "Port für den Empfang"
	, "Port für eingehende Verbindungen:"
	, "Zufälliger Port"
	, "Bei jedem Start ein anderer Port"
	, "Aktiviere UPnP Port Mapping"
	, "Aktiviere NAT-PMP Port Mapping"
	, "Proxy Server"
	, "Typ:"
	, "Proxy:"
	, "Port:"
	, "Zugriffsdaten"
	, "Benutzer:"
	, "Passwort:"
	, "Hostnamen durch Proxy auflösen"
	, "Benutze Proxyserver für Peer zu Peer Verbindungen"
	, "Ausnahme für Windows Firewall"
	, "Proxy-Datenschutz"
	, "Keine Suche nach lokalen DNS"
	, "Keine Funktion die Indentifikation durchlässt"
	, "Nur vom Proxy unterstützte Verbindungen"
	, "Globale Upload-Begrenzung"
	, "Max. Upload-Rate (kB/s): [0: unbegrenzt]"
	, "Automatisch"
	, "Alternative Upload-Rate, wenn Du nur seedest (kB/s):"
	, "Globale Download-Begrenzung"
	, "Maximale Download-Rate (kB/s): [0: unbegrenzt]"
	, "Anzahl der Verbindungen"
	, "Maximale Gesamtanzahl der Verbindungen:"
	, "Maximale Anzahl von verbundenen Peers pro Torrent:"
	, "Anzahl der Uploadslots pro Torrent:"
	, "Nutze zusätzliche Uploadslots falls Upload < 90%"
	, "Global Rate Limit Options"
	, "Begrenzung für Transport-Oberhead verwenden"
	, "Begrenzung für uTP-Verbindungen verwenden"
	, "Grundlegende BitTorrent-Funktionen"
	, "Verwende DHT-Netz"
	, "Frage beim Tracker n. Scrape-Info"
	, "Erlaube DHT für neue Torrents"
	, "Aktiviere Peerlistentausch (PEX)"
	, "Lokale Peersuche (LPD) aktivieren"
	, "Bandbreite f. lok. Peers beschränk."
	, "IP/Hostname an den Tracker melden:"
	, "Protokoll Verschlüsselung"
	, "Ausgehend:"
	, "Erlaube unverschlüsselte eingeh."
	, "Bandbreitenmanagement [uTP] aktiv"
	, "UDP Tracker-Unterstützung aktiv"
	, "Erlaube Transferlimit"
	, "Begrenzungen"
	, "Typ des Limits:"
	, "Bandbreitenbegrenzung:"
	, "Zeitraum (Tage):"
	, "Verlauf für den gewählten Zeitraum:"
	, "Hochgeladen:"
	, "Runtergeladen:"
	, "Hoch- u. Runtergeladen:"
	, "Zeitraum:"
	, "Letzte %d Tage"
	, "Zurückstellen"
	, "Warteschlangen Einstellungen"
	, "Maximale Anzahl von aktiven Torrents (Up- oder Download):"
	, "Maximale Anzahl von aktiven Downloads:"
	, "Seede solange [Standard Werte]"
	, "Minimale Rate (%):"
	, "Minimale Seed-Zeit (Minuten):"
	, "Seeds haben eine höhere Priorität als Downloads"
	, "Wenn die gewünschte Share-Rate erreicht ist"
	, "Upload-Rate begrenzen auf (kB/s): [0: hält Torrent an]"
	, "Zeitplan verwenden"
	, "Übersicht Zeitplan"
	, "Einstellungen für den Zeitplan"
	, "Begrenzte Upload-Rate (kB/s):"
	, "Begrenzte Download-R. (kB/s):"
	, "DHT mit Zeitplan deaktivieren"
	, "Erlaube den Web-Zugriff (WebUI)"
	, "Zugriffsdaten"
	, "Benutzer:"
	, "Passwort:"
	, "Erlaube Gastzugriff mit Benutzernamen:"
	, "Verbindungen"
	, "Alternativer Listening-Port (Standard: uTorrent-Port):"
	, "Beschränke Zugriff auf folgende IPs (Trenne mehrere Einträge durch \",\"):"
	, "Experten-Einstellungen [ACHTUNG: Änderungen auf eigenes Risiko!]"
	, "Wert:"
	, "Ja"
	, "Nein"
	, "Setzen"
	, "Speed-Liste [Einzelne Werte durch \",\" trennen]"
	, "Automatische Speed-Liste abändern"
	, "für Uploads:"
	, "für Downloads:"
	, "Fixe Gruppennamen [Trenne mehrere Einträge durch das Zeichen \"|\"]"
	, "Suchmaschinen [zur Suche mit der Lupe, Format: Name|URL]"
	, "Einstellungen für den Disk-Cache"
	, "Der Disk-Cache wird verwendet, um oft benötigte Daten im RAM zu halten, und dadurch die Lese- u. Schreibzugriffe auf der Festplatte zu reduzieren. µTorrent regelt das normalerweise automatisch, aber hier kannst du die Einstellungen ändern."
	, "Überschreibe die automatische Cache-Größe und verwende (in MB):"
	, "Reduziere die Speicherbenutzung wenn der Cache nicht benötigt wird"
	, "Erweiterte Cache-Einstellungen"
	, "Verwende Caching bei Schreibzugriffen"
	, "Schreibe unveränderte Blöcke alle 2 Minuten"
	, "Schreibe fertige Teile sofort"
	, "Verwende Caching bei Lesezugriffen"
	, "Schalte Caching aus, wenn die Upload-Geschwindigkeit niedrig ist"
	, "Entferne alte Blöcke aus dem Cache"
	, "Erhöhe die Größe des Cache automatisch bei Überlast"
	, "Schreibcache von Windows abschalten"
	, "Lesecache von Windows abschalten"
	, "Programm starten"
	, "Wenn ein Torrent fertig ist dieses Programm ausführen:"
	, "Wenn der Status eines Torrent sich ändert dieses Programm ausführen:"
	, "Diese Kommandos können dabei verwendet werden:\r\n%F - Name der geladenen Datei (bei Torrents mit 1 Datei)\r\n%D - Verzeichnis wohin gespeichert wird\r\n%N - Name des Torrents\r\n%S - Status des Torrents *)\r\n%L - Gruppe\r\n%T - Tracker\r\n%M - Status Nachrichtentext\r\n%I - hex.-verschlüsselte Info-Hash\r\n\r\n*) Der Status ist eine Kombination aus:\r\nGestartet = 1, bei Überprüfung = 2, nach Startüberprüfung = 4,\r\nÜberprüft = 8, Fehler = 16, Pausiert = 32, Auto = 64,\r\nGeladen = 128"
	, "Torrent Einstellungen"
	, "Tracker (trenne Ebenen-Einträge durch Leerzeilen)"
	, "Bandbreiten Einstellungen"
	, "Maximale Upload-Rate (kB/s): [0: Standard]"
	, "Maximale Download-Rate (kB/s): [0: Standard]"
	, "Anzahl der Upload-Slots: [0: Standard]"
	, "Seede solange"
	, "Standard überschreiben"
	, "Minimale Rate (%):"
	, "Minimale Seed-Zeit (Minuten):"
	, "Sonstige Einstellungen"
	, "Initial-Seeden"
	, "DHT verwenden"
	, "Peerlistentausch"
	, "Feed"
	, "URL für Feed:"
	, "Kurzname:"
	, "Beschreibung"
	, "Nicht alle Elemente automatisch runterladen"
	, "Alle Elemente des Feeds automatisch herunterladen"
	, "Verwende den 'Smart Episoden Filter'"
	, "Feeds||Favoriten||Verlauf||"
	, "All Feeds"
	, "Filter Einstellungen"
	, "Name:"
	, "Filter:"
	, "Nicht:"
	, "Speichern:"
	, "Feed:"
	, "Qualität:"
	, "Episode Nr.: [z.B. '1x12-14']"
	, "Torrentnamen statt Dateinamen für Filter verwenden"
	, "Downloads nicht automatisch starten"
	, "Smart EP-Filter"
	, "Gib dem Download höchste Priorität"
	, "Minimum Intervall:"
	, "Gruppe f. neue Torrents:"
	, "RSS Feed hinzufügen..."
	, "Feed editieren..."
	, "Feed deaktivieren"
	, "Feed aktivieren"
	, "Feed aktualisieren"
	, "Feed löschen"
	, "Downloaden"
	, "URL im Browser öffnen"
	, "Zu Favoriten hinzufügen"
	, "Hinzufügen"
	, "Löschen"
	, "ALLE"
	, "(Alle)"
	, "immer prüfen||nur 1x prüfen||12 Stunden||1 Tag||2 Tage||3 Tage||4 Tage||1 Woche||2 Wochen||3 Wochen||1 Monat||"
	, "RSS Feed hinzufügen"
	, "RSS Feed editieren"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Den RSS-Feed \"%s\" löschen?"
	, "Voller Name"
	, "Name"
	, "Episode"
	, "Format"
	, "Codec"
	, "Date"
	, "Feed"
	, "URL der Quelle"
	, "IP"
	, "Port"
	, "Programm"
	, "Flags"
	, "Prozent"
	, "Relevanz"
	, "DL-Rate"
	, "UL-Rate"
	, "Anfragen"
	, "Gewartet"
	, "Upgeloadet"
	, "Geladen"
	, "Prüffehler"
	, "Peer DL."
	, "Max.Up"
	, "Max.Down"
	, "Pausiert"
	, "Inaktiv"
	, "Fertig"
	, "Erstes Teil"
	, "Name"
	, "Anz. Teile"
	, "Prozent"
	, "Priorität"
	, "Größe"
	, "auslassen"
	, "niedrig"
	, "normal"
	, "hoch"
	, "Geladen:"
	, "Gesendet:"
	, "Seeds:"
	, "Restzeit:"
	, "Download-Rate:"
	, "Upload-Rate:"
	, "Peers:"
	, "Share-Rate:"
	, "Speicherort:"
	, "Prüf-ID:"
	, "Allgemein"
	, "Verbindung"
	, "zu %d von %d verbunden (aus %d Verfügbaren)"
	, "D:%s U:%s - %s"
	, "Kopieren"
	, "Reset"
	, "Unbegrenzt"
	, "IP-Adressen auflösen"
	, "Get File(s)"
	, "Nicht Laden"
	, "Hohe Priorität"
	, "Niedrige Priorität"
	, "Normale Priorität / wieder laden"
	, "Kopiere Magnet URI"
	, "nur Daten löschen"
	, "nur .torrent löschen"
	, ".torrent + Daten löschen"
	, "Erzwinge neuerliche Überprüfung"
	, "Erzwinge Start"
	, "Gruppe"
	, "Pause"
	, "Eigenschaften"
	, "nach unten"
	, "nach oben"
	, "Entfernen"
	, "Entfernen und"
	, "Start"
	, "Stop"
	, "Aktiv"
	, "Alle"
	, "Fertig"
	, "Download"
	, "Nicht aktiv"
	, "Keine Gruppe"
	, "||Verf.||Verfügbarkeit"
	, "Hinzugefügt"
	, "Fertiggestellt"
	, "Fertig %"
	, "Geladen"
	, "DL-Rate"
	, "Restzeit"
	, "Gruppe"
	, "Name"
	, "Nr."
	, "Peers"
	, "fehlt noch"
	, "Seeds"
	, "Seeds/Peers"
	, "Rate"
	, "Größe"
	, "URL der Quelle"
	, "Status"
	, "Upgeloadet"
	, "UL-Rate"
	, "Möchtest du wirklich die %d markierten Torrents und die dazu heruntergeladenen Daten löschen?"
	, "Möchtest du wirklich den markierten Torrent und die dazu heruntergeladenen Daten löschen?"
	, "Möchtest Du die %d markierten Torrents wirklich löschen?"
	, "Möchtest Du den markierten Torrent wirklich löschen?"
	, "Den RSS-Filter \"%s\" löschen?"
	, "Geprüft: %:.1d%%"
	, "Download"
	, "Fehler: %s"
	, "Fertig"
	, "Angehalten"
	, "Warte"
	, "Warte auf Seed"
	, "Seeden"
	, "Gestoppt"
	, "Gruppe eingeben"
	, "Neue Gruppe für markierte Torrents eingeben:"
	, "Neue Gruppe..."
	, "Entferne Gruppe"
	, "Allgemein||Tracker||Peers||Teile||Dateien||Grafik||Protokoll||"
	, "Torrent hinzufügen"
	, "Torrent von URL öffnen"
	, "Pause"
	, "Einstellungen"
	, "nach unten"
	, "nach oben"
	, "Entfernen"
	, "RSS Downloader"
	, "Start"
	, "Stop"
	, "Datei"
	, "Öffne Torrent..."
	, "Torrent von URL öffnen..."
	, "Optionen"
	, "Einstellungen"
	, "Gruppen-Liste zeigen"
	, "Ausführliche Infos zeigen "
	, "Statusleiste zeigen"
	, "Werkzeugleiste zeigen"
	, "Icons für Reiter"
	, "Hilfe"
	, "Webseite von µTorrent"
	, "Forum von µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Halte alle Torrents an"
	, "Alle Torrents fortsetzen"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Erweitert"
	, "Bandbreite"
	, "Verbindung"
	, "Disk-Cache"
	, "Verzeichnisse"
	, "Allgemein"
	, "Zeitplan"
	, "Warteschlange"
	, "Extras"
	, "Anzeige"
	, "BitTorrent"
	, "Web-Zugriff"
	, "Transferlimit"
	, "Programmstart"
	, "Zeige Eigenschaften||Start/Stop||Verzeichnis öffnen||Zeige Download-Balken||"
	, "Deaktiviert||Erlaubt||Erzwungen||"
	, "(keiner)||Socks4||Socks5||HTTPS||HTTP||"
	, "die Uploads||die Downloads||die Up- und Downloads||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Name"
	, "Wert"
	, "Mo||Di||Mi||Do||Fr||Sa||So||"
	, "Montag||Dienstag||Mittwoch||Donnerstag||Freitag||Samstag||Sonntag||"
	, "Maximum"
	, "Maximum - nutzt die normal eingestellte Bandbreite"
	, "Begrenzt"
	, "Begrenzt - nutzt die im Zeitplan angegebene Bandbreite"
	, "nur Seeden"
	, "nur Seeden - nur Daten uploaden (inkl. unvollständiger Torrents)"
	, "Aus"
	, "Aus - stoppt alle nicht erzwungenen Torrents"
	, "<= %d Stunden"
	, "(Ignorieren)"
	, "<= %d Minuten"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];
