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
                            id: 'Pasted19',
                            type: 'image',
                            rect: ['330px', '855px', '620px', '45px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted28.svg",'0px','0px'],
                            transform: [[],[],[],['1.35','1.35']]
                        },
                        {
                            id: 'Pasted20',
                            type: 'image',
                            rect: ['452px', '114px', '376px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted20.svg",'0px','0px']
                        },
                        {
                            id: 'Symbol_7',
                            symbolName: 'Symbol_7',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_8',
                            symbolName: 'Symbol_8',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_9',
                            symbolName: 'Symbol_9',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_10',
                            symbolName: 'Symbol_10',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_11',
                            symbolName: 'Symbol_11',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_12',
                            symbolName: 'Symbol_12',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_13',
                            symbolName: 'Symbol_13',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_6',
                            symbolName: 'Symbol_6',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_5',
                            symbolName: 'Symbol_5',
                            type: 'rect',
                            rect: ['0px', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_4',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            cursor: 'pointer'
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
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "opacity",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted20}",
                            '0px',
                            '114px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted19}",
                            '855px',
                            '727px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            1500,
                            "easeOutQuad",
                            "${Pasted20}",
                            '0',
                            '1'
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
                            rect: ['793px', '515px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's32',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "scaleY",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${s32}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s32}",
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
                            rect: ['272px', '386px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's24',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s24.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${s24}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s24}",
                            '0',
                            '1'
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
                            rect: ['793px', '257px', '141px', '162px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0.97']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's29',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s29.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid22",
                            "scaleX",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s29}",
                            '0',
                            '0.97'
                        ],
                        [
                            "eid112",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${s29}",
                            '0.5',
                            '1'
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
                            rect: ['346px', '257px', '141px', '162px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's26',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s26.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid113",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${s26}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid15",
                            "scaleX",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s26}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['346px', '515px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's33',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s33.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "scaleX",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${s33}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['867px', '386px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's25',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s25.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "scaleX",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            2500,
                            2500,
                            "easeOutElastic",
                            "${s25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${s25}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['569px', '386px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's21',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s21.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid27",
                            "scaleY",
                            1000,
                            2000,
                            "easeOutElastic",
                            "${s21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${s21}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            1000,
                            2000,
                            "easeOutElastic",
                            "${s21}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['495px', '257px', '140px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's27',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s27.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid123",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${s27}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleY",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s27}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['644px', '257px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's28',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s28.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "scaleY",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${s28}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['421px', '386px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's22',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "scaleY",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${s22}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['718px', '386px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's23',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s23.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "scaleY",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${s23}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s23}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['644px', '515px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's31',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s31.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid119",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${s31}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s31}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_13": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['495px', '515px', '141px', '162px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 's30',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s30.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "scaleX",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${s30}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            1790,
                            2210,
                            "easeOutElastic",
                            "${s30}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("an04_edgeActions.js");
})("EDGE-84787");
