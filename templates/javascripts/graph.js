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
            ['Total Consumption', 80,280, 363,535,657,741,762, 780,808,
            863,
            822,
            740,
            677,
            677,
            829,
            851,
            850,
            800,
            869,
            883,
            870,
            726,
            518,
            267,
            185,
            218,
            272,
            281,
            292,
            299,
            310,
            363,
            414,
            478,
            519,
            570,
            590,
            615,
            596,
            597,
            600,
            653,
            690,
            692,
            660,
            634,
            628,
            641,
            659,
            656,
            623,
            638,
            467,
            414,
            346,
            505,
            585,
            643,
            691,
            765,
            809,
            823,
            759,
            705,
            653,
            640,
            716,
            736,
            706,
            636,
            646,
            727,
            772,
            694,
            481,
            278,
            209,
            253,
            281,
            287,
            295,
            312,
            346,
            391,
            429,
            469,
            507,
            562,
            621,
            658,
            649,
            624,
            630,
            660,
            679,
            663,
            636,
            605,
            598,
            605,
            635,
            630,
            584,
            587,
            408,
            372,
            293,
            447,
            499,
            527,
            555,
            591,
            624,
            628,
            610,
            607,
            602,
            604,
            610,
            455,
            506,
            516,
            666,
            563,
            527,
            435,
            313,
            159,
            80,
            84,
            82,
            84,
            77,
            67,
            84,
            131,
            169,
            221,
            253,
            296,
            392,
            448,
            379,
            377,
            411,
            525,
            527,
            456,
            351,
            341,
            332,
            403,
            335,
            306,
            295,
            362,
            311,
            352,
            412,
            573,
            630,
            595,
            630,
            668,
            511,
            425,
            415,
            594,
            692,
            698,
            684,
            493,
            488,
            509,
            698,
            654,
            654,
            466,
            330,
            139,
            152,
            161,
            173,
            176,
            163,
            150,
            156,
            187,
            303,
            424,
            522,
            518,
            538,
            581,
            468,
            466,
            450,
            609,
            611,
            541,
            387,
            386,
            474,
            649,
            659,
            606,
            582,
            559]
        ]
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



