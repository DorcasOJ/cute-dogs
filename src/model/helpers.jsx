import { useEffect, useState } from "react";

export function shuffleData(array) {
  const shuffled = array.map((obj) => ({ ...obj }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function preloadImages(imageUrls) {
  return Promise.all(
    imageUrls.map((imgUrl) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => resolve({ imgUrl, loaded: true });
        img.onerror = () => resolve({ imgUrl, loaded: false });
      });
    })
  );
}

export function truncateText(text, length = 15) {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
}

export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
