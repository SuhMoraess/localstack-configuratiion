const express = require('express');
const cors = require('cors');

const app = express();

// Configuração do CORS para permitir a origem específica do GitHub Codespace
const corsOptions = {
    origin: 'https://fictional-space-dollop-4jg4vpx75v44fqv6v.github.dev',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

// Suas rotas e middleware
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
