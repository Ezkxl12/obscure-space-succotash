let pronombres = ['mi', 'tu', 'nuestro', 'nuestra', 'su', 'yo', 'el', 'la', 'me', 'mi', 'te', 'ti', 'lo', 'la', 'le', 'se', 'nosotras', 'nosotros', 'ustedes', 'ellos', 'ellas', 'nos', 'los', 'las', 'les', 'se'];
let adjetivos = ['genial', 'creativo', 'inovador', 'tech', 'verde', 'gris', 'increible', 'inovadora', 'creativa', 'super'];
let sustantivos = ['dominio', 'website', 'plataforma', 'hub'];
let extensiones = ['.com', '.net', '.io', '.app', '.dev', '.org', '.co'];

function generarDominio() {
    let pronombre = pronombres[Math.floor(Math.random() * pronombres.length)];
    let adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
    let sustantivo = sustantivos[Math.floor(Math.random() * sustantivos.length)];
    let extension = extensiones[Math.floor(Math.random() * extensiones.length)];
  
    return `${pronombre}-${adjetivo}-${sustantivo}${extension}`;
  }
  
  let dominioGenerado = generarDominio();
  console.log(dominioGenerado)