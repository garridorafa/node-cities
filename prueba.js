

var prov = [
	{
		"provincia_id" : 1,
		"provincia" : "Distrito Nacional"
	},
	{
		"provincia_id" : 21,
		"provincia" : "San Pedro de Macorís"
	},
	{
		"provincia_id" : 22,
		"provincia" : "La Romana"
	},
	{
		"provincia_id" : 23,
		"provincia" : "La Altagracia"
	},
	{
		"provincia_id" : 24,
		"provincia" : "El Seibo"
	},
	{
		"provincia_id" : 25,
		"provincia" : "Hato Mayor"
	},
	{
		"provincia_id" : 31,
		"provincia" : "Duarte"
	},
	{
		"provincia_id" : 32,
		"provincia" : "Samaná"
	},
	{
		"provincia_id" : 33,
		"provincia" : "Maria Trinidad Sánchez"
	},
	{
		"provincia_id" : 34,
		"provincia" : "Salcedo"
	},
	{
		"provincia_id" : 41,
		"provincia" : "La Vega"
	},
	{
		"provincia_id" : 42,
		"provincia" : "Monseñor Nouel"
	},
	{
		"provincia_id" : 43,
		"provincia" : "Sánchez Ramirez"
	},
	{
		"provincia_id" : 51,
		"provincia" : "Santiago"
	},
	{
		"provincia_id" : 56,
		"provincia" : "Espaillat"
	},
	{
		"provincia_id" : 57,
		"provincia" : "Puerto Plata"
	},
	{
		"provincia_id" : 61,
		"provincia" : "Valverde"
	},
	{
		"provincia_id" : 62,
		"provincia" : "Monte Cristi"
	},
	{
		"provincia_id" : 63,
		"provincia" : "Dajabónn"
	},
	{
		"provincia_id" : 64,
		"provincia" : "Santiago Rodríguez"
	},
	{
		"provincia_id" : 71,
		"provincia" : "Azua"
	},
	{
		"provincia_id" : 72,
		"provincia" : "San Juan de la Maguana"
	},
	{
		"provincia_id" : 73,
		"provincia" : "Elías Piña"
	},
	{
		"provincia_id" : 81,
		"provincia" : "Barahona"
	},
	{
		"provincia_id" : 82,
		"provincia" : "Bahoruco"
	},
	{
		"provincia_id" : 83,
		"provincia" : "Independencia"
	},
	{
		"provincia_id" : 84,
		"provincia" : "Perdenales"
	},
	{
		"provincia_id" : 91,
		"provincia" : "San Cristóbal"
	},
	{
		"provincia_id" : 92,
		"provincia" : "Monte Plata"
	},
	{
		"provincia_id" : 93,
		"provincia" : "San José de Ocoa"
	},
	{
		"provincia_id" : 94,
		"provincia" : "Peravia"
	}
];

provincias = getProvincias();
var u = getSelect('provincias', provincias);
console.log(u);
selectProv = document.getElementById('selection');
selectProv.appendChild(u)

function getProvincias (){
    const provincias = prov;
    return provincias;
}
function getMunicipios (provinciaId){
    const municipios = JSON.parse(fs.readFileSync("./municipios.json", "utf8"));
    let municipiosSelected = [];
    municipios.forEach(municipio => {
        if (municipio.provincia_id === provinciaId) {
            municipiosSelected.push(municipio);
        }
    });
    return municipios;
}
function getSectores (municipioId){
    const sectores = JSON.parse(fs.readFileSync("./sectores.json", "utf8"));
    let sectoresSelected = [];
    sectores.forEach(sector => {
        if (sector.municipio_id === municipioId) {
            sectoresSelected.push(sector);
        }
    });
    return sectores;
}





function getSelect(className, data){
    var select = document.createElement('select');
    select.className = className;
    fillSelect(select, className,  data);
    return select;
}

function fillSelect(select, className,  data) {
    data.map(element => {
        var option = document.createElement('option');
        option.id = element.provincia_id;
        option.appendChild(document.createTextNode(element.provincia));
        select.appendChild(option);
    });
}
