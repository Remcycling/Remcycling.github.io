src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"

//tooltip initalization
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//offcanvas initalization
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

//offcanvas function
document.querySelectorAll('.bi-bookmark-fill').forEach(icon => {
  icon.addEventListener('click', function() {
    const card = this.closest('.card');
    const cardHTML = card.outerHTML;
    document.getElementById('bookmarks').innerHTML += cardHTML;
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas'));
    offcanvas.show();
  });
});

//notification initalization
const notificationIcon = document.getElementById('notificationIcon');
const notificationMenu = document.getElementById('notificationMenu');

//notification function
notificationIcon.addEventListener('click', () => {
    notificationMenu.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!notificationDropdown.contains(event.target)) {
        notificationMenu.classList.remove('show');
    }
});

//avatar function
document.getElementById('avatarIcon').addEventListener('click', function() {
  this.classList.toggle('offline');
});