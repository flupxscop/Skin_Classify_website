// // export default function ContentClassify() {
// //   return (
// //     <div className="flex w-full justify-center">
// //       <div className="w-full max-w-[960px] rounded-2xl bg-white px-10 py-16 shadow md:px-16 md:py-20">
// //         <h1 className="mb-6 text-2xl font-bold text-gray-800">Classify</h1>
// //         <p className="mb-6 text-gray-700">
// //           Upload a skin image or take a photo to get predictions. (Put your form here.)
// //         </p>
// //         <div className="grid gap-6 md:grid-cols-2">
// //           <div className="rounded-lg border p-4">
// //             {/* TODO: Dropzone / File input */}
// //             <input type="file" accept="image/*" className="block w-full text-sm" />
// //           </div>
// //           <div className="min-h-[200px] rounded-lg border p-4">
// //             {/* TODO: Prediction result */}
// //             <p className="text-gray-500">Prediction result will appear here.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import { useState } from "react";

// // const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// // export default function ClassifyPage() {
// //   const [file, setFile] = useState<File | null>(null);
// //   const [preview, setPreview] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState<any>(null);
// //   const [error, setError] = useState<string | null>(null);

// //   const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const f = e.target.files?.[1] ? e.target.files![0] : e.target.files?.[0] || null;
// //     setFile(f);
// //     setResult(null);
// //     setError(null);
// //     if (f) setPreview(URL.createObjectURL(f));
// //   };

// //   const onSubmit = async () => {
// //     if (!file) return;
// //     setLoading(true);
// //     setError(null);
// //     setResult(null);
// //     try {
// //       const fd = new FormData();
// //       fd.append("file", file);
// //       const res = await fetch(`${API_URL}/predict`, { method: "POST", body: fd });
// //       const data = await res.json();
// //       if (!res.ok || !data.ok) throw new Error("Prediction failed");
// //       setResult(data.result);
// //     } catch (e: any) {
// //       setError(e.message || "Failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto max-w-3xl">
// //       <h1 className="mb-4 text-2xl font-bold">Classify</h1>

// //       <div className="grid gap-6 md:grid-cols-2">
// //         <div className="rounded-xl border p-4">
// //           <input type="file" accept="image/*" onChange={onSelect} />
// //           {preview && (
// //             <img src={preview} alt="preview" className="mt-4 h-60 w-full object-contain rounded" />
// //           )}
// //           <button
// //             onClick={onSubmit}
// //             disabled={!file || loading}
// //             className="mt-4 rounded bg-sky-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
// //           >
// //             {loading ? "Predicting..." : "Predict"}
// //           </button>
// //           {error && <p className="mt-2 text-red-600">{error}</p>}
// //         </div>

// //         <div className="rounded-xl border p-4">
// //           <h2 className="mb-3 font-semibold">Result</h2>
// //           {!result && <p className="text-gray-500">No result yet.</p>}

// //           {result?.type === "single" && (
// //             <div>
// //               <p className="mb-2">
// //                 <span className="font-bold">Prediction:</span> {result.pred}{" "}
// //                 <span className="text-gray-500">({(result.conf * 100).toFixed(1)}%)</span>
// //               </p>
// //               <ul className="list-disc pl-5 text-sm text-gray-700">
// //                 {result.topk?.map((r: any) => (
// //                   <li key={r.label}>
// //                     {r.label} — {(r.prob * 100).toFixed(1)}%
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}

// //           {result?.type === "multilabel" && (
// //             <div>
// //               <p className="mb-2 font-bold">Positives (≥ {Math.round(result.threshold * 100)}%)</p>
// //               {result.positives?.length ? (
// //                 <ul className="list-disc pl-5 text-sm text-gray-700">
// //                   {result.positives.map((r: any) => (
// //                     <li key={r.label}>
// //                       {r.label} — {(r.prob * 100).toFixed(1)}%
// //                     </li>
// //                   ))}
// //                 </ul>
// //               ) : (
// //                 <p className="text-gray-500">No class passed threshold.</p>
// //               )}

// //               <p className="mt-4 font-semibold">Top-5</p>
// //               <ul className="list-disc pl-5 text-sm text-gray-700">
// //                 {result.topk?.map((r: any) => (
// //                   <li key={r.label}>
// //                     {r.label} — {(r.prob * 100).toFixed(1)}%
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import { useState } from "react";

