import { Platform } from 'react-native';
export const Fonts = {
    Bold: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold',
    Light: Platform.OS === 'ios' ? 'Roboto-Light' : 'Roboto-Light',
    Medium: Platform.OS === 'ios' ? 'Roboto-Medium' : 'Roboto-Medium',
    Thin: Platform.OS === 'ios' ? 'Roboto-Thin' : 'Roboto-Thin',

};