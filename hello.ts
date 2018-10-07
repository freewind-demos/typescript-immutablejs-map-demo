import {List, Iterable} from 'immutable';

const list = List(['aaa', 'bbb', 'ccc']);

const x: Iterable<number, string> = list.map(it => it + '!');

console.log(x);
