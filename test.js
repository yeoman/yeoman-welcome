import test from 'ava';
import welcomeText from './index';

test('text integrity', t => {
	t.true(welcomeText.length > 0);
	t.true(welcomeText.indexOf('Welcome to Yeoman') !== -1);
});