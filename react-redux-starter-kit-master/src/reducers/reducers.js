import { registerReducer, loginReducer } from './authReducer';
import stats from './statsReduces';
import furniture from './furnitureReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    stats,
    furniture
};