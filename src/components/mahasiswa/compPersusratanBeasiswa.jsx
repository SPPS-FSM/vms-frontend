import React from "react";

export default function CompPersuratanBeasiswa() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-3">
        <div className="col-span-12  md:col-span-1 lg:col-span-3 flex justify-center items-center">
          <a href="/mahasiswa/detail-surat-keterangan-beasiswa"  className="bg-white border border-gray-300 rounded-md hover:shadow-md">
            <div className="text-gray-700 border rounded-md">
              <div className=" h-24 flex justify-center items-center">
                <img
                  src="../form.png"
                  alt=""
                  className="rounded-lg"
                  width={80}
                />
              </div>
              <div className="p-6 h-28">
                <h5 className=" block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Surat Keterangan Beasiswa
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div className="col-span-12  md:col-span-1 lg:col-span-3 flex justify-center items-center">
          <a href="/mahasiswa/detail-surat-permohonan-beasiswa"  className="bg-white border border-gray-300 rounded-md hover:shadow-md">
            <div className="text-gray-700 border rounded-md">
              <div className=" h-24 flex justify-center items-center">
                <img
                  src="../form.png"
                  alt=""
                  className="rounded-lg"
                  width={80}
                />
              </div>
              <div className="p-6 h-28">
                <h5 className=" block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Surat Permohonan Beasiswa
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div className="col-span-12  md:col-span-1 lg:col-span-3 flex justify-center items-center">
          <a href="/mahasiswa/detail-surat-pernyataan-beasiswa"  className="bg-white border border-gray-300 rounded-md hover:shadow-md">
            <div className="text-gray-700 border rounded-md">
              <div className=" h-24 flex justify-center items-center">
                <img
                  src="../form.png"
                  alt=""
                  className="rounded-lg"
                  width={80}
                />
              </div>
              <div className="p-6 h-28">
                <h5 className=" block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Surat Rekomendasi Beasiswa
                </h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
