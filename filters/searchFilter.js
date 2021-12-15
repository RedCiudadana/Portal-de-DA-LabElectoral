const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
    // what fields we'd like our index to consist of
    var index = elasticlunr(function () {
        this.addField("Institucion");
        this.addField("Categoria");
        this.addField("Nombre");
        this.setRef("id");
    });

    // loop through each page and add it to the index
    collection.forEach(item => {
        index.addDoc({
            id: item.url,
            Institucion: item.data.datos.Institucion,
            Categoria: item.data.datos.Categoria,
            Nombre: item.data.datos.Nombre
        });
    });

    return index.toJSON();
};