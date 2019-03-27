import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md' || 'fa',
  theme: {
    primary: '#003c8f',
    secondary: '#1565c0',
    accent: '#ffc400',
    error: '#eb6100',
    warning: '#ffeb3b',
    info: '#78909c',
    success: '#4caf50'
  }
})
