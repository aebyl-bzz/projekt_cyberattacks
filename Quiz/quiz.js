// Funktion zum Überprüfen der Antworten und Berechnung der Punktzahl
function submitQuiz() {
    // Richtig Antworten
    const answers = {
        q1: "a",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: "b",
        q6: "b",
        q7: "b",
        q8: "b",
        q9: "b",
        q10: "b",
        q11: "b",
        q12: "b"
    };

    let score = 0; // Punktzahl initialisieren
    const totalQuestions = Object.keys(answers).length; // Gesamtanzahl der Fragen

    // Überprüfen der Antworten
    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);

        if (selectedOption) {
            if (selectedOption.value === answers[question]) {
                score++; // Punktzahl erhöhen, wenn die Antwort richtig ist
            }
        }
    }

    // Ergebnis anzeigen
    alert(`Sie haben ${score} von ${totalQuestions} Fragen richtig beantwortet!`);
}