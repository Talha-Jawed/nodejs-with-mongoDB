const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dhz2clttn',
    api_key: '519213162382532',
    api_secret: 's3joeZ0DDrPXgdeyOh0dmkIsEPA'
});

exports.uploads = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id })
        }, { resource_type: "auto" })
    })
}