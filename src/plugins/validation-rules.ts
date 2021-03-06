import Vue from 'vue'

import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', { ...required, message: '{_field_} is required' });
extend('email', { ...email, message: 'E-mail must be valid' });
extend('min', { ...min, message: '{_field_} must have at least {length} characters' });

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);