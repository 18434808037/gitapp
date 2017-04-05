/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'xunh',
                            symbolName: 'xunh',
                            type: 'rect',
                            rect: ['103px', '0', '1088', '544', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_22',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['203px', '305', '350', '350', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_22Copy2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['465px', '305', '350', '350', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_22Copy3',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['727px', '305', '350', '350', 'auto', 'auto']
                        },
                        {
                            id: 'Pasted11',
                            type: 'image',
                            rect: ['298px', '400px', '160px', '160px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Pasted11.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Pasted12',
                            type: 'image',
                            rect: ['560px', '400px', '160px', '160px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Pasted12.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Pasted13',
                            type: 'image',
                            rect: ['822px', '400px', '160px', '160px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Pasted13.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Pasted24',
                            type: 'image',
                            rect: ['385px', '131px', '524px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted24.svg",'0px','0px']
                        },
                        {
                            id: 'Pasted25',
                            type: 'image',
                            rect: ['459px', '0px', '376px', '88px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted25.svg",'0px','0px']
                        },
                        {
                            id: 'bwws',
                            symbolName: 'Symbol_1_1',
                            type: 'rect',
                            rect: ['0px', '749px', '6439', '371', 'auto', 'auto']
                        },
                        {
                            id: 'bw',
                            symbolName: 'bw',
                            type: 'rect',
                            rect: ['-2233', '773px', '3513', '347', 'auto', 'auto']
                        },
                        {
                            id: 'zzz1',
                            type: 'image',
                            rect: ['0px', '500px', '288px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"zzz1.png",'0px','0px']
                        },
                        {
                            id: 'zzz2',
                            type: 'image',
                            rect: ['992px', '500px', '288px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"zzz2.png",'0px','0px']
                        },
                        {
                            id: 'nvsd1',
                            symbolName: 'nvsd1',
                            type: 'rect',
                            rect: ['299px', '660', '681', '63', 'auto', 'auto']
                        },
                        {
                            id: 'nvsd2',
                            symbolName: 'nvsd2',
                            type: 'rect',
                            rect: ['443', '660', '407', '62', 'auto', 'auto']
                        },
                        {
                            id: 'nvsd3',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['395', '660', '490', '62', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '900px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 110000,
                    autoPlay: true,
                    data: [
                        [
                            "eid141",
                            "scaleX",
                            2250,
                            1250,
                            "easeOutElastic",
                            "${Pasted12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            2000,
                            1250,
                            "easeOutElastic",
                            "${Pasted11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            2000,
                            1250,
                            "easeOutElastic",
                            "${Pasted11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            2250,
                            1250,
                            "easeOutElastic",
                            "${Pasted12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "top",
                            500,
                            1500,
                            "easeOutQuad",
                            "${Pasted24}",
                            '131px',
                            '282px'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${Pasted25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            2500,
                            1250,
                            "easeOutElastic",
                            "${Pasted13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            2500,
                            1250,
                            "easeOutElastic",
                            "${Pasted13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "top",
                            0,
                            1000,
                            "easeOutQuad",
                            "${Pasted25}",
                            '0px',
                            '147px'
                        ],
                        [
                            "eid150",
                            "opacity",
                            500,
                            1500,
                            "easeOutQuad",
                            "${Pasted24}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "xunh": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'q6',
                            opacity: '0',
                            rect: ['0px', '0px', '1088px', '544px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/q6.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'q5',
                            opacity: '0',
                            rect: ['96px', '0px', '890px', '445px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/q5.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'q4',
                            opacity: '0',
                            rect: ['195px', '0px', '691px', '346px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/q4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'q3',
                            opacity: '0',
                            rect: ['294px', '0px', '493px', '247px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/q3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'q2',
                            opacity: '0',
                            rect: ['394px', '0px', '294px', '147px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/q2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'q1',
                            opacity: '0',
                            rect: ['496px', '0px', '96px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/q1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1088px', '544px']
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: true,
                    data: [
                        [
                            "eid16",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${q5}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid10",
                            "opacity",
                            1750,
                            4500,
                            "linear",
                            "${q5}",
                            '0.25',
                            '0'
                        ],
                        [
                            "eid21",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${q2}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1000,
                            3750,
                            "linear",
                            "${q2}",
                            '0.25',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${q1}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid2",
                            "opacity",
                            750,
                            3500,
                            "linear",
                            "${q1}",
                            '0.25',
                            '0'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1250,
                            750,
                            "easeOutQuad",
                            "${q6}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid12",
                            "opacity",
                            2000,
                            4750,
                            "easeOutQuad",
                            "${q6}",
                            '0.25',
                            '0'
                        ],
                        [
                            "eid20",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${q3}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1250,
                            4000,
                            "linear",
                            "${q3}",
                            '0.25',
                            '0'
                        ],
                        [
                            "eid18",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${q4}",
                            '0',
                            '0.25'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1500,
                            4250,
                            "linear",
                            "${q4}",
                            '0.25',
                            '0'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted9',
                            type: 'image',
                            rect: ['711', '430', '105px', '106px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted9.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50% 50%'],
                            opacity: '0',
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,50,133,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '180px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['360'], [], ['0', '0']],
                            rect: ['0px', '0px', '350px', '350px', 'auto', 'auto'],
                            id: 'Pasted17',
                            opacity: '0.35',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted17.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['72px', '72px', '207px', '207px', 'auto', 'auto'],
                            id: 'Pasted15',
                            opacity: '0.35',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted15.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['34px', '34px', '282px', '282px', 'auto', 'auto'],
                            id: 'Pasted18',
                            opacity: '0.35',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted18.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '350px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid97",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Pasted15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Pasted15}",
                            '0',
                            '0.35'
                        ],
                        [
                            "eid59",
                            "rotateZ",
                            500,
                            2500,
                            "linear",
                            "${Pasted15}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid78",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Pasted18}",
                            '0',
                            '0.35'
                        ],
                        [
                            "eid96",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Pasted17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "rotateZ",
                            500,
                            2500,
                            "linear",
                            "${Pasted18}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid63",
                            "rotateZ",
                            500,
                            2500,
                            "linear",
                            "${Pasted17}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Pasted18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Pasted17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Pasted17}",
                            '0',
                            '0.35'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Pasted18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Pasted15}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bw2',
                            opacity: '0.1',
                            rect: ['-5159px', '-1px', '6439px', '371px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted26.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6439px', '371px']
                        }
                    }
                },
                timeline: {
                    duration: 110000,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "left",
                            0,
                            110000,
                            "linear",
                            "${bw2}",
                            '0px',
                            '-5159px'
                        ]
                    ]
                }
            },
            "bw": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Pasted',
                            opacity: '0.1',
                            rect: ['0px', '0px', '3513px', '347px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted27.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3513px', '347px']
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${Pasted}",
                            '0px',
                            '2233px'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '309px', '64px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Group',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                id: 'Pasted31',
                                type: 'image',
                                rect: ['31px', '9px', '620px', '46px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Pasted31.svg', '0px', '0px']
                            },
                            {
                                id: 'Pasted33',
                                type: 'image',
                                rect: ['0px', '0px', '21px', '20px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Pasted33.svg', '0px', '0px']
                            },
                            {
                                rect: ['663px', '44px', '21px', '20px', 'auto', 'auto'],
                                id: 'Pasted34',
                                transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Pasted34.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '684px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid169",
                            "width",
                            250,
                            1000,
                            "linear",
                            "${Group}",
                            '0px',
                            '684px'
                        ],
                        [
                            "eid193",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "nvsd1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '0px', '63', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Group3',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '681px', '63px', 'auto', 'auto'],
                                id: 'Pasted35',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Pasted35.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '681px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid202",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Group3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid201",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Group3}",
                            '0px',
                            '681px'
                        ]
                    ]
                }
            },
            "nvsd2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '0px', '62', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Group4',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '407px', '62px', 'auto', 'auto'],
                                id: 'Pasted36',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Pasted36.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '407px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid211",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Group4}",
                            '0px',
                            '407px'
                        ],
                        [
                            "eid212",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Group4}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '0px', '62', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Group5',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '490px', '62px', 'auto', 'auto'],
                                id: 'Pasted37',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Pasted37.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '490px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid218",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Group5}",
                            '0px',
                            '490px'
                        ],
                        [
                            "eid219",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Group5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("an02_edgeActions.js");
})("EDGE-16971160");
