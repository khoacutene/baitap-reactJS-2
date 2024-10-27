import { useState } from "react";

export default function Glass() {
  const [urlImg, setUrlImg] = useState("./public/images/model.jpg");

  const v1 = () => {
    setUrlImg("./public/images/v1.png")
  }
  const v2 = () => {
    setUrlImg("./public/images/v2.png")
  }
  const v3 = () => {
    setUrlImg("./public/images/v3.png")
  }
  const v4 = () => {
    setUrlImg("./public/images/v4.png")
  }
  const v5 = () => {
    setUrlImg("./public/images/v5.png")
  }
  const v6 = () => {
    setUrlImg("./public/images/v6.png")
  }
  const v7 = () => {
    setUrlImg("./public/images/v7.png")
  }
  const v8 = () => {
    setUrlImg("./public/images/v8.png")
  }
  const v9 = () => {
    setUrlImg("./public/images/v9.png")
  }

  const picture = () =>{
    setUrlImg("./public/images/g1.jpg")
  }


  return (
    <div>
      <h1 className="text-center bg-slate-700 p-7 text-white text-4xl">
        TRY GLASSES APP ONLINE
      </h1>
      <div className="flex justify-around	">
        <img className=""  src="./public/images/model.jpg" alt="" />
        <div className="relative">
          <img   className=""  src="./public/images/model.jpg" alt="" />
          <img width={320} className="absolute opacity-80 left-20 top-36"  src={urlImg} alt="" />
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-5">
        <button onClick={v1}>
          <img width={150} src="./public/images/g1.jpg" alt="" />
        </button>
        <button onClick={v2}>
          <img width={150} src="./public/images/g2.jpg" alt="" />
        </button>
        <button onClick={v3}>
          <img width={150} src="./public/images/g3.jpg" alt="" />
        </button>
        <button onClick={v4}>
          <img width={150} src="./public/images/g4.jpg" alt="" />
        </button>
        <button onClick={v5}>
          <img width={150} src="./public/images/g5.jpg" alt="" />
        </button>
        <button onClick={v6}>
          <img width={150} src="./public/images/g6.jpg" alt="" />
        </button>
        <button onClick={v7}>
          <img width={150} src="./public/images/g7.jpg" alt="" />
        </button>
        <button onClick={v8}>
          <img width={150} src="./public/images/g8.jpg" alt="" />
        </button>
        <button onClick={v9}>
          <img width={150} src="./public/images/g9.jpg" alt="" />
        </button>
      </div>
    </div>
  );
}
