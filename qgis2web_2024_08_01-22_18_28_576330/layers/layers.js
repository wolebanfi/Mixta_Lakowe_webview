ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:26332").setExtent([-82414.441406, 716412.755195, -81011.448956, 717118.244757]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_data_1 = new ol.format.GeoJSON();
var features_data_1 = format_data_1.readFeatures(json_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26332'});
var jsonSource_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_1.addFeatures(features_data_1);
var lyr_data_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_data_1, 
                style: style_data_1,
                popuplayertitle: "data",
                interactive: true,
                title: '<img src="styles/legend/data_1.png" /> data'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_data_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_data_1];
lyr_data_1.set('fieldAliases', {'id': 'id', 'type': 'type', 'height': 'height', 'area': 'area', 'date': 'date', 'heightSrc': 'heightSrc', 'heightScore': 'heightScore', 'name': 'name', 'orient': 'orient', 'country': 'country', 'Customer_Name': 'Customer_Name', 'Status': 'Status', });
lyr_data_1.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'date': 'Range', 'heightSrc': 'TextEdit', 'heightScore': 'TextEdit', 'name': 'TextEdit', 'orient': 'Range', 'country': 'TextEdit', 'Customer_Name': 'TextEdit', 'Status': 'TextEdit', });
lyr_data_1.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'height': 'no label', 'area': 'no label', 'date': 'no label', 'heightSrc': 'no label', 'heightScore': 'inline label - always visible', 'name': 'inline label - always visible', 'orient': 'no label', 'country': 'no label', 'Customer_Name': 'no label', 'Status': 'no label', });
lyr_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});