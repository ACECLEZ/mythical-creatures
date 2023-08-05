function askForConsent() {
    const userConsent = getCookie("userConsent");
    if (userConsent === "true") {
        collectData();
    } 
    if (userConsent === "false") {
        collectData();
    }
}
