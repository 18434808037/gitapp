/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'Microsoft YaHei\', \'Hiragino Sans\', \'Droid Sans Fallback\'': ''        },
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
                            id: 'ttd2',
                            symbolName: 'ttd',
                            type: 'rect',
                            rect: ['960px', '660px', '1', '1', 'auto', 'auto']
                        },
                        {
                            id: 'ttd1',
                            symbolName: 'ttd',
                            type: 'rect',
                            rect: ['759px', '660px', '1', '1', 'auto', 'auto']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['769px', '350px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ["12px", "12px", "12px", "12px 12px"],
                            opacity: '0.4',
                            fill: ["rgba(204,204,204,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'rq',
                            type: 'image',
                            rect: ['779px', '360px', '160px', '160px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rq.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'i',
                            type: 'image',
                            rect: ['710px', '610px', '100px', '100px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"i.svg",'0px','0px'],
                            transform: [[],[],[],['0.99','0']]
                        },
                        {
                            id: 'a',
                            type: 'image',
                            rect: ['911px', '610px', '100px', '100px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"a.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 's1',
                            type: 'image',
                            rect: ['209px', '56px', '344px', '679px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"s99.png",'0px','0px']
                        },
                        {
                            id: 'lunbo',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['238', '142', '286', '507', 'auto', 'auto']
                        },
                        {
                            id: 'tt2',
                            type: 'image',
                            rect: ['690px', '192px', '376px', '88px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tt2.svg",'0px','0px']
                        },
                        {
                            id: 'tt1',
                            type: 'image',
                            rect: ['596px', '106px', '188px', '46px', 'auto', 'auto'],
                            opacity: '0.93000000715256',
                            fill: ["rgba(0,0,0,0)",im+"tt1.svg",'0px','0px']
                        },
                        {
                            id: 'zxb2',
                            symbolName: 'zxb',
                            type: 'rect',
                            rect: ['238', '142', '286', '507', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['770px', '544px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​扫一扫下载最新客户端</p>",
                            align: "center",
                            font: ['\'Microsoft YaHei\', \'Hiragino Sans\', \'Droid Sans Fallback\'', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "opacity",
                            0,
                            2000,
                            "easeOutQuad",
                            "${s1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid343",
                            "scaleX",
                            2250,
                            1250,
                            "easeOutElastic",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            2000,
                            1500,
                            "easeOutElastic",
                            "${i}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            2000,
                            1500,
                            "easeOutElastic",
                            "${i}",
                            '0',
                            '0.99'
                        ],
                        [
                            "eid345",
                            "scaleY",
                            2250,
                            1250,
                            "easeOutElastic",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid325",
                            "scaleX",
                            2250,
                            1250,
                            "easeOutElastic",
                            "${rq}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            2000,
                            "easeOutQuad",
                            "${s1}",
                            '30px',
                            '209px'
                        ],
                        [
                            "eid327",
                            "scaleY",
                            2250,
                            1250,
                            "easeOutElastic",
                            "${rq}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            2500,
                            1000,
                            "easeOutElastic",
                            "${a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            2500,
                            1000,
                            "easeOutElastic",
                            "${a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "top",
                            1000,
                            2000,
                            "easeOutQuad",
                            "${tt2}",
                            '53px',
                            '192px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1000,
                            2000,
                            "easeOutQuad",
                            "${tt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            0,
                            2000,
                            "easeOutQuad",
                            "${tt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            2000,
                            "easeOutQuad",
                            "${tt1}",
                            '14px',
                            '106px'
                        ],
                        [
                            "eid357",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "ttd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.01', '0.01']],
                            rect: ['-49px', '-50px', '100px', '100px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'fnd',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(238,238,238,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1px', '1px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid19",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${fnd}",
                            '0.01',
                            '1.3'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${fnd}",
                            '0.01',
                            '1.3'
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
                            rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(95,255,66,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '8px', '8px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid130",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
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

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
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
                            rect: ['0px', '0px', '7px', '6px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Pasted21',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted21.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid294",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            3000,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "opacity",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${Pasted21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            4000,
                            1000,
                            "easeInOutQuad",
                            "${Pasted21}",
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
                            type: 'image',
                            id: '_01',
                            opacity: '0',
                            rect: ['0px', '0px', '286px', '507px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/01.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '286px', '507px', 'auto', 'auto'],
                            id: '_00',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/00.png', '0px', '0px']
                        },
                        {
                            rect: ['-286px', '0px', '286px', '507px', 'auto', 'auto'],
                            id: '_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/02.png', '0px', '0px']
                        },
                        {
                            rect: ['-286px', '0px', '286px', '507px', 'auto', 'auto'],
                            id: '_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/04.png', '0px', '0px']
                        },
                        {
                            rect: ['-286px', '0px', '286px', '507px', 'auto', 'auto'],
                            id: '_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/05.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '286px', '507px', 'auto', 'auto'],
                            id: '_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_01Copy',
                            opacity: '1',
                            rect: ['-286px', '0px', '286px', '507px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '286px', '507px']
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    data: [
                        [
                            "eid188",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${_01Copy}",
                            '-286px',
                            '0px'
                        ],
                        [
                            "eid178",
                            "left",
                            17000,
                            1000,
                            "easeOutQuad",
                            "${_03}",
                            '-286px',
                            '0px'
                        ],
                        [
                            "eid173",
                            "left",
                            14000,
                            1000,
                            "easeOutQuad",
                            "${_05}",
                            '-286px',
                            '0px'
                        ],
                        [
                            "eid152",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "left",
                            11000,
                            1000,
                            "easeOutQuad",
                            "${_04}",
                            '-286px',
                            '0px'
                        ],
                        [
                            "eid165",
                            "left",
                            8000,
                            1000,
                            "easeOutQuad",
                            "${_02}",
                            '-286px',
                            '0px'
                        ],
                        [
                            "eid156",
                            "left",
                            5000,
                            1000,
                            "easeOutQuad",
                            "${_00}",
                            '-286px',
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
                            rect: ['-7px', '-6px', '600px', '14px', 'auto', 'auto'],
                            borderRadius: ['300px', '300px', '300px', '300px 300px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '286px', '507px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

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
                            rect: ['-140px', '-37px', '596px', '635px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

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
                            rect: ['-131px', '-64px', '543px', '644px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '286px', '507px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid226",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '-28px',
                            '-131px'
                        ],
                        [
                            "eid225",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '23px',
                            '543px'
                        ],
                        [
                            "eid224",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '23px',
                            '644px'
                        ],
                        [
                            "eid227",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Ellipse}",
                            '-34px',
                            '-64px'
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
                            rect: ['-119px', '0px', '537px', '679px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'zxb',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '286px', '507px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid238",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${zxb}",
                            '16px',
                            '537px'
                        ],
                        [
                            "eid240",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${zxb}",
                            '0px',
                            '-119px'
                        ],
                        [
                            "eid241",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${zxb}",
                            '0px',
                            '-91px'
                        ],
                        [
                            "eid237",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${zxb}",
                            '17px',
                            '679px'
                        ]
                    ]
                }
            },
            "zxb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-8px', '-570px', '301px', '566px', 'auto', 'auto'],
                            id: 'Pasted22',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted22.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '286px', '507px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid288",
                            "top",
                            0,
                            750,
                            "easeInQuad",
                            "${Pasted22}",
                            '-570px',
                            '-14px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("an01_edgeActions.js");
})("EDGE-11195565");
