import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello server is ready");
});

app.get("/api/student", (req, res) => {
  const student = [
    {
      rollNo: 1,
      Name: "Asif",
      age: 20,
    },
    {
      rollNo: 2,
      Name: "tauquir",
      age: 20,
    },
    {
      rollNo: 3,
      Name: "ravi",
      age: 22,
    },
  ];
  res.send(student)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running in port http://localhost:${port}`);
});
