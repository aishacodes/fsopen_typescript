const calculateBmi = (height: number, weight: number): string => {
  const bmi:number = height / (weight * weight);
  let bm;
  switch (bmi) {
    case 0 <= bmi && bmi <= 15:
      bm = "Very severely underweight";
      break
  }

  return bm;
};
