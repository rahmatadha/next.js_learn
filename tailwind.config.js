module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'phone': {'min': '320px', 'max': '767px'},
      'tablet':{'min': '768px', 'max':'1023px'}
    },
    height:{
      '500px':'500px'
    },
    maxWidth: {
             'fhd': '1920px',
             '1/2': '50%',
             '3/4': '75%',
             '500px': '500px',
             '900px':'900px'
    },
    maxHeight: {
     
      '400px': '400px',
      
},
    minWidth:{
            '90px':'90px'
    },
    fontSize:{
      xs: ['10px', '12px'],
      base: ['13.5px', '16.2px'],
        'lg': '18px',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '30' : '30px',
        '20' : '20px',
        '24' : '24px',
    },
    extend: {
      colors: {
          'bateeq-topheader':'#f5f5f5',
          'footer-help':'#A6A5A4',
      }
    },
    extend: {
      width: {
          '87%': '87%'
      }
    },
  },
  variants: {},
  plugins: [],
}
