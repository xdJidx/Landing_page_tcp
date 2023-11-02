function showContent(contentNumber) {
    // Masque tous les contenus
    const contents = document.querySelectorAll('#contentContainer > div');
    contents.forEach(content => content.style.display = 'none');

    // Affiche le contenu sélectionné
    document.getElementById('content' + contentNumber).style.display = 'block';

    // Met à jour l'image active
    const images = document.querySelectorAll('.allButton img');
    images.forEach(image => image.classList.remove('active-image'));
    document.getElementById('image' + contentNumber).classList.add('active-image');
}