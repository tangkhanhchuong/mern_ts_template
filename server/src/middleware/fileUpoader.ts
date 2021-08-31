import multer, { StorageEngine, Multer, Field } from "multer"

const storage: StorageEngine = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "storage/")
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now() + ".png")
    },
})
const uploader: Multer = multer({ dest: "storage/", storage })

export const uploadSingleFile = (field: string = "") => uploader.single(field)

export const uploadMultipleFiles = (uploadedFields: string[] = []) => {
    return uploader.fields(
        uploadedFields.map((field: string) => ({
            name: field,
            maxCount: 1,
        }) as Field) 
    )
}