// src/lib/authConfig.ts

export const getAuthConfig = () => {
    return {
        authority: 'https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_TdlbnE7E2',
        client_id: '34asuhbdj4mip0ppd76ucg6ufk',
        redirect_uri: 'http://localhost:3000',
        response_type: 'code',
        scope: 'email openid profile',
    };
};

