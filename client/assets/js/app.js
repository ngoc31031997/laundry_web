document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const data = {
        note: document.getElementById('note').value,
        address: document.getElementById('address').value,
        name:  document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    console.log("Sending data:", data);

    try {
        const response = await fetch("http://139.59.111.168:3001/api/send-data", { // 🔥 Gọi server Node.js
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        //test commit
        const result = await response.json();
        console.log("Server response:", result);
        alert("Order submitted successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("Error submitting order.");
    }
});