// // type Positive = { label: string; prob: number };
// // type MultiLabelResult = {
// //   type: "multilabel";
// //   threshold: number;
// //   positives: Positive[];
// //   topk: Positive[];
// // };

// // const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// // const REASON_TH: Record<string, string> = {
// //   not_skin_like: "ภาพนี้ไม่น่าจะเป็นภาพผิวหนัง",
// //   too_small: "ขนาดภาพเล็กเกินไป",
// //   too_dark: "ภาพมืดเกินไป",
// //   too_bright: "ภาพสว่างเกินไป",
// //   too_blurry: "ภาพเบลอเกินไป",
// //   weird_aspect: "สัดส่วนภาพผิดปกติ",
// //   invalid_image: "ไฟล์ภาพไม่ถูกต้อง",
// // };

// // function pct(x: number) {
// //   return `${(x * 100).toFixed(1)}%`;
// // }

// // function GateBanner({ gate }: { gate?: any }) {
// //   if (!gate) return null;
// //   if (gate.ok) {
// //     return (
// //       <div className="mb-3 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800 ring-1 ring-emerald-200">
// //         ผ่านการตรวจเบื้องต้น ✓ (skin_ratio {(gate.metrics?.skin_ratio * 100).toFixed(0)}%)
// //       </div>
// //     );
// //   }
// //   const reasons: string[] = gate.reasons ?? [];
// //   const msg =
// //     reasons.length > 0
// //       ? reasons.map((r) => REASON_TH[r] ?? r).join(" · ")
// //       : "ไม่ผ่านการตรวจเบื้องต้น";
// //   return (
// //     <div className="mb-3 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800 ring-1 ring-amber-200">
// //       {msg} — โปรดอัปโหลดภาพผิวหนังที่ชัดเจน ใกล้ และมีแสงเพียงพอ
// //     </div>
// //   );
// // }

// // function ResultPanel({ data }: { data: MultiLabelResult }) {
// //   const { threshold, positives, topk } = data;
// //   return (
// //     <div className="space-y-6">
// //       {/* ผ่าน threshold */}
// //       <div>
// //         <div className="mb-2 text-sm text-gray-500">
// //           Threshold: {(threshold * 100).toFixed(0)}%
// //         </div>
// //         {positives.length ? (
// //           <div className="flex flex-wrap gap-2">
// //             {positives.map((p) => (
// //               <span
// //                 key={p.label}
// //                 className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200"
// //                 title={pct(p.prob)}
// //               >
// //                 {p.label} • {pct(p.prob)}
// //               </span>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="rounded-md bg-gray-50 p-3 text-sm text-gray-700 ring-1 ring-gray-200">
// //             ไม่มีคลาสใดผ่าน threshold
// //           </div>
// //         )}
// //       </div>

// //       {/* Top-k */}
// //       <div className="space-y-3">
// //         <div className="font-semibold">Top predictions</div>
// //         {topk.map((p) => (
// //           <div key={p.label} className="space-y-1">
// //             <div className="flex items-center justify-between text-sm">
// //               <span className="text-gray-800">{p.label}</span>
// //               <span className="tabular-nums text-gray-500">{pct(p.prob)}</span>
// //             </div>
// //             <div className="h-2 w-full rounded bg-gray-100">
// //               <div
// //                 className="h-2 rounded bg-sky-500"
// //                 style={{ width: `${Math.max(1, p.prob * 100)}%` }}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default function ClassifyPage() {
// //   const [file, setFile] = useState<File | null>(null);
// //   const [preview, setPreview] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);
// //   const [gate, setGate] = useState<any | null>(null);
// //   const [result, setResult] = useState<MultiLabelResult | null>(null);
// //   const [error, setError] = useState<string | null>(null);

// //   const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const f = e.target.files?.[0] || null;
// //     setFile(f);
// //     setError(null);
// //     setGate(null);
// //     setResult(null);
// //     if (f) setPreview(URL.createObjectURL(f));
// //   };

// //   const onSubmit = async () => {
// //     if (!file) return;
// //     setLoading(true);
// //     setError(null);
// //     setGate(null);
// //     setResult(null);

// //     try {
// //       const fd = new FormData();
// //       fd.append("file", file);
// //       const res = await fetch(`${API_URL}/predict`, { method: "POST", body: fd });
// //       const data = await res.json();

