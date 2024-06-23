import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req, res) => {
     try {
          const name = req.query.name || "Anonyumous";
          const result = await axios.get(" https://v2.jokeapi.dev/joke/Any");
          const joke = result.data.joke || `${result.data.setup}- ${result.data.delivery}`;
          res.render("index.ejs", {
         name: name,
         joke: joke,
       })
       
       
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
    res.status(500).send("Error retrieving joke");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
