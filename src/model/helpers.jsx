import emailjs from "emailjs-com";

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

export function sendMessage(serviceId, templateId, form, userId) {
  emailjs.sendForm(serviceId, templateId, form, userId).then(
    (result) => {
      console.log(result.text);
      alert("Your message has been sent!");
    },
    (error) => {
      console.log(error.text);
      alert("An error occurred, message not sent");
    }
  );
}
