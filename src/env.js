export const defaultRegion = 'eu-west-1';
export const userPoolId = `eu-west-1_j54jnd7Px`;
export const identityPoolId = 'eu-west-1:d6ce9d7b-42e1-40e7-aa10-67e32e0bca38';
export const credentialName = `cognito-idp.${defaultRegion}.amazonaws.com/${userPoolId}`;
export const myBucket = 's194677';

export const authCfg = {
    userPoolId: userPoolId,
    clientId: 'evmsouskqjs2d1e70mmj2fo3m',
    identityPoolId: identityPoolId,
    credentialName: credentialName
}
