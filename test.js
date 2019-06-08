import test from 'ava';
import welcomeText from '.';

test('main', t => {
	t.true(welcomeText.length > 0);
	t.true(welcomeText.includes('Welcome to Yeoman'));
});
