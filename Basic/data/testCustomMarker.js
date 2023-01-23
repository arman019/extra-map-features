// setting the initial map coordinates - Lat, Lng, zoom
var mymap = L.map('mapid', {
    center: [48.3794, 31.1656],
    zoom: 6,
    minZoom: 3,
    maxZoom: 20
});

// OpenStreetMap tile layer url goes here
//var mapStyle = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
var mapStyle = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
    //var mapStyle = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> Contributors & <a href="http://stamen.com">Stamen Design</a>.',
    maxZoom: 20,
    minZoom: 3,
}).addTo(mymap);

//Adding city names - feature for the tiles which are lacking of lables
mymap.createPane('labels');
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    pane: 'labels'
}).addTo(mymap);

//Styles of geomarkers
var customStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.5
};

// To attach popup content to each geomarker
function onEachFeature(feature, layer) {
    // does this feature have a property named name?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name + "<br/>" + feature.properties.city + "<br/>" + "<img src=" + feature.properties.icon_url + " width=80 height=80/>");
    }
    //TODO: To add polylines to the marker
    //    if (feature.properties && feature.properties.previous_uni && feature.geometry && feature.geometry.coordinates) {
    //     layer.bindPolyline(feature.geometry.coordinates, feature.properties.previous_uni) 
    //    }
}
//TODO - move data to external geojson

var layerOfStudents2017 = [{
        "type": "Feature",
        "properties": {
            "name": "Еліна Андрусь",
            "city": "Мукачево",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/IMG_60761-e1504767909910-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [22.711711, 48.449306]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Богдана Антонова",
            "city": "Київ",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/Antonova-e1504768652592-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.523400, 50.450100]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Максим Бадік",
            "city": "Львів",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/foto-Badik-e1504771034892-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Крістіна Віслянська",
            "city": "Львів",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/20747518_1834485856868437_1695465886_o-e1504770786565-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ірина Волощак",
            "city": "Трускавець",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/1-e1504770159536-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.510558, 49.276030]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Яромир Делікатний",
            "city": "Львів",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/IMG_20160307_133418-e1504774808554-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Тереза Дичка",
            "city": "Калуш",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/17038592_1282886148471316_8194670224091762704_o-e1504769146870-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.395038, 49.041426]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Євгеній Домашин",
            "city": "Полтава",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/22052619_1417658391675069_1648574979_n-e1506454816640.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.551417, 49.588267]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ярослава Друца",
            "city": "Чернівці",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/IMG_3322-e1504768903243-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.935837, 48.292079]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Дарія Зубрицька",
            "city": "Львів",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/unnamed-e1504774143166-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Вікторія Кадевська",
            "city": "Львів",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/IMG_3555-e1504769700574-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Валентина Королевська",
            "city": "Хмельницький",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/korolevska-e1504774684273-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.987133, 49.422983]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марія Кочуренко",
            "city": "Одеса",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/kochurenko-e1506079206629-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Катерина Лопушанська",
            "city": "Борислав",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/CV-e1504768377870-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.427186, 49.291247]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ірина Павленко",
            "city": "Житомир",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/IPavlenko-e1506588957760-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [28.658667, 50.254650]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Валерія Пінчук",
            "city": "Бровари",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/Pinchuk-Valeriya-e1504774554211-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.790900, 50.511083]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Олександр Резенчук",
            "city": "Тернопіль",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/000020-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.594767, 49.553517]
        }
    },
	{
        "type": "Feature",
        "properties": {
            "name": "Ірина Яворська",
            "city": "Ходорів",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/19961338_1718062258497823_8309292523706832626_n-e1504770510430-300x300.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.307978, 49.407774]
        }
    },
	{
        "type": "Feature",
        "properties": {
            "name": "Дмитро Ясько",
            "city": "Полтава",
            "icon_url": "https://raw.githubusercontent.com/Aeternia-ua/Mediastudents-geography/master/img/2017/DMYasko.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.551417, 49.588267]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ганна Чорнобровкіна",
            "city": "Вінниця",
            "icon_url": "http://media.ucu.edu.ua/wp-content/uploads/2017/09/DSC_0174-e1504770366885-300x300.jpg",

            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [28.468217, 49.233083]
        }

    }
];

