export const TEMPLATES = {
  ATTACK: {
    MELEE: JSON.stringify({
      nodes: [
        {
          id: "8wTEhq8YlQlBHz5w",
          position: {
            x: 0,
            y: 205,
          },
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
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "rovM5Um9QTKwvnmr:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 862,
            y: 179,
          },
          id: "NkLAZY3xuHhbK1va",
          inputs: {
            origin: {
              connection: "R7arc5sxTgZrTWxR:outputs:entry",
            },
            name: {
              connection: "CaVXFXqPTjvZEKDS:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "v09wSWnCDrF3MjXs:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 266.6270584270708,
            y: 216.9748704766734,
          },
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
            input: {
              connection: "8wTEhq8YlQlBHz5w:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "YexGxJsBKGIWEQTx:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "NkLAZY3xuHhbK1va:outputs:effect",
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
              connection: "fH6JJnJ0Gr8cUe6v:outputs:entry",
            },
          },
          position: {
            x: 1162.2778706135302,
            y: 172.7147974908261,
          },
          id: "v09wSWnCDrF3MjXs",
          outs: {
            out: {
              connection: "AaVVeHGGI1FkzXM3:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "NkLAZY3xuHhbK1va:outputs:effect",
            },
            file: {
              value: "jb2a.melee_attack.02.hammer.02",
            },
          },
          position: {
            x: 1706.1006309648767,
            y: 345.17074140096986,
          },
          id: "IfSNHkoJoogWicjG",
          outs: {
            out: {
              connection: "axEYaKIdAAqdI0bZ:ins:in",
            },
          },
        },
        {
          type: "aim",
          state: "rotateTowards",
          inputs: {
            effect: {
              connection: "NkLAZY3xuHhbK1va:outputs:effect",
            },
            missed: {
              connection: "axEYaKIdAAqdI0bZ:outputs:boolean",
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
              connection: "5s1QHqqPNkPWrGPF:outputs:entry",
            },
          },
          position: {
            x: 2216.15226607562,
            y: 268.4145255118906,
          },
          id: "jC26f0rfZh7mzKmk",
          outs: {
            out: {
              connection: "XgVGLBrLzXfDUMHm:ins:in",
            },
          },
        },
        {
          type: "massloop",
          position: {
            x: 510.87727814177947,
            y: 204.61375672504948,
          },
          id: "YexGxJsBKGIWEQTx",
          inputs: {
            sources: {
              connection: "8wTEhq8YlQlBHz5w:outputs:sources",
            },
            targets: {
              connection: "8wTEhq8YlQlBHz5w:outputs:targets",
            },
          },
          outs: {
            out: {
              connection: "NkLAZY3xuHhbK1va:ins:in",
            },
            outAfter: {
              connection: "Ym0mBKXartUQFfo6:ins:in",
            },
          },
        },
        {
          type: "list-contains",
          position: {
            x: 1972.8839173316658,
            y: 510.8254707180224,
          },
          id: "axEYaKIdAAqdI0bZ",
          inputs: {
            list: {
              connection: "mTOJ6B7TJPjBQIiM:outputs:list",
            },
            entry: {
              connection: "lHMKkkylgxmWplyi:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "jC26f0rfZh7mzKmk:ins:in",
            },
          },
          state: "boolean",
        },
        {
          type: "list-value",
          position: {
            x: 1703.579454473211,
            y: 527.7962793853518,
          },
          id: "mTOJ6B7TJPjBQIiM",
          inputs: {
            entry: {
              value: "failure,criticalFailure",
            },
          },
        },
        {
          type: "scale",
          position: {
            x: 2509.019928102898,
            y: 266.2962611124972,
          },
          id: "XgVGLBrLzXfDUMHm",
          inputs: {
            effect: {
              connection: "NkLAZY3xuHhbK1va:outputs:effect",
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
              connection: "JtJf29da99o1XRT0:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "NkLAZY3xuHhbK1va:outputs:effect",
            },
            file: {
              value: "jb2a.melee_attack.02.hammer.01",
            },
          },
          position: {
            x: 1728.2434881077336,
            y: 142.13502711525592,
          },
          id: "TzKwbDIPyj9I1mtK",
          outs: {
            out: {
              connection: "axEYaKIdAAqdI0bZ:ins:in",
            },
          },
        },
        {
          type: "sound",
          position: {
            x: 2987.9787224341335,
            y: 269.8081930883651,
          },
          id: "PIHuQ9JqU3jU9pFn",
          outs: {
            out: {
              connection: "cpmszTokwCu7umXl:ins:in",
            },
          },
          inputs: {
            file: {
              value: "ggg-sfx.melee.bludgeoning.strike.one-hand.01",
            },
            name: {
              connection: "OVXBEp6GUMSvvoJd:outputs:entry",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "PIHuQ9JqU3jU9pFn:outputs:sound",
            },
            location: {
              connection: "fbm2LzFz8CkMIFj0:outputs:entry",
            },
            moveTowards: {
              connection: "w3pm41EWFDdIvWDa:outputs:entry",
            },
          },
          position: {
            x: 3569.1270740824866,
            y: 256.24390737407987,
          },
          id: "XWX7h631k8nJJLXn",
        },
        {
          type: "module-enabled",
          position: {
            x: 1387.2168176722282,
            y: 303.9748597550318,
          },
          id: "AaVVeHGGI1FkzXM3",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            true: {
              connection: "TzKwbDIPyj9I1mtK:ins:in",
            },
            false: {
              connection: "IfSNHkoJoogWicjG:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: {
              value: "troveSound",
            },
            sound: {
              connection: "PIHuQ9JqU3jU9pFn:outputs:sound",
            },
          },
          position: {
            x: 3295.317550272962,
            y: 266.4748597550319,
          },
          id: "cpmszTokwCu7umXl",
          outs: {
            out: {
              connection: "XWX7h631k8nJJLXn:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 847.879120879121,
            y: 469.4010989010992,
          },
          id: "Ym0mBKXartUQFfo6",
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
              connection: "rovM5Um9QTKwvnmr:outputs:lylXn7hFsJOv3Mgi",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 662.9560439560441,
            y: 151.65109890109932,
          },
          id: "R7arc5sxTgZrTWxR",
        },
        {
          inputs: {
            entry: {
              connection: "rovM5Um9QTKwvnmr:outputs:vzqXlHQsYSrIYLDu",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 660.2060439560441,
            y: 105.15109890109932,
          },
          id: "CaVXFXqPTjvZEKDS",
        },
        {
          inputs: {
            entry: {
              connection: "8wTEhq8YlQlBHz5w:outputs:5vNzigzyUsahAVwG",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1803.039377289377,
            y: 609.0677655677658,
          },
          id: "lHMKkkylgxmWplyi",
        },
        {
          inputs: {
            entry: {
              connection: "rovM5Um9QTKwvnmr:outputs:vzqXlHQsYSrIYLDu",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2822.3727106227097,
            y: 217.98443223443246,
          },
          id: "OVXBEp6GUMSvvoJd",
        },
        {
          inputs: {
            entry: {
              connection: "YexGxJsBKGIWEQTx:outputs:source",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3418.6227106227097,
            y: 170.48443223443223,
          },
          id: "fbm2LzFz8CkMIFj0",
        },
        {
          inputs: {
            entry: {
              connection: "YexGxJsBKGIWEQTx:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3419.8727106227116,
            y: 221.73443223443223,
          },
          id: "w3pm41EWFDdIvWDa",
        },
        {
          inputs: {
            entry: {
              connection: "YexGxJsBKGIWEQTx:outputs:source",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 988.3333333333333,
            y: 115,
          },
          id: "fH6JJnJ0Gr8cUe6v",
        },
        {
          inputs: {
            entry: {
              connection: "YexGxJsBKGIWEQTx:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2076.333333333333,
            y: 355,
          },
          id: "5s1QHqqPNkPWrGPF",
        },
        {
          type: "sprite",
          inputs: {
            effect: {
              connection: "NkLAZY3xuHhbK1va:outputs:effect",
            },
            anchor: {
              value: {
                x: 0.4,
                y: 0.5,
              },
            },
          },
          position: {
            x: 2751,
            y: 267.58333333333337,
          },
          id: "JtJf29da99o1XRT0",
          outs: {
            out: {
              connection: "PIHuQ9JqU3jU9pFn:ins:in",
            },
          },
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
            x: 0,
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
            x: 862,
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
            x: 266.6270584270708,
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
            x: 1162.944537280197,
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
            x: 1714.9895198537656,
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
            x: 2231.7078216311756,
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
            x: 510.8772781417796,
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
            x: 1981.7728062205547,
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
            x: 1712.4683433620999,
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
            x: 1737.1323769966225,
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
            x: 2557.7406271960385,
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
            x: 3138.8889788443907,
            y: 191.00581213598468,
          },
          id: "ODMkXdITR36KIePK",
        },
        {
          type: "module-enabled",
          position: {
            x: 1396.1057065611171,
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
            preset: {
              value: "troveSound",
            },
            sound: {
              connection: "97SXbZXscrpeD7WA:outputs:sound",
            },
          },
          position: {
            x: 2865.079455034866,
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
            x: 847.879120879121,
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
            x: 662.9560439560441,
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
            x: 660.2060439560441,
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
            x: 1811.9282661782659,
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
            x: 2392.1346153846152,
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
            x: 2988.3846153846157,
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
            x: 2989.6346153846157,
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
            x: 2076.3055555555557,
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
            x: 1031.3055555555557,
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
          position: {
            x: 0,
            y: 200,
          },
          type: "animation-event",
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "fF2EUOdVTJSYteiy:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 503.7802197802198,
            y: 207.6428571428571,
          },
          id: "quYK1EhOWo7l6wYA",
          inputs: {
            name: {
              connection: "fF2EUOdVTJSYteiy:outputs:CeT1iScTWZn5MvJb",
            },
            origin: {
              connection: "fF2EUOdVTJSYteiy:outputs:TvRpMNEZ8cCGgRkf",
            },
          },
          outs: {
            out: {
              connection: "EH2cKNR2bjgxpZ74:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          inputs: {
            input: {
              connection: "RWkTDI8KX9daXKmq:outputs:item",
            },
          },
          position: {
            x: 271,
            y: 221.14999999999998,
          },
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
          outs: {
            out: {
              connection: "quYK1EhOWo7l6wYA:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "quYK1EhOWo7l6wYA:outputs:effect",
            },
            file: {
              value: "jb2a.markers.music_note.blue.01",
            },
          },
          position: {
            x: 788.1428571428573,
            y: 203.5357142857144,
          },
          id: "EH2cKNR2bjgxpZ74",
          outs: {
            out: {
              connection: "XejUIp8hRREr9wu4:ins:in",
            },
          },
        },
        {
          type: "scale",
          state: "object",
          inputs: {
            effect: {
              connection: "quYK1EhOWo7l6wYA:outputs:effect",
            },
            objectScale: {
              value: 2,
            },
          },
          position: {
            x: 1003.8571428571429,
            y: 205.7214285714286,
          },
          id: "XejUIp8hRREr9wu4",
          outs: {
            out: {
              connection: "38E0ukS2mMSLevKw:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "quYK1EhOWo7l6wYA:outputs:effect",
            },
            location: {
              connection: "o0rDA0wJYwrg5gWM:outputs:entry",
            },
            attachTo: {
              value: true,
            },
          },
          position: {
            x: 1239.5714285714284,
            y: 198.57857142857142,
          },
          id: "38E0ukS2mMSLevKw",
          outs: {
            out: {
              connection: "KhBfP4xNtsh37VeJ:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "RWkTDI8KX9daXKmq:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1107,
            y: 152.4285714285714,
          },
          id: "o0rDA0wJYwrg5gWM",
        },
        {
          type: "get-quality",
          position: {
            x: 1755.208791208791,
            y: 194.2142857142856,
          },
          id: "TNEciIEV7qF0b0rb",
          outs: {
            high: {
              connection: "1t29JfFb2lRwQqTu:ins:in",
            },
            medium: {
              connection: "VXcMKxYVnVYA7ES4:ins:in",
            },
            minimal: {
              connection: "VXcMKxYVnVYA7ES4:ins:in",
            },
            low: {
              connection: "VXcMKxYVnVYA7ES4:ins:in",
            },
          },
        },
        {
          type: "persist",
          inputs: {
            effect: {
              connection: "quYK1EhOWo7l6wYA:outputs:effect",
            },
            tieTo: {
              connection: "fF2EUOdVTJSYteiy:outputs:TvRpMNEZ8cCGgRkf",
            },
            tieToDocs: {
              connection: "SlKaLTZXP3h139rF:outputs:entry",
            },
            extraEndDuration: {
              value: 250,
            },
          },
          position: {
            x: 1995.2857142857138,
            y: 314.25000000000006,
          },
          id: "1t29JfFb2lRwQqTu",
          outs: {
            out: {
              connection: "VXcMKxYVnVYA7ES4:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "RWkTDI8KX9daXKmq:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1819.8571428571431,
            y: 138.85714285714278,
          },
          id: "SlKaLTZXP3h139rF",
        },
        {
          type: "visibility",
          position: {
            x: 1461.9945054945053,
            y: 194.74999999999994,
          },
          id: "KhBfP4xNtsh37VeJ",
          inputs: {
            effect: {
              connection: "quYK1EhOWo7l6wYA:outputs:effect",
            },
            fadeOutDuration: {
              value: 250,
            },
            fadeInDuration: {
              value: 250,
            },
          },
          outs: {
            out: {
              connection: "TNEciIEV7qF0b0rb:ins:in",
            },
          },
        },
        {
          type: "sound",
          position: {
            x: 2331.9945054945056,
            y: 192.24999999999994,
          },
          id: "VXcMKxYVnVYA7ES4",
          inputs: {
            file: {
              value: "ggg-sfx.magic.arcane.buff.general.03",
            },
            name: {
              connection: "rhFLaERbRr2L6JbS:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "1APOi7zogh1cmtj1:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "fF2EUOdVTJSYteiy:outputs:CeT1iScTWZn5MvJb",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2170.5714285714284,
            y: 143.24999999999994,
          },
          id: "rhFLaERbRr2L6JbS",
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "VXcMKxYVnVYA7ES4:outputs:sound",
            },
            location: {
              connection: "4HEadgLNOrDYGYsW:outputs:entry",
            },
          },
          position: {
            x: 2630.8214285714284,
            y: 193.39999999999998,
          },
          id: "1APOi7zogh1cmtj1",
          outs: {
            out: {
              connection: "bicl81oqFkM3yZc2:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "RWkTDI8KX9daXKmq:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2475.5714285714284,
            y: 137.24999999999994,
          },
          id: "4HEadgLNOrDYGYsW",
        },
        {
          type: "snd-flow",
          inputs: {
            sound: {
              connection: "VXcMKxYVnVYA7ES4:outputs:sound",
            },
            preset: {
              value: "troveSound",
            },
          },
          position: {
            x: 2865.8214285714284,
            y: 192.9999999999999,
          },
          id: "bicl81oqFkM3yZc2",
          outs: {
            out: {
              connection: "PgvfXwA2HtuQCXdg:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 3149.8278388278386,
            y: 195.50000000000006,
          },
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
  ON_TOKEN: {
    SOURCE_TO_TARGETS: JSON.stringify({
      nodes: [
        {
          id: "4tBJGISpCfMWS66X",
          position: {
            x: 3076.857142857143,
            y: 206.28571428571365,
          },
          type: "animation-event",
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "hKxoCifZlHGTfs7q:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 7099.494505494506,
            y: 189.6428571428571,
          },
          id: "gVixIsQVmAcLcDi5",
          inputs: {
            name: {
              connection: "nSkmkTWQHrwHue9o:outputs:entry",
            },
            origin: {
              connection: "8j5vnnt9DYeNuubp:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "zzFDdCYhYDv3XhRO:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          inputs: {
            input: {
              connection: "4tBJGISpCfMWS66X:outputs:item",
            },
          },
          position: {
            x: 3348.8095238095234,
            y: 247.91190476190422,
          },
          id: "hKxoCifZlHGTfs7q",
          custom: {
            outputs: {
              "0O36ShxaMq7mdmfp": {
                id: "0O36ShxaMq7mdmfp",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              bjHi4atunFZHuJZ6: {
                id: "bjHi4atunFZHuJZ6",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          outs: {
            out: {
              connection: "H7mMrCDDpilsYLWT:ins:in",
            },
          },
        },
        {
          type: "scale",
          state: "object",
          inputs: {
            effect: {
              connection: "gVixIsQVmAcLcDi5:outputs:effect",
            },
            objectScale: {
              value: 1.5,
            },
          },
          position: {
            x: 8101,
            y: 179.14999999999964,
          },
          id: "0M9U6hdrZ1VRCpkn",
          outs: {
            out: {
              connection: "xUQbSrxyrsQXZvHW:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "gVixIsQVmAcLcDi5:outputs:effect",
            },
            attachTo: {
              value: true,
            },
            location: {
              connection: "JIun2ueu6n9Tfvd7:outputs:entry",
            },
          },
          position: {
            x: 8336.714285714286,
            y: 172.00714285714253,
          },
          id: "xUQbSrxyrsQXZvHW",
        },
        {
          type: "sound",
          position: {
            x: 5915.042124542125,
            y: 191.91666666666652,
          },
          id: "oQtPIBlNrY0TAuoL",
          inputs: {
            file: {
              value: "ggg-sfx.magic.arcane.cast.general.02",
            },
            name: {
              connection: "mdUfkgFh5gcnju6W:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "5UVNe71FW6ieh52C:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 5804.571428571429,
            y: 280.10714285714243,
          },
          id: "mdUfkgFh5gcnju6W",
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "oQtPIBlNrY0TAuoL:outputs:sound",
            },
            location: {
              connection: "NVXncGpsG35aNu6Z:outputs:entry",
            },
            exitOnEmpty: {
              value: "global",
            },
          },
          position: {
            x: 6209.869047619048,
            y: 195.0666666666666,
          },
          id: "5UVNe71FW6ieh52C",
          outs: {
            out: {
              connection: "GSe9nUVgTDjclsF1:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            sound: {
              connection: "oQtPIBlNrY0TAuoL:outputs:sound",
            },
            preset: {
              value: "troveSound",
            },
          },
          position: {
            x: 6452.869047619048,
            y: 192.66666666666652,
          },
          id: "GSe9nUVgTDjclsF1",
          outs: {
            out: {
              connection: "UlMG5AveQzx1U8Ms:ins:in",
            },
          },
        },
        {
          type: "massloop",
          position: {
            x: 6755.571428571429,
            y: 203.1428571428571,
          },
          id: "UlMG5AveQzx1U8Ms",
          inputs: {
            targets: {
              connection: "mTFBHnzKnBeV2Qjm:outputs:entry",
            },
            sources: {
              connection: "7xU7e6DNZVurEJFe:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "gVixIsQVmAcLcDi5:ins:in",
            },
            outAfter: {
              connection: "4osouwiFTLaHHJDM:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 7095.494505494506,
            y: 413.92857142857133,
          },
          id: "4osouwiFTLaHHJDM",
          inputs: {
            local: {
              value: true,
            },
          },
        },
        {
          type: "get-quality",
          position: {
            x: 3618.5897435897446,
            y: 218.35714285714243,
          },
          id: "H7mMrCDDpilsYLWT",
          outs: {
            low: {
              connection: "ES8oKsgK9yiexhgr:ins:in",
            },
            medium: {
              connection: "ES8oKsgK9yiexhgr:ins:in",
            },
            high: {
              connection: "ES8oKsgK9yiexhgr:ins:in",
            },
            minimal: {
              connection: "oQtPIBlNrY0TAuoL:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "4tBJGISpCfMWS66X:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 6074.047619047619,
            y: 131.09523809523785,
          },
          id: "NVXncGpsG35aNu6Z",
        },
        {
          inputs: {
            entry: {
              connection: "UlMG5AveQzx1U8Ms:outputs:target",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 8196.47619047619,
            y: 120.52380952380918,
          },
          id: "JIun2ueu6n9Tfvd7",
        },
        {
          type: "effect",
          position: {
            x: 3893.52380952381,
            y: 290.66666666666623,
          },
          id: "ES8oKsgK9yiexhgr",
          inputs: {
            origin: {
              connection: "z2EFNeufiuo3n9b7:outputs:entry",
            },
            name: {
              connection: "J82NbTzlUo59CQWn:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "nTF5XslHy1r93OyL:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
            file: {
              value: "jb2a.on_token_cast.initiate.001.instant.combined.blue.1",
            },
          },
          position: {
            x: 4548.934065934065,
            y: 278.03571428571394,
          },
          id: "MqlmEXvYfV5r7f3D",
          outs: {
            out: {
              connection: "QWQcaiulCYpPWe34:ins:in",
            },
          },
        },
        {
          type: "scale",
          state: "object",
          inputs: {
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
            objectScale: {
              value: 1.5,
            },
          },
          position: {
            x: 4803.21978021978,
            y: 281.12619047618966,
          },
          id: "QWQcaiulCYpPWe34",
          outs: {
            out: {
              connection: "9I0LwMT281lIAPws:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
            attachTo: {
              value: true,
            },
            location: {
              connection: "HM3BEMOfccqm0f4D:outputs:entry",
            },
          },
          position: {
            x: 5066.076923076922,
            y: 279.69761904761856,
          },
          id: "9I0LwMT281lIAPws",
          outs: {
            out: {
              connection: "vGDiVg0hF3fPImfH:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:bjHi4atunFZHuJZ6",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3717.8095238095248,
            y: 175.73412698412665,
          },
          id: "z2EFNeufiuo3n9b7",
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3721.6984126984125,
            y: 125.7341269841267,
          },
          id: "J82NbTzlUo59CQWn",
        },
        {
          inputs: {
            entry: {
              connection: "4tBJGISpCfMWS66X:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 4900.285714285715,
            y: 207.33333333333275,
          },
          id: "HM3BEMOfccqm0f4D",
        },
        {
          type: "flow",
          inputs: {
            effect: {
              connection: "9I0LwMT281lIAPws:outputs:effect",
            },
            waitUntilFinished: {
              value: true,
            },
            waitDelayMin: {
              value: -2300,
            },
          },
          position: {
            x: 5355.714285714286,
            y: 278.4404761904757,
          },
          id: "vGDiVg0hF3fPImfH",
          outs: {
            out: {
              connection: "oQtPIBlNrY0TAuoL:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "4tBJGISpCfMWS66X:outputs:targets",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 6591.857142857142,
            y: 112.17857142857162,
          },
          id: "mTFBHnzKnBeV2Qjm",
        },
        {
          inputs: {
            entry: {
              connection: "4tBJGISpCfMWS66X:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 6586.428571428571,
            y: 152.17857142857156,
          },
          id: "7xU7e6DNZVurEJFe",
        },
        {
          type: "module-enabled",
          position: {
            x: 4193.587301587302,
            y: 300.19047619047655,
          },
          id: "nTF5XslHy1r93OyL",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            false: {
              connection: "toQoTkIheUYQE49i:ins:in",
            },
            true: {
              connection: "MqlmEXvYfV5r7f3D:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            file: {
              value: "jb2a.on_token_cast.initiate.001.instant.part02.blue.0",
            },
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
          },
          position: {
            x: 4550.838827838828,
            y: 472.3214285714282,
          },
          id: "toQoTkIheUYQE49i",
          outs: {
            out: {
              connection: "QWQcaiulCYpPWe34:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 6931.960317460318,
            y: 107.89682539682576,
          },
          id: "nSkmkTWQHrwHue9o",
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:bjHi4atunFZHuJZ6",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 6929.738095238095,
            y: 151.23015873015902,
          },
          id: "8j5vnnt9DYeNuubp",
        },
        {
          type: "file",
          inputs: {
            file: {
              value: "jb2a.on_token_buff.001.002.blue",
            },
            effect: {
              connection: "gVixIsQVmAcLcDi5:outputs:effect",
            },
          },
          position: {
            x: 7752.865079365078,
            y: 184.89285714285728,
          },
          id: "4SE9xaMQdGjJW3vA",
          outs: {
            out: {
              connection: "0M9U6hdrZ1VRCpkn:ins:in",
            },
          },
        },
        {
          type: "module-enabled",
          position: {
            x: 7388.946886446885,
            y: 202.76190476190578,
          },
          id: "zzFDdCYhYDv3XhRO",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            false: {
              connection: "0l5W1JkvM4lvElGj:ins:in",
            },
            true: {
              connection: "4SE9xaMQdGjJW3vA:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            file: {
              value: "jb2a.on_token_buff.001.001.blue",
            },
            effect: {
              connection: "gVixIsQVmAcLcDi5:outputs:effect",
            },
          },
          position: {
            x: 7750.484126984125,
            y: 379.1785714285717,
          },
          id: "0l5W1JkvM4lvElGj",
          outs: {
            out: {
              connection: "0M9U6hdrZ1VRCpkn:ins:in",
            },
          },
        },
      ],
      variables: {
        "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "UlMG5AveQzx1U8Ms:outputs:target": {
          isArray: false,
          label: "Target",
          type: "target",
        },
        "4tBJGISpCfMWS66X:outputs:sources": {
          isArray: true,
          label: "Sources",
          type: "target",
        },
        "hKxoCifZlHGTfs7q:outputs:bjHi4atunFZHuJZ6": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "4tBJGISpCfMWS66X:outputs:targets": {
          isArray: true,
          label: "Targets",
          type: "target",
        },
      },
    }),
    SOURCE: JSON.stringify({
      nodes: [
        {
          id: "4tBJGISpCfMWS66X",
          position: {
            x: 0,
            y: 206.28571428571365,
          },
          type: "animation-event",
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "hKxoCifZlHGTfs7q:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          inputs: {
            input: {
              connection: "4tBJGISpCfMWS66X:outputs:item",
            },
          },
          position: {
            x: 271.9523809523803,
            y: 247.91190476190422,
          },
          id: "hKxoCifZlHGTfs7q",
          custom: {
            outputs: {
              "0O36ShxaMq7mdmfp": {
                id: "0O36ShxaMq7mdmfp",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              bjHi4atunFZHuJZ6: {
                id: "bjHi4atunFZHuJZ6",
                input: "uuid",
                label: "UUID",
                slug: "path",
                isArray: false,
                type: "text",
              },
            },
          },
          outs: {
            out: {
              connection: "ES8oKsgK9yiexhgr:ins:in",
            },
          },
        },
        {
          type: "sound",
          position: {
            x: 2440.1849816849817,
            y: 225.91666666666652,
          },
          id: "oQtPIBlNrY0TAuoL",
          inputs: {
            file: {
              value: "ggg-sfx.magic.arcane.cast.general.02",
            },
            name: {
              connection: "mdUfkgFh5gcnju6W:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "5UVNe71FW6ieh52C:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2329.7142857142867,
            y: 314.10714285714243,
          },
          id: "mdUfkgFh5gcnju6W",
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "oQtPIBlNrY0TAuoL:outputs:sound",
            },
            location: {
              connection: "NVXncGpsG35aNu6Z:outputs:entry",
            },
            exitOnEmpty: {
              value: "global",
            },
          },
          position: {
            x: 2735.0119047619046,
            y: 229.0666666666666,
          },
          id: "5UVNe71FW6ieh52C",
          outs: {
            out: {
              connection: "GSe9nUVgTDjclsF1:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            sound: {
              connection: "oQtPIBlNrY0TAuoL:outputs:sound",
            },
            preset: {
              value: "troveSound",
            },
          },
          position: {
            x: 2978.0119047619046,
            y: 226.66666666666652,
          },
          id: "GSe9nUVgTDjclsF1",
          outs: { out: { connection: "jlfLxKR9XVVlidzO:ins:in" } },
        },
        {
          type: "play",
          position: { x: 3200, y: 230.8333333333333 },
          id: "jlfLxKR9XVVlidzO",
          inputs: { local: { value: true } },
        },
        {
          inputs: {
            entry: {
              connection: "4tBJGISpCfMWS66X:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2599.190476190476,
            y: 165.09523809523785,
          },
          id: "NVXncGpsG35aNu6Z",
        },
        {
          type: "effect",
          position: {
            x: 672.666666666667,
            y: 233.66666666666634,
          },
          id: "ES8oKsgK9yiexhgr",
          inputs: {
            origin: {
              connection: "z2EFNeufiuo3n9b7:outputs:entry",
            },
            name: {
              connection: "J82NbTzlUo59CQWn:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "nTF5XslHy1r93OyL:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
            file: {
              value: "jb2a.on_token_cast.initiate.001.instant.combined.blue.1",
            },
          },
          position: {
            x: 1260.0769230769224,
            y: 226.035714285714,
          },
          id: "MqlmEXvYfV5r7f3D",
          outs: {
            out: {
              connection: "QWQcaiulCYpPWe34:ins:in",
            },
          },
        },
        {
          type: "scale",
          state: "object",
          inputs: {
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
            objectScale: {
              value: 1.5,
            },
          },
          position: {
            x: 1514.3626373626366,
            y: 229.12619047618966,
          },
          id: "QWQcaiulCYpPWe34",
          outs: {
            out: {
              connection: "9I0LwMT281lIAPws:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
            attachTo: {
              value: true,
            },
            location: {
              connection: "HM3BEMOfccqm0f4D:outputs:entry",
            },
          },
          position: {
            x: 1777.2197802197793,
            y: 227.69761904761856,
          },
          id: "9I0LwMT281lIAPws",
          outs: {
            out: {
              connection: "vGDiVg0hF3fPImfH:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:bjHi4atunFZHuJZ6",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 535.9523809523816,
            y: 324.7341269841268,
          },
          id: "z2EFNeufiuo3n9b7",
        },
        {
          inputs: {
            entry: {
              connection: "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 537.8412698412694,
            y: 283.7341269841269,
          },
          id: "J82NbTzlUo59CQWn",
        },
        {
          inputs: {
            entry: {
              connection: "4tBJGISpCfMWS66X:outputs:sources",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1611.4285714285716,
            y: 155.3333333333328,
          },
          id: "HM3BEMOfccqm0f4D",
        },
        {
          type: "flow",
          inputs: {
            effect: {
              connection: "9I0LwMT281lIAPws:outputs:effect",
            },
            waitUntilFinished: {
              value: true,
            },
            waitDelayMin: {
              value: -2300,
            },
          },
          position: {
            x: 2066.857142857143,
            y: 226.4404761904757,
          },
          id: "vGDiVg0hF3fPImfH",
          outs: {
            out: {
              connection: "oQtPIBlNrY0TAuoL:ins:in",
            },
          },
        },
        {
          type: "module-enabled",
          position: {
            x: 972.730158730159,
            y: 243.19047619047666,
          },
          id: "nTF5XslHy1r93OyL",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            false: {
              connection: "toQoTkIheUYQE49i:ins:in",
            },
            true: {
              connection: "MqlmEXvYfV5r7f3D:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            file: {
              value: "jb2a.on_token_cast.initiate.001.instant.part02.blue.0",
            },
            effect: {
              connection: "ES8oKsgK9yiexhgr:outputs:effect",
            },
          },
          position: {
            x: 1261.9816849816848,
            y: 420.3214285714282,
          },
          id: "toQoTkIheUYQE49i",
          outs: {
            out: {
              connection: "QWQcaiulCYpPWe34:ins:in",
            },
          },
        },
      ],
      variables: {
        "hKxoCifZlHGTfs7q:outputs:0O36ShxaMq7mdmfp": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "4tBJGISpCfMWS66X:outputs:sources": {
          isArray: true,
          label: "Sources",
          type: "target",
        },
        "hKxoCifZlHGTfs7q:outputs:bjHi4atunFZHuJZ6": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "4tBJGISpCfMWS66X:outputs:targets": {
          isArray: true,
          label: "Targets",
          type: "target",
        },
      },
    }),
  },
  TEMPLATES: {
    BURST_EMANATION: JSON.stringify({
      nodes: [
        {
          id: "cQ4T2clnTJ2z70XX",
          position: {
            x: 0,
            y: 200,
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
            x: 294.58974215696924,
            y: 194.23335590362547,
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
            x: 548.5897249274693,
            y: 176.16667652130127,
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
              value: "jb2a.healing_generic.burst.bluewhite",
            },
          },
          position: {
            x: 933.0476054750559,
            y: 214.10716288430353,
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
            x: 1201.8095205198326,
            y: 209.48339405059824,
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
            x: 2704.3871401469837,
            y: 214.24995636940002,
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
            x: 1427.5873222013208,
            y: 209.00006389617886,
          },
          id: "bHiknSSrgUd6sHKK",
          inputs: {
            effect: {
              connection: "kMn5MlQ9xR1cqy46:outputs:effect",
            },
            objectScale: {
              value: 1.1,
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
            x: 1678.589743589744,
            y: 211.83333333333337,
          },
          id: "Anm8jTC91Wwav5VE",
          inputs: {
            file: {
              value: "ggg-sfx.magic.occult.siphon.01.01",
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
            x: 2221.75,
            y: 213.23333333333346,
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
            preset: {
              value: "troveSound",
            },
            sound: {
              connection: "Anm8jTC91Wwav5VE:outputs:sound",
            },
          },
          position: {
            x: 2436.75,
            y: 212.83333333333348,
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
            x: 1957.7142857142853,
            y: 215.2857142857141,
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
            x: 1829,
            y: 345,
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
    CONE: JSON.stringify({
      nodes: [
        {
          id: "PYO4aCkFrMjIYJ5a",
          position: {
            x: 0,
            y: 195.77380952380946,
          },
          type: "animation-event",
          custom: {
            outputs: {
              N5hHx5cEww8Dqwgq: {
                id: "N5hHx5cEww8Dqwgq",
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
              connection: "mfGMdgzYC9o9ubF8:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 264.58974215696924,
            y: 206.67383209410167,
          },
          id: "mfGMdgzYC9o9ubF8",
          custom: {
            outputs: {
              S6NAMFu7Md7Boj2V: {
                id: "S6NAMFu7Md7Boj2V",
                input: "name",
                label: "Name",
                slug: "path",
                isArray: false,
                type: "text",
              },
              JOZ8POppQtWl9CyI: {
                id: "JOZ8POppQtWl9CyI",
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
              connection: "PYO4aCkFrMjIYJ5a:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "7J2Qlu4EksMqdT8f:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 518.5897249274693,
            y: 188.60715271177747,
          },
          id: "7J2Qlu4EksMqdT8f",
          inputs: {
            name: {
              connection: "SGjbm1HGG9ehUYRZ:outputs:entry",
            },
            origin: {
              connection: "mUnjhlQlcDy4D9v6:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "13EyApSCy9j9QMu3:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "7J2Qlu4EksMqdT8f:outputs:effect",
            },
            file: {
              value: "jb2a.breath_weapons.fire.cone.orange.01",
            },
          },
          position: {
            x: 1248.4642721417226,
            y: 335.55557558271613,
          },
          id: "nOV2yplyHvrgsZqM",
          outs: {
            out: {
              connection: "mkPu8MpxhhL2iGfw:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "7J2Qlu4EksMqdT8f:outputs:effect",
            },
            cacheLocation: {
              value: true,
            },
            location: {
              connection: "QCK834bLdIERbt5f:outputs:entry",
            },
          },
          position: {
            x: 1546.2420602023722,
            y: 158.70561627282024,
          },
          id: "mkPu8MpxhhL2iGfw",
          outs: {
            out: {
              connection: "3SYHxrEOwxZxNQtG:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 4669.545870305713,
            y: 144.13884525828894,
          },
          id: "1Yy8sdQFFNghIiNk",
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
            x: 3832.637362637363,
            y: 190.72222222222229,
          },
          id: "wloqa2XV10trOpR6",
          inputs: {
            name: {
              connection: "DL4KWLjEaibRUalC:outputs:entry",
            },
            file: {
              value: "ggg-sfx.magic.fire.cast.throw.04.slow",
            },
          },
          outs: {
            out: {
              connection: "17CbDXsiBmWGmgVO:ins:in",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "wloqa2XV10trOpR6:outputs:sound",
            },
            location: {
              connection: "17CbDXsiBmWGmgVO:outputs:xHllS0AFFL4QrrBw",
            },
          },
          position: {
            x: 4125.797619047618,
            y: 149.23333333333346,
          },
          id: "PSSrGMnezbhtYqk1",
          outs: {
            out: {
              connection: "x3KX3X7pRXMwTRNN:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: {
              value: "troveSound",
            },
            sound: {
              connection: "wloqa2XV10trOpR6:outputs:sound",
            },
          },
          position: {
            x: 4355.242063492063,
            y: 148.83333333333337,
          },
          id: "x3KX3X7pRXMwTRNN",
          outs: {
            out: {
              connection: "1Yy8sdQFFNghIiNk:ins:in",
            },
          },
        },
        {
          type: "execute-script",
          position: {
            x: 3813.380952380952,
            y: 351.8888888888888,
          },
          id: "17CbDXsiBmWGmgVO",
          custom: {
            inputs: {
              "9HUgmtaQ66C9eNYr": {
                id: "9HUgmtaQ66C9eNYr",
                label: "Template",
                slug: "input",
                isArray: false,
                type: "any",
              },
            },
            outputs: {
              xHllS0AFFL4QrrBw: {
                id: "xHllS0AFFL4QrrBw",
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
            "9HUgmtaQ66C9eNYr": {
              connection: "GWYwpMw5V5LxmlJ1:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "PSSrGMnezbhtYqk1:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "PYO4aCkFrMjIYJ5a:outputs:N5hHx5cEww8Dqwgq",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3673.492063492063,
            y: 437.44444444444446,
          },
          id: "GWYwpMw5V5LxmlJ1",
        },
        {
          type: "aim",
          position: {
            x: 1783.8621101121103,
            y: 160.288888888889,
          },
          id: "3SYHxrEOwxZxNQtG",
          inputs: {
            effect: {
              connection: "7J2Qlu4EksMqdT8f:outputs:effect",
            },
            towards: {
              connection: "IhWonnfczr4vv3Q6:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "3VaJlsvrwzzfwEvh:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "PYO4aCkFrMjIYJ5a:outputs:N5hHx5cEww8Dqwgq",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1644.686507936508,
            y: 114.43434343434365,
          },
          id: "IhWonnfczr4vv3Q6",
        },
        {
          inputs: {
            entry: {
              connection: "PYO4aCkFrMjIYJ5a:outputs:N5hHx5cEww8Dqwgq",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 661.3333333333331,
            y: 138.54148629148642,
          },
          id: "QCK834bLdIERbt5f",
        },
        {
          type: "flow",
          position: {
            x: 2082.498473748474,
            y: 160.26767676767702,
          },
          id: "3VaJlsvrwzzfwEvh",
          inputs: {
            effect: {
              connection: "7J2Qlu4EksMqdT8f:outputs:effect",
            },
          },
          outs: {
            out: {
              connection: "Qbbc8kr0JZww4mof:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "mfGMdgzYC9o9ubF8:outputs:S6NAMFu7Md7Boj2V",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 364.2500000000001,
            y: 122.107142857143,
          },
          id: "SGjbm1HGG9ehUYRZ",
        },
        {
          inputs: {
            entry: {
              connection: "mfGMdgzYC9o9ubF8:outputs:JOZ8POppQtWl9CyI",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 358.0000000000001,
            y: 168.35714285714295,
          },
          id: "mUnjhlQlcDy4D9v6",
        },
        {
          inputs: {
            entry: {
              connection: "mfGMdgzYC9o9ubF8:outputs:S6NAMFu7Md7Boj2V",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3724.464285714286,
            y: 282.75000000000006,
          },
          id: "DL4KWLjEaibRUalC",
        },
        {
          type: "if-truthy",
          position: {
            x: 2350.244505494505,
            y: 176.5428571428571,
          },
          id: "Qbbc8kr0JZww4mof",
          custom: {
            inputs: {
              cx2rlPQjOk0otErl: {
                id: "cx2rlPQjOk0otErl",
                label: "doubledCone?",
                slug: "condition",
                isArray: false,
                type: "boolean",
              },
            },
          },
          inputs: {
            cx2rlPQjOk0otErl: {
              value: true,
            },
          },
          outs: {
            false: {
              connection: "wloqa2XV10trOpR6:ins:in",
            },
            true: {
              connection: "yCDjTNbdEMhkCTjv:ins:in",
            },
          },
        },
        {
          type: "get-quality",
          position: {
            x: 2620.9587912087914,
            y: 310.2857142857143,
          },
          id: "yCDjTNbdEMhkCTjv",
          outs: {
            minimal: {
              connection: "wloqa2XV10trOpR6:ins:in",
            },
            low: {
              connection: "7EWH93l8twNlVB3K:ins:in",
            },
            medium: {
              connection: "7EWH93l8twNlVB3K:ins:in",
            },
            high: {
              connection: "7EWH93l8twNlVB3K:ins:in",
            },
          },
        },
        {
          custom: {
            title: "Second Cone",
            outputs: {
              KpZj65Aqn20LtCCI: {
                id: "KpZj65Aqn20LtCCI",
                label: "2nd Cone?",
                slug: "entry",
                isArray: false,
                type: "boolean",
              },
            },
          },
          type: "__gate_exit__",
          position: {
            x: 198.82142857142856,
            y: -102.60714285714278,
          },
          id: "jBvVK9vdJIc9E4qw",
          outs: {
            out: {
              connection: "7J2Qlu4EksMqdT8f:ins:in",
            },
          },
        },
        {
          outs: {
            out: {
              connection: "jBvVK9vdJIc9E4qw:ins:in",
            },
          },
          type: "__gate_entry__",
          position: {
            x: 3764.535714285714,
            y: 807.0357142857146,
          },
          id: "3YnS5IA1cjMcjCzq",
          inputs: {
            KpZj65Aqn20LtCCI: {
              value: true,
            },
          },
        },
        {
          type: "rotation",
          position: {
            x: 3134.7087912087914,
            y: 397.0357142857144,
          },
          id: "gU2qef48XWEXzADY",
          inputs: {
            spriteRotation: {
              connection: "7EWH93l8twNlVB3K:outputs:Wo3pRHij38wXxxod",
            },
            effect: {
              connection: "3VaJlsvrwzzfwEvh:outputs:effect",
            },
          },
          outs: {
            out: {
              connection: "g2ebEKgjSybsBsZe:ins:in",
            },
          },
        },
        {
          type: "execute-script",
          position: {
            x: 2843.285714285714,
            y: 389.53571428571456,
          },
          id: "7EWH93l8twNlVB3K",
          custom: {
            inputs: {
              xGLZmtOnJKaIaTIs: {
                id: "xGLZmtOnJKaIaTIs",
                label: "2nd Cone?",
                slug: "input",
                isArray: false,
                type: "boolean",
              },
            },
            outputs: {
              Wo3pRHij38wXxxod: {
                id: "Wo3pRHij38wXxxod",
                label: "Angle",
                slug: "output",
                isArray: false,
                type: "number",
              },
            },
          },
          inputs: {
            script: {
              value:
                'const angleOffset = 22.5\nconst sign = !!inputs[0] ? -1 : 1;\nreturn [{type: "number", value: sign * angleOffset}];',
            },
            xGLZmtOnJKaIaTIs: {
              connection: "hMehYflfrFaXBfgs:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "gU2qef48XWEXzADY:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "jBvVK9vdJIc9E4qw:outputs:KpZj65Aqn20LtCCI",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2704.0357142857147,
            y: 476.7857142857145,
          },
          id: "hMehYflfrFaXBfgs",
        },
        {
          type: "if-truthy",
          position: {
            x: 3490.285714285715,
            y: 579.5357142857147,
          },
          id: "g2ebEKgjSybsBsZe",
          custom: {
            inputs: {
              sdVeVT7fU0PH8Dnx: {
                id: "sdVeVT7fU0PH8Dnx",
                label: "Finished?",
                slug: "condition",
                isArray: false,
                type: "boolean",
              },
            },
          },
          inputs: {
            sdVeVT7fU0PH8Dnx: {
              connection: "stP7Uh0cMxmjXerV:outputs:entry",
            },
          },
          outs: {
            true: {
              connection: "wloqa2XV10trOpR6:ins:in",
            },
            false: {
              connection: "3YnS5IA1cjMcjCzq:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "jBvVK9vdJIc9E4qw:outputs:KpZj65Aqn20LtCCI",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 3363.535714285715,
            y: 625.5357142857147,
          },
          id: "stP7Uh0cMxmjXerV",
        },
        {
          type: "module-enabled",
          position: {
            x: 791.5724275724276,
            y: 202.42532467532453,
          },
          id: "13EyApSCy9j9QMu3",
          inputs: {
            module: {
              value: "jb2a_patreon",
            },
          },
          outs: {
            true: {
              connection: "SwWZgQKcRz4yhAz2:ins:in",
            },
            false: {
              connection: "nOV2yplyHvrgsZqM:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "7J2Qlu4EksMqdT8f:outputs:effect",
            },
            file: {
              value: "jb2a.breath_weapons.fire.cone.orange.02",
            },
          },
          position: {
            x: 1241.1915448689952,
            y: 90.10103012817069,
          },
          id: "SwWZgQKcRz4yhAz2",
          outs: {
            out: {
              connection: "mkPu8MpxhhL2iGfw:ins:in",
            },
          },
        },
      ],
      variables: {
        "PYO4aCkFrMjIYJ5a:outputs:N5hHx5cEww8Dqwgq": {
          isArray: false,
          label: "Template",
          type: "region",
        },
        "mfGMdgzYC9o9ubF8:outputs:S6NAMFu7Md7Boj2V": {
          isArray: false,
          label: "Name",
          type: "text",
        },
        "mfGMdgzYC9o9ubF8:outputs:JOZ8POppQtWl9CyI": {
          isArray: false,
          label: "UUID",
          type: "text",
        },
        "jBvVK9vdJIc9E4qw:outputs:KpZj65Aqn20LtCCI": {
          isArray: false,
          label: "2nd Cone?",
          type: "boolean",
        },
      },
    }),
    LINE: JSON.stringify({
      nodes: [
        {
          id: "buq3tU2pxIiR5IWz",
          position: {
            x: 0,
            y: 171.66666666666657,
          },
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
          inputs: {
            name: {
              value: "placeholder-trigger-names",
            },
          },
          outs: {
            out: {
              connection: "R4V7ygO4mrXtDYAz:ins:in",
            },
          },
        },
        {
          type: "extract-item",
          position: {
            x: 264.58974215696924,
            y: 182.56668923695878,
          },
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
            input: {
              connection: "buq3tU2pxIiR5IWz:outputs:item",
            },
          },
          outs: {
            out: {
              connection: "liv4jrzZJXZpVSL2:ins:in",
            },
          },
        },
        {
          type: "effect",
          position: {
            x: 518.5897249274693,
            y: 164.50000985463458,
          },
          id: "liv4jrzZJXZpVSL2",
          inputs: {
            name: {
              connection: "R4V7ygO4mrXtDYAz:outputs:mCVSZGGWLUr7J0QM",
            },
            origin: {
              connection: "R4V7ygO4mrXtDYAz:outputs:1vzDKaAlabAPOfQo",
            },
          },
          outs: {
            out: {
              connection: "fnsvNB7lWSl3vZSq:ins:in",
            },
          },
        },
        {
          type: "file",
          inputs: {
            effect: {
              connection: "liv4jrzZJXZpVSL2:outputs:effect",
            },
            file: {
              value: "jb2a.lightning_bolt.narrow.blue",
            },
          },
          position: {
            x: 833.999986427437,
            y: 161.80557558271613,
          },
          id: "fnsvNB7lWSl3vZSq",
          outs: {
            out: {
              connection: "f8dyGCIfQr2TxSfX:ins:in",
            },
          },
        },
        {
          type: "location",
          state: "targets",
          inputs: {
            effect: {
              connection: "liv4jrzZJXZpVSL2:outputs:effect",
            },
            cacheLocation: {
              value: true,
            },
            location: {
              connection: "gqkQYUecKZvGqCuT:outputs:entry",
            },
          },
          position: {
            x: 1063.7777744880864,
            y: 160.70561627282024,
          },
          id: "f8dyGCIfQr2TxSfX",
          outs: {
            out: {
              connection: "hAY3LzLlYK4Q73P5:ins:in",
            },
          },
        },
        {
          type: "play",
          position: {
            x: 3000.081584591428,
            y: 158.4721785916223,
          },
          id: "ExE2lGwaMB8rpUZ4",
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
            x: 1879.839743589744,
            y: 156.0555555555556,
          },
          id: "7BMsQhHOs2zfFjwI",
          inputs: {
            file: {
              value: "ggg-sfx.magic.electricity.cast.charge.01",
            },
            name: {
              connection: "R4V7ygO4mrXtDYAz:outputs:mCVSZGGWLUr7J0QM",
            },
          },
          outs: {
            out: {
              connection: "N4e5N90bDsN8QIrB:ins:in",
            },
          },
        },
        {
          type: "snd-location",
          state: "atLocation",
          inputs: {
            sound: {
              connection: "7BMsQhHOs2zfFjwI:outputs:sound",
            },
            location: {
              connection: "N4e5N90bDsN8QIrB:outputs:YxpfFAOQggVwCsO8",
            },
          },
          position: {
            x: 2483,
            y: 158.56666666666683,
          },
          id: "k5yMLOhMnvJQdRui",
          outs: {
            out: {
              connection: "TFhTKK0Le4SFT2iG:ins:in",
            },
          },
        },
        {
          type: "snd-flow",
          inputs: {
            preset: {
              value: "troveSound",
            },
            sound: {
              connection: "7BMsQhHOs2zfFjwI:outputs:sound",
            },
          },
          position: {
            x: 2712.4444444444443,
            y: 158.16666666666686,
          },
          id: "TFhTKK0Le4SFT2iG",
          outs: {
            out: {
              connection: "ExE2lGwaMB8rpUZ4:ins:in",
            },
          },
        },
        {
          type: "execute-script",
          position: {
            x: 2186.583333333333,
            y: 155.22222222222223,
          },
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
            qjU48Lj8nx9ds3i9: {
              connection: "M6jOJTalL2br81jH:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "k5yMLOhMnvJQdRui:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 2014.6944444444443,
            y: 104.77777777777783,
          },
          id: "M6jOJTalL2br81jH",
        },
        {
          type: "aim",
          position: {
            x: 1301.3978243978245,
            y: 162.288888888889,
          },
          id: "hAY3LzLlYK4Q73P5",
          inputs: {
            effect: {
              connection: "liv4jrzZJXZpVSL2:outputs:effect",
            },
            towards: {
              connection: "G3IRIVBXB7Mvf6rV:outputs:entry",
            },
          },
          outs: {
            out: {
              connection: "rj7X0Sf0wWMmwWB8:ins:in",
            },
          },
        },
        {
          inputs: {
            entry: {
              connection: "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 1162.2222222222222,
            y: 116.43434343434362,
          },
          id: "G3IRIVBXB7Mvf6rV",
        },
        {
          inputs: {
            entry: {
              connection: "buq3tU2pxIiR5IWz:outputs:yA5gipDgx9QRRKU1",
            },
          },
          type: "__variable_getter__",
          position: {
            x: 883.3333333333331,
            y: 116.43434343434356,
          },
          id: "gqkQYUecKZvGqCuT",
        },
        {
          type: "flow",
          position: {
            x: 1600.0341880341884,
            y: 162.26767676767702,
          },
          id: "rj7X0Sf0wWMmwWB8",
          inputs: {
            effect: {
              connection: "liv4jrzZJXZpVSL2:outputs:effect",
            },
            delayMin: {
              value: 2400,
            },
          },
          outs: {
            out: {
              connection: "7BMsQhHOs2zfFjwI:ins:in",
            },
          },
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
