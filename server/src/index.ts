import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

//Middlewre
app.use(cors({
    origin: [
    'http://localhost:5173', 
    'http://127.0.0.1:5173'
  ]
})); //Hace que el frontend (port 5173) hable con el server (port 3000)
app.use(express.json());

// Datos de ejemplo
const products = [
    { id: 1, name: "Album Dirt", price: 500, image: "💽"},
    { id: 2, name: "Guitarra Fender", price: 3600, image: "🎸"},
    { id: 3, name: "Album Facelift", price: 550, image: "💽"},
]

//Rutas
//Cuando alguien visite al http://localhost:3000/api/products le damos los datos
app.get('/api/products', (req, res) => {
    console.log("Holaa alguien pidió productos")
    res.json(products);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Corriendo en http://127.0.0.1:${PORT}`);
});