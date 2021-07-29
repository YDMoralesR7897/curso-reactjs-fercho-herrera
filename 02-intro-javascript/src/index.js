 /*  const getImagepromesa = () => new Promise (resolve => resolve('https://github.com'))
     

getImagepromesa().then(console.log) */

const getImagen = async() => {

    const apiKey = 'YEKopj7lyq5Y4NBsrnvvhzyqgVtFC8v1'
    const
}

getImagen()

/* const apiKey = 'YEKopj7lyq5Y4NBsrnvvhzyqgVtFC8v1'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${ apiKey }`);

peticion
.then(resp => resp.json())
.then(({data}) =>{
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn); */