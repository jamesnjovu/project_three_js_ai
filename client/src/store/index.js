import {proxy} from 'valtio'

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './project_three_js_ai/threejs.png',
    fullDecal: './project_three_js_ai/threejs.png'
});

export default state;
