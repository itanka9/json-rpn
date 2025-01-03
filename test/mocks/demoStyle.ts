export const demoStyle = {
    version: 1,
    name: '2gis_sample_style',
    background: {
        color: '#f6f2de',
    },
    layers: [
        {
            type: 'polygon',
            id: 'background',
            filter: ['match', ['get', 'sublayer'], ['Region'], true, false],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    9,
                    'hsl(50, 61%, 90%)',
                    12,
                    'hsl(51, 37%, 90%)',
                    14,
                    'hsl(49, 48%, 91%)',
                    16,
                    'hsl(51, 51%, 92%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'substrate',
            filter: ['match', ['get', 'sublayer'], ['Substrate'], true, false],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    14,
                    'hsl(81, 55%, 69%)',
                    17,
                    'hsl(80, 71%, 92%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_adm',
            filter: ['match', ['get', 'sublayer'], ['Administrative_quarter'], true, false],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    9,
                    'hsl(50, 61%, 90%)',
                    12,
                    'hsl(51, 37%, 90%)',
                    14,
                    'hsl(49, 48%, 91%)',
                    16,
                    'hsl(51, 51%, 92%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_living',
            filter: [
                'match',
                ['get', 'sublayer'],
                [
                    'Dwelling_quarter_z13',
                    'Dwelling_quarter',
                    'Dwelling_quarter_z11',
                    'Dwelling_quarter_z09',
                ],
                true,
                false,
            ],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    1,
                    '#f2edd4',
                    12,
                    'hsl(48, 39%, 87%)',
                    15,
                    'hsl(51, 30%, 87%)',
                    17,
                    'hsl(48, 39%, 87%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_green',
            filter: [
                'match',
                ['get', 'sublayer'],
                [
                    'Forest_quarter',
                    'Forest_quarter_z09',
                    'Forest_quarter_z11',
                    'Forest_quarter_z13',
                ],
                true,
                false,
            ],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    10,
                    'hsl(80, 56%, 74%)',
                    12,
                    'hsl(81, 57%, 72%)',
                    15,
                    'hsl(81, 55%, 69%)',
                    17,
                    'hsl(83, 56%, 68%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_graveyard',
            filter: [
                'match',
                ['get', 'sublayer'],
                [
                    'Graveyard_quarter',
                    'Graveyard_quarter_z13',
                    'Graveyard_quarter_z11',
                    'Graveyard_quarter_z09',
                ],
                true,
                false,
            ],
            style: {
                color: 'hsl(75, 37%, 81%)',
            },
        },
        {
            type: 'polygon',
            id: 'kvar_private',
            filter: [
                'match',
                ['get', 'sublayer'],
                [
                    'Private_quarter',
                    'Private_quarter_z13',
                    'Private_quarter_z11',
                    'Private_quarter_z09',
                    's_kvar_beach',
                ],
                true,
                false,
            ],
            minzoom: 7,
            style: {
                color: 'hsl(50, 57%, 90%)',
            },
        },
        {
            type: 'polygon',
            id: 'kvar_prom',
            filter: [
                'match',
                ['get', 'sublayer'],
                [
                    'Technical_quarter_z13',
                    'Technical_quarter_z11',
                    'Technical_quarter_z09',
                    'Garage_quarter_z09',
                    'Garage_quarter_z11',
                    'Garage_quarter_z13',
                    'Garage_quarter',
                    'Technical_quarter',
                ],
                true,
                false,
            ],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    1,
                    '#efefde',
                    9,
                    'hsl(60, 30%, 91%)',
                    12,
                    'hsl(55, 21%, 89%)',
                    15,
                    'hsl(60, 14%, 90%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_dacha',
            filter: ['match', ['get', 'sublayer'], ['Dacha_quarter'], true, false],
            style: {
                color: 'hsl(79, 66%, 73%)',
            },
        },
        {
            type: 'polygon',
            id: 'kvar_pedestrian',
            filter: ['match', ['get', 'sublayer'], ['Pedestrian_quarter'], true, false],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    14,
                    'hsl(81, 55%, 69%)',
                    17,
                    'hsl(80, 71%, 92%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_sport',
            filter: ['match', ['get', 'sublayer'], ['Sport_quarter'], true, false],
            style: {
                color: '#dedac8',
            },
        },
        {
            type: 'polygon',
            id: 'kvar_supplementary',
            filter: ['match', ['get', 'sublayer'], ['Supplementary_quarter'], true, false],
            minzoom: 14,
            style: {
                color: 'hsl(0, 0%, 100%)',
            },
        },
        {
            type: 'polygon',
            id: 'kvar_runway',
            filter: ['match', ['get', 'sublayer'], ['Runway_quarter'], true, false],
            minzoom: 13,
            style: {
                color: '#ffffff',
            },
        },
        {
            type: 'polygon',
            id: 'kvar_flowerbed',
            filter: ['match', ['get', 'sublayer'], ['Flowerbed_quarter'], true, false],
            minzoom: 7,
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    12,
                    'hsl(83, 57%, 72%)',
                    15,
                    'hsl(81, 55%, 69%)',
                    17,
                    'hsl(83, 56%, 68%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'kvar_platform',
            filter: ['match', ['get', 'sublayer'], ['Platform_quarter'], true, false],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    12,
                    'hsl(55, 21%, 89%)',
                    15,
                    'hsl(60, 14%, 90%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'river',
            filter: [
                'match',
                ['get', 'sublayer'],
                ['Water_area', 'Water_area_z11', 'Water_area_z13', 'Water_area_z09'],
                true,
                false,
            ],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    10,
                    'hsl(196, 66%, 82%)',
                    12,
                    'hsl(201, 75%, 83%)',
                    15,
                    'hsl(200, 90%, 77%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'pool',
            filter: ['match', ['get', 'sublayer'], ['Pool'], true, false],
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    12,
                    'hsl(201, 75%, 83%)',
                    15,
                    'hsl(200, 90%, 77%)',
                    16,
                    'hsl(200, 84%, 68%)',
                ],
            },
        },
        {
            type: 'polygon',
            id: 'parking area',
            filter: ['match', ['get', 'sublayer'], ['Parking_area'], true, false],
            minzoom: 17.5,
            style: {
                color: '#c8d0d6',
            },
        },
        {
            type: 'buildingModel',
            id: 'simple model',
            filter: ['match', ['get', 'sublayer'], ['Building_model'], true, false],
            minzoom: 16,
            style: {
                color: '#fffff5',
                strokeColor: '#ccc9c3',
            },
        },
        {
            type: 'lineExtrusion',
            id: 'low fences',
            filter: ['match', ['get', 'sublayer'], ['Low_fence'], true, false],
            minzoom: 16.5,
            style: {
                sideColor: '#c7c2b5',
                strokeColor: '#c7c2b5',
                strokeWidth: 2,
                height: 250,
            },
        },
        {
            type: 'lineExtrusion',
            id: 'normal fences',
            filter: ['match', ['get', 'sublayer'], ['Fence', 'Temporary_fence'], true, false],
            minzoom: 16.5,
            style: {
                sideColor: '#c7c2b5',
                strokeColor: '#c7c2b5',
                strokeWidth: 2,
                height: 400,
            },
        },
        {
            type: 'line',
            id: 'internal roads copy',
            filter: [
                'match',
                ['get', 'sublayer'],
                ['Internal_road', 'Oneway_internal_road'],
                true,
                false,
            ],
            minzoom: 15,
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    'hsla(0, 0%, 80%, 0)',
                    18,
                    '#cccccc',
                ],
                width: ['interpolate', ['exponential', 1.99], ['zoom'], 16, 1.4, 19, 7],
            },
        },
        {
            type: 'line',
            id: 'other roads background',
            filter: [
                'match',
                ['get', 'sublayer'],
                [
                    'Other_road',
                    'Uncovered_road',
                    'Other_road_pay',
                    'Uncovered_road_pay',
                    'Oneway_other_road',
                    'Oneway_uncovered_road',
                    'Other_road_z13',
                    'Other_road_bridge',
                    'Uncovered_road_bridge',
                    'Other_road_pay_bridge',
                    'Uncovered_road_pay_bridge',
                ],
                true,
                false,
            ],
            minzoom: 13,
            style: {
                color: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    12,
                    'hsla(0, 0%, 78%, 0)',
                    13,
                    '#c6c6c6',
                    16.5,
                    '#cccccc',
                ],
                width: [
                    'interpolate',
                    ['exponential', 1.99],
                    ['zoom'],
                    13,
                    1.9,
                    14,
                    2,
                    15,
                    3.8,
                    19,
                    16,
                ],
            },
        },
    ],
};
