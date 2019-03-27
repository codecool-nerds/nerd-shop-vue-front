import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md' || 'fa',
  theme: {
    primary: '#4a148c',
    secondary: '#7c43bd',
    accent: '#ffb300',
    error: '#d32f2f',
    warning: '#ffeb3b',
    info: '#1976d2',
    success: '#4caf50'
  }
})
