import { useGetProfileQuery } from "features/profile/profileApi";
import { useEffect, useState } from "react";
import "react-image-crop/src/ReactCrop.scss";
import { useSelector } from "react-redux";
import { REACT_APP_BASE_URL } from 'urlConfig';
import Modal from "../core/Modal";

export default function ChangeCoverPhoto({ open, onClose }) {
  const { refetch } = useGetProfileQuery();
  const token = useSelector((state) => state.auth.accessToken);
  const [file, setFile] = useState(null);
  // const [imageSize, setImageSize] = useState({ height: 500, width: 500 });
  // const [crop, setCrop] = useState();
  // const [scale, setScale] = useState(1);
  const [val, setVal] = useState(null);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("cover_photo", val);
    try {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/avatar-cover-update`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await res.json();
      onClose();
      refetch();
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  };

  // const handleScale = (e) => {
  //   const value = e.target.value;
  //   if (value * imageSize.height < 300 || value * imageSize.width < 300) {
  //     return;
  //   }
  //   setScale(value);
  // };

  const handleChange = (e) => {
    setVal(e.target.files[0]);
    if (e.target.files && e.target.files.length > 0) {
      // setCrop(undefined);
      // setImageSize(e.target.files[0]);
      const reader = new FileReader();
      const img = new Image(e.target.files[0]);
      reader.addEventListener("load", () => {
        img.src = reader.result;
        img.onload = () => {
          // console.log(img);
          // setImageSize({ height: img.naturalHeight, width: img.naturalWidth });
          setFile(reader.result?.toString() || "");
        };
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    // setCrop(undefined);
    // setScale(1);
    setFile(null);
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-center p-4 border-b border-solid border-gray-400">
        Update cover photo
      </h2>
      <div className="p-4">
        <div className="flex items-center justify-center">
          {file ? (
            <div className="w-[80vw] aspect-[1110/308]">
              <img
                src={file}
                alt="cover photo"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          ) : (
            <label className="w-[80vw] aspect-[1110/308] border border-solid border-gray-500 flex items-center justify-center rounded-md">
              <input
                onChange={handleChange}
                className="hidden"
                type="file"
                accept="image/*"
              />
              Upload Image
            </label>
          )}
        </div>

        <div className="pt-4">
          <div className="flex justify-end gap-6 pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2 text-yellow-500 hover:text-yellow-600 hover:bg-gray-100 duration-150 transit rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!file}
              className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 duration-150 rounded-md disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
