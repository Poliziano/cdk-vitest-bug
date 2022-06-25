import { Stack, StackProps } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import * as path from "path";

export class CdkVitestBugStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new NodejsFunction(this, "my-lambda", {
      handler: "handler",
      entry: path.resolve(__dirname, "lambda", "my-lambda.ts")
    })
  }
}
