import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';

function MyUploader({ onUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  async function uploadToCloudinary(file) {
    const url = `https://api.cloudinary.com/v1_1/dzntoqrfj/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'includePets');

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar a imagem para o Cloudinary');
    }

    return await response.json();
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedImage(Object.assign(file, {
          preview: URL.createObjectURL(file)
        }));

        try {
          const result = await uploadToCloudinary(file);
          console.log('Imagem enviada:', result);
          setUploadedImageUrl(result.secure_url);
          onUpload(result.secure_url);
        } catch (error) {
          console.error('Erro no upload:', error);
        }
      }
    }
  });

  const removeImage = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setUploadedImageUrl(null);
  };

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.preview);
      }
    };
  }, [selectedImage]);

  return (
    <section className="uploaderImg">
      <div {...getRootProps({ className: 'cursor-pointer' })}>
        <input {...getInputProps()} />

        {selectedImage ? (
          <div className='selectedImg'>
            {uploadedImageUrl && (
              <div className="mt-4">
                <p>Imagem enviada:</p>
                <img src={uploadedImageUrl} alt="Uploaded" className="w-full h-auto max-h-64 object-contain" />
              </div>
            )}
            <button 
              type="button" 
              onClick={removeImage}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Remover
            </button>
          </div>
        ) : (
          <p>Clique para fazer upload ou arraste a imagem aqui</p>
        )}
      </div>

      {!selectedImage && <label>PNG, JPG até 10MB</label>}
    </section>
  );
}

export default MyUploader;
