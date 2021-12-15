const searchFilter = require('./filters/searchFilter');

const categorias = [
    "Acceso a Justicia",
    "Transparencia y anticorrupción",
    "Derechos Humanos",
    "Género",
    "Instituciones de Justicia",
    "Legislación",
    "Poder Judicial",
    "Política Criminal",
    "Sistema Penitenciario",
    "Sistema Registral",
    "Pluralismo Juridico"
];

const instituciones = [
    "Corte Suprema de Justicia (CSJ)",
    "Corte de Apelaciones (CA)",
    "Juzgados de Primera Instancia",
    "Juzgados de Paz o Menores",
    "Consejo de la Carrera Judicial",
    "Corte de Constitucionalidad (CC)",
    "Ministerio Público (MP)",
    "Instituto Nacional de Ciencias Forenses",
    "Procurador de los Derechos Humanos (PDH)",
    "Contraloria General de Cuentas (CGC)",
    "Instituto de la Defensa Pública Penal (IDPP)"
];

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('js');

    categorias.forEach((categoria) => {
        eleventyConfig.addCollection(categoria, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('datos').filter(function (item) {
                return item.data.datos.Categoria === categoria;
            });

            return collection;
        });
    });

    instituciones.forEach((institucion) => {
        eleventyConfig.addCollection(institucion, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('datos').filter(function (item) {
                return item.data.datos.Institucion === institucion;
            });

            return collection;
        });
    });

    eleventyConfig.addFilter("search", searchFilter);
    eleventyConfig.addCollection("datos", function(collectionApi) {
        return collectionApi.getFilteredByTag('datos');
    });

    eleventyConfig.addCollection("ins", function(collectionApi) {
        return collectionApi.getFilteredByTag('ins');
    });

    eleventyConfig.addCollection("historias", function(collectionApi) {
        return collectionApi.getFilteredByTag('hist');
    });

    

    //eleventyConfig.setTemplateFormats('css,png,jpg,njk,html,otf,ttf');

    //eleventyConfig.addFilter("search", searchFilter);
}
