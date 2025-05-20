function redirectUser() {
  const role = document.getElementById('userRole').value;
  window.location.href = `dashboard/${role}.html`;
}
