import { useState } from "react";

export function Form(props) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleHeightChange = (e) => {
    const Height = e.target.value;
    if (Height <= 250 && Height >= 0) {
      setHeight(Height);
    } else {
      alert("身長は0から250の値を指定して下さい。");
    }
  };

  const handleWeightChange = (e) => {
    const Weight = e.target.value;
    if (Weight.length <= 3 && Weight >= 0) {
      setWeight(Weight);
    } else {
      alert("体重は0から999までの値を入力してください");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (height !== "" && weight !== "") {
      // BMIの算出
      const covHeight = height / 100;
      const tempBMI = Math.round((weight / (covHeight * 2)) * 10) / 10;

      // 標準体重を算出
      const standardweight = Math.round(covHeight * 2 * 22);

      props.onBMICalc(tempBMI);
    } else {
      alert("未入力の項目があります。");
    }
  };
  return (
    <form
      className="bg-blue-200 pt-8 pb-28 w-1/2 mx-auto mt-6 rounded-lg"
      method="get"
    >
      <div className="pb-16">ここに身長・体重を入力してください</div>
      <div className="my-5">
        身長
        <input
          type="number"
          className="shadow ml-7"
          name="height"
          value={height}
          onChange={handleHeightChange}
        />
        cm
      </div>
      <div className="my-5">
        体重
        <input
          type="number"
          className="shadow ml-7"
          name="weight"
          value={weight}
          onChange={handleWeightChange}
        />
        kg
      </div>
      <button
        className="py-2 mt-8 px-4 text-white bg-green-300 rounded-lg shadow"
        onClick={handleClick}
      >
        計算
      </button>
    </form>
  );
}
