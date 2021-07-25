export function Result(props) {
  return (
    <>
      <div className="py-8">
        あなたのBMIは<b className="text-red-300 text-2xl">{props.bmi}</b>
        でした。
      </div>
      <div className="pb-4">BMIは18.5～24.9がいいとされています。</div>
      <div className="py-4">
        BMIの結果あなたの体型は
        <b className="text-red-300 text-2xl">{props.state}</b>
        です。
      </div>
    </>
  );
}
