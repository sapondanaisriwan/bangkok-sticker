"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("สวัสดีวันจันทร์");
  const eleRef = useRef(null);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const downloadImage = useCallback(() => {
    if (!eleRef.current) return;

    toPng(eleRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "bangkok-sticker";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <section className="px-4 py-12 flex justify-center">
        <Link href="https://github.com/sapondanaisriwan/bangkok-sticker" target="_blank">
          <h1 className="inline-block text-center text-6xl sm:text-7xl mx-auto text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
            Bangkok Sticker
          </h1>
        </Link>
      </section>
      <section className="p-4">
        <div className="w-full max-w-xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              className="relative text-center w-4/5 outline-none rounded py-3 px-3 bg-white shadow text-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
              placeholder="ใส่ข้อความ"
              value={text}
              onChange={handleChange}
            />
            <button
              onClick={downloadImage}
              className="w-1/5 bg-[#6DA7FF] text-white rounded sm:text-xl"
            >
              Download
            </button>
          </div>
        </div>
      </section>
      <section className="p-4 py-12">
        <div
          ref={eleRef}
          className="relative aspect-square max-w-xl w-full rounded overflow-hidden mx-auto"
        >
          <Image src="/bg.png" alt="bg" priority fill objectFit="cover" />
          <div
            className="text-white text-nowrap [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] shadow-inner absolute inset-0 flex mt-7 sm:mt-10 items-center justify-center text-2xl sm:text-5xl select-none"
          >
            {text}
          </div>
        </div>
      </section>
    </main>
  );
}