var layerOfStudents2016 = [{
        "type": "Feature",
        "properties": {
            "name": "Валерія Аркашова",
            "city": "Мирноград",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/Arkashova-1-e1471875326443-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [37.270004, 48.296212]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Микита Богданов",
            "city": "Запоріжжя",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/mk_bogdanov-e1471887881693-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Марія Клокова",
            "city": "Марганець",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/Klokova-e1471875607251-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.610520, 47.648924]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Аліна Журбенко",
            "city": "Нижня Сироватка",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/WBy0e1Uk6rM-e1471177441956-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.837894, 50.784462]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анастасія Івашина",
            "city": "Богданівка",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/14012600_1215028351881818_2117624099_o1-e1471258198105-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [36.046944, 47.105833]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ревіде Зіятдінова",
            "city": "Старий Крим",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/HqakCzLyRKM-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.086372, 45.027423]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ліза Александрович",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/IMG_8072-e1471388652263-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Меланія-Марія Подоляк",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/DSCF3565-e1471887509148-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Катерина Маруняк",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/IMG_3761-e1471177629921-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Каріна Степанчикова",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/stepanchykova-e1473942567758-100x100.png?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Дорожко",
            "city": "Полтава",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/V9Bs4zRzdFg-e1471886887140-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.551417, 49.588267]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ілля Ігнатов",
            "city": "Гливаха",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/Photo1-e1472469445231-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.289281, 50.262316]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Єлизавета Панченко",
            "city": "Світловодськ",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/IMG_2439-e1471622031487-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [33.228469, 49.049684]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Кристина Поворозник",
            "city": "Київ",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/14111971_667793490036481_120435458_n-e1471983257902-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.523400, 50.450100]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Тетяна Семейко",
            "city": "Миколаїв",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/profajl-foto-e1471876650721-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [31.994583, 46.975033]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марія Сенишин",
            "city": "Стрий",
            "icon_url": "https://raw.githubusercontent.com/Aeternia-ua/Mediastudents-geography/master/img/2016/3-e1471605774663-100x100.jpg",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.843134, 49.265608]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Олександр Тирон",
            "city": "Одеса",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/O.Tyron_-e1471887263291-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Катерина Фірсова",
            "city": "Донецьк",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/FB_IMG_1472131349069-001-e1472134267318-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [37.802850, 48.015883]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ольга Ліхобабіна",
            "city": "Луганськ",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2016/DSC_1203-e1471875918993-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [39.307815, 48.574041]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анатолій Шульгат",
            "city": "Павлоград",
            "icon_url": "https://raw.githubusercontent.com/Aeternia-ua/Mediastudents-geography/master/img/2016/12308082_531121700383512_1636319093865072537_o-e1472218696256-100x100.jpg",

            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.903257, 48.529448]
        }

    }
];

var layerOfStudents2015 = [{
        "type": "Feature",
        "properties": {
            "name": "Анна Яценко",
            "city": "Ічня",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6583-e1475569236855-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [32.397489, 50.857956]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олена Бондар",
            "city": "Оржів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_7371-e1475569482749-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.116395, 50.742978]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Маріанна Ластовецька",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6520-e1475569824924-100x100.jpg?raw=true",

            "city": "Львів",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Ніярє Шевкієва",
            "city": "Крим",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6597-e1475523178515-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.499727, 45.345303]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Дмитро Василюк",
            "city": "Яворів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6535-e1475523102911-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.388522, 49.938089]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Валентина Семеніхіна",
            "city": "Одеса",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/profil.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Вікторія Димарчук",
            "city": "Луцьк",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6553-e1475569931921-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.325383, 50.747233]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ярослава Савош",
            "city": "Луцьк",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_7378-e1475524147866-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.325383, 50.747233]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Малахова",
            "city": "Мукачево",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6530-e1475575622974-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [22.711711, 48.449306]
        }

    }, {
        "type": "Feature",
        "properties": {
            "name": "Владислав Рудий",
            "city": "Олександрія",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6587-e1475529069279-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [33.096788, 48.663270]
        }

    }, {
        "type": "Feature",
        "properties": {
            "name": "Ярослава Григорчук",
            "city": "Долинська",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_65731-e1475522596383-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [32.765868, 48.113256]
        }

    }, {
        "type": "Feature",
        "properties": {
            "name": "Анастасія Мальцева",
            "city": "Кривий Ріг",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6570-e1475570256371-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [33.391783, 47.910483]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Роман Скрипник",
            "city": "Дніпро",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_6622-e1475523863919-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.046183, 48.464717]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олександра Сіммуль",
            "city": "Івано-Франківськ",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2015/IMG_7409-e1475568900898-100x100.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.711117, 48.922633]
        }

    }
];

