/*Constants*/
import api from "../api.json";

const URL = api.localhost;

/*Global varibales*/
var LIGHT_MODE = true;
var CLASS_LIGHT = 'light';

export {URL};

export const GET_LIGHT_MODE = () => LIGHT_MODE;
export const SET_LIGHT_MODE = (mode) => {
    LIGHT_MODE = mode;
};

export const GET_CLASS_LIGHT = () => CLASS_LIGHT;
export const SET_CLASS_LIGHT = (mode) => {
    CLASS_LIGHT = mode;
};