/**
 * @file services/index.js
 * @author liuhuyue <liuhuyue@baidu.com>
 */
import {get, post} from 'axios';

export const getData = () => get('/api/getData');
export const publish = data => post('/api/publish', data);
