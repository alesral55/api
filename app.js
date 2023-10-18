const axios = require('axios');
const express = require('express');
const app = express();

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Endpoint para realizar la solicitud a la API
app.get('/api-consumer', async (req, res) => {
  console.log(req);
  try {
    // Datos de entrada
    const inputData = {
      "application": {
        "application_id": "001",
        "application_date": "2023-09-13",
        "applicant_data": {
          "name": "VICTOR JOEL RODRIGUEZ GONZALEZ",
          "age": 32,
          "email": "marybarreratg@gmail.com",
          "phone": "+50237777436",
          "address": {
            "country": "Guatemala",
            "city": "Flores",
            "street1": "MANZANA 19 LOTE 526 COLONIA MAYA ZONA 18"
          }
        }
      }
    };

    // Realizar una solicitud POST a la API
  // Realizar una solicitud POST a la API
const response = await axios.post('http://localhost:3000/api-consumer', inputData);

    // Datos de salida
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

    // Envía la respuesta al cliente
    res.json(outputData);
  } catch (error) {
    console.error('Error al consumir la API:', error);
    res.status(500).json({ error: 'Ocurrió un error al consumir la API.' });
  }
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
});
