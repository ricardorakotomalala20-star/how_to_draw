// --- CONFIGURATION DU DIAPORAMA ---
const hero = document.getElementById('accueil');

// Liste des images de fond (tu peux en ajouter d'autres)
const images = [
    'cover.png', 
    'purple.png',
    'dandadan.jpg',
    'sanji.jpg',
    'anime.png'  
];

let currentIndex = 0;

function changeBackground() {
    // Applique l'image actuelle
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Passe à l'image suivante (revient à 0 à la fin)
    currentIndex = (currentIndex + 1) % images.length;
}

// Lancer le changement toutes les 5000ms (5 secondes)
setInterval(changeBackground, 5000);

// Initialisation immédiate au chargement
changeBackground();

// --- GESTION FORMULAIRE ---
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Bienvenue à la Manga Academy !");
});
