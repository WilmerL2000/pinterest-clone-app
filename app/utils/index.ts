import { saveAs } from 'file-saver';


export const emailFormatter = (userId: string) => userId.replace('%40', '@')

/**
 * The function takes in the _id and photo of a user, and then saves the photo to the user's computer.
 * @param _id - The id of the photo.
 * @param photo - The image that you want to download.
 */
export function downloadImage(_id: string, photo: string) {
    /* Saving the image to the user's computer. */
    saveAs(photo, `download-${_id}.jpg`);
}