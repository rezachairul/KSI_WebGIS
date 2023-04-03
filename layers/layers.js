var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> BAKAUHENI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> BATANGHARI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> CANDIPURO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> GEDONGTATAAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> JABUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> JATIAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> KALIANDA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> KATIBUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> KEMILING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> KETAPANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> MARGATIGA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> MERBAUMATARAM<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> METROKIBANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> NATAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> NEGERIKATON<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> PALAS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> PANJANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> PASIRSAKTI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> PENENGAHAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_19.png" /> RAJABASA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_20.png" /> SEKAMPUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_21.png" /> SEKAMPUNGUDIK<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_22.png" /> SIDOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_23.png" /> SRAGI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_24.png" /> SUKARAME<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_25.png" /> TANJUNGBINTANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_26.png" /> TANJUNGSARI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_27.png" /> TANJUNGSENANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_28.png" /> TEGINENENG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_29.png" /> TRIMURJO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_30.png" /> WAWAYKARYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_31.png" /> WAYPANJI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_32.png" /> WAYSULAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_33.png" /> <br />'
        });
var format_RUMAHSAKIT_PT_50K_2 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_2 = format_RUMAHSAKIT_PT_50K_2.readFeatures(json_RUMAHSAKIT_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_2.addFeatures(features_RUMAHSAKIT_PT_50K_2);
var lyr_RUMAHSAKIT_PT_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_50K_2, 
                style: style_RUMAHSAKIT_PT_50K_2,
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_2.png" /> RUMAHSAKIT_PT_50K'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_RUMAHSAKIT_PT_50K_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_RUMAHSAKIT_PT_50K_2];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_RUMAHSAKIT_PT_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});