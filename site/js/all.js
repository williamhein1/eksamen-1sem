
// menu hover effekt...
// Get all menu links
const menuLinks = document.querySelectorAll('.menu-link');

// Get the current page's full path
const currentPage = window.location.pathname;

// Loop through links and add 'active' class to the matching link
menuLinks.forEach(link => {
  // Get the href value from the link
  const linkHref = link.getAttribute('href');

  // Check if the current page ends with the link's href value
  if (currentPage.endsWith(linkHref)) {
    link.classList.add('active');
  }
});