// //       // จัดการกรณี gate reject
// //       setGate(data.gate ?? null);
// //       if (!data.ok) {
// //         const reasons: string[] = data.gate?.reasons ?? [];
// //         const msg =
// //           reasons.length > 0
// //             ? reasons.map((r) => REASON_TH[r] ?? r).join(" · ")
// //             : "ไม่สามารถประมวลผลภาพนี้ได้";
// //         setError(msg);
// //         return;
// //       }

// //       // โอเค ได้ผลลัพธ์
// //       if (data.result?.type === "multilabel") {
// //         setResult(data.result as MultiLabelResult);
// //       } else {
// //         // ถ้าคุณรองรับ single-class ด้วย ค่อยแสดงผลรูปแบบอื่นได้
// //         setError("ผลลัพธ์ไม่ใช่ multilabel (โปรดตรวจ backend IS_MULTILABEL)");
// //       }
// //     } catch (e: any) {
// //       setError(e?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto w-full max-w-4xl">
// //       <h1 className="mb-6 text-2xl font-bold">Classify</h1>

// //       <div className="grid gap-6 md:grid-cols-2">
// //         {/* ซ้าย: อัปโหลด + พรีวิว */}
// //         <div className="rounded-2xl border p-4">
// //           <label className="mb-2 block text-sm font-medium text-gray-700">
// //             อัปโหลดภาพผิวหนัง (JPG/PNG)
// //           </label>
// //           <input type="file" accept="image/*" onChange={onSelect} />
// //           {preview && (
// //             <img
// //               src={preview}
// //               alt="preview"
// //               className="mt-4 h-64 w-full rounded-lg object-contain bg-gray-50"
// //             />
// //           )}
// //           <button
// //             onClick={onSubmit}
// //             disabled={!file || loading}
// //             className="mt-4 rounded bg-sky-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
// //           >
// //             {loading ? "Predicting..." : "Predict"}
// //           </button>

// //           {/* แจ้งเหตุผลจาก gate */}
// //           <GateBanner gate={gate} />
// //           {error && (
// //             <div className="mt-2 rounded-md bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">
// //               {error}
// //             </div>
// //           )}

// //           {/* Hint ผู้ใช้ */}
// //           <ul className="mt-3 list-disc pl-5 text-xs text-gray-500">
// //             <li>ถ่ายให้เห็นผิวหนังชัดเจน ไม่ย้อนแสง และไม่เบลอ</li>
// //             <li>กรุณาหลีกเลี่ยงภาพวัตถุอื่น เช่น บ้าน วิว สิ่งของ</li>
// //           </ul>
// //         </div>

// //         {/* ขวา: ผลลัพธ์ */}
// //         <div className="rounded-2xl border p-4">
// //           <h2 className="mb-3 text-lg font-semibold">ผลการพยากรณ์</h2>
// //           {!result && !error && <p className="text-gray-500">ยังไม่มีผลลัพธ์</p>}
// //           {result && <ResultPanel data={result} />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";

// type Positive = { label: string; prob: number };
// type MultiLabelResult = {
//   type: "multilabel";
//   threshold: number;
//   positives: Positive[];
//   topk: Positive[];
// };

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://chancnx-skinclassify.hf.space/";

// const REASON_TH: Record<string, string> = {
//   not_skin_like: "ภาพนี้ไม่น่าจะเป็นภาพผิวหนัง",
//   too_small: "ขนาดภาพเล็กเกินไป",
//   too_dark: "ภาพมืดเกินไป",
//   too_bright: "ภาพสว่างเกินไป",
//   too_blurry: "ภาพเบลอเกินไป",
//   weird_aspect: "สัดส่วนภาพผิดปกติ",
//   invalid_image: "ไฟล์ภาพไม่ถูกต้อง",
// };

// function pct(x: number) {
//   return `${(x * 100).toFixed(1)}%`;
// }

// function GateBanner({ gate }: { gate?: any }) {
//   if (!gate) return null;
//   if (gate.ok) {
//     return (
//       <div className="mb-3 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800 ring-1 ring-emerald-200">
//         ผ่านการตรวจเบื้องต้น ✓ (skin_ratio {(gate.metrics?.skin_ratio * 100).toFixed(0)}%)
//       </div>
//     );
//   }
//   const reasons: string[] = gate.reasons ?? [];
//   const msg =
//     reasons.length > 0
//       ? reasons.map((r) => REASON_TH[r] ?? r).join(" · ")
//       : "ไม่ผ่านการตรวจเบื้องต้น";
//   return (
//     <div className="mb-3 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800 ring-1 ring-amber-200">
//       {msg} — โปรดอัปโหลดภาพผิวหนังที่ชัดเจน ใกล้ และมีแสงเพียงพอ
//     </div>
//   );
// }

