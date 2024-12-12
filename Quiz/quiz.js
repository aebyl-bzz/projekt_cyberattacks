const questions = [
    {
        question: "Was sind die fünf Hauptbereiche, die das Militär nutzt?",
        options: [
            "Land, Luft, See, Weltraum, Cyberbereich",
            "Land, Luft, Wasser, Cyberbereich, Informationen",
            "Luft, Cyberbereich, Informationssicherheit, Gesundheit, Transport"
        ],
        correct: "Land, Luft, See, Weltraum, Cyberbereich"
    },
    {
        question: "Warum wird der Cyberbereich immer wichtiger?",
        options: [
            "Weniger Geräte sind mit dem Internet verbunden",
            "Es gibt weniger digitale Infrastrukturen",
            "Immer mehr Geräte sind mit dem Internet verbunden"
        ],
        correct: "Immer mehr Geräte sind mit dem Internet verbunden"
    },
    {
        question: "Was kann eine Folge von Cyberattacken sein?",
        options: [
            "Verbesserte Sicherheitsmaßnahmen",
            "Datenverluste, Stromausfälle, finanzielle Schäden",
            "Höhere Gewinne für Unternehmen"
        ],
        correct: "Datenverluste, Stromausfälle, finanzielle Schäden"
    },
    {
        question: "Welches Jahr markiert den Angriff mit BlackEnergy Malware auf das Stromnetz der Westukraine?",
        options: [
            "2016",
            "2015",
            "2017"
        ],
        correct: "2015"
    },
    {
        question: "Was beschreibt der Angriff NotPetya?",
        options: [
            "Ein harmloser Virus",
            "Ein zerstörerischer Cyberangriff, der massive Ausfälle verursachte",
            "Ein erfolgreicher Verteidigungsmechanismus"
        ],
        correct: "Ein zerstörerischer Cyberangriff, der massive Ausfälle verursachte"
    },
    {
        question: "Was ist Wiper-Malware?",
        options: [
            "Malware, die Daten stiehlt",
            "Malware, die Daten vollständig löscht",
            "Malware, die Systeme vor Cyberangriffen schützt"
        ],
        correct: "Malware, die Daten vollständig löscht"
    },
    {
        question: "Was ist ein DDoS-Angriff?",
        options: [
            "Ein Angriff, der sich auf Datenbankdaten konzentriert",
            "Ein Angriff, bei dem ein Webserver mit Anfragen überlastet wird",
            "Ein Angriff, der darauf abzielt, den Benutzer zu täuschen"
        ],
        correct: "Ein Angriff, bei dem ein Webserver mit Anfragen überlastet wird"
    },
    {
        question: "Wer führt gezielte Cyberangriffe auf die Ukraine durch?",
        options: [
            "NATO-Staaten",
            "Russische Hackergruppen",
            "Europäische Unternehmen"
        ],
        correct: "Russische Hackergruppen"
    },
    {
        question: "Was ist die Rolle von CrowdStrike?",
        options: [
            "Sie bieten Ransomware als Dienstleistung an",
            "Sie bieten spezialisierte Sicherheitslösungen gegen Cyberangriffe an",
            "Sie sind für die Durchführung von Angriffen verantwortlich"
        ],
        correct: "Sie bieten spezialisierte Sicherheitslösungen gegen Cyberangriffe an"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    questions.forEach((q, index) => {
        const options = [...q.options];
        shuffle(options);

        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        options.forEach((option, optionIndex) => {
            const optionItem = document.createElement("div");
            optionItem.className = "option-item";

            const input = document.createElement("input");
            input.type = "radio";
            input.id = `q${index + 1}o${optionIndex}`;
            input.name = `q${index + 1}`;
            input.value = option;

            const label = document.createElement("label");
            label.setAttribute("for", input.id);
            label.textContent = option;

            optionItem.appendChild(input);
            optionItem.appendChild(label);
            optionsDiv.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    const totalQuestions = questions.length;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
        const resultElement = document.createElement('p');

        if (selectedOption) {
            if (selectedOption.value === q.correct) {
                score++;
                resultElement.textContent = `Frage ${index + 1}: Richtig`;
                resultElement.style.color = 'green';
            } else {
                resultElement.textContent = `Frage ${index + 1}: Falsch. Richtig wäre: ${q.correct}`;
                resultElement.style.color = 'red';
            }
        } else {
            resultElement.textContent = `Frage ${index + 1}: Keine Antwort ausgewählt. Richtig wäre: ${q.correct}`;
            resultElement.style.color = 'orange';
        }

        document.querySelector(`.question:nth-child(${index + 1})`).appendChild(resultElement);
    });

    const scoreBar = document.getElementById('score-bar');
    const scoreText = document.getElementById('score-text');
    const percentage = (score / totalQuestions) * 100;
    scoreBar.style.width = `${percentage}%`;
    scoreText.textContent = `${score} / ${totalQuestions} Fragen richtig beantwortet`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    document.getElementById('submitQuizButton').addEventListener('click', submitQuiz);
});

function burgermenue() {
    const topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }
}