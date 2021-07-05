/**
 * @file services/index.js
 * @author liuhuyue <liuhuyue@baidu.com>
 */
import axios from 'axios';

export const getData = () => axios.get('/api/getData');
export const publish = data => axios.post('/api/publish', data);