// function ResultPanel({ data }: { data: MultiLabelResult }) {
//   const { threshold, positives, topk } = data;
//   return (
//     <div className="space-y-6">
//       <div>
//         <div className="mb-2 text-sm text-gray-500">
//           Threshold: {(threshold * 100).toFixed(0)}%
//         </div>
//         {positives.length ? (
//           <div className="flex flex-wrap gap-2">
//             {positives.map((p) => (
//               <span
//                 key={p.label}
//                 className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200"
//                 title={pct(p.prob)}
//               >
//                 {p.label} • {pct(p.prob)}
//               </span>
//             ))}
//           </div>
//         ) : (
//           <div className="rounded-md bg-gray-50 p-3 text-sm text-gray-700 ring-1 ring-gray-200">
//             ไม่มีคลาสใดผ่าน threshold
//           </div>
//         )}
//       </div>

//       <div className="space-y-3">
//         <div className="font-semibold">Top predictions</div>
//         {topk.map((p) => (
//           <div key={p.label} className="space-y-1">
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-800">{p.label}</span>
//               <span className="tabular-nums text-gray-500">{pct(p.prob)}</span>
//             </div>
//             <div className="h-2 w-full rounded bg-gray-100">
//               <div
//                 className="h-2 rounded bg-sky-500"
//                 style={{ width: `${Math.max(1, p.prob * 100)}%` }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ClassifyPage() {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [gate, setGate] = useState<any | null>(null);
//   const [result, setResult] = useState<MultiLabelResult | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const f = e.target.files?.[0] || null;
//     setFile(f);
//     setError(null);
//     setGate(null);
//     setResult(null);
//     if (f) setPreview(URL.createObjectURL(f));
//   };

//   const onSubmit = async () => {
//     if (!file) return;
//     setLoading(true);
//     setError(null);
//     setGate(null);
//     setResult(null);

//     try {
//       const fd = new FormData();
//       fd.append("file", file);
//       const res = await fetch(`${API_URL}/predict`, { method: "POST", body: fd });
//       const data = await res.json();

//       setGate(data.gate ?? null);
//       if (!data.ok) {
//         const reasons: string[] = data.gate?.reasons ?? [];
//         const msg =
//           reasons.length > 0
//             ? reasons.map((r) => REASON_TH[r] ?? r).join(" · ")
//             : "ไม่สามารถประมวลผลภาพนี้ได้";
//         setError(msg);
//         return;
//       }

//       if (data.result?.type === "multilabel") {
//         setResult(data.result as MultiLabelResult);
//       } else {
//         setError("ผลลัพธ์ไม่ใช่ multilabel (โปรดตรวจ backend IS_MULTILABEL)");
//       }
//     } catch (e: any) {
//       setError(e?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="mx-auto w-full max-w-4xl px-4 md:px-0">
//       <h1 className="mb-6 text-center text-xl sm:text-2xl md:text-3xl font-bold">
//         Classify
//       </h1>

//       {/* มือถือ=1 คอลัมน์, เดสก์ท็อป=2 คอลัมน์ */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
//         {/* ซ้าย: อัปโหลด + พรีวิว */}
//         <div className="rounded-2xl border p-4 sm:p-5 md:p-6">
//           <label className="mb-2 block text-sm font-medium text-gray-700">
//             อัปโหลดภาพผิวหนัง (JPG/PNG)
//           </label>
//           <input type="file" accept="image/*" onChange={onSelect} className="w-full" />
//           {preview && (
//             <img
//               src={preview}
//               alt="preview"
//               className="mt-4 h-48 sm:h-56 md:h-64 w-full rounded-lg object-contain bg-gray-50"
//             />
//           )}
//           <button
//             onClick={onSubmit}
//             disabled={!file || loading}
//             className="mt-4 w-full md:w-auto rounded bg-sky-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
//           >
//             {loading ? "Predicting..." : "Predict"}
//           </button>

//           <GateBanner gate={gate} />
//           {error && (
//             <div className="mt-2 rounded-md bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">
//               {error}
//             </div>
//           )}

