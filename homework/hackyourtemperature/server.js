
// import path from "path";
import app from "./public/app.js";

// const __dirname = path.resolve();

// app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
