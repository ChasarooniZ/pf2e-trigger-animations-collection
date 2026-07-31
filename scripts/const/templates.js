export const TEMPLATES = {
  ATTACK: {
    MELEE: JSON.stringify({
      nodes: [
        {
          id: "8wTEhq8YlQlBHz5w",
          position: { x: 776.6666666666667, y: 205 },
          type: "animation-event",
          custom: {
            outputs: {
              "5vNzigzyUsahAVwG": {
                id: "5vNzigzyUsahAVwG",
                label: "Outcome",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: { name: { value: "placeholder-trigger-names" } },
          outs: { out: { connection: "rovM5Um9QTKwvnmr:ins:in" } },
        },
        {
          type: "effect",
          position: { x: 1638.6666666666667, y: 179 },
          id: "NkLAZY3xuHhbK1va",
          inputs: {
            origin: { connection: "R7arc5sxTgZrTWxR:outputs:entry" },
            name: { connection: "CaVXFXqPTjvZEKDS:outputs:entry" },
          },
          outs: { out: { connection: "v09wSWnCDrF3MjXs:ins:in" } },
        },
        {
          type: "extract-item",
          position: { x: 1043.2937250937375, y: 216.9748704766734 },
          id: "rovM5Um9QTKwvnmr",
          custom: {
            outputs: {
              lylXn7hFsJOv3Mgi: {
                id: "lylXn7hFsJOv3Mgi",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
              vzqXlHQsYSrIYLDu: {
                id: "vzqXlHQsYSrIYLDu",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: { connection: "8wTEhq8YlQlBHz5w:outputs:item" },
          },
          outs: { out: { connection: "YexGxJsBKGIWEQTx:ins:in" } },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: { connection: "NkLAZY3xuHhbK1va:outputs:effect" },
            gridUnits: { value: true },
            local: { value: true },
            bindScale: { value: false },
            location: { connection: "fH6JJnJ0Gr8cUe6v:outputs:entry" },
          },
          position: { x: 1938.944537280197, y: 172.7147974908261 },
          id: "v09wSWnCDrF3MjXs",
          outs: { out: { connection: "AaVVeHGGI1FkzXM3:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "NkLAZY3xuHhbK1va:outputs:effect" },
            file: { value: "jb2a.melee_attack.02.hammer.02" },
          },
          position: { x: 2482.7672976315434, y: 345.17074140096986 },
          id: "IfSNHkoJoogWicjG",
          outs: { out: { connection: "axEYaKIdAAqdI0bZ:ins:in" } },
        },
        {
          type: "aim",
          state: "rotateTowards",
          inputs: {
            effect: { connection: "NkLAZY3xuHhbK1va:outputs:effect" },
            missed: { connection: "axEYaKIdAAqdI0bZ:outputs:boolean" },
            attachTo: { value: true },
            offset: { value: { x: 0, y: 0 } },
            towards: { connection: "5s1QHqqPNkPWrGPF:outputs:entry" },
          },
          position: { x: 2992.818932742287, y: 268.4145255118906 },
          id: "jC26f0rfZh7mzKmk",
          outs: { out: { connection: "XgVGLBrLzXfDUMHm:ins:in" } },
        },
        {
          type: "massloop",
          position: { x: 1287.5439448084462, y: 204.61375672504948 },
          id: "YexGxJsBKGIWEQTx",
          inputs: {
            sources: { connection: "8wTEhq8YlQlBHz5w:outputs:sources" },
            targets: { connection: "8wTEhq8YlQlBHz5w:outputs:targets" },
          },
          outs: {
            out: { connection: "NkLAZY3xuHhbK1va:ins:in" },
            outAfter: { connection: "Ym0mBKXartUQFfo6:ins:in" },
          },
        },
        {
          type: "list-contains",
          position: { x: 2749.5505839983325, y: 510.8254707180224 },
          id: "axEYaKIdAAqdI0bZ",
          inputs: {
            list: { connection: "mTOJ6B7TJPjBQIiM:outputs:list" },
            entry: { connection: "lHMKkkylgxmWplyi:outputs:entry" },
          },
          outs: { out: { connection: "jC26f0rfZh7mzKmk:ins:in" } },
          state: "boolean",
        },
        {
          type: "list-value",
          position: { x: 2480.2461211398777, y: 527.7962793853518 },
          id: "mTOJ6B7TJPjBQIiM",
          inputs: { entry: { value: "failure,criticalFailure" } },
        },
        {
          type: "scale",
          position: { x: 3285.686594769565, y: 266.2962611124972 },
          id: "XgVGLBrLzXfDUMHm",
          inputs: {
            effect: { connection: "NkLAZY3xuHhbK1va:outputs:effect" },
            considerTokenScale: { value: true },
            objectScale: { value: 4 },
          },
          state: "object",
          outs: { out: { connection: "JtJf29da99o1XRT0:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "NkLAZY3xuHhbK1va:outputs:effect" },
            file: { value: "jb2a.melee_attack.02.hammer.01" },
          },
          position: { x: 2504.9101547744003, y: 142.13502711525592 },
          id: "TzKwbDIPyj9I1mtK",
          outs: { out: { connection: "axEYaKIdAAqdI0bZ:ins:in" } },
        },
        {
          type: "sound",
          position: { x: 3764.6453891008, y: 269.8081930883651 },
          id: "PIHuQ9JqU3jU9pFn",
          outs: { out: { connection: "cpmszTokwCu7umXl:ins:in" } },
          inputs: {
            file: { value: "ggg-sfx.melee.bludgeoning.strike.one-hand.01" },
            name: { connection: "OVXBEp6GUMSvvoJd:outputs:entry" },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: { connection: "PIHuQ9JqU3jU9pFn:outputs:sound" },
            location: { connection: "fbm2LzFz8CkMIFj0:outputs:entry" },
            moveTowards: { connection: "w3pm41EWFDdIvWDa:outputs:entry" },
          },
          position: { x: 4345.793740749154, y: 256.24390737407987 },
          id: "XWX7h631k8nJJLXn",
        },
        {
          type: "module-enabled",
          position: { x: 2163.883484338895, y: 303.9748597550318 },
          id: "AaVVeHGGI1FkzXM3",
          inputs: { module: { value: "jb2a_patreon" } },
          outs: {
            true: { connection: "TzKwbDIPyj9I1mtK:ins:in" },
            false: { connection: "IfSNHkoJoogWicjG:ins:in" },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: { connection: "PIHuQ9JqU3jU9pFn:outputs:sound" },
          },
          position: { x: 4071.9842169396284, y: 266.4748597550319 },
          id: "cpmszTokwCu7umXl",
          outs: { out: { connection: "XWX7h631k8nJJLXn:ins:in" } },
        },
        {
          type: "play",
          position: { x: 1624.5457875457878, y: 469.4010989010992 },
          id: "Ym0mBKXartUQFfo6",
          inputs: { preload: { value: true }, local: { value: true } },
        },
        {
          inputs: {
            entry: { connection: "rovM5Um9QTKwvnmr:outputs:lylXn7hFsJOv3Mgi" },
          },
          type: "__variable_getter__",
          position: { x: 1439.6227106227109, y: 151.65109890109932 },
          id: "R7arc5sxTgZrTWxR",
        },
        {
          inputs: {
            entry: { connection: "rovM5Um9QTKwvnmr:outputs:vzqXlHQsYSrIYLDu" },
          },
          type: "__variable_getter__",
          position: { x: 1436.8727106227109, y: 105.15109890109932 },
          id: "CaVXFXqPTjvZEKDS",
        },
        {
          inputs: {
            entry: { connection: "8wTEhq8YlQlBHz5w:outputs:5vNzigzyUsahAVwG" },
          },
          type: "__variable_getter__",
          position: { x: 2579.7060439560437, y: 609.0677655677658 },
          id: "lHMKkkylgxmWplyi",
        },
        {
          inputs: {
            entry: { connection: "rovM5Um9QTKwvnmr:outputs:vzqXlHQsYSrIYLDu" },
          },
          type: "__variable_getter__",
          position: { x: 3599.0393772893767, y: 217.98443223443246 },
          id: "OVXBEp6GUMSvvoJd",
        },
        {
          inputs: {
            entry: { connection: "YexGxJsBKGIWEQTx:outputs:source" },
          },
          type: "__variable_getter__",
          position: { x: 4195.289377289377, y: 170.48443223443223 },
          id: "fbm2LzFz8CkMIFj0",
        },
        {
          inputs: {
            entry: { connection: "YexGxJsBKGIWEQTx:outputs:target" },
          },
          type: "__variable_getter__",
          position: { x: 4196.5393772893785, y: 221.73443223443223 },
          id: "w3pm41EWFDdIvWDa",
        },
        {
          inputs: {
            entry: { connection: "YexGxJsBKGIWEQTx:outputs:source" },
          },
          type: "__variable_getter__",
          position: { x: 1765, y: 115 },
          id: "fH6JJnJ0Gr8cUe6v",
        },
        {
          inputs: {
            entry: { connection: "YexGxJsBKGIWEQTx:outputs:target" },
          },
          type: "__variable_getter__",
          position: { x: 2853, y: 355 },
          id: "5s1QHqqPNkPWrGPF",
        },
        {
          type: "sprite",
          inputs: {
            effect: { connection: "NkLAZY3xuHhbK1va:outputs:effect" },
            anchor: { value: { x: 0.4, y: 0.5 } },
          },
          position: { x: 3527.6666666666665, y: 267.58333333333337 },
          id: "JtJf29da99o1XRT0",
          outs: { out: { connection: "PIHuQ9JqU3jU9pFn:ins:in" } },
        },
      ],
      variables: {
        "rovM5Um9QTKwvnmr:outputs:vzqXlHQsYSrIYLDu": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "rovM5Um9QTKwvnmr:outputs:lylXn7hFsJOv3Mgi": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "8wTEhq8YlQlBHz5w:outputs:5vNzigzyUsahAVwG": {
          isArray: false,
          label: "Outcome",
          type: "text",
        },
        "YexGxJsBKGIWEQTx:outputs:source": {
          isArray: false,
          label: "Source",
          type: "target",
        },
        "YexGxJsBKGIWEQTx:outputs:target": {
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
            preload: {
              value: true,
            },
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
          id: "RWkTDI8KX9daXKmq",
          position: { x: 400, y: 200 },
          type: "animation-event",
          inputs: { name: { value: "placeholder-trigger-names" } },
          outs: { out: { connection: "fF2EUOdVTJSYteiy:ins:in" } },
        },
        {
          type: "effect",
          position: { x: 903.7802197802198, y: 207.6428571428571 },
          id: "quYK1EhOWo7l6wYA",
          inputs: {
            name: { connection: "fF2EUOdVTJSYteiy:outputs:CeT1iScTWZn5MvJb" },
            origin: {
              connection: "fF2EUOdVTJSYteiy:outputs:TvRpMNEZ8cCGgRkf",
            },
          },
          outs: { out: { connection: "EH2cKNR2bjgxpZ74:ins:in" } },
        },
        {
          type: "extract-item",
          inputs: {
            input: { connection: "RWkTDI8KX9daXKmq:outputs:item" },
          },
          position: { x: 671, y: 221.14999999999998 },
          id: "fF2EUOdVTJSYteiy",
          custom: {
            outputs: {
              CeT1iScTWZn5MvJb: {
                id: "CeT1iScTWZn5MvJb",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              TvRpMNEZ8cCGgRkf: {
                id: "TvRpMNEZ8cCGgRkf",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          outs: { out: { connection: "quYK1EhOWo7l6wYA:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "quYK1EhOWo7l6wYA:outputs:effect" },
            file: { value: "jb2a.markers.music_note.blue.01" },
          },
          position: { x: 1188.1428571428573, y: 203.5357142857144 },
          id: "EH2cKNR2bjgxpZ74",
          outs: { out: { connection: "XejUIp8hRREr9wu4:ins:in" } },
        },
        {
          type: "scale",
          state: "object",
          inputs: {
            effect: { connection: "quYK1EhOWo7l6wYA:outputs:effect" },
            objectScale: { value: 2 },
          },
          position: { x: 1403.857142857143, y: 205.7214285714286 },
          id: "XejUIp8hRREr9wu4",
          outs: { out: { connection: "38E0ukS2mMSLevKw:ins:in" } },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: { connection: "quYK1EhOWo7l6wYA:outputs:effect" },
            location: { connection: "o0rDA0wJYwrg5gWM:outputs:entry" },
            attachTo: { value: true },
          },
          position: { x: 1639.5714285714284, y: 198.57857142857142 },
          id: "38E0ukS2mMSLevKw",
          outs: { out: { connection: "KhBfP4xNtsh37VeJ:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "RWkTDI8KX9daXKmq:outputs:sources" },
          },
          type: "__variable_getter__",
          position: { x: 1507, y: 152.4285714285714 },
          id: "o0rDA0wJYwrg5gWM",
        },
        {
          type: "get-quality",
          position: { x: 2155.208791208791, y: 194.2142857142856 },
          id: "TNEciIEV7qF0b0rb",
          outs: {
            high: { connection: "1t29JfFb2lRwQqTu:ins:in" },
            medium: { connection: "VXcMKxYVnVYA7ES4:ins:in" },
            minimal: { connection: "VXcMKxYVnVYA7ES4:ins:in" },
            low: { connection: "VXcMKxYVnVYA7ES4:ins:in" },
          },
        },
        {
          type: "persist",
          inputs: {
            effect: { connection: "quYK1EhOWo7l6wYA:outputs:effect" },
            tieTo: {
              connection: "fF2EUOdVTJSYteiy:outputs:TvRpMNEZ8cCGgRkf",
            },
            tieToDocs: { connection: "SlKaLTZXP3h139rF:outputs:entry" },
            extraEndDuration: { value: 250 },
          },
          position: { x: 2395.2857142857138, y: 314.25000000000006 },
          id: "1t29JfFb2lRwQqTu",
          outs: { out: { connection: "VXcMKxYVnVYA7ES4:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "RWkTDI8KX9daXKmq:outputs:sources" },
          },
          type: "__variable_getter__",
          position: { x: 2219.857142857143, y: 138.85714285714278 },
          id: "SlKaLTZXP3h139rF",
        },
        {
          type: "visibility",
          position: { x: 1861.9945054945053, y: 194.74999999999994 },
          id: "KhBfP4xNtsh37VeJ",
          inputs: {
            effect: { connection: "quYK1EhOWo7l6wYA:outputs:effect" },
            fadeOutDuration: { value: 250 },
            fadeInDuration: { value: 250 },
          },
          outs: { out: { connection: "TNEciIEV7qF0b0rb:ins:in" } },
        },
        {
          type: "sound",
          position: { x: 2731.9945054945056, y: 192.24999999999994 },
          id: "VXcMKxYVnVYA7ES4",
          inputs: {
            file: { value: "ggg-sfx.magic.arcane.buff.general.03" },
            name: { connection: "rhFLaERbRr2L6JbS:outputs:entry" },
          },
          outs: { out: { connection: "1APOi7zogh1cmtj1:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "fF2EUOdVTJSYteiy:outputs:CeT1iScTWZn5MvJb" },
          },
          type: "__variable_getter__",
          position: { x: 2570.5714285714284, y: 143.24999999999994 },
          id: "rhFLaERbRr2L6JbS",
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: { connection: "VXcMKxYVnVYA7ES4:outputs:sound" },
            location: { connection: "4HEadgLNOrDYGYsW:outputs:entry" },
          },
          position: { x: 3030.8214285714284, y: 193.39999999999998 },
          id: "1APOi7zogh1cmtj1",
          outs: { out: { connection: "bicl81oqFkM3yZc2:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "RWkTDI8KX9daXKmq:outputs:sources" },
          },
          type: "__variable_getter__",
          position: { x: 2875.5714285714284, y: 137.24999999999994 },
          id: "4HEadgLNOrDYGYsW",
        },
        {
          type: "snd-flow",
          inputs: {
            sound: { connection: "VXcMKxYVnVYA7ES4:outputs:sound" },
            preset: { value: "troveSound" },
          },
          position: { x: 3265.8214285714284, y: 192.9999999999999 },
          id: "bicl81oqFkM3yZc2",
          outs: { out: { connection: "PgvfXwA2HtuQCXdg:ins:in" } },
        },
        {
          type: "play",
          position: { x: 3549.8278388278386, y: 195.50000000000006 },
          id: "PgvfXwA2HtuQCXdg",
          inputs: {
            preload: {
              value: true,
            },
            local: {
              value: true,
            },
          },
        },
      ],
      variables: {
        "RWkTDI8KX9daXKmq:outputs:sources": {
          isArray: true,
          label: "Sources",
          type: "target",
        },
        "fF2EUOdVTJSYteiy:outputs:CeT1iScTWZn5MvJb": {
          isArray: false,
          label: "Name",
          type: "text",
        },
      },
    }),
  },
  TEMPLATES: {
    BURST_EMANATION: JSON.stringify({
      nodes: [
        {
          id: "cQ4T2clnTJ2z70XX",
          position: { x: 400, y: 200 },
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
          inputs: { name: { value: "placeholder-trigger-names" } },
          outs: { out: { connection: "yrj2uPt3khcsH3UF:ins:in" } },
        },
        {
          type: "extract-item",
          position: { x: 694.5897421569692, y: 194.23335590362547 },
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
            input: { connection: "cQ4T2clnTJ2z70XX:outputs:item" },
          },
          outs: { out: { connection: "kMn5MlQ9xR1cqy46:ins:in" } },
        },
        {
          type: "effect",
          position: { x: 948.5897249274693, y: 176.16667652130127 },
          id: "kMn5MlQ9xR1cqy46",
          inputs: {
            name: { connection: "yrj2uPt3khcsH3UF:outputs:zZlfyqWnDi4qyRui" },
            origin: {
              connection: "yrj2uPt3khcsH3UF:outputs:YYCymq4nW7jlJYwU",
            },
          },
          outs: { out: { connection: "fE0NZjyKJ9G7W7F6:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "kMn5MlQ9xR1cqy46:outputs:effect" },
            file: { value: "jb2a.healing_generic.burst.bluewhite" },
          },
          position: { x: 1333.047605475056, y: 214.10716288430353 },
          id: "fE0NZjyKJ9G7W7F6",
          outs: { out: { connection: "xs7iLq9hzxYOTYOc:ins:in" } },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: { connection: "kMn5MlQ9xR1cqy46:outputs:effect" },
            location: {
              connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU",
            },
            cacheLocation: { value: true },
          },
          position: { x: 1601.8095205198326, y: 209.48339405059824 },
          id: "xs7iLq9hzxYOTYOc",
          outs: { out: { connection: "bHiknSSrgUd6sHKK:ins:in" } },
        },
        {
          type: "play",
          position: { x: 3104.3871401469837, y: 214.24995636940002 },
          id: "stsDzcixyehs1bhi",
          inputs: { preload: { value: true }, local: { value: true } },
        },
        {
          type: "scale",
          position: { x: 1827.5873222013208, y: 209.00006389617886 },
          id: "bHiknSSrgUd6sHKK",
          inputs: {
            effect: { connection: "kMn5MlQ9xR1cqy46:outputs:effect" },
            objectScale: { value: 1.1 },
          },
          outs: { out: { connection: "Anm8jTC91Wwav5VE:ins:in" } },
          state: "object",
        },
        {
          type: "sound",
          position: { x: 2078.589743589744, y: 211.83333333333337 },
          id: "Anm8jTC91Wwav5VE",
          inputs: {
            file: { value: "ggg-sfx.magic.occult.siphon.01.01" },
            name: { connection: "yrj2uPt3khcsH3UF:outputs:zZlfyqWnDi4qyRui" },
          },
          outs: { out: { connection: "R40kXsj8B9KW6tj1:ins:in" } },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: { connection: "Anm8jTC91Wwav5VE:outputs:sound" },
            location: {
              connection: "R40kXsj8B9KW6tj1:outputs:tS3ScMUSZdNDGxqT",
            },
          },
          position: { x: 2621.75, y: 213.23333333333346 },
          id: "RD3nS87WGg1yDOj3",
          outs: { out: { connection: "aUJ2EETQxRnbzPSm:ins:in" } },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: { connection: "Anm8jTC91Wwav5VE:outputs:sound" },
          },
          position: { x: 2836.75, y: 212.83333333333348 },
          id: "aUJ2EETQxRnbzPSm",
          outs: { out: { connection: "stsDzcixyehs1bhi:ins:in" } },
        },
        {
          type: "execute-script",
          position: { x: 2357.7142857142853, y: 215.2857142857141 },
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
            Fd9FyG9Lgg2AyIcQ: { connection: "0kqP5lR3IHrVUjnZ:outputs:entry" },
          },
          outs: { out: { connection: "RD3nS87WGg1yDOj3:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "cQ4T2clnTJ2z70XX:outputs:MWUBRl5UO1EKczQU" },
          },
          type: "__variable_getter__",
          position: { x: 2229, y: 345 },
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
    CONE: JSON.stringify({
      nodes: [
        {
          id: "6YQsMvppsBtDhicx",
          position: { x: -149.6309523809523, y: 134.09523809523796 },
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
          inputs: { name: { value: "trove-template:rejuvenating-flames" } },
          outs: { out: { connection: "wBGkG6oAYAEvxK9E:ins:in" } },
        },
        {
          type: "extract-item",
          position: { x: 430.78021834744527, y: 160.2809749512444 },
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
          outs: { out: { connection: "16VltCrgXp30q5nP:ins:in" } },
        },
        {
          type: "effect",
          position: { x: 1068.8278201655642, y: 152.4523908070155 },
          id: "YkaKOby7rs0ZJkMd",
          inputs: {
            name: { connection: "mwFBHBl0tPLCgnOm:outputs:entry" },
            origin: { connection: "4bkpUt2ZGESYrWb4:outputs:entry" },
          },
          outs: { out: { connection: "uzP2ZbnHORgToXeD:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            file: { value: "jb2a.breath_weapons.cold.cone.green" },
          },
          position: { x: 1745.6666530941027, y: 314.04367082081103 },
          id: "M2LPZXxFtk7IYsI1",
          outs: { out: { connection: "dsWJLD3HKNCeqtZ3:ins:in" } },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            cacheLocation: { value: true },
            location: { connection: "joWHwlVKqjA58cTM:outputs:entry" },
            attachTo: { value: true },
          },
          position: { x: 2102.58729829761, y: 151.51514008234403 },
          id: "dsWJLD3HKNCeqtZ3",
          outs: { out: { connection: "IgfxnQCeRvGS1Fsb:ins:in" } },
        },
        {
          type: "play",
          position: { x: 4833.498251258095, y: 165.47217859162237 },
          id: "yEtSLPQoraUDwZNe",
          inputs: { preload: { value: true }, local: { value: true } },
        },
        {
          type: "sound",
          position: { x: 3713.25641025641, y: 163.05555555555566 },
          id: "SjuPUbNBG4hqTOZj",
          inputs: {
            file: { value: "ggg-sfx.magic.arcane.surge.wave.01" },
            name: { connection: "isJ9eadHt5WsftJC:outputs:entry" },
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
          position: { x: 4316.416666666666, y: 165.5666666666669 },
          id: "FRLsuGhMWl4tzz5G",
          outs: { out: { connection: "1FULxtDJ1hnOKDT2:ins:in" } },
        },
        {
          type: "snd-flow",
          inputs: {
            sound: { connection: "SjuPUbNBG4hqTOZj:outputs:sound" },
            preset: { value: "troveSound" },
            delayMin: { value: 3000 },
          },
          position: { x: 4545.86111111111, y: 165.1666666666669 },
          id: "1FULxtDJ1hnOKDT2",
          outs: { out: { connection: "yEtSLPQoraUDwZNe:ins:in" } },
        },
        {
          type: "execute-script",
          position: { x: 4019.999999999999, y: 162.22222222222229 },
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
          position: { x: 3848.1111111111104, y: 111.77777777777783 },
          id: "NVx93T7idfSjvcVN",
        },
        {
          type: "aim",
          state: "stretchTo",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            towards: { connection: "Th0z8cSLRyPn513G:outputs:entry" },
            cacheLocation: { value: true },
          },
          position: { x: 2328.8095238095234, y: 151.70952380952383 },
          id: "IgfxnQCeRvGS1Fsb",
          outs: { out: { connection: "yZnA3d4MjMTpESKd:ins:in" } },
        },
        {
          type: "rotation",
          inputs: {
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
            spriteRotation: { connection: "LUU6qYbP0kyh2xS9:outputs:entry" },
          },
          position: { x: 3178.4365079365075, y: 379.5714285714286 },
          id: "JWUNvtqloPMZiR8v",
          outs: { out: { connection: "BmOuio8YqbucscXV:ins:in" } },
        },
        {
          type: "module-enabled",
          position: { x: 1377.4999999999995, y: 169.035714285714 },
          id: "uzP2ZbnHORgToXeD",
          inputs: { module: { value: "jb2a_patreon" } },
          outs: {
            false: { connection: "M2LPZXxFtk7IYsI1:ins:in" },
            true: { connection: "QnRsZls3WdnFbXyG:ins:in" },
          },
        },
        {
          custom: {
            title: "Cone Loop",
            outputs: {
              oyFgRnxaQYmLX9An: {
                id: "oyFgRnxaQYmLX9An",
                label: "SecondRun",
                slug: "entry",
                isArray: false,
                type: "effect",
              },
            },
          },
          type: "__gate_exit__",
          position: { x: 419.4242424242425, y: 18.746753246753087 },
          id: "5sJiLwG84oi6t2jO",
          outs: { out: { connection: "16VltCrgXp30q5nP:ins:in" } },
        },
        {
          type: "execute-script",
          position: { x: 685.0909090909088, y: 148.79437229437235 },
          id: "16VltCrgXp30q5nP",
          custom: {
            inputs: {
              tOYwNOG8RFSSf43w: {
                id: "tOYwNOG8RFSSf43w",
                label: "SecondRun",
                slug: "input",
                isArray: false,
                type: "effect",
              },
            },
            outputs: {
              ea3PA6gyWxI7UvUV: {
                id: "ea3PA6gyWxI7UvUV",
                label: "SpriteRotation",
                slug: "output",
                isArray: false,
                type: "number",
              },
            },
          },
          inputs: {
            tOYwNOG8RFSSf43w: {
              connection: "5sJiLwG84oi6t2jO:outputs:oyFgRnxaQYmLX9An",
            },
            fx6rruUm4vJMybgU: { value: true },
            script: {
              value:
                '/**\n * @param {unknown[]} inputs\n * @returns {boolean} to break out current process\n * @returns {{type: EntryType; value: unknown}[]}\n *\n * @example\n * const x = inputs[0];\n * const y = inputs[1];\n * return [{type: "number", value: x + y}];\n */\nconst isSecondRun = !!inputs[0];\nconst angleOffset = 22.5\nconst sign = isSecondRun ? -1 : 1;\nreturn [{type: "number", value: sign * angleOffset}];',
            },
          },
          outs: { out: { connection: "YkaKOby7rs0ZJkMd:ins:in" } },
        },
        {
          outs: { out: { connection: "5sJiLwG84oi6t2jO:ins:in" } },
          type: "__gate_entry__",
          position: { x: 3710.944083694084, y: 358.548340548341 },
          id: "7kU6BpvIqottfU5l",
          inputs: {
            oyFgRnxaQYmLX9An: {
              connection: "JWUNvtqloPMZiR8v:outputs:effect",
            },
          },
        },
        {
          inputs: {
            entry: { connection: "IDBOE3UQ16iS3e1s:outputs:2treJ37c3cDCVPMu" },
          },
          type: "__variable_getter__",
          position: { x: 892.9480519480508, y: 63.734848484848385 },
          id: "mwFBHBl0tPLCgnOm",
        },
        {
          inputs: {
            entry: { connection: "IDBOE3UQ16iS3e1s:outputs:M8A8EwIrtiDg2OTa" },
          },
          type: "__variable_getter__",
          position: { x: 892.9480519480508, y: 103.73484848484838 },
          id: "4bkpUt2ZGESYrWb4",
        },
        {
          inputs: {
            entry: { connection: "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4" },
          },
          type: "__variable_getter__",
          position: { x: 1930.8051948051934, y: 17.556277056276826 },
          id: "joWHwlVKqjA58cTM",
        },
        {
          inputs: {
            entry: { connection: "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4" },
          },
          type: "__variable_getter__",
          position: { x: 2172.233766233765, y: 83.27056277056272 },
          id: "Th0z8cSLRyPn513G",
        },
        {
          type: "if-truthy",
          position: { x: 3457.9361471861466, y: 335.50072150072214 },
          id: "BmOuio8YqbucscXV",
          custom: {
            inputs: {
              "7kWbBM3yzYCDkvSR": {
                id: "7kWbBM3yzYCDkvSR",
                label: "SecondRun",
                slug: "condition",
                isArray: false,
                type: "effect",
              },
            },
          },
          inputs: {
            "7kWbBM3yzYCDkvSR": {
              connection: "e5Y1z4TkCbrEhAVL:outputs:entry",
            },
          },
          outs: {
            false: { connection: "7kU6BpvIqottfU5l:ins:in" },
            true: { connection: "SjuPUbNBG4hqTOZj:ins:in" },
          },
        },
        {
          inputs: {
            entry: { connection: "5sJiLwG84oi6t2jO:outputs:oyFgRnxaQYmLX9An" },
          },
          type: "__variable_getter__",
          position: { x: 3290.297258297257, y: 339.7507215007221 },
          id: "e5Y1z4TkCbrEhAVL",
        },
        {
          inputs: {
            entry: { connection: "IDBOE3UQ16iS3e1s:outputs:2treJ37c3cDCVPMu" },
          },
          type: "__variable_getter__",
          position: { x: 3584.1861471861457, y: 128.5562770562774 },
          id: "isJ9eadHt5WsftJC",
        },
        {
          type: "get-quality",
          position: { x: 2889.7417027417005, y: 291.9729437229442 },
          id: "V7cGVkyrxMtC3WYg",
          outs: {
            minimal: { connection: "SjuPUbNBG4hqTOZj:ins:in" },
            low: { connection: "JWUNvtqloPMZiR8v:ins:in" },
            high: { connection: "JWUNvtqloPMZiR8v:ins:in" },
            medium: { connection: "JWUNvtqloPMZiR8v:ins:in" },
          },
        },
        {
          type: "if-truthy",
          position: { x: 96.62662337662186, y: 153.91341991342028 },
          id: "wBGkG6oAYAEvxK9E",
          custom: {
            inputs: {
              jap2w7XfSRi2dxWw: {
                id: "jap2w7XfSRi2dxWw",
                label: "ConeTooSmall",
                slug: "condition",
                isArray: false,
                type: "boolean",
              },
            },
          },
          inputs: { jap2w7XfSRi2dxWw: { value: true } },
          outs: { out: { connection: "IDBOE3UQ16iS3e1s:ins:in" } },
          state: "boolean",
        },
        {
          type: "split-boolean",
          position: { x: 2632.5194805194806, y: 169.61183261183282 },
          id: "yZnA3d4MjMTpESKd",
          inputs: {
            input: { connection: "0aY36AFEgRypqyac:outputs:entry" },
          },
          outs: {
            false: { connection: "SjuPUbNBG4hqTOZj:ins:in" },
            true: { connection: "V7cGVkyrxMtC3WYg:ins:in" },
          },
        },
        {
          inputs: {
            entry: { connection: "wBGkG6oAYAEvxK9E:outputs:boolean" },
          },
          type: "__variable_getter__",
          position: { x: 2396.352813852813, y: 63.639610389610596 },
          id: "0aY36AFEgRypqyac",
        },
        {
          inputs: {
            entry: { connection: "16VltCrgXp30q5nP:outputs:ea3PA6gyWxI7UvUV" },
          },
          type: "__variable_getter__",
          position: { x: 2924.130591630591, y: 251.1118326118327 },
          id: "LUU6qYbP0kyh2xS9",
        },
        {
          type: "file",
          inputs: {
            file: { value: "jb2a.breath_weapons.poison.cone.green" },
            effect: { connection: "YkaKOby7rs0ZJkMd:outputs:effect" },
          },
          position: { x: 1745.6666530941025, y: 95.47224224938236 },
          id: "QnRsZls3WdnFbXyG",
          outs: { out: { connection: "dsWJLD3HKNCeqtZ3:ins:in" } },
        },
      ],
      variables: {
        "6YQsMvppsBtDhicx:outputs:Av8O4cl3UL4yoig4": {
          isArray: false,
          label: "Template",
          type: "region",
        },
        "IDBOE3UQ16iS3e1s:outputs:2treJ37c3cDCVPMu": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "IDBOE3UQ16iS3e1s:outputs:M8A8EwIrtiDg2OTa": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "5sJiLwG84oi6t2jO:outputs:oyFgRnxaQYmLX9An": {
          isArray: false,
          label: "SecondRun",
          type: "effect",
        },
        "wBGkG6oAYAEvxK9E:outputs:boolean": {
          isArray: false,
          label: "Cone Too Small",
          type: "boolean",
        },
        "16VltCrgXp30q5nP:outputs:ea3PA6gyWxI7UvUV": {
          isArray: false,
          label: "SpriteRotation",
          type: "number",
        },
      },
    }),
    LINE: JSON.stringify({
      nodes: [
        {
          id: "buq3tU2pxIiR5IWz",
          position: { x: 749.9999999999999, y: 171.66666666666657 },
          type: "animation-event",
          custom: {
            outputs: {
              yA5gipDgx9QRRKU1: {
                id: "yA5gipDgx9QRRKU1",
                input: "template",
                label: "Template",
                slug: "path",
                isArray: false,
                type: "region",
              },
            },
          },
          inputs: { name: { value: "placeholder-trigger-names" } },
          outs: { out: { connection: "R4V7ygO4mrXtDYAz:ins:in" } },
        },
        {
          type: "extract-item",
          position: { x: 1014.5897421569691, y: 182.56668923695878 },
          id: "R4V7ygO4mrXtDYAz",
          custom: {
            outputs: {
              mCVSZGGWLUr7J0QM: {
                id: "mCVSZGGWLUr7J0QM",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              "1vzDKaAlabAPOfQo": {
                id: "1vzDKaAlabAPOfQo",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          inputs: {
            input: { connection: "buq3tU2pxIiR5IWz:outputs:item" },
          },
          outs: { out: { connection: "liv4jrzZJXZpVSL2:ins:in" } },
        },
        {
          type: "effect",
          position: { x: 1268.5897249274692, y: 164.50000985463458 },
          id: "liv4jrzZJXZpVSL2",
          inputs: {
            name: { connection: "R4V7ygO4mrXtDYAz:outputs:mCVSZGGWLUr7J0QM" },
            origin: {
              connection: "R4V7ygO4mrXtDYAz:outputs:1vzDKaAlabAPOfQo",
            },
          },
          outs: { out: { connection: "fnsvNB7lWSl3vZSq:ins:in" } },
        },
        {
          type: "file",
          inputs: {
            effect: { connection: "liv4jrzZJXZpVSL2:outputs:effect" },
            file: { value: "jb2a.lightning_bolt.narrow.blue" },
          },
          position: { x: 1583.9999864274369, y: 161.80557558271613 },
          id: "fnsvNB7lWSl3vZSq",
          outs: { out: { connection: "f8dyGCIfQr2TxSfX:ins:in" } },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: { connection: "liv4jrzZJXZpVSL2:outputs:effect" },
            cacheLocation: { value: true },
            location: { connection: "gqkQYUecKZvGqCuT:outputs:entry" },
          },
          position: { x: 1813.7777744880864, y: 160.70561627282024 },
          id: "f8dyGCIfQr2TxSfX",
          outs: { out: { connection: "hAY3LzLlYK4Q73P5:ins:in" } },
        },
        {
          type: "play",
          position: { x: 3750.081584591428, y: 158.4721785916223 },
          id: "ExE2lGwaMB8rpUZ4",
          inputs: { preload: { value: true }, local: { value: true } },
        },
        {
          type: "sound",
          position: { x: 2629.839743589744, y: 156.0555555555556 },
          id: "7BMsQhHOs2zfFjwI",
          inputs: {
            file: { value: "ggg-sfx.magic.electricity.cast.charge.01" },
            name: { connection: "R4V7ygO4mrXtDYAz:outputs:mCVSZGGWLUr7J0QM" },
          },
          outs: { out: { connection: "N4e5N90bDsN8QIrB:ins:in" } },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: { connection: "7BMsQhHOs2zfFjwI:outputs:sound" },
            location: {
              connection: "N4e5N90bDsN8QIrB:outputs:YxpfFAOQggVwCsO8",
            },
          },
          position: { x: 3233, y: 158.56666666666683 },
          id: "k5yMLOhMnvJQdRui",
          outs: { out: { connection: "TFhTKK0Le4SFT2iG:ins:in" } },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: { value: "troveSound" },
            sound: { connection: "7BMsQhHOs2zfFjwI:outputs:sound" },
          },
          position: { x: 3462.4444444444443, y: 158.16666666666686 },
          id: "TFhTKK0Le4SFT2iG",
          outs: { out: { connection: "ExE2lGwaMB8rpUZ4:ins:in" } },
        },
        {
          type: "execute-script",
          position: { x: 2936.583333333333, y: 155.22222222222223 },
          id: "N4e5N90bDsN8QIrB",
          custom: {
            inputs: {
              qjU48Lj8nx9ds3i9: {
                id: "qjU48Lj8nx9ds3i9",
                label: "Template",
                slug: "input",
                isArray: false,
                type: "any",
              },
            },
            outputs: {
              YxpfFAOQggVwCsO8: {
                id: "YxpfFAOQggVwCsO8",
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
            qjU48Lj8nx9ds3i9: { connection: "M6jOJTalL2br81jH:outputs:entry" },
          },
          outs: { out: { connection: "k5yMLOhMnvJQdRui:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1" },
          },
          type: "__variable_getter__",
          position: { x: 2764.6944444444443, y: 104.77777777777783 },
          id: "M6jOJTalL2br81jH",
        },
        {
          type: "aim",
          position: { x: 2051.3978243978245, y: 162.288888888889 },
          id: "hAY3LzLlYK4Q73P5",
          inputs: {
            effect: { connection: "liv4jrzZJXZpVSL2:outputs:effect" },
            towards: { connection: "G3IRIVBXB7Mvf6rV:outputs:entry" },
          },
          outs: { out: { connection: "rj7X0Sf0wWMmwWB8:ins:in" } },
        },
        {
          inputs: {
            entry: { connection: "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1" },
          },
          type: "__variable_getter__",
          position: { x: 1912.2222222222222, y: 116.43434343434362 },
          id: "G3IRIVBXB7Mvf6rV",
        },
        {
          inputs: {
            entry: { connection: "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1" },
          },
          type: "__variable_getter__",
          position: { x: 1633.333333333333, y: 116.43434343434356 },
          id: "gqkQYUecKZvGqCuT",
        },
        {
          type: "flow",
          position: { x: 2350.0341880341884, y: 162.26767676767702 },
          id: "rj7X0Sf0wWMmwWB8",
          inputs: {
            effect: { connection: "liv4jrzZJXZpVSL2:outputs:effect" },
            delayMin: { value: 2400 },
          },
          outs: { out: { connection: "7BMsQhHOs2zfFjwI:ins:in" } },
        },
      ],
      variables: {
        "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1": {
          isArray: false,
          label: "Template",
          type: "region",
        },
      },
    }),
  },
};
