"use client";
import Image from "next/image";
import ModelViewer from "./ModelViewer";

export default function ContentHome() {
  return (

    <div className="w-full">

      {/* <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 pt-16 space-y-10">

  
        <h2 className="text-center text-2xl md:text-5xl font-extrabold">
          <span className="gradient-text">Welcome to SkinClassify</span>
        </h2>

        <div className="flex justify-center ">
            <p className="max-w-[1000px] text-center md:text-left text-[20px] leading-[30px] text-gray-400 indent-8">
              SkinClassify is an AI-powered platform that detects the 8 most
              common skin conditions, such as eczema, allergic contact dermatitis,
              and urticaria. The system supports multi-label diagnosis and
              leverages dermatologist confidence scores as weights to improve
              prediction accuracy.
            </p>
          </div>

          <div className="flex justify-center ">
            <div className="relative w-[500px] h-[400px]">
              <ModelViewer
                url="/Model/SkinV2.glb"
                className="absolute inset-0"
                fov={36}
                modelScale={2.0}
              />
            </div>
          </div>

      </section>




      <section className="px-6 pb-16">
        <div className="mx-auto w-full max-w-[1024px]">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="md:col-span-2 rounded-3xl border border-gray-200 p-8 md:p-10 min-h-[220px]">
              <h3 className="mb-3 text-center text-2xl font-extrabold text-gray-900">
                สามารถช่วยทำนายโรคได้
              </h3>
              <p className="text-center text-gray-600 leading-7">
                Allergic Contact Dermatitis, Eczema, Folliculitis, Insect Bite,
                Irritant Contact Dermatitis, Psoriasis, Tinea, Urticaria
              </p>
            </div>


            <div className="md:col-span-1 rounded-3xl border border-gray-200 p-8 md:p-10 min-h-[220px] flex items-center justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-[12px] border-green-500">
                <span className="text-2xl font-extrabold text-green-600">ไม่เก็บข้อมูล</span>
              </div>
            </div>


            <div className="overflow-hidden border border-gray-200 rounded-3xl md:col-span-1">
              <Image
                src="/image/tone-wheel.png"
                alt="Skin tone wheel"
                width={640}
                height={400}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
            <div className="overflow-hidden rounded-3xl md:col-span-1">
              <Image
                src="/image/inspect.png"
                alt="Inspection illustration"
                width={640}
                height={400}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
            <div className="overflow-hidden rounded-3xl md:col-span-1">
              <Image
                src="/image/rash.png"
                alt="Rash illustration"
                width={640}
                height={400}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 pt-16 md:px-6 md:pt-16 space-y-6 md:space-y-10">
        <h2 className="text-center text-2xl md:text-5xl font-extrabold">
          <span className="gradient-text">Welcome to SkinClassify</span>
        </h2>

        <div className="flex justify-center ">
            <p className="max-w-[1000px] text-center md:text-left text-[20px] leading-[30px] text-gray-400 indent-8">
              SkinClassify is an AI-powered platform that detects the 8 most
              common skin conditions, such as eczema, allergic contact dermatitis,
              and urticaria. The system supports multi-label diagnosis and
              leverages dermatologist confidence scores as weights to improve
              prediction accuracy.
            </p>
          </div>

          <div className="flex justify-center ">
            <div className="relative w-[500px] h-[400px]">
              <ModelViewer
                url="/Model/SkinV2.glb"
                className="absolute inset-0"
                fov={36}
                modelScale={2.0}
              />
            </div>
          </div>
      </section>

      {/* SECTION 2: CARDS */}
      <section className="px-4 pb-16 md:px-6">
        <div className="mx-auto w-full max-w-[1024px]">
          {/* ใช้กริด 1 คอลัมน์บนมือถือ, 3 คอลัมน์บน md+ */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
            {/* การ์ดซ้ายบน span 2 คอลัมน์เมื่อ >= md */}
            <div className="rounded-3xl border border-gray-200 p-6 md:p-10 md:col-span-2">
              <h3 className="mb-3 text-center text-lg md:text-2xl font-extrabold text-gray-900">
                สามารถช่วยทำนายโรคได้
              </h3>
              <p className="text-center text-gray-600 text-sm md:text-base leading-6 md:leading-7">
                Allergic Contact Dermatitis, Eczema, Folliculitis, Insect Bite,
                Irritant Contact Dermatitis, Psoriasis, Tinea, Urticaria
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 md:p-10 flex items-center justify-center">
              <div className="flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full border-[10px] md:border-[12px] border-green-500">
                <span className="text-lg md:text-2xl font-extrabold text-green-600">ไม่เก็บข้อมูล</span>
              </div>
            </div>

            {/* แถวล่าง: รูป 3 ใบ สูงคงที่บนมือถือ */}
            <div className="overflow-hidden border border-gray-200 rounded-3xl">
              <img src="/image/tone-wheel.png" alt="" className="h-40 w-full  object-cover md:h-56" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src="/image/inspect.png" alt="" className="h-40 w-full object-cover md:h-56" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src="/image/rash.png" alt="" className="h-40 w-full object-cover md:h-56" />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
