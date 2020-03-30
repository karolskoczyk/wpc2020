export const authCfg = {
    UserPoolId: 'eu-west-1_j54jnd7Px',
    ClientId: 'evmsouskqjs2d1e70mmj2fo3m'
}

const defaultRegion = 'eu-west-1';
export const identityPoolId = 'eu-west-1:d6ce9d7b-42e1-40e7-aa10-67e32e0bca38';
export const credentialName = `cognito-idp.${defaultRegion}.amazonaws.com/${authCfg.userPoolId}`;
export const myBucket = 's194677';