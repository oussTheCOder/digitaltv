/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    'src/**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes :{
        animate : {
          '0%,10%,100%':{
            width:'0%'
          },
          '70%,80%,90%':{
            width:'100%'
          }
        },
      },
      animation :{
        animate :'animate 6s linear infinite'
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        nero:['Nero','sans-serif'],
      },
      boxShadow:{
        'topLight' :'inset 0px -20px 10px rgba(248, 246, 254,0.9)',
        'topDark' :'inset 0px -20px 10px rgba(248, 246, 254,0.9)',
        'innerSportGrayLightSm':'inset 0px -300px 80px 0px rgba(248, 246, 254,1)',
        'innerGrayLightSm':'inset 0px -300px 80px 0px rgba(248, 246, 254,1)',
        'innerGrayLightLg':'inset 350px -50px 100px 50px rgba(248, 246, 254,1)',
        "innerGrayLightXl":'inset 450px -150px 100px 0px rgba(248, 246, 254,1)',
        'innerSportGrayDarkSm':'inset 0px -300px 80px 0px rgba(17, 24, 39,1)',
        'innerGrayDarkSm':"inset 0px -300px 80px 0px rgba(17, 24, 39,1)",
        "innerGrayDarkLg":'inset 350px -50px 300px 200px rgba(17, 24, 39,1)',
        "innerGrayDarkXl":'inset 450px -150px 100px 50px rgba(17, 24, 39,1)',

    },
    textColor: {
      'red': '#ff0000', // or use a specific shade from your color palette
    },
    backgroundPosition: {
      '100-right': 'calc(100% + 100px) center',
      '200-right': 'calc(100% + 200px) center',
      '250-right': 'calc(100% + 250px) center',
      '300-right': 'calc(100% + 300px) center',
      // '100-top' : 'calc(300px + 100%) center' ,
    },
      brightness:{
        "20":'20%'
      },
      contrast:{
        "20":"20%",
      },
      screens:{
        "xxsm":'330px',
        "xsm":"420px",
        "430":"430px",
        "500":"500px",
        "575":"575px",
        "rsp-820":"820px",
        "lg":"1024px"
      },
      height:{
        "95-screen":"95%",
        "700":"700px"
      },
      width:{
        "110":"110px",
        "130":"130px",
        "350":"350px",
        "360":"360px",
        "400":"400px",
        "500":"500px",
        "4.5/10":"45%"
      },
      minWidth:{
        '100':'100px',
        '216':'216px',
        "360":'360px',
      },
      maxWidth:{
        '100':"100px",
        '216':'216px',
        '350':'350px',
        "400":'400px',
        "500":"500px",
      },
      maxHeight:{
        '230': '230px'
      },
      
      blur:{
        '12':'filter: blur(12px)'
      },
      aspectRatio: {
        '4.4/5':'4.4/5',
        '5/4': '5 / 4',
        '5.5/4':'5.5/4',
        '5/3':'5/3',
        '5/2':'5/2',
        '62.5/100':'62.5/100'
      }

    },

    variants:{
  
      extend:{
      backgroundColor:["hover"],
      hover: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even'],
     
    },
  }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
}

