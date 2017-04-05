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
                            id: 's1234',
                            type: 'image',
                            rect: ['629px', '227px', '238px', '135px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"s1234.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'lo1Copy2',
                            symbolName: 'lo1',
                            type: 'rect',
                            rect: ['794px', '176px', '149', '271', 'auto', 'auto'],
                            transform: [[],[],[],['0.4428','0']]
                        },
                        {
                            id: 'rt22',
                            symbolName: 'rt22',
                            type: 'rect',
                            rect: ['419', '209', '95', '161', 'auto', 'auto'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'lo1',
                            symbolName: 'lo1',
                            type: 'rect',
                            rect: ['285px', '99', '149', '271', 'auto', 'auto'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 's124',
                            type: 'image',
                            rect: ['178px', '265px', '203px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"s124.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 's123',
                            type: 'image',
                            rect: ['30px', '212px', '238px', '159px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"s123.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'j44',
                            type: 'image',
                            rect: ['523px', '285px', '84px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"j44.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'k44',
                            type: 'image',
                            rect: ['485px', '340px', '159px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"k44.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: '_032',
                            type: 'image',
                            rect: ['124px', '316px', '344px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"032.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'o8',
                            type: 'image',
                            rect: ['650px', '336px', '285px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"o8.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'kk2',
                            type: 'image',
                            rect: ['766px', '234px', '14px', '15px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kk2.svg",'0px','0px']
                        },
                        {
                            id: 'kk7',
                            type: 'image',
                            rect: ['26px', '209px', '38px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kk7.svg",'0px','0px']
                        },
                        {
                            id: 'kk9',
                            type: 'image',
                            rect: ['102px', '191px', '23px', '47px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kk9.svg",'0px','0px']
                        },
                        {
                            id: 'kk0',
                            type: 'image',
                            rect: ['124px', '166px', '25px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kk0.svg",'0px','0px']
                        },
                        {
                            id: 'k66',
                            type: 'image',
                            rect: ['381px', '175px', '13px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k66.svg",'0px','0px']
                        },
                        {
                            id: 'k11',
                            type: 'image',
                            rect: ['394px', '163px', '21px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k11.svg",'0px','0px']
                        },
                        {
                            id: 'k33',
                            type: 'image',
                            rect: ['438px', '139px', '26px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k33.svg",'0px','0px']
                        },
                        {
                            id: 'k67',
                            type: 'image',
                            rect: ['496px', '170px', '21px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k67.svg",'0px','0px']
                        },
                        {
                            id: 'k567',
                            type: 'image',
                            rect: ['616px', '139px', '32px', '78px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k567.svg",'0px','0px']
                        },
                        {
                            id: 'j789',
                            type: 'image',
                            rect: ['637px', '155px', '26px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"j789.svg",'0px','0px']
                        },
                        {
                            id: 'g45',
                            type: 'image',
                            rect: ['704px', '177px', '26px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"g45.svg",'0px','0px']
                        },
                        {
                            id: 'hy6',
                            type: 'image',
                            rect: ['729px', '187px', '21px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"hy6.svg",'0px','0px']
                        },
                        {
                            id: 'r56',
                            type: 'image',
                            rect: ['784px', '197px', '33px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"r56.svg",'0px','0px']
                        },
                        {
                            id: 'o5',
                            type: 'image',
                            rect: ['248px', '316px', '344px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"o5.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'o2',
                            type: 'image',
                            rect: ['26px', '336px', '311px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"o2.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: '_09',
                            type: 'image',
                            rect: ['394px', '336px', '475px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"09.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'k1',
                            type: 'image',
                            rect: ['427px', '257px', '24px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k1.svg",'0px','0px']
                        },
                        {
                            id: 'k2',
                            type: 'image',
                            rect: ['591px', '257px', '25px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted2.svg",'0px','0px']
                        },
                        {
                            id: 'k8',
                            type: 'image',
                            rect: ['640px', '251px', '39px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"k8.svg",'0px','0px']
                        },
                        {
                            id: 'kk22',
                            type: 'image',
                            rect: ['156px', '226px', '26px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kk22.svg",'0px','0px']
                        },
                        {
                            id: 'kk4',
                            type: 'image',
                            rect: ['189px', '230px', '20px', '18px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kk4.svg",'0px','0px']
                        },
                        {
                            id: 's134',
                            type: 'image',
                            rect: ['221px', '305px', '134px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"s134.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'gy67',
                            symbolName: 'gy67',
                            type: 'rect',
                            rect: ['132', '8', '822', '201', 'auto', 'auto']
                        },
                        {
                            id: '_03',
                            type: 'image',
                            rect: ['0px', '4px', '960px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03.svg",'0px','0px']
                        },
                        {
                            id: 'o1',
                            type: 'image',
                            rect: ['90px', '-64px', '779px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"o1.svg",'0px','0px']
                        },
                        {
                            id: '_0',
                            type: 'image',
                            rect: ['78px', '6px', '804px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"0.svg",'0px','0px']
                        },
                        {
                            id: '_02',
                            type: 'image',
                            rect: ['128px', '4px', '703px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"02.svg",'0px','0px']
                        },
                        {
                            id: 'niudax',
                            symbolName: 'niudax',
                            type: 'rect',
                            rect: ['108', '62', '95', '94', 'auto', 'auto']
                        },
                        {
                            id: 'ttx',
                            type: 'image',
                            rect: ['524', '99px', '385px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ttx.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 35000,
                    autoPlay: true,
                    data: [
                        [
                            "eid220",
                            "top",
                            250,
                            1000,
                            "easeOutBounce",
                            "${_0}",
                            '6px',
                            '406px'
                        ],
                        [
                            "eid1294",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s1234}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5898",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s1234}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5899",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s1234}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5900",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s1234}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5901",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s1234}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5902",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s1234}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid695",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${k44}",
                            [50,150],
                            [50,150],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5903",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${k44}",
                            [50,150],
                            [50,150],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5904",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${k44}",
                            [50,150],
                            [50,150],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5905",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${k44}",
                            [50,150],
                            [50,150],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5906",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${k44}",
                            [50,150],
                            [50,150],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5907",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${k44}",
                            [50,150],
                            [50,150],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid511",
                            "scaleY",
                            4000,
                            750,
                            "easeOutBounce",
                            "${_032}",
                            '0',
                            '1'
                        ],
                        [
                            "eid523",
                            "scaleY",
                            4500,
                            750,
                            "easeOutBounce",
                            "${k44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1843",
                            "opacity",
                            12500,
                            750,
                            "easeOutBounce",
                            "${k2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1491",
                            "scaleY",
                            9920,
                            750,
                            "easeOutBounce",
                            "${lo1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid685",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_09}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5908",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_09}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5909",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_09}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5910",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_09}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5911",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_09}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5912",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_09}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid222",
                            "top",
                            750,
                            1000,
                            "easeOutBounce",
                            "${_02}",
                            '4px',
                            '404px'
                        ],
                        [
                            "eid699",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s123}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5913",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s123}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5914",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s123}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5915",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s123}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5916",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s123}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5917",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s123}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1009",
                            "top",
                            7500,
                            750,
                            "easeOutBounce",
                            "${kk0}",
                            '166px',
                            '286px'
                        ],
                        [
                            "eid224",
                            "top",
                            1500,
                            750,
                            "easeOutBounce",
                            "${_03}",
                            '4px',
                            '370px'
                        ],
                        [
                            "eid331",
                            "opacity",
                            250,
                            1000,
                            "easeOutBounce",
                            "${_0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid691",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5918",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5919",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5920",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5921",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5922",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid540",
                            "scaleY",
                            5000,
                            750,
                            "easeOutBounce",
                            "${j44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1051",
                            "opacity",
                            8500,
                            750,
                            "easeOutBounce",
                            "${k66}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1027",
                            "top",
                            8500,
                            750,
                            "easeOutBounce",
                            "${k66}",
                            '175px',
                            '295px'
                        ],
                        [
                            "eid514",
                            "scaleY",
                            3250,
                            750,
                            "easeOutBounce",
                            "${o5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1839",
                            "opacity",
                            12250,
                            750,
                            "easeOutBounce",
                            "${k1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "scaleY",
                            2500,
                            750,
                            "easeOutBounce",
                            "${o2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1031",
                            "opacity",
                            7500,
                            750,
                            "easeOutBounce",
                            "${kk0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1039",
                            "opacity",
                            8660,
                            750,
                            "easeOutBounce",
                            "${hy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1045",
                            "opacity",
                            6750,
                            750,
                            "easeOutBounce",
                            "${kk7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1019",
                            "top",
                            7750,
                            750,
                            "easeOutBounce",
                            "${k33}",
                            '139px',
                            '259px'
                        ],
                        [
                            "eid1833",
                            "opacity",
                            11250,
                            750,
                            "easeOutBounce",
                            "${kk4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid520",
                            "scaleY",
                            3500,
                            750,
                            "easeOutBounce",
                            "${o8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid517",
                            "scaleY",
                            2750,
                            750,
                            "easeOutBounce",
                            "${_09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1033",
                            "opacity",
                            8500,
                            750,
                            "easeOutBounce",
                            "${j789}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1015",
                            "top",
                            8500,
                            750,
                            "easeOutBounce",
                            "${j789}",
                            '155px',
                            '275px'
                        ],
                        [
                            "eid689",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5923",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5924",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5925",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5926",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5927",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1023",
                            "top",
                            8660,
                            750,
                            "easeOutBounce",
                            "${hy6}",
                            '187px',
                            '307px'
                        ],
                        [
                            "eid2120",
                            "top",
                            25000,
                            10000,
                            "linear",
                            "${hy6}",
                            '304px',
                            '309px'
                        ],
                        [
                            "eid1021",
                            "top",
                            8145,
                            750,
                            "easeOutBounce",
                            "${k11}",
                            '163px',
                            '283px'
                        ],
                        [
                            "eid1005",
                            "top",
                            6750,
                            750,
                            "easeOutBounce",
                            "${kk7}",
                            '209px',
                            '309px'
                        ],
                        [
                            "eid1011",
                            "top",
                            8000,
                            750,
                            "easeOutBounce",
                            "${k67}",
                            '170px',
                            '290px'
                        ],
                        [
                            "eid1029",
                            "opacity",
                            8000,
                            750,
                            "easeOutBounce",
                            "${k67}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1827",
                            "top",
                            12250,
                            750,
                            "easeOutBounce",
                            "${k1}",
                            '257px',
                            '347px'
                        ],
                        [
                            "eid1841",
                            "opacity",
                            11500,
                            750,
                            "easeOutBounce",
                            "${k8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1829",
                            "top",
                            11500,
                            750,
                            "easeOutBounce",
                            "${k8}",
                            '251px',
                            '341px'
                        ],
                        [
                            "eid697",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${j44}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5928",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${j44}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5929",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${j44}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5930",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${j44}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5931",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${j44}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5932",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${j44}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1499",
                            "-webkit-transform-origin",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            [50,100],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5933",
                            "-moz-transform-origin",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            [50,100],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5934",
                            "-ms-transform-origin",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            [50,100],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5935",
                            "msTransformOrigin",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            [50,100],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5936",
                            "-o-transform-origin",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            [50,100],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5937",
                            "transform-origin",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            [50,100],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid683",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s134}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5938",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s134}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5939",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s134}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5940",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s134}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5941",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s134}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5942",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s134}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1831",
                            "top",
                            12500,
                            750,
                            "easeOutBounce",
                            "${k2}",
                            '257px',
                            '347px'
                        ],
                        [
                            "eid1037",
                            "opacity",
                            8145,
                            750,
                            "easeOutBounce",
                            "${r56}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1049",
                            "opacity",
                            9120,
                            750,
                            "easeOutBounce",
                            "${g45}",
                            '0',
                            '1'
                        ],
                        [
                            "eid537",
                            "scaleY",
                            5880,
                            750,
                            "easeOutBounce",
                            "${s134}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1494",
                            "scaleY",
                            10500,
                            750,
                            "easeOutBounce",
                            "${rt22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1041",
                            "opacity",
                            7750,
                            750,
                            "easeOutBounce",
                            "${k33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1035",
                            "opacity",
                            9120,
                            880,
                            "easeOutBounce",
                            "${k567}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1013",
                            "top",
                            9120,
                            750,
                            "easeOutBounce",
                            "${g45}",
                            '177px',
                            '297px'
                        ],
                        [
                            "eid328",
                            "opacity",
                            0,
                            1000,
                            "easeOutBounce",
                            "${o1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid529",
                            "scaleY",
                            5500,
                            750,
                            "easeOutBounce",
                            "${s124}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${o1}",
                            '-64px',
                            '436px'
                        ],
                        [
                            "eid1821",
                            "top",
                            11250,
                            750,
                            "easeOutBounce",
                            "${kk4}",
                            '230px',
                            '320px'
                        ],
                        [
                            "eid1825",
                            "top",
                            12750,
                            750,
                            "easeOutBounce",
                            "${kk2}",
                            '234px',
                            '324px'
                        ],
                        [
                            "eid534",
                            "scaleY",
                            6110,
                            750,
                            "easeOutBounce",
                            "${s1234}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1025",
                            "top",
                            8145,
                            750,
                            "easeOutBounce",
                            "${r56}",
                            '197px',
                            '317px'
                        ],
                        [
                            "eid326",
                            "opacity",
                            1500,
                            750,
                            "easeOutBounce",
                            "${_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid526",
                            "scaleY",
                            5250,
                            750,
                            "easeOutBounce",
                            "${s123}",
                            '0',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            750,
                            1000,
                            "easeOutBounce",
                            "${_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1017",
                            "top",
                            9120,
                            880,
                            "easeOutBounce",
                            "${k567}",
                            '139px',
                            '259px'
                        ],
                        [
                            "eid1007",
                            "top",
                            7000,
                            750,
                            "easeOutBounce",
                            "${kk9}",
                            '191px',
                            '311px'
                        ],
                        [
                            "eid1043",
                            "opacity",
                            8145,
                            750,
                            "easeOutBounce",
                            "${k11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1495",
                            "-webkit-transform-origin",
                            10500,
                            0,
                            "easeOutBounce",
                            "${rt22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5943",
                            "-moz-transform-origin",
                            10500,
                            0,
                            "easeOutBounce",
                            "${rt22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5944",
                            "-ms-transform-origin",
                            10500,
                            0,
                            "easeOutBounce",
                            "${rt22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5945",
                            "msTransformOrigin",
                            10500,
                            0,
                            "easeOutBounce",
                            "${rt22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5946",
                            "-o-transform-origin",
                            10500,
                            0,
                            "easeOutBounce",
                            "${rt22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5947",
                            "transform-origin",
                            10500,
                            0,
                            "easeOutBounce",
                            "${rt22}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1047",
                            "opacity",
                            7000,
                            750,
                            "easeOutBounce",
                            "${kk9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1497",
                            "scaleY",
                            9785,
                            750,
                            "easeOutBounce",
                            "${lo1Copy2}",
                            '0',
                            '0.4428'
                        ],
                        [
                            "eid1835",
                            "opacity",
                            11750,
                            750,
                            "easeOutBounce",
                            "${kk22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid701",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s124}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5948",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s124}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5949",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s124}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5950",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s124}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5951",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s124}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5952",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${s124}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1823",
                            "top",
                            11750,
                            750,
                            "easeOutBounce",
                            "${kk22}",
                            '226px',
                            '316px'
                        ],
                        [
                            "eid1492",
                            "-webkit-transform-origin",
                            9920,
                            0,
                            "easeOutBounce",
                            "${lo1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5953",
                            "-moz-transform-origin",
                            9920,
                            0,
                            "easeOutBounce",
                            "${lo1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5954",
                            "-ms-transform-origin",
                            9920,
                            0,
                            "easeOutBounce",
                            "${lo1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5955",
                            "msTransformOrigin",
                            9920,
                            0,
                            "easeOutBounce",
                            "${lo1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5956",
                            "-o-transform-origin",
                            9920,
                            0,
                            "easeOutBounce",
                            "${lo1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5957",
                            "transform-origin",
                            9920,
                            0,
                            "easeOutBounce",
                            "${lo1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1837",
                            "opacity",
                            12750,
                            750,
                            "easeOutBounce",
                            "${kk2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid693",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_032}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5958",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_032}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5959",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_032}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5960",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_032}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5961",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_032}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5962",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${_032}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid687",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5963",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5964",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5965",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5966",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5967",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${o2}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "lo1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['41px', '84px', '20px', '187px', 'auto', 'auto'],
                            id: 'f123',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/f123.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '149px', '170px', 'auto', 'auto'],
                            id: 'gh2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gh2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '271px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${gh2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gh2}",
                            [33.5,50],
                            [33.5,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5968",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gh2}",
                            [33.5,50],
                            [33.5,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5969",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gh2}",
                            [33.5,50],
                            [33.5,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5970",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${gh2}",
                            [33.5,50],
                            [33.5,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5971",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${gh2}",
                            [33.5,50],
                            [33.5,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5972",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${gh2}",
                            [33.5,50],
                            [33.5,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "rt22": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['49px', '53px', '12px', '108px', 'auto', 'auto'],
                            id: 'gyu',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gyu.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '95px', '96px', 'auto', 'auto'],
                            id: 'h123',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/h123.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '95px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid86",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${h123}",
                            [58,57],
                            [58,57],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5973",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${h123}",
                            [58,57],
                            [58,57],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5974",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${h123}",
                            [58,57],
                            [58,57],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5975",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${h123}",
                            [58,57],
                            [58,57],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5976",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${h123}",
                            [58,57],
                            [58,57],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5977",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${h123}",
                            [58,57],
                            [58,57],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid83",
                            "rotateZ",
                            0,
                            5000,
                            "linear",
                            "${h123}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "gy67": {
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
                            id: 'yu1',
                            opacity: '0',
                            rect: ['367px', '55px', '70px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yu1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yu2',
                            opacity: '0',
                            rect: ['498px', '0px', '91px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yu2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yu3',
                            opacity: '0',
                            rect: ['672px', '91px', '70px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yu3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yu4',
                            opacity: '0',
                            rect: ['760px', '151px', '62px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yu4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yu5',
                            opacity: '0',
                            rect: ['117px', '91px', '68px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yu5.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yu7',
                            opacity: '0',
                            rect: ['0px', '165px', '58px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yu7.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '822px', '201px']
                        }
                    }
                },
                timeline: {
                    duration: 35000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1851",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${yu4}",
                            '760px',
                            '660px'
                        ],
                        [
                            "eid1860",
                            "left",
                            25000,
                            10000,
                            "linear",
                            "${yu4}",
                            '660px',
                            '760px'
                        ],
                        [
                            "eid1855",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${yu7}",
                            '0px',
                            '-100px'
                        ],
                        [
                            "eid1857",
                            "left",
                            25000,
                            10000,
                            "linear",
                            "${yu7}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid1874",
                            "opacity",
                            15000,
                            10000,
                            "linear",
                            "${yu3}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1868",
                            "opacity",
                            25000,
                            10000,
                            "linear",
                            "${yu3}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid1875",
                            "opacity",
                            15000,
                            10000,
                            "linear",
                            "${yu7}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1869",
                            "opacity",
                            25000,
                            10000,
                            "linear",
                            "${yu7}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid1878",
                            "opacity",
                            15000,
                            10000,
                            "linear",
                            "${yu2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1872",
                            "opacity",
                            25000,
                            10000,
                            "linear",
                            "${yu2}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid1847",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${yu2}",
                            '498px',
                            '398px'
                        ],
                        [
                            "eid1859",
                            "left",
                            25000,
                            10000,
                            "linear",
                            "${yu2}",
                            '398px',
                            '498px'
                        ],
                        [
                            "eid1849",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${yu1}",
                            '367px',
                            '267px'
                        ],
                        [
                            "eid1858",
                            "left",
                            25000,
                            10000,
                            "linear",
                            "${yu1}",
                            '267px',
                            '367px'
                        ],
                        [
                            "eid1853",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${yu3}",
                            '672px',
                            '572px'
                        ],
                        [
                            "eid1861",
                            "left",
                            25000,
                            10000,
                            "linear",
                            "${yu3}",
                            '572px',
                            '672px'
                        ],
                        [
                            "eid1845",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${yu5}",
                            '117px',
                            '17px'
                        ],
                        [
                            "eid1856",
                            "left",
                            25000,
                            10000,
                            "linear",
                            "${yu5}",
                            '17px',
                            '117px'
                        ],
                        [
                            "eid1876",
                            "opacity",
                            15000,
                            10000,
                            "linear",
                            "${yu1}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1870",
                            "opacity",
                            25000,
                            10000,
                            "linear",
                            "${yu1}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid1879",
                            "opacity",
                            15000,
                            10000,
                            "linear",
                            "${yu5}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1873",
                            "opacity",
                            25000,
                            10000,
                            "linear",
                            "${yu5}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid1877",
                            "opacity",
                            15000,
                            10000,
                            "linear",
                            "${yu4}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1871",
                            "opacity",
                            25000,
                            10000,
                            "linear",
                            "${yu4}",
                            '0.8',
                            '0'
                        ]
                    ]
                }
            },
            "niudax": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['368px', '307px', '131px', '130px', 'auto', 'auto'],
                            id: 'iubiuy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iubiuy.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '95px', '94px']
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2613",
                            "width",
                            14000,
                            0,
                            "easeInOutQuad",
                            "${iubiuy}",
                            '131px',
                            '131px'
                        ],
                        [
                            "eid2611",
                            "location",
                            14000,
                            1000,
                            "easeOutQuad",
                            "${iubiuy}",
                            [[698.5, 368, 0, 0, 0, 0,0],[276.95, 282.8, -456.22, -212.99, -543.37, -253.68,432.82],[27, 54.5, 0, 0, 0, 0,775.27]]
                        ],
                        [
                            "eid2130",
                            "location",
                            15000,
                            3000,
                            "easeInQuad",
                            "${iubiuy}",
                            [[27, 54.5, 0, 0, 0, 0,0],[39.19, 58.86, 7.09, 13.89, 11.52, 22.56,14.11],[35.53, 70.34, -8.07, 4.71, -12.46, 7.27,27.46],[23.94, 66.73, -10.57, -17.68, -8.7, -14.56,40.69],[25.5, 55.5, 0, 0, 0, 0,52.77]]
                        ],
                        [
                            "eid3417",
                            "location",
                            18000,
                            3000,
                            "easeOutQuad",
                            "${iubiuy}",
                            [[25.5, 55.5, 0, 0, 0, 0,0],[39.56, 58.46, 6.77, 12.73, 12.48, 23.46,15.82],[35.63, 70.56, -10.99, 5.73, -13.76, 7.18,29.88],[23.69, 66.88, -9.46, -21.93, -5.76, -13.36,43.6],[27, 54.5, 0, 0, 0, 0,57.28]]
                        ],
                        [
                            "eid2615",
                            "opacity",
                            14000,
                            1000,
                            "easeInQuad",
                            "${iubiuy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2612",
                            "height",
                            14000,
                            0,
                            "easeInOutQuad",
                            "${iubiuy}",
                            '130px',
                            '130px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("r4_edgeActions.js");
})("EDGE-8114070");
