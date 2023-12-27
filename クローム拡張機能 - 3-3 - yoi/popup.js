document.addEventListener('DOMContentLoaded', function() {
   var links = document.querySelectorAll('.external-link');
   links.forEach(function(link) {
     link.addEventListener('click', function(event) {
       event.preventDefault();
       chrome.tabs.create({url: this.href});
     });
   });
 });
 