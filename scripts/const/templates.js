export const TEMPLATES = {
  ATTACK: {
    MELEE: JSON.stringify({
      nodes: [
        {
          id: "sD5QLr9chLwsgYP0",
          position: {
            x: 400,
            y: 200,
          },
          type: "animation-event",
          custom: {
            outputs: {
              qLp5R7IdukMxVDIW: {
                id: "qLp5R7IdukMxVDIW",
                label: "Outcome",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "BICKtjzghPrfTlag:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 1262,
            y: 174.00000000000003,
          },
          id: "TL6Kk0Guclu1NlBV",
          inputs: {
            origin: {
              connection: "LpJwIxyivaGp48CE:outputs:entry",
            },
            name: {
              connection: "t3n1vzU9Sonva5Mc:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "orJ3OZP3XtbaSThl:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 666.6270584270708,
            y: 211.9748704766734,
          },
          id: "BICKtjzghPrfTlag",
          custom: {
            outputs: {
              qHvhdFqXb77u8E8o: {
                id: "qHvhdFqXb77u8E8o",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
              sR6Cy5NKJKuZpmQg: {
                id: "sR6Cy5NKJKuZpmQg",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: {
              connection: "sD5QLr9chLwsgYP0:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "4EhKePoFthjKy3cs:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            attachTo: {
              value: true,
            },
            offset: {
              connection: "orJ3OZP3XtbaSThl:outputs:399AKY4XiQVOa9IK",
            },
            gridUnits: {
              value: true,
            },
            local: {
              value: true,
            },
            bindScale: {
              value: false,
            },
            location: {
              connection: "rqz2VWpb12jnNVsJ:outputs:entry",
            },
          },
          position: {
            x: 1938.944537280197,
            y: 172.7147974908261,
          },
          id: "frVQ1YLrlHRC7cgZ",
          outs: {
            out: {
              connection: "YHgqJBEw4ewjlVbn:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            file: {
              value: "jb2a.melee_attack.02.hammer.02",
            },
          },
          position: {
            x: 2482.7672976315434,
            y: 345.17074140096986,
          },
          id: "NYLUOwTBE86sbAAN",
          outs: {
            out: {
              connection: "omRRQdzdSOZWwuhL:ins:in",
            },
          },
        },
        {
          type: "aim",
          state: "rotateTowards",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            missed: {
              connection: "omRRQdzdSOZWwuhL:outputs:boolean",
            },
            attachTo: {
              value: true,
            },
            offset: {
              value: {
                x: 0,
                y: 0,
              },
            },
            towards: {
              connection: "cVH2uLjkbaiDLj7y:outputs:entry",
            },
          },
          position: {
            x: 2992.818932742287,
            y: 268.4145255118906,
          },
          id: "yu0XYNgzYqBCfSWA",
          outs: {
            out: {
              connection: "OmGdK1dCgptPzqP3:ins:in",
            },
          },
        },
        {
          type: "massloop",
          position: {
            x: 910.8772781417796,
            y: 199.61375672504948,
          },
          id: "4EhKePoFthjKy3cs",
          inputs: {
            sources: {
              connection: "sD5QLr9chLwsgYP0:outputs:sources",
            },
            targets: {
              connection: "sD5QLr9chLwsgYP0:outputs:targets",
            },
          },
          outs: {
            out: {
              connection: "TL6Kk0Guclu1NlBV:ins:in",
            },
            outAfter: {
              connection: "61SLPk5LsvmqYweA:ins:in",
            },
          },
        },
        {
          type: "list-contains",
          position: {
            x: 2749.5505839983325,
            y: 510.8254707180224,
          },
          id: "omRRQdzdSOZWwuhL",
          inputs: {
            list: {
              connection: "uDOziod19pariep8:outputs:list",
            },
            entry: {
              connection: "eVHmrAaG4xUHGddD:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "yu0XYNgzYqBCfSWA:ins:in",
            },
          },
          state: "boolean",
        },
        {
          type: "list-value",
          position: {
            x: 2480.2461211398777,
            y: 527.7962793853518,
          },
          id: "uDOziod19pariep8",
          inputs: {
            entry: {
              value: "failure,criticalFailure",
            },
          },
        },
        {
          type: "scale",
          position: {
            x: 3285.686594769565,
            y: 266.2962611124972,
          },
          id: "OmGdK1dCgptPzqP3",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            considerTokenScale: {
              value: true,
            },
            objectScale: {
              value: 4,
            },
          },
          state: "object",
          outs: {
            out: {
              connection: "97SXbZXscrpeD7WA:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            file: {
              value: "jb2a.melee_attack.02.hammer.01",
            },
          },
          position: {
            x: 2504.9101547744003,
            y: 142.13502711525592,
          },
          id: "iyqWsmhi545zAExD",
          outs: {
            out: {
              connection: "omRRQdzdSOZWwuhL:ins:in",
            },
          },
        },
        {
          type: "sound",
          position: {
            x: 3556.312055767467,
            y: 253.14152642169847,
          },
          id: "97SXbZXscrpeD7WA",
          outs: {
            out: {
              connection: "etvO5APwEvxn3FVb:ins:in",
            },
          },
          inputs: {
            file: {
              value: "ggg-sfx.melee.bludgeoning.strike.one-hand.01",
            },
            name: {
              connection: "v0KHPwdKpnShQbRb:outputs:entry",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "97SXbZXscrpeD7WA:outputs:sound",
            },
            location: {
              connection: "LrDNrzgvrkwQwaAZ:outputs:entry",
            },
            moveTowards: {
              connection: "8ccAMi6y0gAlcfEi:outputs:entry",
            },
          },
          position: {
            x: 4137.46040741582,
            y: 239.57724070741324,
          },
          id: "ODMkXdITR36KIePK",
        },
        {
          type: "execute-script",
          position: {
            x: 1566.0382462436587,
            y: 178.98200261217505,
          },
          id: "orJ3OZP3XtbaSThl",
          custom: {
            inputs: {
              Gu41iNHzvLtFjPnQ: {
                id: "Gu41iNHzvLtFjPnQ",
                label: "Source",
                slug: "input",
                isArray: false,
                type: "target",
              },
            },
            outputs: {
              "399AKY4XiQVOa9IK": {
                id: "399AKY4XiQVOa9IK",
                label: "Offset",
                slug: "output",
                isArray: false,
                type: "point",
              },
            },
          },
          inputs: {
            script: {
              value:
                '/**\n * @param {unknown[]} inputs\n * @returns {boolean} to break out current process\n * @returns {{type: EntryType; value: unknown}[]}\n *\n * @example\n * const x = inputs[0];\n * const y = inputs[1];\n * return [{type: "number", value: x + y}];\n */\nconst source = inputs[0];\nconst x = -Math.max(source?.token?.width ?? 2, 2) - 0.5\nreturn [{type: "point", value: {x: x, y: 0}}];',
            },
            Gu41iNHzvLtFjPnQ: {
              connection: "4EhKePoFthjKy3cs:outputs:source",
            },
          },
          outs: {
            out: {
              connection: "frVQ1YLrlHRC7cgZ:ins:in",
            },
          },
        },
        {
          type: "module-enabled",
          position: {
            x: 2163.883484338895,
            y: 303.9748597550318,
          },
          id: "YHgqJBEw4ewjlVbn",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            true: {
              connection: "iyqWsmhi545zAExD:ins:in",
            },
            false: {
              connection: "NYLUOwTBE86sbAAN:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: {
              connection: "97SXbZXscrpeD7WA:outputs:sound",
            },
          },
          position: {
            x: 3863.650883606295,
            y: 249.80819308836527,
          },
          id: "etvO5APwEvxn3FVb",
          outs: {
            out: {
              connection: "ODMkXdITR36KIePK:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 1247.879120879121,
            y: 464.4010989010992,
          },
          id: "61SLPk5LsvmqYweA",
          inputs: {
            local: {
              value: true,
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "BICKtjzghPrfTlag:outputs:qHvhdFqXb77u8E8o",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1062.9560439560441,
            y: 146.65109890109932,
          },
          id: "LpJwIxyivaGp48CE",
        },
        {
          inputs: {
            entry: {
              connection: "BICKtjzghPrfTlag:outputs:sR6Cy5NKJKuZpmQg",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1060.2060439560441,
            y: 100.15109890109937,
          },
          id: "t3n1vzU9Sonva5Mc",
        },
        {
          inputs: {
            entry: {
              connection: "sD5QLr9chLwsgYP0:outputs:qLp5R7IdukMxVDIW",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2579.7060439560437,
            y: 609.0677655677658,
          },
          id: "eVHmrAaG4xUHGddD",
        },
        {
          inputs: {
            entry: {
              connection: "BICKtjzghPrfTlag:outputs:sR6Cy5NKJKuZpmQg",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3390.7060439560437,
            y: 201.31776556776578,
          },
          id: "v0KHPwdKpnShQbRb",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:source",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3986.956043956044,
            y: 153.8177655677656,
          },
          id: "LrDNrzgvrkwQwaAZ",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3988.2060439560446,
            y: 205.0677655677656,
          },
          id: "8ccAMi6y0gAlcfEi",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:source",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1765,
            y: 115,
          },
          id: "rqz2VWpb12jnNVsJ",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2853,
            y: 355,
          },
          id: "cVH2uLjkbaiDLj7y",
        },
      ],
      variables: {
        "BICKtjzghPrfTlag:outputs:sR6Cy5NKJKuZpmQg": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "BICKtjzghPrfTlag:outputs:qHvhdFqXb77u8E8o": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "sD5QLr9chLwsgYP0:outputs:qLp5R7IdukMxVDIW": {
          isArray: false,
          label: "Outcome",
          type: "text",
        },
        "4EhKePoFthjKy3cs:outputs:source": {
          isArray: false,
          label: "Source",
          type: "target",
        },
        "4EhKePoFthjKy3cs:outputs:target": {
          isArray: false,
          label: "Target",
          type: "target",
        },
      },
    }),
    RANGED: JSON.stringify({
      nodes: [
        {
          id: "sD5QLr9chLwsgYP0",
          position: {
            x: 400,
            y: 200,
          },
          type: "animation-event",
          custom: {
            outputs: {
              qLp5R7IdukMxVDIW: {
                id: "qLp5R7IdukMxVDIW",
                label: "Outcome",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "BICKtjzghPrfTlag:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 1262,
            y: 174.00000000000003,
          },
          id: "TL6Kk0Guclu1NlBV",
          inputs: {
            origin: {
              connection: "LpJwIxyivaGp48CE:outputs:entry",
            },
            name: {
              connection: "t3n1vzU9Sonva5Mc:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "frVQ1YLrlHRC7cgZ:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 666.6270584270708,
            y: 211.9748704766734,
          },
          id: "BICKtjzghPrfTlag",
          custom: {
            outputs: {
              qHvhdFqXb77u8E8o: {
                id: "qHvhdFqXb77u8E8o",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
              sR6Cy5NKJKuZpmQg: {
                id: "sR6Cy5NKJKuZpmQg",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: {
              connection: "sD5QLr9chLwsgYP0:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "4EhKePoFthjKy3cs:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            attachTo: {
              value: true,
            },
            gridUnits: {
              value: true,
            },
            local: {
              value: true,
            },
            bindScale: {
              value: false,
            },
            location: {
              connection: "ulCo0tE3TtIj0s6j:outputs:entry",
            },
          },
          position: {
            x: 1562.944537280197,
            y: 180.7147974908261,
          },
          id: "frVQ1YLrlHRC7cgZ",
          outs: {
            out: {
              connection: "YHgqJBEw4ewjlVbn:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            file: {
              value: "jb2a.melee_attack.02.hammer.02",
            },
          },
          position: {
            x: 2114.9895198537656,
            y: 370.72629695652535,
          },
          id: "NYLUOwTBE86sbAAN",
          outs: {
            out: {
              connection: "omRRQdzdSOZWwuhL:ins:in",
            },
          },
        },
        {
          type: "aim",
          state: "stretchTo",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            missed: {
              connection: "omRRQdzdSOZWwuhL:outputs:boolean",
            },
            towards: {
              connection: "uIm1VuMI8DQXndrY:outputs:entry",
            },
          },
          position: {
            x: 2631.7078216311756,
            y: 217.30341440077945,
          },
          id: "yu0XYNgzYqBCfSWA",
          outs: {
            out: {
              connection: "97SXbZXscrpeD7WA:ins:in",
            },
          },
        },
        {
          type: "massloop",
          position: {
            x: 910.8772781417796,
            y: 199.61375672504948,
          },
          id: "4EhKePoFthjKy3cs",
          inputs: {
            sources: {
              connection: "sD5QLr9chLwsgYP0:outputs:sources",
            },
            targets: {
              connection: "sD5QLr9chLwsgYP0:outputs:targets",
            },
          },
          outs: {
            out: {
              connection: "TL6Kk0Guclu1NlBV:ins:in",
            },
            outAfter: {
              connection: "61SLPk5LsvmqYweA:ins:in",
            },
          },
        },
        {
          type: "list-contains",
          position: {
            x: 2381.7728062205547,
            y: 536.3810262735778,
          },
          id: "omRRQdzdSOZWwuhL",
          inputs: {
            list: {
              connection: "uDOziod19pariep8:outputs:list",
            },
            entry: {
              connection: "eVHmrAaG4xUHGddD:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "yu0XYNgzYqBCfSWA:ins:in",
            },
          },
          state: "boolean",
        },
        {
          type: "list-value",
          position: {
            x: 2112.4683433621,
            y: 553.3518349409073,
          },
          id: "uDOziod19pariep8",
          inputs: {
            entry: {
              value: "failure,criticalFailure",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "TL6Kk0Guclu1NlBV:outputs:effect",
            },
            file: {
              value: "jb2a.melee_attack.02.hammer.01",
            },
          },
          position: {
            x: 2137.1323769966225,
            y: 167.6905826708114,
          },
          id: "iyqWsmhi545zAExD",
          outs: {
            out: {
              connection: "omRRQdzdSOZWwuhL:ins:in",
            },
          },
        },
        {
          type: "sound",
          position: {
            x: 2957.7406271960385,
            y: 204.57009785026992,
          },
          id: "97SXbZXscrpeD7WA",
          outs: {
            out: {
              connection: "etvO5APwEvxn3FVb:ins:in",
            },
          },
          inputs: {
            file: {
              value: "ggg-sfx.melee.bludgeoning.strike.one-hand.01",
            },
            name: {
              connection: "v0KHPwdKpnShQbRb:outputs:entry",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "97SXbZXscrpeD7WA:outputs:sound",
            },
            location: {
              connection: "LrDNrzgvrkwQwaAZ:outputs:entry",
            },
            moveTowards: {
              connection: "8ccAMi6y0gAlcfEi:outputs:entry",
            },
          },
          position: {
            x: 3538.8889788443907,
            y: 191.00581213598468,
          },
          id: "ODMkXdITR36KIePK",
        },
        {
          type: "module-enabled",
          position: {
            x: 1796.1057065611171,
            y: 329.5304153105873,
          },
          id: "YHgqJBEw4ewjlVbn",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            true: {
              connection: "iyqWsmhi545zAExD:ins:in",
            },
            false: {
              connection: "NYLUOwTBE86sbAAN:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: {
              connection: "97SXbZXscrpeD7WA:outputs:sound",
            },
          },
          position: {
            x: 3265.079455034866,
            y: 201.23676451693672,
          },
          id: "etvO5APwEvxn3FVb",
          outs: {
            out: {
              connection: "ODMkXdITR36KIePK:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 1247.879120879121,
            y: 464.4010989010992,
          },
          id: "61SLPk5LsvmqYweA",
          inputs: {
            local: {
              value: true,
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "BICKtjzghPrfTlag:outputs:qHvhdFqXb77u8E8o",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1062.9560439560441,
            y: 146.65109890109932,
          },
          id: "LpJwIxyivaGp48CE",
        },
        {
          inputs: {
            entry: {
              connection: "BICKtjzghPrfTlag:outputs:sR6Cy5NKJKuZpmQg",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1060.2060439560441,
            y: 100.15109890109937,
          },
          id: "t3n1vzU9Sonva5Mc",
        },
        {
          inputs: {
            entry: {
              connection: "sD5QLr9chLwsgYP0:outputs:qLp5R7IdukMxVDIW",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2211.928266178266,
            y: 634.6233211233214,
          },
          id: "eVHmrAaG4xUHGddD",
        },
        {
          inputs: {
            entry: {
              connection: "BICKtjzghPrfTlag:outputs:sR6Cy5NKJKuZpmQg",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2792.1346153846152,
            y: 152.74633699633722,
          },
          id: "v0KHPwdKpnShQbRb",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:source",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3388.3846153846157,
            y: 105.24633699633705,
          },
          id: "LrDNrzgvrkwQwaAZ",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3389.6346153846157,
            y: 156.49633699633705,
          },
          id: "8ccAMi6y0gAlcfEi",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2476.3055555555557,
            y: 312.38888888888886,
          },
          id: "uIm1VuMI8DQXndrY",
        },
        {
          inputs: {
            entry: {
              connection: "4EhKePoFthjKy3cs:outputs:source",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1431.3055555555557,
            y: 331.13888888888886,
          },
          id: "ulCo0tE3TtIj0s6j",
        },
      ],
      variables: {
        "BICKtjzghPrfTlag:outputs:sR6Cy5NKJKuZpmQg": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "BICKtjzghPrfTlag:outputs:qHvhdFqXb77u8E8o": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "sD5QLr9chLwsgYP0:outputs:qLp5R7IdukMxVDIW": {
          isArray: false,
          label: "Outcome",
          type: "text",
        },
        "4EhKePoFthjKy3cs:outputs:source": {
          isArray: false,
          label: "Source",
          type: "target",
        },
        "4EhKePoFthjKy3cs:outputs:target": {
          isArray: false,
          label: "Target",
          type: "target",
        },
      },
    }),
  },
  EFFECTS: {
    GENERAL: JSON.stringify({
      nodes: [
        {
          id: "6YQsMvppsBtDhicx",
          position: { x: 693.3333333333331, y: 171.66666666666652 },
          type: "animation-event",
          custom: {
            outputs: {
              Av8O4cl3UL4yoig4: {
                id: "Av8O4cl3UL4yoig4",
                input: "template",
                label: "Template",
                slug: "path",
                isArray: false,
                type: "region",
              },
            },
          },
          inputs: { name: { value: "placeholder-trigger-names" } },
          outs: { out: { connection: "IDBOE3UQ16iS3e1s:ins:in" } },
        },
        {
          type: "extract-item",
          position: { x: 957.9230754903024, y: 182.56668923695872 },
          id: "IDBOE3UQ16iS3e1s",
          custom: {
            outputs: {
              "2treJ37c3cDCVPMu": {
                id: "2treJ37c3cDCVPMu",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              M8A8EwIrtiDg2OTa: {
                id: "M8A8EwIrtiDg2OTa",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: { connection: "6YQsMvppsBtDhicx:outputs:item" },
          },
          outs: { out: { connection: "YkaKOby7rs0ZJkMd:ins:in" } },
        },
        {
          type: "effect",
          position: { x: 1211.9230582608025, y: 164.50000985463453 },
          id: "YkaKOby7rs0ZJkMd",
          inputs: {
            name: { connection: "IDBOE3UQ16iS3e1s:outputs:2treJ37c3cDCVPMu" },
            origin: {
              connection: "IDBOE3UQ16iS3e1s:outputs:M8A8EwIrtiDg2OTa",
            },
          },
          outs: { out: { connection: "M2LPZXxFtk7IYsI1:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            file: { value: "jb2a.breath_weapons.poison.cone.green" },
          },
          position: { x: 1527.33331976077, y: 161.80557558271607 },
          id: "M2LPZXxFtk7IYsI1",
          outs: { out: { connection: "dsWJLD3HKNCeqtZ3:ins:in" } },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            location: {
              connection: "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4",
            },
            cacheLocation: { value: true },
          },
          position: { x: 1757.1111078214196, y: 160.70561627282018 },
          id: "dsWJLD3HKNCeqtZ3",
          outs: { out: { connection: "IgfxnQCeRvGS1Fsb:ins:in" } },
        },
        {
          type: "play",
          position: { x: 3396.831584591428, y: 160.47217859162225 },
          id: "yEtSLPQoraUDwZNe",
          inputs: { preload: { value: true }, local: { value: true } },
        },
        {
          type: "sound",
          position: { x: 2276.589743589744, y: 158.05555555555554 },
          id: "SjuPUbNBG4hqTOZj",
          inputs: {
            file: { value: "ggg-sfx.magic.arcane.surge.wave.01" },
            name: { connection: "IDBOE3UQ16iS3e1s:outputs:2treJ37c3cDCVPMu" },
          },
          outs: { out: { connection: "eC64ofKiK0pXud4C:ins:in" } },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: { connection: "SjuPUbNBG4hqTOZj:outputs:sound" },
            location: {
              connection: "eC64ofKiK0pXud4C:outputs:2O7wgbv7EtzYU1n7",
            },
          },
          position: { x: 2879.75, y: 160.56666666666678 },
          id: "FRLsuGhMWl4tzz5G",
          outs: { out: { connection: "1FULxtDJ1hnOKDT2:ins:in" } },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: { connection: "SjuPUbNBG4hqTOZj:outputs:sound" },
          },
          position: { x: 3109.1944444444443, y: 160.1666666666668 },
          id: "1FULxtDJ1hnOKDT2",
          outs: { out: { connection: "yEtSLPQoraUDwZNe:ins:in" } },
        },
        {
          type: "execute-script",
          position: { x: 2583.333333333333, y: 157.22222222222217 },
          id: "eC64ofKiK0pXud4C",
          custom: {
            inputs: {
              HECN4KEuSNfeiuvZ: {
                id: "HECN4KEuSNfeiuvZ",
                label: "Template",
                slug: "input",
                isArray: false,
                type: "any",
              },
            },
            outputs: {
              "2O7wgbv7EtzYU1n7": {
                id: "2O7wgbv7EtzYU1n7",
                label: "Point",
                slug: "output",
                isArray: false,
                type: "point",
              },
            },
          },
          inputs: {
            script: {
              value:
                '/**\n * @param {unknown[]} inputs\n * @returns {boolean} to break out current process\n * @returns {{type: EntryType; value: unknown}[]}\n *\n * @example\n * const x = inputs[0];\n * const y = inputs[1];\n * return [{type: "number", value: x + y}];\n */\nconst template = inputs[0]\nreturn [{type: "point", value: template?.shapes?.[0]?.center}];',
            },
            HECN4KEuSNfeiuvZ: { connection: "NVx93T7idfSjvcVN:outputs:entry" },
          },
          outs: { out: { connection: "FRLsuGhMWl4tzz5G:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4" },
          },
          type: "__variable_getter__",
          position: { x: 2411.4444444444443, y: 106.77777777777777 },
          id: "NVx93T7idfSjvcVN",
        },
        {
          type: "aim",
          state: "stretchTo",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            towards: {
              connection: "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4",
            },
          },
          position: { x: 1983.3333333333333, y: 160.89999999999998 },
          id: "IgfxnQCeRvGS1Fsb",
          outs: { out: { connection: "SjuPUbNBG4hqTOZj:ins:in" } },
        },
      ],
      variables: {
        "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4": {
          isArray: false,
          label: "Template",
          type: "region",
        },
      },
    }),
  },
  TEMPLATES: {
    BURSTS_EMANATIONS: JSON.stringify({
      nodes: [
        {
          id: "cQ4T2clnTJ2z70XX",
          position: {
            x: 679.9999999999999,
            y: 168.3333333333332,
          },
          type: "animation-event",
          custom: {
            outputs: {
              MWUBRl5UO1EKczQU: {
                id: "MWUBRl5UO1EKczQU",
                input: "template",
                label: "Template",
                slug: "path",
                isArray: false,
                type: "region",
              },
            },
          },
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "yrj2uPt3khcsH3UF:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 944.5897421569691,
            y: 179.2333559036254,
          },
          id: "yrj2uPt3khcsH3UF",
          custom: {
            outputs: {
              zZlfyqWnDi4qyRui: {
                id: "zZlfyqWnDi4qyRui",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              YYCymq4nW7jlJYwU: {
                id: "YYCymq4nW7jlJYwU",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: {
              connection: "cQ4T2clnTJ2z70XX:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "kMn5MlQ9xR1cqy46:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 1198.5897249274692,
            y: 161.1666765213012,
          },
          id: "kMn5MlQ9xR1cqy46",
          inputs: {
            name: {
              connection: "yrj2uPt3khcsH3UF:outputs:zZlfyqWnDi4qyRui",
            },
            origin: {
              connection: "yrj2uPt3khcsH3UF:outputs:YYCymq4nW7jlJYwU",
            },
          },
          outs: {
            out: {
              connection: "fE0NZjyKJ9G7W7F6:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            file: {
              value: "jb2a.breath_weapons02.burst.cone.fire.orange.02",
            },
          },
          position: {
            x: 1513.9999864274369,
            y: 158.47224224938276,
          },
          id: "fE0NZjyKJ9G7W7F6",
          outs: {
            out: {
              connection: "xs7iLq9hzxYOTYOc:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            location: {
              connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU",
            },
            cacheLocation: {
              value: true,
            },
            local: {
              value: true,
            },
            gridUnits: {
              value: true,
            },
          },
          position: {
            x: 1743.7777744880864,
            y: 157.37228293948687,
          },
          id: "xs7iLq9hzxYOTYOc",
          outs: {
            out: {
              connection: "xeZGA9hv1nqQMcHt:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 3396.831584591428,
            y: 160.47217859162225,
          },
          id: "stsDzcixyehs1bhi",
          inputs: {
            preload: {
              value: true,
            },
            local: {
              value: true,
            },
          },
        },
        {
          type: "sound",
          position: {
            x: 2276.589743589744,
            y: 158.05555555555554,
          },
          id: "Anm8jTC91Wwav5VE",
          inputs: {
            file: {
              value: "ggg-sfx.magic.arcane.surge.wave.01",
            },
            name: {
              connection: "yrj2uPt3khcsH3UF:outputs:zZlfyqWnDi4qyRui",
            },
          },
          outs: {
            out: {
              connection: "R40kXsj8B9KW6tj1:ins:in",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "Anm8jTC91Wwav5VE:outputs:sound",
            },
            location: {
              connection: "R40kXsj8B9KW6tj1:outputs:tS3ScMUSZdNDGxqT",
            },
          },
          position: {
            x: 2879.75,
            y: 160.56666666666678,
          },
          id: "RD3nS87WGg1yDOj3",
          outs: {
            out: {
              connection: "aUJ2EETQxRnbzPSm:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: {
              connection: "Anm8jTC91Wwav5VE:outputs:sound",
            },
          },
          position: {
            x: 3109.1944444444443,
            y: 160.1666666666668,
          },
          id: "aUJ2EETQxRnbzPSm",
          outs: {
            out: {
              connection: "stsDzcixyehs1bhi:ins:in",
            },
          },
        },
        {
          type: "execute-script",
          position: {
            x: 2583.333333333333,
            y: 157.22222222222217,
          },
          id: "R40kXsj8B9KW6tj1",
          custom: {
            inputs: {
              Fd9FyG9Lgg2AyIcQ: {
                id: "Fd9FyG9Lgg2AyIcQ",
                label: "Template",
                slug: "input",
                isArray: false,
                type: "any",
              },
            },
            outputs: {
              tS3ScMUSZdNDGxqT: {
                id: "tS3ScMUSZdNDGxqT",
                label: "Point",
                slug: "output",
                isArray: false,
                type: "point",
              },
            },
          },
          inputs: {
            script: {
              value:
                '/**\n * @param {unknown[]} inputs\n * @returns {boolean} to break out current process\n * @returns {{type: EntryType; value: unknown}[]}\n *\n * @example\n * const x = inputs[0];\n * const y = inputs[1];\n * return [{type: "number", value: x + y}];\n */\nconst template = inputs[0]\nreturn [{type: "point", value: template?.shapes?.[0]?.center}];',
            },
            Fd9FyG9Lgg2AyIcQ: {
              connection: "0kqP5lR3IHrVUjnZ:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "RD3nS87WGg1yDOj3:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2411.4444444444443,
            y: 106.77777777777777,
          },
          id: "0kqP5lR3IHrVUjnZ",
        },
        {
          type: "aim",
          state: "stretchTo",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            towards: {
              connection: "j4GJPyLtntQcZGOB:outputs:entry",
            },
            local: {
              value: true,
            },
            gridUnits: {
              value: true,
            },
          },
          position: {
            x: 1987,
            y: 160.14999999999998,
          },
          id: "xeZGA9hv1nqQMcHt",
          outs: {
            out: {
              connection: "Anm8jTC91Wwav5VE:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1814.6190476190473,
            y: 103.85714285714283,
          },
          id: "j4GJPyLtntQcZGOB",
        },
      ],
      variables: {
        "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU": {
          isArray: false,
          label: "Template",
          type: "region",
        },
      },
    }),
    CONES_LINES: JSON.stringify({
      nodes: [
        {
          id: "cQ4T2clnTJ2z70XX",
          position: {
            x: 749.9999999999999,
            y: 171.66666666666657,
          },
          type: "animation-event",
          custom: {
            outputs: {
              MWUBRl5UO1EKczQU: {
                id: "MWUBRl5UO1EKczQU",
                input: "template",
                label: "Template",
                slug: "path",
                isArray: false,
                type: "region",
              },
            },
          },
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "yrj2uPt3khcsH3UF:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 1014.5897421569691,
            y: 182.56668923695878,
          },
          id: "yrj2uPt3khcsH3UF",
          custom: {
            outputs: {
              zZlfyqWnDi4qyRui: {
                id: "zZlfyqWnDi4qyRui",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              YYCymq4nW7jlJYwU: {
                id: "YYCymq4nW7jlJYwU",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: {
              connection: "cQ4T2clnTJ2z70XX:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "kMn5MlQ9xR1cqy46:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 1268.5897249274692,
            y: 164.50000985463458,
          },
          id: "kMn5MlQ9xR1cqy46",
          inputs: {
            name: {
              connection: "yrj2uPt3khcsH3UF:outputs:zZlfyqWnDi4qyRui",
            },
            origin: {
              connection: "yrj2uPt3khcsH3UF:outputs:YYCymq4nW7jlJYwU",
            },
          },
          outs: {
            out: {
              connection: "fE0NZjyKJ9G7W7F6:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            file: {
              value: "jb2a.template_circle.out_pulse.02.burst.bluewhite",
            },
          },
          position: {
            x: 1583.9999864274369,
            y: 161.80557558271613,
          },
          id: "fE0NZjyKJ9G7W7F6",
          outs: {
            out: {
              connection: "xs7iLq9hzxYOTYOc:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            location: {
              connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU",
            },
            cacheLocation: {
              value: true,
            },
          },
          position: {
            x: 1813.7777744880864,
            y: 160.70561627282024,
          },
          id: "xs7iLq9hzxYOTYOc",
          outs: {
            out: {
              connection: "bHiknSSrgUd6sHKK:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 3396.831584591428,
            y: 160.47217859162225,
          },
          id: "stsDzcixyehs1bhi",
          inputs: {
            preload: {
              value: true,
            },
            local: {
              value: true,
            },
          },
        },
        {
          type: "scale",
          position: {
            x: 2039.5555761695744,
            y: 158.0000638961787,
          },
          id: "bHiknSSrgUd6sHKK",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            objectScale: {
              value: 1.1,
            },
            scaleInScale: {
              value: 0.9,
            },
            scaleInDuration: {
              value: 750,
            },
            scaleInEase: {
              value: "easeOutCubic",
            },
          },
          outs: {
            out: {
              connection: "Anm8jTC91Wwav5VE:ins:in",
            },
          },
          state: "object",
        },
        {
          type: "sound",
          position: {
            x: 2276.589743589744,
            y: 158.05555555555554,
          },
          id: "Anm8jTC91Wwav5VE",
          inputs: {
            file: {
              value: "ggg-sfx.magic.arcane.surge.wave.01",
            },
            name: {
              connection: "yrj2uPt3khcsH3UF:outputs:zZlfyqWnDi4qyRui",
            },
          },
          outs: {
            out: {
              connection: "R40kXsj8B9KW6tj1:ins:in",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "Anm8jTC91Wwav5VE:outputs:sound",
            },
            location: {
              connection: "R40kXsj8B9KW6tj1:outputs:tS3ScMUSZdNDGxqT",
            },
          },
          position: {
            x: 2879.75,
            y: 160.56666666666678,
          },
          id: "RD3nS87WGg1yDOj3",
          outs: {
            out: {
              connection: "aUJ2EETQxRnbzPSm:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: {
              connection: "Anm8jTC91Wwav5VE:outputs:sound",
            },
          },
          position: {
            x: 3109.1944444444443,
            y: 160.1666666666668,
          },
          id: "aUJ2EETQxRnbzPSm",
          outs: {
            out: {
              connection: "stsDzcixyehs1bhi:ins:in",
            },
          },
        },
        {
          type: "execute-script",
          position: {
            x: 2583.333333333333,
            y: 157.22222222222217,
          },
          id: "R40kXsj8B9KW6tj1",
          custom: {
            inputs: {
              Fd9FyG9Lgg2AyIcQ: {
                id: "Fd9FyG9Lgg2AyIcQ",
                label: "Template",
                slug: "input",
                isArray: false,
                type: "any",
              },
            },
            outputs: {
              tS3ScMUSZdNDGxqT: {
                id: "tS3ScMUSZdNDGxqT",
                label: "Point",
                slug: "output",
                isArray: false,
                type: "point",
              },
            },
          },
          inputs: {
            script: {
              value:
                '/**\n * @param {unknown[]} inputs\n * @returns {boolean} to break out current process\n * @returns {{type: EntryType; value: unknown}[]}\n *\n * @example\n * const x = inputs[0];\n * const y = inputs[1];\n * return [{type: "number", value: x + y}];\n */\nconst template = inputs[0]\nreturn [{type: "point", value: template?.shapes?.[0]?.center}];',
            },
            Fd9FyG9Lgg2AyIcQ: {
              connection: "0kqP5lR3IHrVUjnZ:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "RD3nS87WGg1yDOj3:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2411.4444444444443,
            y: 106.77777777777777,
          },
          id: "0kqP5lR3IHrVUjnZ",
        },
      ],
      variables: {
        "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU": {
          isArray: false,
          label: "Template",
          type: "region",
        },
      },
    }),
  },
};
