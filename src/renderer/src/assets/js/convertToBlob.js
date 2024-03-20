function convertToBlob(blob) {
    
    const imageBlob = new Blob([blob], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(imageBlob);
    return imageUrl
}

export default convertToBlob