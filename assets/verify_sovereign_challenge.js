/**
 * verify_sovereign_challenge.js — Store & Patreon Ed25519 Sovereign Token Challenger
 */

export async function verifySovereignToken(headerValue, apiGatewayUrl = "https://portail.vaked.dev/v1/protected/resource") {
    if (!headerValue || !headerValue.startsWith("Sovereign ")) {
        return { valid: false, reason: "Missing or malformed Sovereign authorization header" };
    }
    
    try {
        const response = await fetch(apiGatewayUrl, {
            method: "GET",
            headers: {
                "Authorization": headerValue,
                "Content-Type": "application/json"
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            return { valid: true, principal: data.principal || "sovereign", status: response.status };
        } else {
            return { valid: false, status: response.status, reason: "Gateway challenge rejected signature" };
        }
    } catch (err) {
        return { valid: false, reason: err.message || "Network error reaching Portail API Gateway" };
    }
}
