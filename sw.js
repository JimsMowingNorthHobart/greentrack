self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {});
<nav className="navbar">
  <a href="#/">Dashboard</a>
  <a href="#/clients">Clients</a>
  <a href="#/calendar">Calendar</a>
  <a href="#/map">Map</a>
  <a href="#/settings">Settings</a>
</nav>
