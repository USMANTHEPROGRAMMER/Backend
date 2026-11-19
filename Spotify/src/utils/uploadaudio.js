const cloudinary = require("../config/cloudinary")

async function uploadAudio(fileBuffer) {
    return await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
            resource_type: "video"
        }, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        }).end(fileBuffer)
    })
}

module.exports = uploadAudio;