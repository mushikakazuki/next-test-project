import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import { Form } from "../components/Form";
import { Result } from "../components/Result";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [bmilists, setBMIList] = useState([]);
  const [bmi, setBMI] = useState();
  const [bmistate, setbmistate] = useState("");

  useEffect(() => {
    BMIList();
  }, []);

  const BMIList = useCallback(async function getDB() {
    const { data: posts, error } = await supabase.from("BMI").select("*");
    setBMIList(posts);
  }, []);

  function bmiCalk(tempBMI) {
    const BMILIST = bmilists.find(
      (bmilist) => Number(tempBMI) <= Number(bmilist.BMI)
    );
    setBMI(tempBMI);
    setbmistate(BMILIST.description);
  }

  return (
    <>
      <div className="text-center w-screen h-screen bg-yellow-100">
        <h1 className=" text-blue-500 pt-6 text-xl">
          このサイトは自身のBMIを計測することができるサイトです。
        </h1>
        <div className="text-lg pt-12 pb-4">
          自身の体型やBMIを知って自分が平均より
          <b>痩せているかふっくらしているか</b>確認しよう！！！！
        </div>
        <div className="text-lg pb-4">
          このサイトでは身長、体重の情報を必要とします。
        </div>
        {bmi == null ? (
          <Form onBMICalc={bmiCalk} />
        ) : (
          <Result bmi={bmi} state={bmistate} />
        )}
      </div>
    </>
  );
}
