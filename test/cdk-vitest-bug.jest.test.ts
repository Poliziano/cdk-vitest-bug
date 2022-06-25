import { test } from "@jest/globals";
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkVitestBug from '../lib/cdk-vitest-bug-stack';

test('stack created', () => {
  const app = new cdk.App();
  const stack = new CdkVitestBug.CdkVitestBugStack(app, 'MyTestStack');
  Template.fromStack(stack);
});