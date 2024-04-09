import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

//MongoDB
import conectarDB from './config/db.js';

//Inicio de App
const app = express();
console.log("Iniciando App...");
app.use(express.json());

conectarDB();
dotenv.config();

//Routing
app.use('/api/', (req, res, next) => {
    console.log("API...");
    next();
});
app.use('/api/', productRoutes)

//PORT
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}); 
