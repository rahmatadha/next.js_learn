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

      'xl': '1240px',
      // => @media (min-width: 1240px) { ... }
      'phone': {'min': '320px', 'max': '767px'},
      'tablet':{'min': '768px', 'max':'1023px'},
    },
    
    fontSize:{
      xs: ['10px', '12px'],
      base: ['13.5px', '16.2px'],
      title:['30px', '36px'],
      '11px':'11px',
        'lg': '18px',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '30' : '30px',
    },
    extend: {
      boxShadow:{
        orderTotals:'0px 0px 8px 4px rgba(0, 0, 0, 0.09)'
      },
      maxHeight: {
     
        '400px': '400px',
        '150px': '150px',
        
  },
      minWidth:{
              '90px':'90px'

      },
      colors: {
          'bateeq-topheader':'#f5f5f5',
          'footer-help':'#A6A5A4',
          'table':'#777777',
      },
      width: {
        '87%': '87%',
        '30px':'30px'
    },
    height:{
      '500px':'500px',
      '30px':'30px'
    },
    padding:{
      iframe:'56.25%',
      '36%':'36%',
      '100px':'100px'
    },
    maxWidth: {
      'fhd': '1920px',
      '150px': '150px',
      '3/4': '75%',
      '500px': '500px',
      '900px':'900px'
    },
    },
       
  },
  variants: {},
  plugins: [],
};
