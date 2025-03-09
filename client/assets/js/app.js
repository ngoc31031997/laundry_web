document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const data = {
        customer_name: document.getElementById('name').value,
        created_by: "Admin",
        customer_email: document.getElementById('email').value,
        customer_phone: "0123456789",
        order_date: new Date().toISOString().split('T')[0],
        notes: document.getElementById('message').value
    };

    console.log("Sending data:", data);

    try {
        const response = await fetch("http://139.59.111.168:3001/api/send-data", { // 🔥 Gọi server Node.js
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log("Server response:", result);
        alert("Order submitted successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("Error submitting order.");
    }
});
