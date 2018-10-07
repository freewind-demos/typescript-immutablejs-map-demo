import {List} from 'immutable';

const list = List(['aaa ', 'bbb', 'ccc']);

const x = list.map(it => it.trim() + '!');

console.log(x);
