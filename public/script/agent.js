'use strict';
const DOMAIN = 'kaveira';
const PORT = '3001';
const ROUTE = 'agent/test';

const TOKEN_NAME = 'token_omni';

const token = document.cookie
    .split('; ')
    .find(ck => ck.startsWith(TOKEN_NAME))
    .replace(`${TOKEN_NAME}=`, '');

console.log('token', token);

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Authorization', `Bearer ${token}`);

const requestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    // credentials: 'include',
    headers,
};

async function requestFunction(response) {
    console.log(response);
    if (response.ok) {
        const res = await response.json();
        console.log(res);

        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }
    throw new Error(`Erro na Requisicao ${url}`);
}

function changeRouteFunction() {
    return;
}

async function fetchAPI() {

    const url = `https://${DOMAIN}.omnismart.io:${PORT}/${ROUTE}`;

    return fetch(url, requestInit)
        .then(requestFunction)
        .then(changeRouteFunction)
        .catch(err => console.error(err));
}
