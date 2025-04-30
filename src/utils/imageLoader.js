import projectsDataMap from "../data/projectsData";
import { getCellKey } from './Utils.js';

const preloadImage = (src) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
    });
};

export const preloadProjectImages = async (cell, limit = Infinity) => {
    const cellKey = getCellKey(cell);
    const projectData = projectsDataMap[cellKey];
    if (!projectData?.images) return;

    const images = projectData.images.slice(0, limit);
    return Promise.all(images.map(preloadImage));
};

export const isImageCached = (src) => {
    const img = document.createElement('img');
    img.src = src;
    return img.complete && img.naturalWidth > 0;
};

export const generateProjectImages = (projectId, count) => {
    const context = require.context('../assets/images/', true, /\.jpg$/);
    const images = [];

    for (let i = 1; i <= count; i++) {
        try {
            images.push(context(`./p${projectId}/${i}.jpg`));
        } catch {
            console.warn(`Missing image: p${projectId}/${i}.jpg`);
        }
    }
    return images;
};