//           <ul className="mt-3 list-disc pl-5 text-xs text-gray-500">
//             <li>ถ่ายให้เห็นผิวหนังชัดเจน ไม่ย้อนแสง และไม่เบลอ</li>
//             <li>กรุณาหลีกเลี่ยงภาพวัตถุอื่น เช่น บ้าน วิว สิ่งของ</li>
//           </ul>
//         </div>

//         {/* ขวา: ผลลัพธ์ */}
//         <div className="rounded-2xl border p-4 sm:p-5 md:p-6">
//           <h2 className="mb-3 text-lg font-semibold">ผลการพยากรณ์</h2>
//           {!result && !error && <p className="text-gray-500">ยังไม่มีผลลัพธ์</p>}
//           {result && <ResultPanel data={result} />}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

type Positive = { label: string; prob: number };
type MultiLabelResult = {
  type: "multilabel";
  // threshold: number;
  // positives: Positive[];
  topk: Positive[];
};

// กันไม่ให้เกิด //predict ถ้าค่า ENV ลงท้ายด้วย / 
const API_URL =
  (process.env.NEXT_PUBLIC_API_URL || "https://chancnx-skinclassify.hf.space").replace(/\/+$/, "");

const REASON_TH: Record<string, string> = {
  not_skin_like: "ภาพนี้ไม่น่าจะเป็นภาพผิวหนัง",
  too_small: "ขนาดภาพเล็กเกินไป",
  too_dark: "ภาพมืดเกินไป",
  too_bright: "ภาพสว่างเกินไป",
  too_blurry: "ภาพเบลอเกินไป",
  weird_aspect: "สัดส่วนภาพผิดปกติ",
  invalid_image: "ไฟล์ภาพไม่ถูกต้อง",
};

function pct(x: number) {
  return `${(x * 100).toFixed(1)}%`;
}

function GateBanner({ gate }: { gate?: any }) {
  if (!gate) return null;
  if (gate.ok) {
    return (
      <div className="mb-3 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800 ring-1 ring-emerald-200">
        ผ่านการตรวจเบื้องต้น ✓ (skin_ratio {(gate.metrics?.skin_ratio * 100).toFixed(0)}%)
      </div>
    );
  }
  const reasons: string[] = gate.reasons ?? [];
  const msg =
    reasons.length > 0
      ? reasons.map((r) => REASON_TH[r] ?? r).join(" · ")
      : "ไม่ผ่านการตรวจเบื้องต้น";
  return (
    <div className="mb-3 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800 ring-1 ring-amber-200">
      {msg} — โปรดอัปโหลดภาพผิวหนังที่ชัดเจน ใกล้ และมีแสงเพียงพอ
    </div>
  );
}

function Top3Chips({ topk }: { topk?: Positive[] }) {
  const items = (topk ?? []).slice(0, 3);
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((p) => (
        <span
          key={p.label}
          className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200"
          title={`${(p.prob * 100).toFixed(1)}%`}
        >
          {p.label} • {(p.prob * 100).toFixed(1)}%
        </span>
      ))}
    </div>
  );
}


// function ResultPanel({ data }: { data: MultiLabelResult }) {
//   const { threshold, positives, topk } = data;
//   return (
//     <div className="space-y-6">
//       <div>
//         <div className="mb-2 text-sm text-gray-500">Threshold: {(threshold * 100).toFixed(0)}%</div>
//         {positives.length ? (
//           <div className="flex flex-wrap gap-2">
//             {positives.map((p) => (
//               <span
//                 key={p.label}
//                 className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200"
//                 title={pct(p.prob)}
//               >
//                 {p.label} • {pct(p.prob)}
//               </span>
//             ))}
//           </div>
//         ) : (
//           <div className="rounded-md bg-gray-50 p-3 text-sm text-gray-700 ring-1 ring-gray-200">
//             ไม่มีคลาสใดผ่าน threshold
//           </div>
//         )}
//       </div>

