"use client";
import { useState } from "react";
import image1 from './giphy1color.gif'
import image2 from './giphy2color.gif'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 32;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "قلت لا",
      "اولردي معزوم",
      "مو اليوم، باجر",
      "افلاس ياخي",
      "تعبان مالي بارض",
      "خلها وقت ثاني",
      "مرتبط مع الاهل",
      "اي يوم ثاني مو مشكلة",
      "راعي المطعم يطالبني",
      "معليش عندي تسمم",
      "كل يوم يتعشون؟",
      "ودي مرة انت تعزمني",
      "اذا شسمه بقولك",
      "بنفت ما يشتغل",
      "الدايت اليديد من غير عشى",
      "يا رجل نهاية الشهر",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={image2} />
          <div className="my-4 text-4xl font-bold">كفوووو هذي العشم فيك</div>
        </>
      ) : (
        <>
          <img src={image1} />

          <h1 className="my-4 text-4xl">تعزمني على العشى؟</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              اوكي
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-16 py-8 font-bold text-white text-2xl hover:bg-red-700"
            >
              {noCount === 0 ? "لا" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
