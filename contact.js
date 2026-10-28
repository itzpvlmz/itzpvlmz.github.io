'use strict';

function buildContactMailto(name, email, message) {
    const subject = 'Portfolio inquiry from ' + name.trim();
    const body = 'Name: ' + name.trim() + '\nEmail: ' + email.trim() +
        '\n\n' + message.trim();
    return 'mailto:business@duckiegames.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

if (typeof document !== 'undefined') {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.reportValidity()) return;
            const name = form.elements.name.value.trim();
            const email = form.elements.email.value.trim();
            const message = form.elements.message.value.trim();
            const status = document.getElementById('form-status');
            if (!name || !message) {
                status.textContent = 'Please enter your name and a message.';
                return;
            }
            const url = buildContactMailto(name, email, message);
            window.location.href = url;
            status.textContent = 'Your email app should open with a draft. If it does not, copy your message and email business@duckiegames.com directly.';
        });
    }
}

if (typeof module !== 'undefined') {
    module.exports = { buildContactMailto };
}
