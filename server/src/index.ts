import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

//La entrada
app.get('/api/health', (req, res) => {
    res.json({ mensaje: 'Holaa, el server esta vivo'})
});

app.listen(PORT, () => {
    console.log(`Listo en http://localhost: ${PORT}`);
});