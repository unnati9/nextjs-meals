'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageRef = useRef();
    function handleOnClick() {
        imageRef.current.click();  // Trigger the file upload input
    }
    function handleOnChange(event) {
        const file =  event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='The image picked by user.' fill />}
                </div>
                <input required onChange={handleOnChange} className={classes.input} ref={imageRef} id={name} type="file" accept=".jpg,.jpeg,.png" name={name} />
                <button onClick={handleOnClick} className={classes.button} type='button'>Pick an Image</button>
            </div>
        </div>
    );
}