//       <div className="space-y-3">
//         <div className="font-semibold">Top predictions</div>
//         {topk.map((p) => (
//           <div key={p.label} className="space-y-1">
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-800">{p.label}</span>
//               <span className="tabular-nums text-gray-500">{pct(p.prob)}</span>
//             </div>
//             <div className="h-2 w-full rounded bg-gray-100">
//               <div className="h-2 rounded bg-sky-500" style={{ width: `${Math.max(1, p.prob * 100)}%` }} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
function ResultPanel({ data }: { data: MultiLabelResult }) {
  const { topk } = data;
  return (
    <div className="space-y-6">
      {/* บล็อกบน: แสดง Top-3 เป็นชิป แทน threshold/positives */}
      <div>
        <Top3Chips topk={topk} />
      </div>

      {/* บล็อกล่าง: Top predictions (เดิม) */}
      <div className="space-y-3">
        <div className="font-semibold">Top predictions</div>
        {topk.map((p) => (
          <div key={p.label} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-800">{p.label}</span>
              <span className="tabular-nums text-gray-500">
                {(p.prob * 100).toFixed(1)}%
              </span>
            </div>
            <div className="h-2 w-full rounded bg-gray-100">
              <div
                className="h-2 rounded bg-sky-500"
                style={{ width: `${Math.max(1, p.prob * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function ClassifyPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [gate, setGate] = useState<any | null>(null);
  const [result, setResult] = useState<MultiLabelResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setError(null);
    setGate(null);
    setResult(null);
    if (f) setPreview(URL.createObjectURL(f));
  };

  const onSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setGate(null);
    setResult(null);

    try {
      const fd = new FormData();
      fd.append("file", file);

      // ป้องกันรอค้างนานเกินไป: ยกเลิกเมื่อเกิน 60s
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60_000);

      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: fd,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json();
      setGate(data.gate ?? null);

      if (!res.ok || !data.ok) {
        const reasons: string[] = data.gate?.reasons ?? [];
        const msg =
          reasons.length > 0
            ? reasons.map((r) => REASON_TH[r] ?? r).join(" · ")
            : "ไม่สามารถประมวลผลภาพนี้ได้";
        setError(msg);
        return;
      }

      if (data.result?.type === "multilabel") {
        setResult(data.result as MultiLabelResult);
      } else {
        setError("ผลลัพธ์ไม่ใช่ multilabel (โปรดตรวจ backend IS_MULTILABEL)");
      }
    } catch (e: any) {
      setError(e?.name === "AbortError" ? "ขออภัย ระบบใช้เวลานานเกินไป" : (e?.message || "เกิดข้อผิดพลาด"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-0">
      <h1 className="mb-6 text-center text-xl sm:text-2xl md:text-3xl font-bold">Classify</h1>

      {/* มือถือ=1 คอลัมน์, เดสก์ท็อป=2 คอลัมน์ */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {/* ซ้าย: อัปโหลด + พรีวิว */}
        <div className="rounded-2xl border p-4 sm:p-5 md:p-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">อัปโหลดภาพผิวหนัง (JPG/PNG)</label>
          <input type="file" accept="image/*" onChange={onSelect} className="w-full" />
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-4 h-48 sm:h-56 md:h-64 w-full rounded-lg object-contain bg-gray-50"
            />
          )}
          <button
            onClick={onSubmit}
            disabled={!file || loading}
            aria-busy={loading}
            aria-live="polite"
            className="mt-4 w-full md:w-auto rounded bg-sky-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
          >
            {/* spinner เล็ก ๆ ขณะโหลด (ไม่เปลี่ยนเลย์เอาต์หลัก) */}
            {loading && (
              <svg
                className="mr-2 inline h-4 w-4 animate-spin align-[-2px]"
                viewBox="0 0 24 24"
                role="status"
                aria-label="Loading"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
            {loading ? "Predicting..." : "Predict"}
          </button>

          <GateBanner gate={gate} />
          {error && (
            <div className="mt-2 rounded-md bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">{error}</div>
          )}

          <ul className="mt-3 list-disc pl-5 text-xs text-gray-500">
            <li>ถ่ายให้เห็นผิวหนังชัดเจน ไม่ย้อนแสง และไม่เบลอ</li>
            <li>กรุณาหลีกเลี่ยงภาพวัตถุอื่น เช่น บ้าน วิว สิ่งของ</li>
          </ul>
        </div>

        {/* ขวา: ผลลัพธ์ */}
        <div className="rounded-2xl border p-4 sm:p-5 md:p-6">
          <h2 className="mb-3 text-lg font-semibold">ผลการพยากรณ์</h2>
          {!result && !error && <p className="text-gray-500">ยังไม่มีผลลัพธ์</p>}
          {result && <ResultPanel data={result} />}
        </div>
      </div>
    </div>
  );
}
