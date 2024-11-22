document.addEventListener("DOMContentLoaded", function() {
    const gradients = [
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
        "linear-gradient(45deg, #ff9966, #ff5e62)",
        "linear-gradient(45deg, #56ccf2, #2f80ed)",
        "linear-gradient(45deg, #f093fb, #f5576c)",
        "linear-gradient(45deg, #4facfe, #00f2fe)",
        "linear-gradient(45deg, #43e97b, #38f9d7)",
        "linear-gradient(45deg, #fa709a, #fee140)",
        "linear-gradient(45deg, #30cfd0, #330867)",
        "linear-gradient(45deg, #a18cd1, #fbc2eb)",
        "linear-gradient(45deg, #f3e7e9, #e3eeff)",
        "linear-gradient(45deg, #667eea, #764ba2)",
        "linear-gradient(45deg, #89f7fe, #66a6ff)",
        "linear-gradient(45deg, #ee9ca7, #ffdde1)",
        "linear-gradient(45deg, #ffecd2, #fcb69f)",
        "linear-gradient(45deg, #ff9a9e, #fecfef)",
        "linear-gradient(45deg, #ff6a88, #ff99ac)",
        "linear-gradient(45deg, #6a11cb, #2575fc)",
        "linear-gradient(45deg, #37ecba, #72afd3)",
        "linear-gradient(45deg, #ff0844, #ffb199)",
        "linear-gradient(45deg, #1d2b64, #f8cdda)",
        "linear-gradient(45deg, #e0c3fc, #8ec5fc)",
        "linear-gradient(45deg, #a8edea, #fed6e3)",
        "linear-gradient(45deg, #fdfcfb, #e2d1c3)",
        "linear-gradient(45deg, #f6d365, #fda085)",
        "linear-gradient(45deg, #fbc7d4, #9796f0)",
        "linear-gradient(45deg, #b2fefa, #0ed2f7)",
        "linear-gradient(45deg, #ff9966, #ff5e62)",
        "linear-gradient(45deg, #9cecfb, #65c7f7)",
        "linear-gradient(45deg, #667eea, #764ba2)",
        "linear-gradient(45deg, #1fa2ff, #12d8fa)",
        "linear-gradient(45deg, #43c6ac, #191654)",
        "linear-gradient(45deg, #ff6a00, #ee0979)",
        "linear-gradient(45deg, #f7971e, #ffd200)",
        "linear-gradient(45deg, #1f4037, #99f2c8)",
        "linear-gradient(45deg, #fc5c7d, #6a82fb)",
        "linear-gradient(45deg, #bdc3c7, #2c3e50)",
        "linear-gradient(45deg, #ff9a8b, #ff6a88)",
        "linear-gradient(45deg, #ffdde1, #ee9ca7)",
        "linear-gradient(45deg, #c79081, #dfa579)",
        "linear-gradient(45deg, #ffafbd, #ffc3a0)",
        "linear-gradient(45deg, #48c6ef, #6f86d6)",
        "linear-gradient(45deg, #ffe259, #ffa751)",
        "linear-gradient(45deg, #ff512f, #dd2476)",
        "linear-gradient(45deg, #e53935, #e35d5b)",
        "linear-gradient(45deg, #4facfe, #00f2fe)",
        "linear-gradient(45deg, #8e2de2, #4a00e0)",
        "linear-gradient(45deg, #c31432, #240b36)",
        "linear-gradient(45deg, #6a3093, #a044ff)"
    ];

    const gradientGrid = document.getElementById("gradientGrid");

    gradients.forEach(gradient => {
        const gradientBox = document.createElement("div");
        gradientBox.classList.add("gradient-box");
        gradientBox.style.background = gradient;
        gradientBox.addEventListener("click", () => {
            navigator.clipboard.writeText(`background: ${gradient};`).then(() => {
                showAlert("Gradient CSS copied to clipboard!");
            });
        });
        gradientGrid.appendChild(gradientBox);
    });

    function showAlert(message) {
        let alertBox = document.querySelector(".alert-box");
        if (!alertBox) {
            alertBox = document.createElement("div");
            alertBox.classList.add("alert-box");
            document.body.appendChild(alertBox);
        }
        alertBox.textContent = message;
        alertBox.classList.add("show");
        setTimeout(() => {
            alertBox.classList.remove("show");
        }, 2000);
    }
});