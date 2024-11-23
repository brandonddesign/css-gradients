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
        "linear-gradient(45deg, #6a3093, #a044ff)",
        "linear-gradient(45deg, #ff9a8b, #ff6a88, #ff99ac)",
        "linear-gradient(45deg, #ffdde1, #ee9ca7, #ff99ac)",
        "linear-gradient(45deg, #c79081, #dfa579, #ffb997)",
        "linear-gradient(45deg, #1e3c72, #2a5298)",
        "linear-gradient(45deg, #e3ffe7, #d9e7ff)",
        "linear-gradient(45deg, #ee9ca7, #ffdde1, #ffb7c5)",
        "linear-gradient(45deg, #4facfe, #00f2fe, #42e695)",
        "linear-gradient(45deg, #1e9600, #fff200, #ff0000)",
        "linear-gradient(45deg, #ff512f, #f09819)",
        "linear-gradient(45deg, #ff5f6d, #ffc371)",
        "linear-gradient(45deg, #2b5876, #4e4376)",
        "linear-gradient(45deg, #00c6ff, #0072ff)",
        "linear-gradient(45deg, #f77062, #fe5196)",
        "linear-gradient(45deg, #5f72bd, #9b23ea)",
        "linear-gradient(45deg, #16a085, #f4d03f)",
        "linear-gradient(45deg, #ff0099, #493240)",
        "linear-gradient(45deg, #654ea3, #eaafc8)",
        "linear-gradient(45deg, #1f4037, #99f2c8, #38ef7d)",
        "linear-gradient(45deg, #4ca1af, #c4e0e5)",
        "linear-gradient(45deg, #2c3e50, #3498db)",
        "linear-gradient(45deg, #8e44ad, #c0392b)",
        "linear-gradient(45deg, #00c9ff, #92fe9d)",
        "linear-gradient(45deg, #ff6b6b, #556270)",
        "linear-gradient(45deg, #eb3349, #f45c43)",
        "linear-gradient(45deg, #dd5e89, #f7bb97)",
        "linear-gradient(45deg, #6a3093, #a044ff, #ff6fd8)",
        "linear-gradient(45deg, #00b09b, #96c93d)",
        "linear-gradient(45deg, #fc466b, #3f5efb)",
        "linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b)",
        "linear-gradient(45deg, #f857a6, #ff5858)",
        "linear-gradient(45deg, #ffc371, #ff5f6d)",
        "linear-gradient(45deg, #ffb997, #f67e7d, #843b62)",
        "linear-gradient(45deg, #b92b27, #1565c0)",
        "linear-gradient(45deg, #4e54c8, #8f94fb)",
        "linear-gradient(45deg, #ffd89b, #19547b)",
        "linear-gradient(45deg, #4568dc, #b06ab3)",
        "linear-gradient(45deg, #34e89e, #0f3443)",
        "linear-gradient(45deg, #ff7e5f, #feb47b)",
        "linear-gradient(45deg, #ff6a00, #ee0979, #ff61a6)",
        "linear-gradient(45deg, #b24592, #f15f79)",
        "linear-gradient(45deg, #00b4db, #0083b0)",
        "linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4)",
        "linear-gradient(45deg, #43cea2, #185a9d)",
        "linear-gradient(45deg, #5a3f37, #2c7744)",
        "linear-gradient(45deg, #2980b9, #6dd5fa, #ffffff)",
        "linear-gradient(45deg, #0cebeb, #20e3b2, #29ffc6)",
        "linear-gradient(45deg, #f00000, #dc281e)",
        "linear-gradient(45deg, #8360c3, #2ebf91)"
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
