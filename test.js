import test from 'ava';
import x from './';

test(t => {
	t.true(x.length > 0);
	t.true(x.indexOf('Welcome to Yeoman') !== -1);
});
