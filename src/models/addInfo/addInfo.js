/**
 * @description
 * @Version Created by Stephen on 2019/8/12.
 * @Author Stephen
 * @license dongfangdianzi
 */

import {
    addInfo
} from '@/services/addInfo/addInfo';
import T from '../../utils/T';

export default {
    namespace: 'addInfo',//要唯一

    state: {

    },

    effects: {
        //信息录入
        * addInfoAction({params, resolve, reject}, {call, put}) {
            try {
                const response = yield call(addInfo, params);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },
    },

    reducers: {

    },
};
