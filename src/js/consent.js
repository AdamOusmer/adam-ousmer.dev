/*
* This file is used to display a modal to the user to ask for consent to use Google Tag Analytics.
*/

if (!localStorage.getItem('consentGiven')) {
    const modal = document.createElement('div');
    modal.id = 'consentModal';

    modal.innerHTML = `
        <div>
            <h2>Cookie Consent</h2>
            <p>We use cookies and Google Tag Analytics for better user experience. Do you consent?</p>
            <div id="consentModalButtons">
                <button id="acceptBtn">Accept</button>
                <button id="declineBtn">Decline</button>
            </div>
        </div>
    `
    document.querySelector('body').appendChild(modal);


    // If user gives consent
    document.getElementById('acceptBtn').onclick = function () {
        localStorage.setItem('consentGiven', 'true');
        document.getElementById('consentModal').style.display = 'none';
        loadGoogleTagAnalytics();
    }

    // If user declines
    document.getElementById('declineBtn').onclick = function () {
        document.getElementById('consentModal').style.display = 'none';
    }
}

else if (localStorage.getItem('consentGiven') === 'true') {
    loadGoogleTagAnalytics();
}



// Function to load Google Tag Analytics
function loadGoogleTagAnalytics() {
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(), event: 'gtm.js'
        });
        let f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PKJQ894H');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'cookieConsent', 'cookieConsent': 'true'
    });
}