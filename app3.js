const express = require('express');
const app = express();

// Configurar middleware para analizar el cuerpo JSON de las solicitudes
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Home Page JsonAPI');
});

app.post('/api-consumer', function (req, res) {
    // El cuerpo de la solicitud se analizará automáticamente como JSON
    const inputData = req.body; // El JSON enviado en la solicitud
    console.log(inputData);
    // Realiza algún procesamiento con el JSON de entrada si es necesario

    // Define la respuesta JSON
    const outputData = {
        "billable_id": "001",
        "application_id": "001",
        "is_success": true,
        "fields": {},
        "data": [],
        "score_card": {},
        "score": {
            "scoring_engine_score": {
                "label": "Score",
                "value": 768,
                "max_value": 1000
            },
            "risk_rating": {
                "label": "Risk Rating",
                "value": "B",
                "max_value": null
            }
        },
        "rules": [],
        "final_decision": null
    };

    // Envía la respuesta JSON
    res.json(outputData);
});

app.listen(8080);
console.log('Escuchando en el puerto 8080 appJsonAPI');
