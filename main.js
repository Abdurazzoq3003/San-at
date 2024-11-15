async function searchImage() {
  const imageContainer = document.querySelector(".image-container");
  imageContainer.innerHTML = "";

  const query = document.querySelector("input").value;
  const key = "47072346-be019f897f8af576faa0588ca";
  const url = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(
    query
  )}&image_type=photo&per_page=100`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.hits.length === 0) {
      const text = document.createElement("p");
      text.textContent = "Abdurazzoq siz izlagan rasm topilmadi!!!";
      imageContainer.appendChild(text);
    } else {
      data.hits.forEach((image) => {
        console.log(image);
        const img = document.createElement("img");
        img.src = image.webformatURL;
        imageContainer.appendChild(img);
      });
    }
  } catch (err) {
    console.log("Xatolik: ", err);
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", searchImage);
