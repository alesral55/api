

const http = require('http')

http.createServer((req, res)=>{
    console.log(req);
    res.writeHead(200, {'Content-Type': 'application/json'})
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
    res.write(JSON.stringify(outputData));
    res.end();
})

.listen(8080)

console.log('Escuchando el puerto ', 8080);