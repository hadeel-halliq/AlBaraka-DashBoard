import { useEffect, useState } from "react";

import iron1 from "../../../src/images/iron1.png";
import iron2 from "../../../src/images/iron2.png";
import iron3 from "../../../src/images/iron3.png";
import ironFactory from "../../../src/images/ironFactory.png";
import machin1 from "../../../src/images/machin1.png";
import machin2 from "../../../src/images/machin2.png";
import machin3 from "../../../src/images/machin3.png";
import product1 from "../../../src/images/product1.png";
import product2 from "../../../src/images/product2.png";
import product3 from "../../../src/images/product3.png";
import product4 from "../../../src/images/product4.png";
import product5 from "../../../src/images/product5.png";
import product6 from "../../../src/images/product6.png";
import product7 from "../../../src/images/product7.png";
import product8 from "../../../src/images/product8.png";
import product10 from "../../../src/images/product10.png";

const imagesArray = [
  { id: 1, name: "صورة 1", url: iron1 },
  { id: 2, name: "صورة 2", url: iron2 },
  { id: 3, name: "صورة 3", url: iron3 },
  { id: 4, name: "صورة 4", url: ironFactory },
  { id: 5, name: "صورة 5", url: machin1 },
  { id: 6, name: "صورة 6", url: machin2 },
  { id: 7, name: "صورة 7", url: machin3 },
  { id: 8, name: "صورة 8", url: product1 },
  { id: 9, name: "صورة 9", url: product2 },
  { id: 10, name: "صورة 10", url: product3 },
  { id: 11, name: "صورة 11", url: product4 },
  { id: 12, name: "صورة 12", url: product5 },
  { id: 13, name: "صورة 13", url: product6 },
  { id: 14, name: "صورة 14", url: product7 },
  { id: 15, name: "صورة 15", url: product8 },
  { id: 16, name: "صورة 16", url: product10 },
];

export default function ImageManagement() {
  const [images, setImages] = useState(imagesArray);
  const [editImage, setEditImage] = useState(null);
  const [editName, setEditName] = useState("");

  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleEdit = (img) => {
    setEditImage(img);
    setEditName(img.name);
  };

  const handleSaveEdit = () => {
    setImages(
      images.map((img) =>
        img.id === editImage.id ? { ...img, name: editName } : img
      )
    );
    setEditImage(null);
  };

  useEffect(() => {
    document.title = "لوحة التحكم | إدارة الصور"
  }, [])

  return (
    <div className="bg-[rgba(255,248,235,1)] p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center space-y-3"
          >
            <img
              src={img.url}
              alt={img.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <p className="text-gray-700 font-medium">{img.name}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(img)}
                className="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDelete(img.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {editImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96 animate-fadeIn">
           
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
               تعديل اسم الصورة
            </h3>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/30 p-2 rounded-lg w-full outline-none transition"
              placeholder="اكتب اسم الصورة..."
            />
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setEditImage(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition cursor-pointer"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
