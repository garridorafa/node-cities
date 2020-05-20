const fs = require('fs');

module.exports = {
  getProvincias,
  getMunicipios,
  getSectores
}

function getProvincias() {
  const provincias = JSON.parse(fs.readFileSync("./data/provincias.json", "utf8"));
  return provincias;
}

function getMunicipios(provinciaId) {
  const municipios = JSON.parse(fs.readFileSync("./data/municipios.json", "utf8"));
  let municipiosSelected = [];
  municipios.forEach(municipio => {
    if (municipio.provincia_id === provinciaId) {
      municipiosSelected.push(municipio);
    }
  });
  return municipiosSelected;
}

function getSectores(municipioId) {
  const sectores = JSON.parse(fs.readFileSync("./data/sectores.json", "utf8"));
  let sectoresSelected = [];
  sectores.forEach(sector => {
    if (sector.municipio_id === municipioId) {
      sectoresSelected.push(sector);
    }
  });
  return sectoresSelected;
}
