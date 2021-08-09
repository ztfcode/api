const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/user", (req, res) => {
  let api_key = req.query.api_key
  const apikey = 'sagiri'
  let name = req.query.name
  let id = req.query.id * 1
  let status = 'ok'
  let msg = 'Valid apikey!'
  if (api_key == apikey) {
     if (name == null || name == '') name = null
     if (id == null || id == '') id = null
  } else {
     [name, id] = [null, null]
     status = 'bad'
     msg = 'Invalid apikey!'
  }
  let err = {
     "status": status,
     "message": msg
  }
  let upx = {
     "name": name,
     "id": id,
     "role": id*10-2+20-19,
     "integrity": '1aks8w9a0Jan8ak',
     "response": err
  }
  res.json(upx);
});

app.listen(port, () => {
  console.log(`api-x listening at http://localhost:${port}`)
});
