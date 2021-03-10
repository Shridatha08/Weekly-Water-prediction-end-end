var chart = c3.generate({
    size: {
        height: 480,
        width: 1280
    },
    data: {
        x: 'x',
        //xFormat: '%d%m%Y', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2016-01-04',
            '2016-01-11','2016-01-18',
            '2016-01-25',
            '2016-02-01',
            '2016-02-08',
            '2016-02-15',
            '2016-02-22',
            '2016-02-29',
            '2016-03-07',
            '2016-03-14',
            '2016-03-21',
            '2016-03-28',
            '2016-04-04',
            '2016-04-11',
            '2016-04-18',
            '2016-04-25',
            '2016-05-02',
            '2016-05-09',
            '2016-05-16',
            '2016-05-23',
            '2016-05-30',
            '2016-06-06',
            '2016-06-13',
            '2016-06-20',
            '2016-06-27',
            '2016-07-04',
            '2016-07-11',
            '2016-07-18',
            '2016-07-25',
            '2016-08-01',
            '2016-08-08',
            '2016-08-15',
            '2016-08-22',
            '2016-08-29',
            '2016-09-05',
            '2016-09-12',
            '2016-09-19',
            '2016-09-26',
            '2016-10-03',
            '2016-10-10',
            '2016-10-17',
            '2016-10-24',
            '2016-10-31',
            '2016-11-07',
            '2016-11-14',
            '2016-11-21',
            '2016-11-28',
            '2016-12-05',
            '2016-12-12',
            '2016-12-19',
            '2016-12-26',
            '2017-01-02',
            '2017-01-09',
            '2017-01-16',
            '2017-01-23',
            '2017-01-30',
            '2017-02-06',
            '2017-02-13',
            '2017-02-20',
            '2017-02-27',
            '2017-03-06',
            '2017-03-13',
            '2017-03-20',
            '2017-03-27',
            '2017-04-03',
            '2017-04-10',
            '2017-04-17',
            '2017-04-24',
            '2017-05-01',
            '2017-05-08',
            '2017-05-15',
            '2017-05-22',
            '2017-05-29',
            '2017-06-05',
            '2017-06-12',
            '2017-06-19',
            '2017-06-26',
            '2017-07-03',
            '2017-07-10',
            '2017-07-17',
            '2017-07-24',
            '2017-07-31',
            '2017-08-07',
            '2017-08-14',
            '2017-08-21',
            '2017-08-28',
            '2017-09-04',
            '2017-09-11',
            '2017-09-18',
            '2017-09-25',
            '2017-10-02',
            '2017-10-09',
            '2017-10-16',
            '2017-10-23',
            '2017-10-30',
            '2017-11-06',
            '2017-11-13',
            '2017-11-20',
            '2017-11-27',
            '2017-12-04',
            '2017-12-11',
            '2017-12-18',
            '2017-12-25',
            '2018-01-01',
            '2018-01-08',
            '2018-01-15',
            '2018-01-22',
            '2018-01-29',
            '2018-02-05',
            '2018-02-12',
            '2018-02-19',
            '2018-02-26',
            '2018-03-05',
            '2018-03-12',
            '2018-03-19',
            '2018-03-26',
            '2018-04-02',
            '2018-04-09',
            '2018-04-16',
            '2018-04-23',
            '2018-04-30',
            '2018-05-07',
            '2018-05-14',
            '2018-05-21',
            '2018-05-28',
            '2018-06-04',
            '2018-06-11',
            '2018-06-18',
            '2018-06-25',
            '2018-07-02',
            '2018-07-09',
            '2018-07-16',
            '2018-07-23',
            '2018-07-30',
            '2018-08-06',
            '2018-08-13',
            '2018-08-20',
            '2018-08-27',
            '2018-09-03',
            '2018-09-10',
            '2018-09-17',
            '2018-09-24',
            '2018-10-01',
            '2018-10-08',
            '2018-10-15',
            '2018-10-22',
            '2018-10-29',
            '2018-11-05',
            '2018-11-12',
            '2018-11-19',
            '2018-11-26',
            '2018-12-03',
            '2018-12-10',
            '2018-12-17',
            '2018-12-24',
            '2018-12-31',
            '2019-01-07',
            '2019-01-14',
            '2019-01-21',
            '2019-01-28',
            '2019-02-04',
            '2019-02-11',
            '2019-02-18',
            '2019-02-25',
            '2019-03-04',
            '2019-03-11',
            '2019-03-18',
            '2019-03-25',
            '2019-04-01',
            '2019-04-08',
            '2019-04-15',
            '2019-04-22',
            '2019-04-29',
            '2019-05-06',
            '2019-05-13',
            '2019-05-20',
            '2019-05-27',
            '2019-06-03',
            '2019-06-10',
            '2019-06-17',
            '2019-06-24',
            '2019-07-01',
            '2019-07-08',
            '2019-07-15',
            '2019-07-22',
            '2019-07-29',
            '2019-08-05',
            '2019-08-12',
            '2019-08-19',
            '2019-08-26',
            '2019-09-02',
            '2019-09-09',
            '2019-09-16',
            '2019-09-23',
            '2019-09-30',
            '2019-10-07',
            '2019-10-14',
            '2019-10-21',
            '2019-10-28',
            '2019-11-04',
            '2019-11-11',
            '2019-11-18',
            '2019-11-25',
            '2019-12-02',
            '2019-12-09',
            '2019-12-16',
            '2019-12-23'],
            ['Total Consumption', 138.2248835,
            374.9146693,
            443.6205673,
            699.0520211,
            503.7809151,
            642.8188862,
            720.9565997,
            780.8730213,
            790.0853032,
            766.8716537,
            731.5592614,
            691.6204009,
            679.6110978,
            690.6690885,
            757.9520832,
            790.7926893,
            870.1012489,
            956.825167,
            1021.49002,
            978.8029235,
            1000.772549,
            948.9382178,
            820.7143111,
            648.7950797,
            531.3201904,
            404.7549824,
            338.6347028,
            324.8528688,
            336.5125443,
            333.8944024,
            318.7953666,
            326.544091,
            357.5308575,
            409.6741621,
            483.4049411,
            577.5360868,
            619.841032,
            640.8512143,
            642.4123424,
            624.7032955,
            611.7264182,
            630.5656568,
            650.5676105,
            670.8866684,
            684.627848,
            677.6759494,
            668.9905482,
            655.5209399,
            662.0256403,
            687.1825691,
            726.8043254,
            739.9617081,
            630.9669938,
            544.5138925,
            467.0275387,
            388.0390113,
            324.158301,
            381.9619998,
            417.5042555,
            454.9922088,
            479.3130335,
            493.8099071,
            494.6813515,
            489.5960774,
            464.1419789,
            444.837505,
            458.6958475,
            459.4373675,
            447.9073659,
            454.0914522,
            462.9833539,
            452.0300901,
            464.2057528,
            456.1262749,
            402.907958,
            350.5024611,
            297.461602,
            243.5580129,
            223.3306002,
            236.1392484,
            245.1919712,
            250.4285597,
            261.575918,
            276.5457482,
            292.2570984,
            313.0204494,
            334.1094037,
            355.3417503,
            380.1858377,
            400.2290587,
            406.983545,
            412.670908,
            419.5933454,
            417.2578744,
            419.2194165,
            424.9392606,
            423.9703729,
            413.5082868,
            408.2511005,
            402.0384942,
            405.1424207,
            404.1275841,
            392.5009314,
            396.7313978,
            343.162427,
            353.4200787,
            371.5167689,
            440.6894794,
            493.54002,
            608.46402,
            670.06914,
            729.77106,
            749.60094,
            764.48616,
            776.19816,
            783.92076,
            787.48926,
            786.42054,
            794.0919,
            808.7319,
            841.7085,
            858.1968,
            858.1968,
            793.66368,
            746.74248,
            630.97302,
            499.3521,
            385.4529,
            319.32402,
            230.38968,
            181.97886,
            169.90818,
            146.19138,
            131.91738,
            135.28092,
            156.282,
            168.2136,
            233.05416,
            297.89472,
            342.97128,
            438.13128,
            510.74568,
            455.56752,
            407.7972,
            406.78704,
            345.00624,
            342.48816,
            447.15684,
            560.25084,
            626.58468,
            625.41348,
            590.74596,
            532.33968,
            464.51256,
            401.69232,
            458.05632,
            410.92192,
            469.76512,
            567.0008,
            692.2592,
            772.9484,
            981.2284,
            1094.8804,
            1186.1956,
            1274.0012,
            1327.252,
            1345.948,
            1379.1744,
            1378.5184,
            1331.8112,
            1299.3392,
            1317.3136,
            1330.8272,
            1349.8512,
            1375.5664,
            1276.9696,
            1188.1472,
            1180.2752,
            930.6672,
            688.9312,
            618.8048,
            505.3168,
            297.3648,
            343.6128,
            342.6288,
            300.12,
            349.32,
            424.76,
            506.76,
            670.76,
            842.96,
            934.8,
            1013.5,
            1092.24,
            1157.84,
            1174.24,
            1193.92,
            1203.76,
            1207.04,
            1198.84,
            1238.2,
            1244.76,
            1249.548,
            1254.4688,
            1179.0288,
            1114.4784,
            1099.2592,
            1056.400533]
        ]
    },
    colors: {
        x: '#ff0000',
    },
    zoom: {
        enabled: true
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                fit: true,
                format: '%d-%m-%Y'
            },
        }
    },
    legend: {
        show: false
    }
});


