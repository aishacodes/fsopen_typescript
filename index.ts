import express from 'express';
const app = express()






app.get("/hello", (_req, res)=>{
    res.send("Hello Full Stack! ")
})

app.get("/bmi", (req, res)=>{
    const h:number = Number(req.query.height)
    const w:number = Number(req.query.weight)

    if(!h || !w)  res.json({error: "malformatted parameters"})

    const calculateBmi = (height: number, weight: number): string => {
  height = height / 100;

  const bmi: number = weight / (height * height);
  let bm;
  switch (true) {
    case 0 <= bmi && bmi < 15:
      bm = "Very severely underweight";
      break;
    case 15 <= bmi && bmi < 16:
      bm = "severely underweight";
      break;
    case 16 <= bmi && bmi < 18.5:
      bm = "Underweight";
      break;
    case 18.5 <= bmi && bmi < 25:
      bm = "Normal (healthy weight)";
      break;
    case 25 <= bmi && bmi < 30:
      bm = "Overweight";
      break;
    case 30 <= bmi && bmi < 35:
      bm = "Obese Class I (Moderately obese)";
      break;
    case 35 <= bmi && bmi < 40:
      bm = "Obese Class II (Severely obese)";
      break;
    case bmi > 40:
      bm = "Obese Class III (Very severely obese)";
      break;
    default:
      return "INVALID DETAILS";
  }

  return bm;
};
    res.json({weight:w, height:h, bmi:calculateBmi(h,w)})
})
const PORT = 3030

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)

})
