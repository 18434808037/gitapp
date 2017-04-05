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
                            id: 'df',
                            type: 'image',
                            rect: ['49px', '115px', '451px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"df.svg",'0px','0px']
                        },
                        {
                            id: 'v1',
                            symbolName: 'v1',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Pasted18',
                            type: 'image',
                            rect: ['612px', '130px', '77px', '77px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted18.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted19',
                            type: 'image',
                            rect: ['651px', '228px', '39px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted19.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted20',
                            type: 'image',
                            rect: ['685px', '75px', '51px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted20.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted21',
                            type: 'image',
                            rect: ['746px', '3px', '77px', '77px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted21.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted22',
                            type: 'image',
                            rect: ['846px', '53px', '51px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted22.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted23',
                            type: 'image',
                            rect: ['843px', '130px', '39px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted23.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted24',
                            type: 'image',
                            rect: ['887px', '179px', '51px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted24.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted26',
                            type: 'image',
                            rect: ['731px', '129px', '122px', '162px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted26.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Pasted25',
                            type: 'image',
                            rect: ['699px', '67px', '191px', '13px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted25.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10500,
                    autoPlay: true,
                    data: [
                        [
                            "eid143",
                            "-webkit-transform-origin",
                            2000,
                            0,
                            "easeOutElastic",
                            "${Pasted18}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid590",
                            "-moz-transform-origin",
                            2000,
                            0,
                            "easeOutElastic",
                            "${Pasted18}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid591",
                            "-ms-transform-origin",
                            2000,
                            0,
                            "easeOutElastic",
                            "${Pasted18}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid592",
                            "msTransformOrigin",
                            2000,
                            0,
                            "easeOutElastic",
                            "${Pasted18}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid593",
                            "-o-transform-origin",
                            2000,
                            0,
                            "easeOutElastic",
                            "${Pasted18}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid594",
                            "transform-origin",
                            2000,
                            0,
                            "easeOutElastic",
                            "${Pasted18}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid113",
                            "scaleY",
                            500,
                            1000,
                            "easeOutElastic",
                            "${Pasted26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pasted25}",
                            '67px',
                            '287px'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            1250,
                            1000,
                            "easeOutElastic",
                            "${Pasted20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            2250,
                            1000,
                            "easeOutElastic",
                            "${Pasted19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            1750,
                            1000,
                            "easeOutElastic",
                            "${Pasted22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${Pasted23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "easeOutElastic",
                            "${Pasted26}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid595",
                            "-moz-transform-origin",
                            500,
                            0,
                            "easeOutElastic",
                            "${Pasted26}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid596",
                            "-ms-transform-origin",
                            500,
                            0,
                            "easeOutElastic",
                            "${Pasted26}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid597",
                            "msTransformOrigin",
                            500,
                            0,
                            "easeOutElastic",
                            "${Pasted26}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid598",
                            "-o-transform-origin",
                            500,
                            0,
                            "easeOutElastic",
                            "${Pasted26}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid599",
                            "transform-origin",
                            500,
                            0,
                            "easeOutElastic",
                            "${Pasted26}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid146",
                            "-webkit-transform-origin",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Pasted22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid600",
                            "-moz-transform-origin",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Pasted22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid601",
                            "-ms-transform-origin",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Pasted22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid602",
                            "msTransformOrigin",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Pasted22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid603",
                            "-o-transform-origin",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Pasted22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid604",
                            "transform-origin",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Pasted22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid145",
                            "-webkit-transform-origin",
                            2250,
                            0,
                            "easeOutElastic",
                            "${Pasted19}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid605",
                            "-moz-transform-origin",
                            2250,
                            0,
                            "easeOutElastic",
                            "${Pasted19}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid606",
                            "-ms-transform-origin",
                            2250,
                            0,
                            "easeOutElastic",
                            "${Pasted19}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid607",
                            "msTransformOrigin",
                            2250,
                            0,
                            "easeOutElastic",
                            "${Pasted19}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid608",
                            "-o-transform-origin",
                            2250,
                            0,
                            "easeOutElastic",
                            "${Pasted19}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid609",
                            "transform-origin",
                            2250,
                            0,
                            "easeOutElastic",
                            "${Pasted19}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid148",
                            "-webkit-transform-origin",
                            750,
                            0,
                            "easeOutElastic",
                            "${Pasted24}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid610",
                            "-moz-transform-origin",
                            750,
                            0,
                            "easeOutElastic",
                            "${Pasted24}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid611",
                            "-ms-transform-origin",
                            750,
                            0,
                            "easeOutElastic",
                            "${Pasted24}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid612",
                            "msTransformOrigin",
                            750,
                            0,
                            "easeOutElastic",
                            "${Pasted24}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid613",
                            "-o-transform-origin",
                            750,
                            0,
                            "easeOutElastic",
                            "${Pasted24}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid614",
                            "transform-origin",
                            750,
                            0,
                            "easeOutElastic",
                            "${Pasted24}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid126",
                            "scaleY",
                            750,
                            1000,
                            "easeOutElastic",
                            "${Pasted24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "-webkit-transform-origin",
                            1500,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid615",
                            "-moz-transform-origin",
                            1500,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid616",
                            "-ms-transform-origin",
                            1500,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid617",
                            "msTransformOrigin",
                            1500,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid618",
                            "-o-transform-origin",
                            1500,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid619",
                            "transform-origin",
                            1500,
                            0,
                            "easeOutElastic",
                            "${Pasted21}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid107",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Pasted25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "-webkit-transform-origin",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Pasted20}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid620",
                            "-moz-transform-origin",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Pasted20}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid621",
                            "-ms-transform-origin",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Pasted20}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid622",
                            "msTransformOrigin",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Pasted20}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid623",
                            "-o-transform-origin",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Pasted20}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid624",
                            "transform-origin",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Pasted20}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid147",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Pasted23}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid625",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Pasted23}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid626",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Pasted23}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid627",
                            "msTransformOrigin",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Pasted23}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid628",
                            "-o-transform-origin",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Pasted23}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid629",
                            "transform-origin",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Pasted23}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid116",
                            "scaleY",
                            2000,
                            1000,
                            "easeOutElastic",
                            "${Pasted18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutElastic",
                            "${Pasted21}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "v1": {
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
                            rect: ['666px', '226px', '67px', '67px', 'auto', 'auto'],
                            transform: [[], ['-720'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted2',
                            rect: ['643px', '205px', '37px', '37px', 'auto', 'auto'],
                            transform: [[], ['1080'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted3',
                            rect: ['670px', '151px', '74px', '74px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted4',
                            rect: ['734px', '211px', '72px', '72px', 'auto', 'auto'],
                            transform: [[], ['-360'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted5',
                            rect: ['805px', '208px', '89px', '89px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted5.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted6',
                            rect: ['893px', '217px', '30px', '31px', 'auto', 'auto'],
                            transform: [[], ['1080'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted6.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted7',
                            rect: ['864px', '170px', '49px', '49px', 'auto', 'auto'],
                            transform: [[], ['-720'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted7.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted8',
                            rect: ['724px', '223px', '12px', '12px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted8.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted9',
                            rect: ['848px', '192px', '12px', '12px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted9.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted10',
                            rect: ['644px', '85px', '49px', '49px', 'auto', 'auto'],
                            transform: [[], ['-720'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted10.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted11',
                            rect: ['636px', '55px', '30px', '31px', 'auto', 'auto'],
                            transform: [[], ['1080'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted11.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted12',
                            rect: ['665px', '5px', '89px', '89px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted12.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted13',
                            rect: ['755px', '20px', '72px', '72px', 'auto', 'auto'],
                            transform: [[], ['-720'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted13.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted14',
                            rect: ['827px', '13px', '67px', '67px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted14.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted15',
                            rect: ['886px', '58px', '37px', '37px', 'auto', 'auto'],
                            transform: [[], ['1080'], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted15.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted16',
                            rect: ['827px', '82px', '74px', '74px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted16.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted17',
                            rect: ['701px', '125px', '18px', '19px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted17.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 10500,
                    autoPlay: true,
                    data: [
                        [
                            "eid85",
                            "scaleY",
                            500,
                            795,
                            "easeOutElastic",
                            "${Pasted15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            3000,
                            795,
                            "easeOutElastic",
                            "${Pasted3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            1045,
                            795,
                            "easeOutElastic",
                            "${Pasted13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            2470,
                            795,
                            "easeOutElastic",
                            "${Pasted6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "scaleY",
                            2295,
                            795,
                            "easeOutElastic",
                            "${Pasted4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            2295,
                            795,
                            "easeOutElastic",
                            "${Pasted4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted5}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            3620,
                            795,
                            "easeOutElastic",
                            "${Pasted}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            1890,
                            795,
                            "easeOutElastic",
                            "${Pasted7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted16}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            1250,
                            795,
                            "easeOutElastic",
                            "${Pasted11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            1675,
                            795,
                            "easeOutElastic",
                            "${Pasted10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted4}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted15}",
                            '0deg',
                            '1080deg'
                        ],
                        [
                            "eid83",
                            "scaleX",
                            500,
                            795,
                            "easeOutElastic",
                            "${Pasted15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid55",
                            "scaleX",
                            415,
                            795,
                            "easeOutElastic",
                            "${Pasted9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted7}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid61",
                            "scaleY",
                            0,
                            795,
                            "easeOutElastic",
                            "${Pasted17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            3620,
                            795,
                            "easeOutElastic",
                            "${Pasted}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            1675,
                            795,
                            "easeOutElastic",
                            "${Pasted10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            1890,
                            795,
                            "easeOutElastic",
                            "${Pasted7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted13}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            1045,
                            795,
                            "easeOutElastic",
                            "${Pasted13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted14}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            1400,
                            795,
                            "easeOutElastic",
                            "${Pasted8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            2000,
                            795,
                            "easeOutElastic",
                            "${Pasted5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted6}",
                            '0deg',
                            '1080deg'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            0,
                            795,
                            "easeOutElastic",
                            "${Pasted17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            415,
                            795,
                            "easeOutElastic",
                            "${Pasted9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted12}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid63",
                            "scaleX",
                            3000,
                            795,
                            "easeOutElastic",
                            "${Pasted3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            150,
                            795,
                            "easeOutElastic",
                            "${Pasted14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted10}",
                            '0deg',
                            '-720deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted2}",
                            '0deg',
                            '1080deg'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            750,
                            795,
                            "easeOutElastic",
                            "${Pasted12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            2000,
                            795,
                            "easeOutElastic",
                            "${Pasted5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            1250,
                            795,
                            "easeOutElastic",
                            "${Pasted11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleY",
                            2470,
                            795,
                            "easeOutElastic",
                            "${Pasted6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            750,
                            795,
                            "easeOutElastic",
                            "${Pasted12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            250,
                            795,
                            "easeOutElastic",
                            "${Pasted16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            150,
                            795,
                            "easeOutElastic",
                            "${Pasted14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "scaleY",
                            3265,
                            795,
                            "easeOutElastic",
                            "${Pasted2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            250,
                            795,
                            "easeOutElastic",
                            "${Pasted16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            1400,
                            795,
                            "easeOutElastic",
                            "${Pasted8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            4500,
                            6000,
                            "linear",
                            "${Pasted11}",
                            '0deg',
                            '1080deg'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            3265,
                            795,
                            "easeOutElastic",
                            "${Pasted2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("fre_edgeActions.js");
})("EDGE-3157875");
