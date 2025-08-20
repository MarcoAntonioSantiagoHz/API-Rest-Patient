// Start your Express application and define which port it will listen to requests on.
const app = require("./src/app");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server success run http://localhost:${PORT}`);
}); 