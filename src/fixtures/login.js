export const registerRequest = {
    email: 'karolskoczyk96@gmail.com',
    password: '1234qwer'
}

export const confirmRequest = {
    username: registerRequest.email,
    confirmationCode: '683981'
}

export const loginRequest = {
    username: registerRequest.email,
    password: registerRequest.password
}
