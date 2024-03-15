/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js",
  "node_modules/flowbite-react/lib/esm/**/*.js",
];
export const theme = {
  extend: {
    colors: {
      loginbg: "#be959b",
      btnlight: "#fbcfe6",
      bg1: "#fff",
      dbg1: "#202124",
      bg2: "#eedde9",
      dbg2: "#5c1134",
      bg3: "#ebd1d1",
      dbg3: "#4d1731",
      bg4: "#53102f",
      dbg4: "#531336",
      bgInv: "#1a0711",
      bgGrey: "#fcfcfc",
      dbgGrey: "#201f22",
      bgTrans: "#360913b8",
      dbgTrans: "#360c1eb8",
      bgSoft: "#eee4e8",
      dbgSoft: "#3e3a3a",
      btn: "#532341",
      dbtn: "#801547",
      btn2: "#761a51",
      dbtn2: "#761a51",
      btnred: "#ca1919",
      dbtnred: "#830f0f",
      border1: "#d3d3d3",
      dborder1: "#444",
    },
    screens: {
      xs: "480px",
      nm: "896px",
    },
    animation: {
      sizeup:"sizeup 5s linear forwards",
      disappear:"disappear 5s linear forwards",
      falldown5: "falldown 0.5s ease-out forwards",
      fallup5: "fallup 0.5s ease-in forwards",
      riseup5: "riseup 0.5s ease-out forwards",
      risedown5: "risedown 0.5s ease-in forwards",
      openD: "openD 0.3s ease-out forwards",
      closeD: "closeD 0.3s ease-out forwards",
      openL: "openL 0.2s linear forwards",
      closeL: "closeL 0.2s linear forwards",
      openR: "openR 0.2s linear forwards",
      closeR: "closeR 0.2s linear forwards",
      openIcons: "openIcons 0.1s linear",
      closeIcons: "closeIcons 0.1s linear",
      wiggle: "wiggle 300ms ease-in-out",
    },
    backgroundImage: {
      'food1': "url('../public/foods/food-1.jpg')",
      'dubai1': "url('../public/other/dubai-1.jpg')",
      'map1': "url('../public/other/dotted_map.png')",
    },
    keyframes: {
      sizeup: {
        '0%,25%': { color:"white" },
        '30%': { fontSize: '128px',color:"transparent" },
        '95%': {fontSize: '1100px',fontWeight:"1000"},
        '100%': {fontSize: '1100px',fontWeight:"1000",display:"hidden"},
      },
      disappear: {
        "0%": { opacity:"1" }, 
        "90%": { display: "flex", opacity:"1" },  
        "100%": { display: "hidden", opacity:"0" },  
      },
      falldown: {
        "0%": { transform: "translateY(-1000%)", opacity:"0" }, 
        "100%": { transform: "translateY(0)", opacity:"1" },  
      },
      fallup: {
        "0%": { transform: "translateY(0)" , opacity:"1"},  
        "100%": { transform: "translateY(-1000%)", opacity:"0"  }, 
      },
      riseup: {
        "0%": { transform: "translateY(1000%)", opacity:"0" }, 
        "100%": { transform: "translateY(0)", opacity:"1" },  
      },
      risedown: {
        "0%": { transform: "translateY(0)", opacity:"1" },  
        "100%": { transform: "translateY(1000%)", opacity:"0" }, 
      },
      openD: {
        "0%": { transform: "translateY(-100%)" }, 
        "50%": { transform: "translateY(-50%)" }, 
        "100%": { transform: "translateY(0)" },  
      },
      closeD: {
        "0%": { transform: "translateY(0)" },  
        "50%": { transform: "translateY(-50%)" }, 
        "100%": { transform: "translateY(-100%)" }, 
      },
      openL: {
        "0%": { transform: "translateX(-100%)" }, 
        "50%": { transform: "translateX(-50%)" }, 
        "100%": { transform: "translateX(0)" },  
      },      
      closeL: {
        "0%": { transform: "translateX(0)" },  
        "50%": { transform: "translateX(-50%)" }, 
        "100%": { transform: "translateX(-100%)" }, 
      },
      openR: {
        "0%": { transform: "translateX(100%)" }, 
        "50%": { transform: "translateX(50%)" }, 
        "100%": { transform: "translateX(0)" },  
      },      
      closeR: {
        "0%": { transform: "translateX(0)" },  
        "50%": { transform: "translateX(50%)" }, 
        "100%": { transform: "translateX(100%)" }, 
      },
      openIcons: {
        "0%": { display: "none" },
        "90%": { display: "none" },
        "100%": { display: "block" },
      },
      closeIcons: {
        "0%": { display: "block" },
        "10%": { display: "none" },
        "100%": { display: "none" },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-15deg)" },
        "50%": { transform: "rotate(15deg)" },
      },
    },
    fontSize: {
      xxs: "0.5rem",
    },
    fontFamily: {
      teko: 'Teko, sans-serif', 
      anton: 'Anton, sans-serif', 
      alice: 'Alice, sans-serif', 
      madimi:'Madimi One,sans-serif'
    },
    flex: {
      2: "2 2 0%",
      3: "3 3 0%",
      4: "4 4 0%",
      5: "5 5 0%",
      6: "6 6 0%",
      7: "7 7 0%",
    },
    zIndex: {
      997: "997",
      998: "998",
      999: "999",
    },
    boxShadow: {
      ful1: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
    },
  },
};
export const darkMode = ["class"];
