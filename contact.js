'use strict';
(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const resumeRequest = new URLSearchParams(window.location.search).get('type') === 'resume';
    if (resumeRequest) {
        document.getElementById('contact-title').textContent = 'Request my resume.';
        document.getElementById('message-title').textContent = 'Request a resume';
        document.getElementById('email-subject').value = 'Resume request from portfolio';
        document.getElementById('sender-message').value = "Hi Logan, I'd like to request a copy of your resume. Thank you!";
        form.querySelector('button[type="submit"]').textContent = 'Send Resume Request';
    }
    const textFields = [form.elements.namedItem('name'), form.elements.namedItem('message')];
    textFields.forEach(function (field) {
        function validate() {
            field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
        }
        field.addEventListener('input', validate);
        validate();
    });
    form.addEventListener('submit', function () {
        document.getElementById('form-status').textContent = 'Submitting your message…';
    });
})();
