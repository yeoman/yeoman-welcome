const test = require('tape');
const welcomeText = require('.');

test('main', (t) => {
  t.ok(welcomeText.length > 0, 'should have some text');
  t.ok(welcomeText.includes('Welcome to Yeoman'), 'should include welcome message');
  t.end();
});
