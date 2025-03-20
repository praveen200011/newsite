window._config = {
    cognito: {
        userPoolId: 'us-east-1_airFHNtbJ', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '6rhsrhubn6jn7gg4gikfj5tj9j', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        clientSecret: '1h2mqat1aue9d3din2dlbm8aobe2arcn2v0rpas8sbqh4j449kbv',
        region: 'us-east-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-east-1.amazonaws.com/prod',
    }
};
// Function to Calculate the SECRET_HASH
function calculateSecretHash(username) {
    const crypto = require("crypto"); // Node.js crypto module for hashing
    const clientId = window._config.cognito.userPoolClientId;
    const clientSecret = window._config.cognito.clientSecret;

    const message = username + clientId;
    const hmac = crypto.createHmac("sha256", clientSecret);
    hmac.update(message);
    return hmac.digest("base64");
}

// Example Usage: Generating SECRET_HASH
const username = "example-username"; // Replace with actual username
const password = "example-password"; // Replace with actual password
const secretHash = calculateSecretHash(username);

console.log("SECRET_HASH:", secretHash);

// Example AuthParameters to Send to Cognito Authentication API
const authParameters = {
    USERNAME: username,
    PASSWORD: password,
    SECRET_HASH: secretHash
};

// Pass `authParameters` to the authentication request
console.log("AuthParameters:", authParameters);
