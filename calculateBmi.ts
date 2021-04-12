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
console.log(calculateBmi(180, 74));

interface ExObj {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (r: number, e: number[]): ExObj => {

const  trainingDays= e.filter((ex, exInd) => ex>0)
const avg = (e.reduce((acc, curr)=> acc+curr,0))/e.length

const success= avg>=r

const ratingDescription = success?"Good":"not too bad but could be better"

  return  {
  periodLength: e.length,
  trainingDays:  trainingDays.length,
  success,
  rating: r,
  ratingDescription,
  target: r,
  average: avg
}
};
console.log(calculateExercise( 2, [3, 0, 2, 4.5, 0, 3, 1]))
