

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;
const corsOptions = {
    origin: "http://139.59.111.168:8081", // 🔥 Chỉ cho phép từ frontend của bạn
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/send-data', async (req, res) => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwp-ILeKPGIrvGIGWfbtGRe8WRiPzOc123Zk2OPLC66hzjzjWLGgA_fQ19jQ-qyRspo/exec";

    try {
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Proxy server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
