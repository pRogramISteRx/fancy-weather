async function getLinkToImage() {
  const width = window.screen.width.toString();
  const height = window.screen.height.toString();

  const url =
    'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature+night+snow+winter' +
    '&client_id=a6b156e34015e0044eb8949c7077b02d79a176132613bc9394c5b460dcf83286';
  try {
    const response = await fetch(url);
    const data = await response.json();
    const image = document.createElement('img');
    image.crossOrigin = 'Anonymous';
    const link = `${data.urls.raw}&w=${width}&h=${height}`;
    image.setAttribute('src', link);
    image.onload = () => {
      document.body.style.background = `url(${link}) no-repeat`;
      document.body.style.backgroundSize = 'cover';
    };
    image.onerror = () => {
      throw new Error('Data Error');
    };
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }
}

getLinkToImage();

const refreshButton = document.querySelector('#refreshButton');
refreshButton.addEventListener('click', getLinkToImage);
