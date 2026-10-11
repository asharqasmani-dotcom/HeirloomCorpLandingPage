/* Static preview integration. Connect forms to your own endpoint when ready. */
document.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  const form = event.target;
  if (!form.reportValidity()) return;
  let status = form.querySelector('.local-form-status');
  if (!status) {
    status = document.createElement('p');
    status.className = 'local-form-status';
    status.setAttribute('role', 'status');
    form.appendChild(status);
  }
  status.textContent = 'Preview only — connect this form to your email or CRM service before publishing.';
}, true);
