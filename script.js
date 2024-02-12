var radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        var firstName = prompt('Veuillez saisir votre prénom :');
        if (firstName) {
            // Enregistrement du prenom
            localStorage.setItem('firstName', firstName);

            // Recherche de l'element parent
            var parentElement = radioButton.closest('.quizzThem');
            if (parentElement) {
                var selectedCategoryElement = parentElement.querySelector('h2');
                if (selectedCategoryElement) {
                    var selectedCategory = selectedCategoryElement.textContent;
                    localStorage.setItem('selectedCategory', selectedCategory);
                } else {
                    console.error('erreur');
                }
            } else {
                console.error('erreur');
            }

            // Enregistrement de le difficulté
            var selectedDifficulty = radioButton.value;
            localStorage.setItem('selectedDifficulty', selectedDifficulty);

            alert('Bonjour ' + firstName + '! Merci d\'avoir choisi la rubrique ' + selectedCategory + ' avec le niveau ' + selectedDifficulty + '.');

            // Redirection vers quiz.html
            window.location.href = 'quiz.html';
        }
    });
});







