 import { useState } from "react";

//in below Incrementor function, i've used setCount 3 times to add the n values 3 times. NOTICE ** that i have used n function (n=> n+1), instead of just used SetCount_3(count_3)
//Former, will not increment the count 1 times, as REact will only render the all 3 with inital values.
function Demo_Updater(){
    const [count_3, setCount_3]=useState(0);
    function Incrementor(){
      setCount_3(n =>n+1);
      setCount_3(n =>n+1);
      setCount_3(n =>n+1);

    }
    return (
        <>

        <button onClick={Incrementor}> +3 </button>
        <label>{count_3}</label>
        </>
    )       
}
export default function App(){

    return (
        <>
        <Demo_Updater/>
        </>
    );

}
