import { nativeImage } from "electron";

export async function converterImgToBlob(imagePath) {
	const imageBuffer = nativeImage.createFromPath(imagePath);
	const resizedImage = imageBuffer.resize({ width: 120, height: 120 });
	const imageJpeg = resizedImage.toJPEG(70);

	const blob = new Blob([imageJpeg], { type: 'image/jpeg' });

	
	return await blob.arrayBuffer().then(arr => {
		const uint8Array = new Uint8Array(arr);
		return uint8Array;
	});
}