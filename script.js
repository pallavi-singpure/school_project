document.getElementById("submit-quiz").addEventListener("click", () => {
    const answers = {};
    const questions = document.querySelectorAll(".question");
    let totalA = 0, totalB = 0, totalC = 0, totalD = 0;

    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected) {
            answers[`q${index + 1}`] = selected.value;
            if (selected.value === "A") totalA++;
            else if (selected.value === "B") totalB++;
            else if (selected.value === "C") totalC++;
            else if (selected.value === "D") totalD++;
        }
    });

    const personality = document.getElementById("personality");
    if (totalA >= totalB && totalA >= totalC && totalA >= totalD) {
        personality.textContent = "The Drama Queen/King: Full of emotions and energy!";
    } else if (totalB >= totalA && totalB >= totalC && totalB >= totalD) {
        personality.textContent = "The Adventurer: Bold and always ready for action!";
    } else if (totalC >= totalA && totalC >= totalB && totalC >= totalD) {
        personality.textContent = "The Chill Potato: Relaxed and easygoing.";
    } else {
        personality.textContent = "The Creative Genius: Imaginative and quirky!";
    }

    document.getElementById("result").classList.remove("hidden");
});
