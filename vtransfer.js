[
    {
        "id": "322c1861.3517f",
        "type": "tab",
        "label": "vtransfer",
        "disabled": false,
        "info": "Import data from viessmann heating system, provided over vcontrold and vtransfer.sh script."
    },
    {
        "id": "fc8741e0.deced",
        "type": "inject",
        "z": "322c1861.3517f",
        "name": "poll data every minute",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "120",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 200,
        "wires": [
            [
                "4352bb0a.5cddcc"
            ]
        ]
    },
    {
        "id": "500a78b1.c4758",
        "type": "json",
        "z": "322c1861.3517f",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 190,
        "y": 880,
        "wires": [
            [
                "ead44711.8ded88",
                "14220ba8.0ce03c",
                "83cb406d.9a51d8",
                "2cfa8e41.a81ac2",
                "faebca2c.0698e8",
                "40dd5e43.7d3588",
                "b119d760.3c37f",
                "dc406b3a.bd7048",
                "b6086e19.486ad8",
                "6963def6.1bf458",
                "57610ca.dc461f4",
                "7a4ad671.949ec",
                "38233983.a59c56",
                "d7c3601b.1bc608",
                "b99f5d42.b42d88",
                "303be34.7957c1c",
                "6b3cb583.eb9644",
                "570da100.640018",
                "48304b8.33cb634",
                "888f3e3b.4c55e8",
                "63ee5b06.01992c",
                "81e125ad.cc776",
                "3bf9fd1a.329aca"
            ]
        ]
    },
    {
        "id": "4352bb0a.5cddcc",
        "type": "http request",
        "z": "322c1861.3517f",
        "name": "vcontrold_results",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://vitopi.fritz.box/vcontrold.json",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "x": 390,
        "y": 200,
        "wires": [
            [
                "500a78b1.c4758"
            ]
        ]
    },
    {
        "id": "ead44711.8ded88",
        "type": "debug",
        "z": "322c1861.3517f",
        "name": "Parsed json key/value pairs",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 280,
        "wires": []
    },
    {
        "id": "c51ebb86.9a66e8",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Aussentemperatur",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 810,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "14220ba8.0ce03c",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempA",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempA",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 490,
        "y": 380,
        "wires": [
            [
                "c51ebb86.9a66e8"
            ]
        ]
    },
    {
        "id": "83cb406d.9a51d8",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempSollNormal",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempSollNormal",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 420,
        "wires": [
            [
                "454571e5.590488"
            ]
        ]
    },
    {
        "id": "454571e5.590488",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Sollwert_normal_aktuell",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "2cfa8e41.a81ac2",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempSollReduziert",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempSollReduziert",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 530,
        "y": 460,
        "wires": [
            [
                "a61efc7d.239ce8"
            ]
        ]
    },
    {
        "id": "a61efc7d.239ce8",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Sollwert_reduziert_aktuell",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "faebca2c.0698e8",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempSpO",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempSpO",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 500,
        "wires": [
            [
                "3ff179ad.e40526"
            ]
        ]
    },
    {
        "id": "3ff179ad.e40526",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Speicher_oben",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 800,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "40dd5e43.7d3588",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempPrimVor",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempPrimVor",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 510,
        "y": 540,
        "wires": [
            [
                "54c786d0.41b8a8"
            ]
        ]
    },
    {
        "id": "54c786d0.41b8a8",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Primaerkreis_Vorlauf",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 820,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "90aaa82.5234d58",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Primaerkreis_Ruecklauf",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "b119d760.3c37f",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempPrimRueck",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempPrimRueck",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 580,
        "wires": [
            [
                "90aaa82.5234d58"
            ]
        ]
    },
    {
        "id": "12c07562.a863a3",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Verdampfer",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 790,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "dc406b3a.bd7048",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempVerdampfer",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempVerdampfer",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 530,
        "y": 620,
        "wires": [
            [
                "12c07562.a863a3"
            ]
        ]
    },
    {
        "id": "8fc3eba5.2a9bd",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Sekundaerkreis_Vorlauf",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "b6086e19.486ad8",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempSekVor",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempSekVor",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 510,
        "y": 660,
        "wires": [
            [
                "8fc3eba5.2a9bd"
            ]
        ]
    },
    {
        "id": "a1a823c9.ebbf28",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Sekundaerkreis_Ruecklauf",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "6963def6.1bf458",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempSekRueck",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempPrimVor",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 700,
        "wires": [
            [
                "a1a823c9.ebbf28"
            ]
        ]
    },
    {
        "id": "f993e7db.5bbd8",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Sollwert_WW_aktuell",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 820,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "57610ca.dc461f4",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getTempWWSoll",
        "rules": [
            {
                "t": "move",
                "p": "payload.getTempWWSoll",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 510,
        "y": 740,
        "wires": [
            [
                "f993e7db.5bbd8"
            ]
        ]
    },
    {
        "id": "979cc539.51c3d8",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Status_Umschaltventil",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 800,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "7a4ad671.949ec",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getUmschaltventilStatus",
        "rules": [
            {
                "t": "move",
                "p": "payload.getUmschaltventilStatus",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 780,
        "wires": [
            [
                "979cc539.51c3d8"
            ]
        ]
    },
    {
        "id": "ea67b8d3.dfd778",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Stunden_Umschalventil_aufWW",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "38233983.a59c56",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getUmschaltventilStunden",
        "rules": [
            {
                "t": "move",
                "p": "payload.getUmschaltventilStunden",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 820,
        "wires": [
            [
                "ea67b8d3.dfd778"
            ]
        ]
    },
    {
        "id": "6df2529e.516b0c",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Status_Verdichter",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 790,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "d7c3601b.1bc608",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getVerdichterStatus",
        "rules": [
            {
                "t": "move",
                "p": "payload.getVerdichterStatus",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 860,
        "wires": [
            [
                "6df2529e.516b0c"
            ]
        ]
    },
    {
        "id": "a319e561.692be8",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Stunden_Verdichter",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 790,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "b99f5d42.b42d88",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getVerdichterStunden",
        "rules": [
            {
                "t": "move",
                "p": "payload.getVerdichterStunden",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 530,
        "y": 900,
        "wires": [
            [
                "a319e561.692be8"
            ]
        ]
    },
    {
        "id": "7a13a362.7c14e4",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Status_Durchlauferhitzer_3KW",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 830,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "303be34.7957c1c",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getDurchlauferhitzerStufe1Status",
        "rules": [
            {
                "t": "move",
                "p": "payload.getDurchlauferhitzerStufe1Status",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 570,
        "y": 940,
        "wires": [
            [
                "7a13a362.7c14e4"
            ]
        ]
    },
    {
        "id": "a032119a.4c37c",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Stunden_Durchlauferhitzer_Stufe2",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 840,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "6b3cb583.eb9644",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getDurchlauferhitzerStufe2Status",
        "rules": [
            {
                "t": "move",
                "p": "payload.getDurchlauferhitzerStufe2Status",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 570,
        "y": 980,
        "wires": [
            [
                "a032119a.4c37c"
            ]
        ]
    },
    {
        "id": "3fe41903.8eed76",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Stunden_Durchlauferhitzer_Stufe1",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 840,
        "y": 1020,
        "wires": [
            []
        ]
    },
    {
        "id": "570da100.640018",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getDurchlauferhitzerStundenStufe1",
        "rules": [
            {
                "t": "move",
                "p": "payload.getDurchlauferhitzerStundenStufe1",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 570,
        "y": 1020,
        "wires": [
            [
                "3fe41903.8eed76"
            ]
        ]
    },
    {
        "id": "fd695874.daa698",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Temp_Primaerkreis_Vorlauf",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 820,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "48304b8.33cb634",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getDurchlauferhitzerStundenStufe2",
        "rules": [
            {
                "t": "move",
                "p": "payload.getDurchlauferhitzerStundenStufe2",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 570,
        "y": 1060,
        "wires": [
            [
                "fd695874.daa698"
            ]
        ]
    },
    {
        "id": "888f3e3b.4c55e8",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getPumpeStatusHeizkreisA1",
        "rules": [
            {
                "t": "move",
                "p": "payload.getPumpeStatusHeizkreisA1",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 1100,
        "wires": [
            [
                "36cac257.d9adbe"
            ]
        ]
    },
    {
        "id": "36cac257.d9adbe",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Status_Heizkreispumpe",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 800,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "63ee5b06.01992c",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getPumpeStatusZirku",
        "rules": [
            {
                "t": "move",
                "p": "payload.getPumpeStatusZirku",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 530,
        "y": 1140,
        "wires": [
            [
                "c9a4c04e.5e21b"
            ]
        ]
    },
    {
        "id": "c9a4c04e.5e21b",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Status_Zirkulationspumpe",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 810,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "81e125ad.cc776",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.getStatusStoerung",
        "rules": [
            {
                "t": "move",
                "p": "payload.getStatusStoerung",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 1180,
        "wires": [
            [
                "9df20673.90a5a"
            ]
        ]
    },
    {
        "id": "9df20673.90a5a",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_Status_Stoerung",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 780,
        "y": 1180,
        "wires": [
            []
        ]
    },
    {
        "id": "3bf9fd1a.329aca",
        "type": "change",
        "z": "322c1861.3517f",
        "name": "payload.timestamp",
        "rules": [
            {
                "t": "move",
                "p": "payload.timestamp",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 490,
        "y": 1220,
        "wires": [
            [
                "93b8f490.988bb"
            ]
        ]
    },
    {
        "id": "93b8f490.988bb",
        "type": "ccu-sysvar",
        "z": "322c1861.3517f",
        "name": "vito_timestamp_last_update",
        "ccuConfig": "38263145.35ea0e",
        "topic": "ReGaHSS/${Name}",
        "change": true,
        "cache": true,
        "x": 800,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "d119cb2b.534f6",
        "type": "tcp request",
        "z": "322c1861.3517f",
        "server": "vitopi.fritz.box",
        "port": "3002",
        "out": "immed",
        "splitc": " ",
        "name": "",
        "x": 770,
        "y": 20,
        "wires": [
            []
        ]
    },
    {
        "id": "dcf2f38b.730788",
        "type": "debug",
        "z": "322c1861.3517f",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1310,
        "y": 200,
        "wires": []
    },
    {
        "id": "ae93f1db.b56fa8",
        "type": "template",
        "z": "322c1861.3517f",
        "name": "setTempWWsoll by variable",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "setTempWWsoll {{payload}}\\rquit\\rquit\\r",
        "output": "str",
        "x": 920,
        "y": 160,
        "wires": [
            [
                "dcf2f38b.730788",
                "d119cb2b.534f6"
            ]
        ]
    },
    {
        "id": "73c47607.dadaa",
        "type": "ccu-get-value",
        "z": "322c1861.3517f",
        "name": "",
        "ccuConfig": "38263145.35ea0e",
        "iface": "ReGaHSS",
        "channel": "",
        "sysvar": "vito_Temp_Sollwert_WW_neu",
        "sysvarProperty": "value",
        "datapoint": "",
        "datapointProperty": "value",
        "setProp": "payload",
        "setPropType": "msg",
        "x": 680,
        "y": 160,
        "wires": [
            [
                "ae93f1db.b56fa8"
            ]
        ]
    },
    {
        "id": "94db4150.702cf8",
        "type": "ccu-poll",
        "z": "322c1861.3517f",
        "name": "",
        "script": "",
        "ccuConfig": "38263145.35ea0e",
        "x": 450,
        "y": 80,
        "wires": []
    },
    {
        "id": "b12c070f.3b4b28",
        "type": "delay",
        "z": "322c1861.3517f",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 480,
        "y": 160,
        "wires": [
            [
                "73c47607.dadaa"
            ]
        ]
    },
    {
        "id": "53ec26f7.1bc54",
        "type": "ccu-rpc-event",
        "z": "322c1861.3517f",
        "name": "RPC Event virtuelle Fernbedienung ",
        "iface": "",
        "ccuConfig": "38263145.35ea0e",
        "rooms": "",
        "roomsRx": "str",
        "functions": "",
        "functionsRx": "str",
        "device": "",
        "deviceRx": "str",
        "deviceName": "++H6+virtuelle-Fernbedienung-funk",
        "deviceNameRx": "str",
        "deviceType": "",
        "deviceTypeRx": "str",
        "channel": "",
        "channelRx": "str",
        "channelName": "++H6+Trigger-vtransfer",
        "channelNameRx": "str",
        "channelType": "",
        "channelTypeRx": "str",
        "channelIndex": "",
        "channelIndexRx": "str",
        "datapoint": "",
        "datapointRx": "str",
        "change": true,
        "working": false,
        "cache": true,
        "topic": "${CCU}/${Interface}/${channelName}/${datapoint}",
        "x": 140,
        "y": 120,
        "wires": [
            [
                "94db4150.702cf8",
                "b12c070f.3b4b28",
                "a1179413.89ec18"
            ]
        ]
    },
    {
        "id": "a1179413.89ec18",
        "type": "debug",
        "z": "322c1861.3517f",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 470,
        "y": 120,
        "wires": []
    },
    {
        "id": "52eed1a.ca2923",
        "type": "comment",
        "z": "322c1861.3517f",
        "name": "ACHTUNG TCP HOSTNAME UND PORT FUER VCONRTROLD ANPASSEN!!!   --->",
        "info": "ACHTUNG: Bitte Hostnamen und Port des vcontrold servers in den tcp connect nodes anpassen",
        "x": 310,
        "y": 20,
        "wires": []
    },
    {
        "id": "38263145.35ea0e",
        "type": "ccu-connection",
        "name": "localhost",
        "host": "localhost",
        "regaEnabled": true,
        "bcrfEnabled": true,
        "iprfEnabled": true,
        "virtEnabled": true,
        "bcwiEnabled": false,
        "cuxdEnabled": false,
        "regaPoll": true,
        "regaInterval": "30",
        "rpcPingTimeout": "60",
        "rpcInitAddress": "127.0.0.1",
        "rpcServerHost": "127.0.0.1",
        "rpcBinPort": "2047",
        "rpcXmlPort": "2048"
    }
]
