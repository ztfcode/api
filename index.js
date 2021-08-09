const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/user", (req, res) => {
  let name = req.query.name
  let id = req.query.id
  if (name == null || name == '') name = null
  if (id == null || id == '') id = null
  let upx = {
     "name": name,
     "id": id*1,
     "role": id*10-2+20-19,
     "sha": '1aks8w9a0Jan8ak'
  }
  res.json(upx);
});

app.listen(port, () => {
  console.log(`api-x listening at http://localhost:${port}`)
});
