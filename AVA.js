<script>
const layers = [
    "OUR/index.html",
    "AQUA/index.html",
    "ICE/index.html",
    "RESPO/index.html",
    "VITALITY.html"
];

let pos = 0;

async function loadLayer() {
    const url = layers[pos];

    try {
        const res = await fetch(url);

        if (!res.ok) {
            // 404 → eigene RESPO‑404 laden
            document.getElementById("geoFrame").src = "RESPO_404.html";
        } else {
            document.getElementById("geoFrame").src = url;
        }

    } catch {
        document.getElementById("geoFrame").src = "RESPO_404.html";
    }

    pos = (pos + 1) % layers.length;
}

setInterval(loadLayer, 2000);
</script>
