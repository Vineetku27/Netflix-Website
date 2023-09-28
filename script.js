
var questions = document.querySelectorAll('.questions');

questions.forEach(function (question) {
    question.addEventListener('click', function () {
        var answers = this.nextElementSibling;

        if (answers.style.display === 'none' || answers.style.display === '') {
            var allAnswers = document.querySelectorAll('.answers');
            allAnswers.forEach(function (answer) {
                answer.style.display = 'none';
            });

            var allImages = document.querySelectorAll('.questions img');
            allImages.forEach(function (img) {
                img.style.transform = 'rotate(0deg)';
            });
            var img = this.querySelector('img');
            if (img) {
                img.style.transform = 'rotate(-45deg)';
            }

            answers.style.display = 'block';
        } else {
            var img = this.querySelector('img');
            if (img) {
                img.style.transform = 'rotate(0deg)';
            }

            answers.style.display = 'none';
        }
    });
});






