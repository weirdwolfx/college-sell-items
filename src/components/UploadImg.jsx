import React from "react"

export default function UploadImg(props) {

    const [previewImg, setPreviewImg] = React.useState(null)

    const showPreviewImg = (event => {
        const file = event.target.files[0]
        if (file) {
            const img = URL.createObjectURL(file)
            setPreviewImg(img)
        } 
    })

    return (
        <div className="file-input">
            <label 
                htmlFor="img-input"
                title={props.title}
                className="pointer-accessible"
            >
                <span className="material-symbols-outlined">upload</span>
                Upload image
            </label>
            <input
                type="file"
                accept="image/*"
                id="img-input"
                name={props.name}
                onChange={showPreviewImg}
                required
            />
            <div className="preview-img-container">
                {previewImg != null ? 
                    <img src={previewImg} alt="image preview" /> :
                    <p>No image uploaded</p> 
                }
            </div>
        </div>
    )
}