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
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['242', '-58', '797', '797', 'auto', 'auto']
                        },
                        {
                            id: 'quq6',
                            type: 'image',
                            rect: ['565px', '434px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px']
                        },
                        {
                            id: 'quq5',
                            type: 'image',
                            rect: ['711px', '182px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px']
                        },
                        {
                            id: 'quq4',
                            type: 'image',
                            rect: ['419px', '182px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px']
                        },
                        {
                            id: 'quq3',
                            type: 'image',
                            rect: ['711px', '349px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px']
                        },
                        {
                            id: 'quq2',
                            type: 'image',
                            rect: ['419px', '349px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px']
                        },
                        {
                            id: 'quq1',
                            type: 'image',
                            rect: ['565px', '97px', '150px', '150px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted6.svg",'0px','0px']
                        },
                        {
                            id: 'txt2',
                            type: 'image',
                            rect: ['258px', '834px', '764px', '45px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted4.svg",'0px','0px']
                        },
                        {
                            id: 'txt1',
                            type: 'image',
                            rect: ['452px', '613px', '376px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted3.svg",'0px','0px']
                        },
                        {
                            id: 'm1',
                            type: 'image',
                            rect: ['602px', '132px', '78px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"m1.svg",'0px','0px']
                        },
                        {
                            id: 'm2',
                            type: 'image',
                            rect: ['746px', '217px', '80px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"m2.svg",'0px','0px']
                        },
                        {
                            id: 'm3',
                            type: 'image',
                            rect: ['746px', '384px', '80px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"m3.svg",'0px','0px']
                        },
                        {
                            id: 'm4',
                            type: 'image',
                            rect: ['605px', '469px', '70px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"m4.svg",'0px','0px']
                        },
                        {
                            id: 'm5',
                            type: 'image',
                            rect: ['454px', '389px', '80px', '70px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"m5.svg",'0px','0px']
                        },
                        {
                            id: 'm6',
                            type: 'image',
                            rect: ['454px', '222px', '80px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"m6.svg",'0px','0px']
                        },
                        {
                            id: 'B1',
                            symbolName: 'B1',
                            type: 'rect',
                            rect: ['576px', '108px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'B2',
                            symbolName: 'B2',
                            type: 'rect',
                            rect: ['722px', '193px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'B3',
                            symbolName: 'B3',
                            type: 'rect',
                            rect: ['722px', '360px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'B4',
                            symbolName: 'B4',
                            type: 'rect',
                            rect: ['577px', '445px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'B5',
                            symbolName: 'B5',
                            type: 'rect',
                            rect: ['430px', '360px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'B6',
                            symbolName: 'B6',
                            type: 'rect',
                            rect: ['430px', '193px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_8',
                            symbolName: 'Symbol_8',
                            type: 'rect',
                            rect: ['0', '-5px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_9',
                            symbolName: 'Symbol_9',
                            type: 'rect',
                            rect: ['0', '-5px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_10',
                            symbolName: 'Symbol_10',
                            type: 'rect',
                            rect: ['0', '-5px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_11',
                            symbolName: 'Symbol_11',
                            type: 'rect',
                            rect: ['0', '-5px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_12',
                            symbolName: 'Symbol_12',
                            type: 'rect',
                            rect: ['0', '-5px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_13',
                            symbolName: 'Symbol_13',
                            type: 'rect',
                            rect: ['0', '-5px', '0', '0', 'auto', 'auto']
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
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "opacity",
                            0,
                            1750,
                            "easeOutQuad",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "opacity",
                            4000,
                            750,
                            "linear",
                            "${m5}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid83",
                            "opacity",
                            2500,
                            1000,
                            "easeOutQuad",
                            "${quq6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            1500,
                            1000,
                            "easeOutQuad",
                            "${quq4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid501",
                            "opacity",
                            3250,
                            750,
                            "linear",
                            "${m2}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid493",
                            "opacity",
                            4250,
                            750,
                            "linear",
                            "${m6}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid80",
                            "opacity",
                            1000,
                            950,
                            "easeOutQuad",
                            "${quq3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "top",
                            1500,
                            1500,
                            "easeOutQuad",
                            "${txt2}",
                            '834px',
                            '744px'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1500,
                            1500,
                            "easeOutQuad",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${quq1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid491",
                            "opacity",
                            3000,
                            750,
                            "linear",
                            "${m1}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            1750,
                            "easeOutQuad",
                            "${txt1}",
                            '753px',
                            '613px'
                        ],
                        [
                            "eid79",
                            "opacity",
                            500,
                            1000,
                            "easeOutQuad",
                            "${quq2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid497",
                            "opacity",
                            3750,
                            750,
                            "linear",
                            "${m4}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2000,
                            1000,
                            "easeOutQuad",
                            "${quq5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "opacity",
                            3500,
                            750,
                            "linear",
                            "${m3}",
                            '0',
                            '0.5'
                        ]
                    ]
                }
            },
            "zzz": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '797px', '797px', 'auto', 'auto'],
                            transform: [[], ['-360'], [], ['2', '2']],
                            id: 'Pasted2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                        },
                        {
                            rect: ['89px', '89px', '620px', '620px', 'auto', 'auto'],
                            transform: [[], ['360'], [], ['2', '2']],
                            id: 'Pasted',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '797px', '797px']
                        }
                    }
                },
                timeline: {
                    duration: 22250,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            2250,
                            20000,
                            "linear",
                            "${Pasted}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            0,
                            2250,
                            "easeOutQuad",
                            "${Pasted}",
                            '2',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            0,
                            2250,
                            "easeOutQuad",
                            "${Pasted}",
                            '2',
                            '1'
                        ],
                        [
                            "eid4",
                            "rotateZ",
                            2250,
                            20000,
                            "linear",
                            "${Pasted2}",
                            '-360deg',
                            '0deg'
                        ],
                        [
                            "eid21",
                            "opacity",
                            750,
                            1500,
                            "linear",
                            "${Pasted2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            2250,
                            "linear",
                            "${Pasted}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            750,
                            1500,
                            "easeOutQuad",
                            "${Pasted2}",
                            '2',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            750,
                            1500,
                            "easeOutQuad",
                            "${Pasted2}",
                            '2',
                            '1'
                        ]
                    ]
                }
            },
            "guaz": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted26',
                            type: 'image',
                            rect: ['-136px', '-148px', '161px', '165px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted26.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid85",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Pasted26}",
                            '-136px',
                            '52px'
                        ],
                        [
                            "eid86",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Pasted26}",
                            '-148px',
                            '50px'
                        ]
                    ]
                }
            },
            "sd1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'Pasted92',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted9.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid102",
                            "scaleX",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted92}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid167",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Pasted92}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted92}",
                            '1',
                            '1.2'
                        ]
                    ]
                }
            },
            "sd2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'Pasted102',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted10.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid107",
                            "scaleY",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted102}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid164",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Pasted102}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted102}",
                            '1',
                            '1.2'
                        ]
                    ]
                }
            },
            "sd3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'Pasted112',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted11.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid109",
                            "scaleY",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted112}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid123",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Pasted112}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted112}",
                            '1',
                            '1.2'
                        ]
                    ]
                }
            },
            "sd4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'Pasted122',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted12.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid125",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Pasted122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "scaleY",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted122}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted122}",
                            '1',
                            '1.2'
                        ]
                    ]
                }
            },
            "sd5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133px', '133px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'Pasted72',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted7.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid115",
                            "scaleX",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted72}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted72}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Pasted72}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "sd6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['0px', '0px', '133px', '133px', 'auto', 'auto'],
                            id: 'Pasted82',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted8.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid104",
                            "scaleX",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted82}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Pasted82}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Pasted82}",
                            '1',
                            '1.2'
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
                            rect: ['0px', '52px', '128px', '20px', 'auto', 'auto'],
                            id: 'Pasted91',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sdx2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid241",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pasted91}",
                            '52px',
                            '0px'
                        ],
                        [
                            "eid239",
                            "height",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pasted91}",
                            '20px',
                            '72px'
                        ],
                        [
                            "eid243",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${Pasted91}",
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
                            type: 'rect',
                            id: 'zzz',
                            symbolName: 'zzz',
                            rect: ['0px', '0px', '797', '797', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '797px', '797px']
                        }
                    }
                },
                timeline: {
                    duration: 22250,
                    autoPlay: false,
                    data: [

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
                            rect: ['0px', '0px', '128px', '72px', 'auto', 'auto'],
                            id: 'sdx32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sdx3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid249",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx32}",
                            '52px',
                            '0px'
                        ],
                        [
                            "eid251",
                            "height",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx32}",
                            '20px',
                            '72px'
                        ],
                        [
                            "eid254",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${sdx32}",
                            '0',
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
                            rect: ['0px', '0px', '128px', '72px', 'auto', 'auto'],
                            id: 'sdx4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sdx4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid263",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${sdx4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid258",
                            "height",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx4}",
                            '20px',
                            '72px'
                        ],
                        [
                            "eid256",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx4}",
                            '52px',
                            '0px'
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
                            rect: ['0px', '0px', '128px', '72px', 'auto', 'auto'],
                            id: 'sdx',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sdx.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid267",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${sdx}",
                            '0',
                            '1'
                        ],
                        [
                            "eid264",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx}",
                            '52px',
                            '0px'
                        ],
                        [
                            "eid266",
                            "height",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx}",
                            '20px',
                            '72px'
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
                            rect: ['0px', '0px', '128px', '72px', 'auto', 'auto'],
                            id: 'sdx5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sdx5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid271",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${sdx5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid270",
                            "height",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx5}",
                            '20px',
                            '72px'
                        ],
                        [
                            "eid268",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx5}",
                            '52px',
                            '0px'
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
                            rect: ['0px', '0px', '128px', '72px', 'auto', 'auto'],
                            id: 'sdx6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sdx6.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid275",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${sdx6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid272",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx6}",
                            '52px',
                            '0px'
                        ],
                        [
                            "eid274",
                            "height",
                            0,
                            1000,
                            "easeOutElastic",
                            "${sdx6}",
                            '20px',
                            '72px'
                        ]
                    ]
                }
            },
            "tu01": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted30',
                            type: 'image',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted30.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted29',
                            type: 'image',
                            rect: ['21px', '27px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted29.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid324",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${Pasted29}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "tu02": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted32',
                            type: 'image',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted32.svg', '0px', '0px']
                        },
                        {
                            rect: ['20px', '42px', '16px', '30px', 'auto', 'auto'],
                            id: 'Pasted34',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted34.svg', '0px', '0px']
                        },
                        {
                            rect: ['33px', '48px', '14px', '17px', 'auto', 'auto'],
                            id: 'Pasted35',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted35.svg', '0px', '0px']
                        },
                        {
                            rect: ['43px', '28px', '14px', '31px', 'auto', 'auto'],
                            id: 'Pasted37',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted37.svg', '0px', '0px']
                        },
                        {
                            rect: ['54px', '34px', '14px', '17px', 'auto', 'auto'],
                            id: 'Pasted38',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted38.svg', '0px', '0px']
                        },
                        {
                            rect: ['64px', '18px', '13px', '27px', 'auto', 'auto'],
                            id: 'Pasted39',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted39.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid345",
                            "opacity",
                            0,
                            40,
                            "easeInOutElastic",
                            "${Pasted34}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid329",
                            "opacity",
                            250,
                            250,
                            "easeInOutElastic",
                            "${Pasted34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid343",
                            "opacity",
                            0,
                            40,
                            "easeInOutElastic",
                            "${Pasted37}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid333",
                            "opacity",
                            750,
                            250,
                            "easeInOutElastic",
                            "${Pasted37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid342",
                            "opacity",
                            0,
                            40,
                            "easeInOutElastic",
                            "${Pasted38}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid335",
                            "opacity",
                            1000,
                            250,
                            "easeInOutElastic",
                            "${Pasted38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid344",
                            "opacity",
                            0,
                            40,
                            "easeInOutElastic",
                            "${Pasted35}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid331",
                            "opacity",
                            500,
                            250,
                            "easeInOutElastic",
                            "${Pasted35}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            0,
                            40,
                            "easeInOutElastic",
                            "${Pasted39}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid339",
                            "opacity",
                            1250,
                            250,
                            "easeInOutElastic",
                            "${Pasted39}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tu03": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted40',
                            type: 'image',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted40.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted41',
                            type: 'image',
                            rect: ['15px', '30px', '20px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted41.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted41Copy',
                            type: 'image',
                            rect: ['35px', '48px', '20px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted41.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted41Copy2',
                            type: 'image',
                            rect: ['55px', '30px', '20px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted41.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted41Copy3',
                            type: 'image',
                            rect: ['55px', '58px', '20px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted41.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: false,
                    data: [
                        [
                            "eid350",
                            "top",
                            1250,
                            500,
                            "easeInCubic",
                            "${Pasted41Copy2}",
                            '30px',
                            '48px'
                        ],
                        [
                            "eid353",
                            "top",
                            2750,
                            500,
                            "easeInCubic",
                            "${Pasted41Copy2}",
                            '48px',
                            '30px'
                        ],
                        [
                            "eid349",
                            "top",
                            1000,
                            500,
                            "easeInCubic",
                            "${Pasted41Copy3}",
                            '40px',
                            '58px'
                        ],
                        [
                            "eid347",
                            "top",
                            500,
                            500,
                            "easeInCubic",
                            "${Pasted41Copy}",
                            '48px',
                            '30px'
                        ],
                        [
                            "eid351",
                            "top",
                            1750,
                            500,
                            "easeInCubic",
                            "${Pasted41Copy}",
                            '30px',
                            '48px'
                        ],
                        [
                            "eid346",
                            "top",
                            0,
                            500,
                            "easeInCubic",
                            "${Pasted41}",
                            '30px',
                            '48px'
                        ],
                        [
                            "eid352",
                            "top",
                            2250,
                            500,
                            "easeInCubic",
                            "${Pasted41}",
                            '48px',
                            '30px'
                        ]
                    ]
                }
            },
            "tu04": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted42',
                            type: 'image',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted42.svg', '0px', '0px']
                        },
                        {
                            rect: ['25px', '43px', '40px', '40px', 'auto', 'auto'],
                            id: 'Pasted43',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted43.svg', '0px', '0px']
                        },
                        {
                            rect: ['35px', '51px', '12px', '12px', 'auto', 'auto'],
                            id: 'Pasted44',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted44.svg', '0px', '0px']
                        },
                        {
                            rect: ['18px', '39px', '12px', '12px', 'auto', 'auto'],
                            id: 'Pasted44Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted44.svg', '0px', '0px']
                        },
                        {
                            rect: ['12px', '45px', '23px', '23px', 'auto', 'auto'],
                            id: 'Pasted44Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted44.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid426",
                            "width",
                            0,
                            0,
                            "easeOutElastic",
                            "${Pasted43}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid417",
                            "opacity",
                            0,
                            85,
                            "easeInCirc",
                            "${Pasted43}",
                            '1',
                            '0'
                        ],
                        [
                            "eid420",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${Pasted43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid427",
                            "height",
                            0,
                            0,
                            "easeOutElastic",
                            "${Pasted43}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid387",
                            "opacity",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${Pasted44Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid392",
                            "opacity",
                            2000,
                            500,
                            "easeOutElastic",
                            "${Pasted44Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid393",
                            "opacity",
                            2500,
                            500,
                            "easeOutElastic",
                            "${Pasted44Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid391",
                            "opacity",
                            2000,
                            1000,
                            "easeOutElastic",
                            "${Pasted44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid396",
                            "opacity",
                            3000,
                            500,
                            "easeOutElastic",
                            "${Pasted44}",
                            '1',
                            '0'
                        ],
                        [
                            "eid397",
                            "opacity",
                            3500,
                            500,
                            "easeOutElastic",
                            "${Pasted44}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid389",
                            "opacity",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${Pasted44Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid394",
                            "opacity",
                            2500,
                            500,
                            "easeOutElastic",
                            "${Pasted44Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid395",
                            "opacity",
                            3000,
                            500,
                            "easeOutElastic",
                            "${Pasted44Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid429",
                            "left",
                            0,
                            0,
                            "easeOutElastic",
                            "${Pasted43}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid418",
                            "top",
                            0,
                            500,
                            "easeInCirc",
                            "${Pasted43}",
                            '43px',
                            '-40px'
                        ],
                        [
                            "eid419",
                            "top",
                            500,
                            1000,
                            "easeOutElastic",
                            "${Pasted43}",
                            '-40px',
                            '43px'
                        ]
                    ]
                }
            },
            "tu05": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Pasted46',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted46.svg', '0px', '0px']
                        },
                        {
                            rect: ['15px', '55px', '21px', '21px', 'auto', 'auto'],
                            id: 'Pasted45',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted45.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted47',
                            type: 'image',
                            rect: ['35px', '42px', '21px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted47.svg', '0px', '0px']
                        },
                        {
                            id: 'Pasted48',
                            type: 'image',
                            rect: ['55px', '49px', '21px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted48.svg', '0px', '0px']
                        },
                        {
                            rect: ['33px', '6px', '25px', '37px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Pasted49',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted49.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid488",
                            "scaleX",
                            0,
                            70,
                            "easeOutElastic",
                            "${Pasted49}",
                            '1',
                            '0'
                        ],
                        [
                            "eid487",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${Pasted49}",
                            '0',
                            '1'
                        ],
                        [
                            "eid452",
                            "top",
                            0,
                            70,
                            "linear",
                            "${Pasted47}",
                            '42px',
                            '-34px'
                        ],
                        [
                            "eid438",
                            "top",
                            1000,
                            500,
                            "easeOutElastic",
                            "${Pasted47}",
                            '-34px',
                            '42px'
                        ],
                        [
                            "eid451",
                            "top",
                            0,
                            70,
                            "easeOutElastic",
                            "${Pasted45}",
                            '55px',
                            '-21px'
                        ],
                        [
                            "eid436",
                            "top",
                            70,
                            430,
                            "easeOutElastic",
                            "${Pasted45}",
                            '-21px',
                            '55px'
                        ],
                        [
                            "eid453",
                            "top",
                            0,
                            70,
                            "linear",
                            "${Pasted48}",
                            '49px',
                            '-27px'
                        ],
                        [
                            "eid445",
                            "top",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pasted48}",
                            '-27px',
                            '49px'
                        ],
                        [
                            "eid489",
                            "scaleY",
                            0,
                            70,
                            "easeOutElastic",
                            "${Pasted49}",
                            '1',
                            '0'
                        ],
                        [
                            "eid486",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${Pasted49}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tu06": {
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
                            fi: null,
                            id: 'Pasted50',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted50.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: null,
                            id: 'Pasted53',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted53.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: null,
                            id: 'Pasted52',
                            filter: [0, 360, 1, 1, 0, 0, 0, 0, 'rgba(255,231,0,1.00)', 0, 0, 0],
                            rect: ['17px', '15px', '56px', '67px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted52.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid473",
                            "filter.hue-rotate",
                            120,
                            1880,
                            "linear",
                            "${Pasted50}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid470",
                            "rotateZ",
                            120,
                            1880,
                            "linear",
                            "${Pasted53}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid472",
                            "filter.hue-rotate",
                            120,
                            1880,
                            "linear",
                            "${Pasted53}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid469",
                            "opacity",
                            0,
                            120,
                            "easeOutElastic",
                            "${Pasted53}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "B1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -5, 0, 0, 'rgba(0,0,0,0.10)'],
                            type: 'ellipse',
                            fill: ['rgba(125,153,204,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'S2',
                            rect: ['20px', '18px', '88px', '92px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/S2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4',
                            rect: ['28px', '26px', '72px', '72px', 'auto', 'auto'],
                            transform: [[], ['720'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/S4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S3',
                            rect: ['28px', '26px', '72px', '72px', 'auto', 'auto'],
                            transform: [[], ['30'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/S3.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            borderRadius: ['64px', '64px', '64px', '64px 64px'],
                            id: 'TC',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/TC.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: false,
                    data: [
                        [
                            "eid19",
                            "rotateZ",
                            2500,
                            1500,
                            "linear",
                            "${S4}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid21",
                            "rotateZ",
                            4000,
                            1500,
                            "linear",
                            "${S4}",
                            '360deg',
                            '720deg'
                        ],
                        [
                            "eid24",
                            "rotateZ",
                            5500,
                            1500,
                            "linear",
                            "${S4}",
                            '720deg',
                            '1080deg'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${S4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${S4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            500,
                            1000,
                            "easeOutElastic",
                            "${S2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${S3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            2500,
                            1500,
                            "linear",
                            "${S3}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid23",
                            "rotateZ",
                            4000,
                            1500,
                            "linear",
                            "${S3}",
                            '10deg',
                            '20deg'
                        ],
                        [
                            "eid25",
                            "rotateZ",
                            5500,
                            1500,
                            "linear",
                            "${S3}",
                            '20deg',
                            '30deg'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            500,
                            1000,
                            "easeOutElastic",
                            "${S2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${S3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "B2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -5, 0, 0, 'rgba(0,0,0,0.10)'],
                            type: 'ellipse',
                            fill: ['rgba(204,102,153,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'R1',
                            rect: ['16px', '39px', '96px', '54px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/R1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'R2',
                            rect: ['100px', '67px', '18px', '22px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/R2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            borderRadius: ['64px', '64px', '64px', '64px 64px'],
                            id: 'TC2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/TC2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid37",
                            "scaleX",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${R2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${R2}",
                            '10px',
                            '28px'
                        ],
                        [
                            "eid46",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${R2}",
                            '28px',
                            '50px'
                        ],
                        [
                            "eid48",
                            "left",
                            2750,
                            500,
                            "linear",
                            "${R2}",
                            '50px',
                            '75px'
                        ],
                        [
                            "eid50",
                            "left",
                            3250,
                            500,
                            "linear",
                            "${R2}",
                            '75px',
                            '100px'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${R2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            500,
                            1000,
                            "easeOutElastic",
                            "${R1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${R2}",
                            '56px',
                            '47px'
                        ],
                        [
                            "eid47",
                            "top",
                            2250,
                            500,
                            "linear",
                            "${R2}",
                            '47px',
                            '76px'
                        ],
                        [
                            "eid49",
                            "top",
                            2750,
                            500,
                            "linear",
                            "${R2}",
                            '76px',
                            '36px'
                        ],
                        [
                            "eid51",
                            "top",
                            3250,
                            500,
                            "linear",
                            "${R2}",
                            '36px',
                            '67px'
                        ],
                        [
                            "eid43",
                            "scaleY",
                            500,
                            1000,
                            "easeOutElastic",
                            "${R1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "B3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -5, 0, 0, 'rgba(0,0,0,0.10)'],
                            type: 'ellipse',
                            fill: ['rgba(0,153,153,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'D1',
                            rect: ['29px', '25px', '32px', '36px', 'auto', 'auto'],
                            transform: [[], ['45'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/D1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'D2',
                            rect: ['73px', '32px', '32px', '12px', 'auto', 'auto'],
                            transform: [[], ['-10'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/D2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'D3',
                            rect: ['28px', '68px', '30px', '34px', 'auto', 'auto'],
                            transform: [[], ['360'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/D3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'D4',
                            rect: ['70px', '61px', '32px', '36px', 'auto', 'auto'],
                            transform: [[], ['-150'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/D4.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            borderRadius: ['64px', '64px', '64px', '64px 64px'],
                            id: 'TC3',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/TC3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: false,
                    data: [
                        [
                            "eid230",
                            "-webkit-transform-origin",
                            3750,
                            0,
                            "easeInQuad",
                            "${D1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1741",
                            "-moz-transform-origin",
                            3750,
                            0,
                            "easeInQuad",
                            "${D1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1742",
                            "-ms-transform-origin",
                            3750,
                            0,
                            "easeInQuad",
                            "${D1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1743",
                            "msTransformOrigin",
                            3750,
                            0,
                            "easeInQuad",
                            "${D1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1744",
                            "-o-transform-origin",
                            3750,
                            0,
                            "easeInQuad",
                            "${D1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1745",
                            "transform-origin",
                            3750,
                            0,
                            "easeInQuad",
                            "${D1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            3500,
                            1750,
                            "easeInBounce",
                            "${D4}",
                            '0deg',
                            '-150deg'
                        ],
                        [
                            "eid211",
                            "rotateZ",
                            5250,
                            1250,
                            "easeInQuad",
                            "${D4}",
                            '-150deg',
                            '-30deg'
                        ],
                        [
                            "eid212",
                            "rotateZ",
                            6500,
                            2500,
                            "easeOutElastic",
                            "${D4}",
                            '-30deg',
                            '-90deg'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${D4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            3750,
                            1250,
                            "easeInBounce",
                            "${D1}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid231",
                            "rotateZ",
                            5000,
                            1250,
                            "easeOutQuad",
                            "${D1}",
                            '45deg',
                            '-45deg'
                        ],
                        [
                            "eid232",
                            "rotateZ",
                            6250,
                            2750,
                            "easeOutElastic",
                            "${D1}",
                            '-45deg',
                            '10deg'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            500,
                            1000,
                            "easeOutElastic",
                            "${D1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "rotateZ",
                            3250,
                            3250,
                            "easeInBounce",
                            "${D2}",
                            '0deg',
                            '280deg'
                        ],
                        [
                            "eid233",
                            "rotateZ",
                            6500,
                            2500,
                            "easeOutElastic",
                            "${D2}",
                            '280deg',
                            '-10deg'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${D4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "-webkit-transform-origin",
                            3250,
                            0,
                            "easeInQuad",
                            "${D2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1746",
                            "-moz-transform-origin",
                            3250,
                            0,
                            "easeInQuad",
                            "${D2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1747",
                            "-ms-transform-origin",
                            3250,
                            0,
                            "easeInQuad",
                            "${D2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1748",
                            "msTransformOrigin",
                            3250,
                            0,
                            "easeInQuad",
                            "${D2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1749",
                            "-o-transform-origin",
                            3250,
                            0,
                            "easeInQuad",
                            "${D2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1750",
                            "transform-origin",
                            3250,
                            0,
                            "easeInQuad",
                            "${D2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid72",
                            "scaleY",
                            2000,
                            1000,
                            "easeOutElastic",
                            "${D3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "-webkit-transform-origin",
                            3500,
                            0,
                            "easeInQuad",
                            "${D4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1751",
                            "-moz-transform-origin",
                            3500,
                            0,
                            "easeInQuad",
                            "${D4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1752",
                            "-ms-transform-origin",
                            3500,
                            0,
                            "easeInQuad",
                            "${D4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1753",
                            "msTransformOrigin",
                            3500,
                            0,
                            "easeInQuad",
                            "${D4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1754",
                            "-o-transform-origin",
                            3500,
                            0,
                            "easeInQuad",
                            "${D4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1755",
                            "transform-origin",
                            3500,
                            0,
                            "easeInQuad",
                            "${D4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid62",
                            "scaleX",
                            500,
                            1000,
                            "easeOutElastic",
                            "${D1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${D2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${D2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            2000,
                            1000,
                            "easeOutElastic",
                            "${D3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "B4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -5, 0, 0, 'rgba(0,0,0,0.10)'],
                            type: 'ellipse',
                            fill: ['rgba(204,153,102,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'E6',
                            rect: ['20px', '18px', '89px', '85px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/E6.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'E3',
                            rect: ['28px', '23px', '72px', '72px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/E3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'E4',
                            rect: ['46px', '41px', '35px', '42px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/E4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'E7',
                            rect: ['48px', '87px', '32px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/E7.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            borderRadius: ['64px', '64px', '64px', '64px 64px'],
                            id: 'TC4',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/TC4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid95",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${E3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            2500,
                            1000,
                            "easeOutElastic",
                            "${E4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${E3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "scaleY",
                            750,
                            1000,
                            "easeOutElastic",
                            "${E6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "scaleY",
                            2500,
                            1000,
                            "easeOutElastic",
                            "${E4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "scaleX",
                            1750,
                            1000,
                            "easeOutElastic",
                            "${E7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            750,
                            1000,
                            "easeOutElastic",
                            "${E6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "rotateZ",
                            2500,
                            2500,
                            "easeInOutElastic",
                            "${E4}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            1750,
                            1000,
                            "easeOutElastic",
                            "${E7}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "B5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -5, 0, 0, 'rgba(0,0,0,0.10)'],
                            type: 'ellipse',
                            fill: ['rgba(255,251,240,1.00)']
                        },
                        {
                            rect: ['65px', '19px', '44px', '80px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'F6',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/F6.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'F4',
                            rect: ['20px', '19px', '77px', '94px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/F4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'f1',
                            rect: ['69px', '16px', '40px', '44px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/f1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'f2',
                            rect: ['65px', '63px', '44px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/f2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            borderRadius: ['64px', '64px', '64px', '64px 64px'],
                            id: 'TC',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/TC5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid136",
                            "scaleY",
                            750,
                            1000,
                            "easeOutElastic",
                            "${F4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            2250,
                            1000,
                            "easeOutElastic",
                            "${f1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            2250,
                            1000,
                            "easeOutElastic",
                            "${f1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            750,
                            1000,
                            "easeOutElastic",
                            "${F6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            1750,
                            500,
                            "easeInQuad",
                            "${F6}",
                            '1',
                            '2'
                        ],
                        [
                            "eid139",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${F6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "scaleY",
                            750,
                            1000,
                            "easeOutElastic",
                            "${F6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            1750,
                            500,
                            "easeInQuad",
                            "${F6}",
                            '1',
                            '2'
                        ],
                        [
                            "eid134",
                            "scaleX",
                            750,
                            1000,
                            "easeOutElastic",
                            "${F4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "scaleY",
                            3000,
                            1000,
                            "easeOutElastic",
                            "${f2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            3000,
                            1000,
                            "easeOutElastic",
                            "${f2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "B6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -5, 0, 0, 'rgba(0,0,0,0.10)'],
                            type: 'ellipse',
                            fill: ['rgba(204,51,102,1.00)']
                        },
                        {
                            rect: ['24px', '28px', '80px', '44px', 'auto', 'auto'],
                            id: 'X6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X6.svg', '0px', '0px']
                        },
                        {
                            rect: ['56px', '146px', '16px', '32px', 'auto', 'auto'],
                            id: 'X3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X3.svg', '0px', '0px']
                        },
                        {
                            rect: ['52px', '-36px', '24px', '12px', 'auto', 'auto'],
                            id: 'X4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X4.svg', '0px', '0px']
                        },
                        {
                            rect: ['36px', '147px', '56px', '48px', 'auto', 'auto'],
                            id: 'X5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X5.svg', '0px', '0px']
                        },
                        {
                            rect: ['32px', '-57px', '64px', '12px', 'auto', 'auto'],
                            id: 'X7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X7.svg', '0px', '0px']
                        },
                        {
                            rect: ['40px', '-40px', '47px', '13px', 'auto', 'auto'],
                            id: 'X2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X2.svg', '0px', '0px']
                        },
                        {
                            rect: ['32px', '149px', '64px', '12px', 'auto', 'auto'],
                            id: 'X1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/X1.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            borderRadius: ['64px', '64px', '64px', '64px 64px'],
                            id: 'TC2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/TC6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: false,
                    data: [
                        [
                            "eid166",
                            "top",
                            2750,
                            1000,
                            "easeInOutElastic",
                            "${X6}",
                            '-57px',
                            '28px'
                        ],
                        [
                            "eid193",
                            "top",
                            5250,
                            1000,
                            "easeInOutElastic",
                            "${X6}",
                            '28px',
                            '148px'
                        ],
                        [
                            "eid164",
                            "top",
                            2000,
                            1000,
                            "easeInOutElastic",
                            "${X5}",
                            '-77px',
                            '27px'
                        ],
                        [
                            "eid192",
                            "top",
                            5000,
                            1000,
                            "easeInOutElastic",
                            "${X5}",
                            '27px',
                            '147px'
                        ],
                        [
                            "eid158",
                            "top",
                            1000,
                            1000,
                            "easeInOutElastic",
                            "${X3}",
                            '-65px',
                            '66px'
                        ],
                        [
                            "eid190",
                            "top",
                            4500,
                            1000,
                            "easeInOutElastic",
                            "${X3}",
                            '66px',
                            '146px'
                        ],
                        [
                            "eid168",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid204",
                            "scaleX",
                            6000,
                            1000,
                            "easeInElastic",
                            "${Ellipse2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid154",
                            "top",
                            500,
                            1000,
                            "easeInOutElastic",
                            "${X1}",
                            '-20px',
                            '99px'
                        ],
                        [
                            "eid188",
                            "top",
                            4000,
                            1000,
                            "easeInOutElastic",
                            "${X1}",
                            '99px',
                            '149px'
                        ],
                        [
                            "eid176",
                            "opacity",
                            750,
                            1000,
                            "easeInOutElastic",
                            "${X2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid200",
                            "opacity",
                            4250,
                            1000,
                            "easeInOutElastic",
                            "${X2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "top",
                            1500,
                            1000,
                            "easeInOutElastic",
                            "${X4}",
                            '-36px',
                            '80px'
                        ],
                        [
                            "eid191",
                            "top",
                            4750,
                            1000,
                            "easeInOutElastic",
                            "${X4}",
                            '80px',
                            '150px'
                        ],
                        [
                            "eid185",
                            "opacity",
                            2500,
                            1000,
                            "easeInOutElastic",
                            "${X7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            5500,
                            1000,
                            "easeInOutElastic",
                            "${X7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid187",
                            "opacity",
                            2750,
                            1000,
                            "easeInOutElastic",
                            "${X6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            5250,
                            1000,
                            "easeInOutElastic",
                            "${X6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid174",
                            "opacity",
                            500,
                            1000,
                            "easeInOutElastic",
                            "${X1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            4000,
                            1000,
                            "easeInOutElastic",
                            "${X1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "top",
                            750,
                            1000,
                            "easeInOutElastic",
                            "${X2}",
                            '-40px',
                            '92px'
                        ],
                        [
                            "eid189",
                            "top",
                            4250,
                            1000,
                            "easeInOutElastic",
                            "${X2}",
                            '92px',
                            '142px'
                        ],
                        [
                            "eid183",
                            "opacity",
                            2000,
                            1000,
                            "easeInOutElastic",
                            "${X5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid195",
                            "opacity",
                            5000,
                            1000,
                            "easeInOutElastic",
                            "${X5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutElastic",
                            "${X3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            4500,
                            1000,
                            "easeInOutElastic",
                            "${X3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "scaleY",
                            6000,
                            1000,
                            "easeInElastic",
                            "${Ellipse2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid180",
                            "opacity",
                            1500,
                            1000,
                            "easeInOutElastic",
                            "${X4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "opacity",
                            4750,
                            1000,
                            "easeInOutElastic",
                            "${X4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid160",
                            "top",
                            2500,
                            1000,
                            "easeInOutElastic",
                            "${X7}",
                            '-57px',
                            '26px'
                        ],
                        [
                            "eid194",
                            "top",
                            5500,
                            1000,
                            "easeInOutElastic",
                            "${X7}",
                            '26px',
                            '146px'
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
                            rect: ['590px', '157px', '100px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'j1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/j1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1950,
                    autoPlay: false,
                    data: [
                        [
                            "eid1114",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1171",
                            "opacity",
                            1250,
                            700,
                            "linear",
                            "${j1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1112",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1165",
                            "top",
                            1250,
                            700,
                            "easeInElastic",
                            "${j1}",
                            '67px',
                            '157px'
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
                            rect: ['736px', '242px', '100px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'j2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/j2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1950,
                    autoPlay: false,
                    data: [
                        [
                            "eid1128",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1169",
                            "top",
                            1250,
                            700,
                            "easeInElastic",
                            "${j2}",
                            '152px',
                            '242px'
                        ],
                        [
                            "eid1175",
                            "opacity",
                            1250,
                            700,
                            "linear",
                            "${j2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1130",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j2}",
                            '0',
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
                            rect: ['736px', '408px', '100px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'j3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/j3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1950,
                    autoPlay: false,
                    data: [
                        [
                            "eid1172",
                            "opacity",
                            1250,
                            700,
                            "linear",
                            "${j3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1166",
                            "top",
                            1250,
                            700,
                            "easeInElastic",
                            "${j3}",
                            '318px',
                            '408px'
                        ],
                        [
                            "eid1122",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1120",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j3}",
                            '0',
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
                            rect: ['590px', '494px', '100px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'j4',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/j4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1950,
                    autoPlay: false,
                    data: [
                        [
                            "eid1176",
                            "opacity",
                            1250,
                            700,
                            "linear",
                            "${j4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1134",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1132",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1170",
                            "top",
                            1250,
                            700,
                            "easeInElastic",
                            "${j4}",
                            '404px',
                            '494px'
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
                            rect: ['444px', '408px', '100px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'j5',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/j5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1950,
                    autoPlay: false,
                    data: [
                        [
                            "eid1168",
                            "top",
                            1250,
                            700,
                            "easeInElastic",
                            "${j5}",
                            '318px',
                            '408px'
                        ],
                        [
                            "eid1124",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1174",
                            "opacity",
                            1250,
                            700,
                            "linear",
                            "${j5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1126",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j5}",
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
                            rect: ['444px', '242px', '100px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'j6',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/j6.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1950,
                    autoPlay: false,
                    data: [
                        [
                            "eid1118",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1167",
                            "top",
                            1250,
                            700,
                            "easeInElastic",
                            "${j6}",
                            '152px',
                            '242px'
                        ],
                        [
                            "eid1116",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${j6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1173",
                            "opacity",
                            1250,
                            700,
                            "linear",
                            "${j6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("an03_edgeActions.js");
})("EDGE-3200493");
