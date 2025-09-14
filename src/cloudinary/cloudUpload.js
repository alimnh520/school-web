import cloudinary from "./cloudConfig";

export const UploadImage = async (file, type, folder) => {
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                resource_type: type || "auto",
                folder: folder
            },
            async (error, result) => {
                if (error) {
                    return reject(error)
                }
                return resolve(result);
            }).end(bytes);
    })
}
