/* eslint-disable qunit/no-test-expect-argument */
import { capitalize } from '@ember/string';
import { moduleFor, AbstractTestCase } from 'internal-test-helpers';

function test(assert, given, expected, description) {
  expectDeprecation(() => {
    assert.deepEqual(capitalize(given), expected, description);
  }, 'Importing from `@ember/string` without having the `@ember/string` package in your project is deprecated. Please add `@ember/string` to your `package.json');
}

moduleFor(
  'EmberStringUtils.capitalize',
  class extends AbstractTestCase {
    ['@test String capitalize tests'](assert) {
      test(assert, 'my favorite items', 'My favorite items', 'capitalize normal string');
      test(assert, 'css-class-name', 'Css-class-name', 'capitalize dasherized string');
      test(assert, 'action_name', 'Action_name', 'capitalize underscored string');
      test(assert, 'innerHTML', 'InnerHTML', 'capitalize camelcased string');
      test(
        assert,
        'Capitalized string',
        'Capitalized string',
        'does nothing with capitalized string'
      );
      test(
        assert,
        'privateDocs/ownerInvoice',
        'PrivateDocs/OwnerInvoice',
        'capitalize namespaced camelized string'
      );
      test(
        assert,
        'private_docs/owner_invoice',
        'Private_docs/Owner_invoice',
        'capitalize namespaced underscored string'
      );
      test(
        assert,
        'private-docs/owner-invoice',
        'Private-docs/Owner-invoice',
        'capitalize namespaced dasherized string'
      );
      test(assert, 'šabc', 'Šabc', 'capitalize string with accent character');
    }
  }
);