var layerOfStudents2014 = [{
        "type": "Feature",
        "properties": {
            "name": "Ганна Цупко",
            "city": "Запоріжжя",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/tsupko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Анна Стукало",
            "city": "Запоріжжя",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/stukalo.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Вероніка Тихонова",
            "city": "Керч",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/tykhonova.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [36.468293, 45.357314]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Аліна Смутко",
            "city": "Полтава",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/smutko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [34.551417, 49.588267]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олександра Давиденко",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/davydenko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Богдана Потішка",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/potishka.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Соломія Савка",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/savka.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Олег Твердь",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/tverd.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Романдаш",
            "city": "Новий Розділ",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/romandash.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.129058, 49.474504]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Євгенія Резниченко",
            "city": "Донецьк",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/reznychenko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [37.802850, 48.015883]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Наталія Патрікєєва",
            "city": "Христинівка",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/patrikeeva.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [29.973895, 48.811721]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ірина Мацькова",
            "city": "Летичів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/matskova.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [27.624225, 49.385028]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Данило Кушпета",
            "city": "Млинів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/kushpeta1.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [25.611077, 50.507764]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Єлизавета Кузнєцова",
            "city": "Рівне",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/Liza80x802.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Руслан Герасименко",
            "city": "Мелітополь",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/herasymenko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.358700, 46.855022]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Оксана Ажнюк",
            "city": "Стрий",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/Azhniuk.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.843134, 49.265608]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Наталія Ревко",
            "city": "Одеса",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/revko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Христина Малиш",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/malysh.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Веніамін Умнов",
            "city": "Одеса",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/umnov.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.723310, 46.482526]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марія Пасельська",
            "city": "Новий Уренгой",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2014/paselska.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [76.656352, 66.095686]
        }
    }
];

var layerOfStudents2013 = [{
        "type": "Feature",
        "properties": {
            "name": "Вікторія Гайбонюк",
            "city": "Рівне",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/hajboniuk.jpg?raw=true",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анастасія Онопрійчук",
            "city": "Рівне",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/onoprijchuk.jpg?raw=true",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Карина Лазарук",
            "city": "Київ",
            "show_on_map": true,
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/lazaruk.jpg?raw=true",
            "previous_uni": [50.450100, 30.523400]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.523400, 50.450100]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Юрій Кульчинський",
            "city": "Рівне",
            "show_on_map": true,
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/kulchynsky1.jpg?raw=true",
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [26.251617, 50.619900]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Галина Герасим",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/herasym.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },

    {
        "type": "Feature",
        "properties": {
            "name": "Надія Михалевич",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/mykhalevych.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Мар’яна Мазурак",
            "city": "Львів",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/mazurak.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.029717, 49.839683]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Яна Машкова",
            "city": "Корсунь-Шевченківський",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/mashkova.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [31.261853, 49.426112]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Олеся Малюванчук",
            "city": "Івано-Франківськ",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/maluvanchuk.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.711117, 48.922633]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Софія Кочмар",
            "city": "Бузьк",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/kochmar.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.609461, 49.969359]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Вікторія Ільченко",
            "city": "Випасне",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/ilchenko.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [30.266619, 46.196812]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Ігор Фещенко",
            "city": "Сміла",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/feschenko1.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [31.852233, 49.227717]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Марта Дацюк",
            "city": "Сокаль",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/datsyuk.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [24.280156, 50.486354]
        }

    },
    {
        "type": "Feature",
        "properties": {
            "name": "Богдана Рущак",
            "city": "Буштино",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/rushchak.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [23.482774, 48.049668]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Анна Казак",
            "city": "Запоріжжя",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/kazak.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.139567, 47.838800]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Джессіка Пачеко-Семенюк",
            "city": "Savannah",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/pacheko-1.jpg?raw=true",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-81.191454, 32.110746]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Каріна Фурса",
            "city": "Богданівка",
            "icon_url": "https://github.com/Aeternia-ua/Mediastudents-geography/blob/master/img/2013/fursa.jpg?raw=true",
            "show_on_map": true,
            "previous_uni": [35.139567, 47.838800]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [36.046944, 47.105833]
        }
    }
];
var univercities = [{
    "type": "Feature",
    "properties": {
        "name": "Магістерська програма з медіакомунікацій УКУ",
        "city": "Хуторівка, 35а",
        "icon_url": "https://raw.githubusercontent.com/Aeternia-ua/Mediastudents-geography/master/img/10_10_08_3_ekumenichnyj_tuzden_vp_dsc_5774_15.jpg",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [24.037251, 49.801154]
    }
}];

