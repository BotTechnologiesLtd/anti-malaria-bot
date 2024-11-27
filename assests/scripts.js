document.getElementById("symptom-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        Fever: document.getElementById("fever").checked ? 1 : 0,
        Chills: document.getElementById("chills").checked ? 1 : 0,
        Headache: document.getElementById("headache").checked ? 1 : 0,
        Nausea: document.getElementById("nausea").checked ? 1 : 0,
        Fatigue: document.getElementById("fatigue").checked ? 1 : 0,
    };

    const response = await fetch("https://boit-backend.herokuapp.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById("result").textContent = `Malaria Risk: ${result["Malaria Risk"]}%`;
});
