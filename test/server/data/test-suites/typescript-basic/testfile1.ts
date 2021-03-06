import 'testcafe';
import dep1Fn from './dep1';

fixture `Fixture1`;

test('Fixture1Test1', async() => {
    var res = await dep1Fn();

    return `F1T1: ${res}`;
});

const test2Name = 'Fixture1Test2';

test(test2Name, async() => {
    return 'F1T2';
});

fixture(`Fixture${1 + 1}`)
    .page('http://example.org')
    .beforeEach(async () => 'yo')
    .afterEach(async () => 'yo');

test('Fixture2Test1', async() => {
    return 'F2T1';
});