//Geomarker styles
var geojsonMarkerOptions = {
    radius: 9,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

//Creating cluster layers for each students' year. TODO: deal with this redundant piece of code
var univercitiesMap = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2017Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2016Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2015Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2014Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
var students2013Map = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
//Layer to show all the students
var allStudents = new L.markerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
});
mymap.addLayer(allStudents);

var univercityLocation = L.geoJSON(univercities, {
    onEachFeature: onEachFeature,
}).addTo(univercitiesMap);

L.geoJSON(layerOfStudents2017, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2017Map).addTo(allStudents);

L.geoJSON(layerOfStudents2016, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2016Map).addTo(allStudents);

L.geoJSON(layerOfStudents2015, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2015Map).addTo(allStudents);

L.geoJSON(layerOfStudents2014, {
    style: customStyle,
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2014Map).addTo(allStudents);

L.geoJSON(layerOfStudents2013, {
    style: customStyle,
    onEachFeature: onEachFeature,
    //    getStudentPolylines: function(feature, studentPolylines) {
    //        return L.Polyline(studentPolylines, polylineStyle);
    //    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(students2013Map).addTo(allStudents);

//Implementing layer control
var baseMaps = {
   "Набір 2017": students2017Map,
    "Набір 2016": students2016Map,
    "Набір 2015": students2015Map,
    "Набір 2014": students2014Map,
    "Набір 2013": students2013Map,
    //TODO: add showing all the students functionality
    "Усі студенти": allStudents
};
//TODO - fix overlay
var overlayMaps = {
    "Навчальні заклади": univercitiesMap
};
//Change this to enable or disable the overlay/base layer group 
L.control.layers(baseMaps, null).addTo(mymap);
univercitiesMap.addTo(mymap);
mymap.clearLayers();

//To minimize project info on click. TODO add event on the map click
//function minimizeInfo(elem) {
//    var getInfo = document.getElementsByClassName('box-dynamic')
//   for (var i = 0; i < getInfo.length; i++) {
//       getInfo[i].classList.remove('minimize')
//   }
//    elem.classList.add('minimize');
//}
function minimizeInfo(div1) {
    var getInfo = document.getElementsByClassName(div1)
    for (var i = 0; i < getInfo.length; i++) {
        getInfo[i].classList.remove('minimize')
    }
    div1.classList.add('minimize');
}


// polylineStyle.appendTooltip(polylineDistance) ---TODO
//var polylineDistance;

// TODO Adding polylines to map
// To add polyline to each geomarker 
function bindPolyline(hometown, prev_uni) {
    this.hometown = hometown;
    this.prev_uni = prev_uni;
    const khutorivka = new L.LatLng(49.801154, 24.037251);
    var polylinePoints = [hometown, prev_uni, khutorivka];
    var polylineStyle = {
        color: 'blue',
        weight: 6,
        opacity: 0.8
    };
    var polyline = new L.Polyline(polylinePoints, polylineStyle)
        .addTo(mymap);
};


//ADD THIS WHEN THE FUNCTION WILL WORK
//mymap.fitBounds(polyline.getBounds());