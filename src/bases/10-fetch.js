const apiKey = 'diHUfJ5pKi7uJqKgJMbcZF52XF1Kefj0';

// api.giphy.com/v1/gifs/random	

// https://api.giphy.com/v1/gifs/random?api_key=diHUfJ5pKi7uJqKgJMbcZF52XF1Kefj0

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCall
.then( response => response.json())
.then( ({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(error => console.log(error));