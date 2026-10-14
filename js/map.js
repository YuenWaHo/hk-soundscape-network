const sites = [
  { name: "Tai O", lat: 22.258936, lng: 113.854302, note: "Coastal / estuary soundscape" },
  { name: "Mui Wo", lat: 22.268202, lng: 113.994399, note: "Bay and shoreline" },
  { name: "Lung Fu Shan", lat: 22.282014, lng: 114.135168, note: "Terrestrial / urban fringe" },
];

const map = L.map("map", { scrollWheelZoom: false }).setView([22.27, 114.0], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 19,
}).addTo(map);

const bounds = [];
sites.forEach((s) => {
  const m = L.marker([s.lat, s.lng]).addTo(map);
  m.bindPopup(`<strong>${s.name}</strong><br>${s.note}<br><span style="opacity:.7">${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}</span>`);
  bounds.push([s.lat, s.lng]);
});
map.fitBounds(bounds, { padding: [40, 40] });
