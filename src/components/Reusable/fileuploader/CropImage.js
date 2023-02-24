import { useCallback, useEffect, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Modal from './Modal';

const PIXEL_RATIO = 4;

const CropImage = props => {
  const [crop, setCrop] = useState({
    unit: '%',
    width: 80,
    height: 60,
    aspect: props.aspectRatio ? props.aspectRatio : null,
  });

  const [src, setSrc] = useState();

  const [completedCrop, setCompletedCrop] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [preview, setPreview] = useState();
  const [croppedFile, setCroppedFile] = useState();

  const imgRef = useRef(null);

  const previewCanvasRef = useRef(null);

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (props.selectedFile) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(props.selectedFile);
      setModalIsOpen(true);
    }
  }, [props.selectedFile]);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * PIXEL_RATIO;
    canvas.height = crop.height * PIXEL_RATIO;

    ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    canvas.toBlob(blob => {
      if (blob) {
        const previewUrl = URL.createObjectURL(blob);
        const newFile = new File([blob], props.selectedFile?.name, {
          type: 'image/jpg',
        });

        setPreview(previewUrl);
        setCroppedFile(newFile);
      }
    }, 'image/jpg');
  }, [completedCrop, props.selectedFile?.name]);

  return (
    <>
      <Modal
        {...{ modalIsOpen, setModalIsOpen }}
        onSave={() => {
          props.onSave({ file: croppedFile, preview });
          setModalIsOpen(false);
        }}
      >
        <ReactCrop
          className='max-h-[550px]'
          // locked
          onChange={(_crop, image) => setCrop(image)}
          onComplete={setCompletedCrop}
          onImageLoaded={onLoad}
          {...{ src, crop }}
        />
        <canvas ref={previewCanvasRef} style={{ width: 0, height: 0 }} />
      </Modal>
    </>
  );
};

export default CropImage;
