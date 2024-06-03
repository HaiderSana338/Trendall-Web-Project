import { fetchPhotos } from './fetchPhotos';

export let photos = [];

const loadPhotos = async () => {
    photos = await fetchPhotos();
};

loadPhotos();
