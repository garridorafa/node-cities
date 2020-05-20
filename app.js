var provincias = ds.getProvincias();
var u = getSelect('provincias', provincias);
console.log(u);

function getSelect(className, data){
    var select = document.createElement('select');
    select.className = className;
    fillSelect(select, className,  data);
}

function fillSelect(select, className,  data) {
    data.map(element => {
        var dataId = className + '_id';
        var option = document.createElement('option');
        option.id = element.dataId
        option.appendChild(document.createTextNode(data.element));
        select.appendChild(option);
    });
}
