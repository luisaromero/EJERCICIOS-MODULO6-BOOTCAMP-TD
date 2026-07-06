const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

let users = [
    { id: 1, nombre: 'Don Pepe', edad: 55 },
    { id: 2, nombre: 'Pedro', edad: 25 },
    { id: 3, nombre: 'Maria', edad: 33 },
    { id: 4, nombre: 'Francisco', edad: 19 },
    { id: 5, nombre: 'Camilo', edad: 29 },
    { id: 6, nombre: 'Andres', edad: 35 },
    { id: 7, nombre: 'Mario', edad: 48 },
    { id: 8, nombre: 'Felipe', edad: 33 }
];

let cars = [

    {
        marca: 'Ford', patente: 'HXJH55', nombre_conductor: 'Felipe'
    },

    {
        marca: 'Toyota', patente: 'HLSA26', nombre_conductor: 'Pedro'
    },

    {
        marca: 'Mercedes', patente: 'JFTS47', nombre_conductor: 'Maria'
    },
    {
        marca: 'Chevrolet', patente: 'RTPP97', nombre_conductor: 'Francisco'
    },
    {
        marca: 'Nissan', patente: 'SDTR51', nombre_conductor: 'Don Pepe'
    },
    {
        marca: 'Mazda', patente: 'RDCS19', nombre_conductor: 'Francisco'
    },
    {
        marca: 'Kia', patente: 'KDTZ28', nombre_conductor: 'Don Pepe'
    },
    {
        marca: 'Jeep', patente: 'FFDF88', nombre_conductor: 'Paulina'
    },
    {
        marca: 'Suzuki', patente: 'DRTS41', nombre_conductor: 'Heriberto'
    },
    {
        marca: 'Honda', patente: 'BXVZ67', nombre_conductor: 'Manuel'
    },
]

// GET - Retrieve all users
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET - Retrieve a specific user
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});




app.listen(8080, () => {
    console.log('REST API server running on port 8080');
});