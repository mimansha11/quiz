document.getElementById('submit').addEventListener('click', function() {
    const answers = {
        q1: 'Encapsulation',
        q2: 'Member function',
        q3: 'Inheritance',
        q4: 'Polymorphism',
        q5: 'Encapsulation',
        q6: 'Constructor',
        q7: 'Procedural programming',
        q8: 'Polymorphism',
        q9: 'Classes',
        q10: 'Inheritance'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');
    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        if (value === answers[key]) {
            score++;
        }
    }

    result.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
});
