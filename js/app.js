document.addEventListener('DOMContentLoaded', () => {
    // Initialize charts
    const ctxRoomTypes = document.getElementById('roomTypesChart')?.getContext('2d');
    if (ctxRoomTypes) {
        new Chart(ctxRoomTypes, {
            type: 'pie',
            data: {
                labels: ['Suites', 'Single Rooms', 'Double Rooms'],
                datasets: [{
                    data: [10, 15, 36],
                    backgroundColor: ['#73B175', '#5E4E37', '#485A48']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    const ctxMaintenance = document.getElementById('maintenanceChart')?.getContext('2d');
    if (ctxMaintenance) {
        new Chart(ctxMaintenance, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: 'Maintenance Requests',
                    data: [8, 6, 4],
                    backgroundColor: '#578657'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const ctxOccupancy = document.getElementById('occupancyChart')?.getContext('2d');
    if (ctxOccupancy) {
        new Chart(ctxOccupancy, {
            type: 'bar',
            data: {
                labels: ['Floor 1', 'Floor 2', 'Floor 3'],
                datasets: [{
                    label: 'Occupancy Rates',
                    data: [80, 40, 60],
                    backgroundColor: '#578657'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Theme Switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    const icons = document.querySelectorAll('.theme-switcher i, .notifications i, .input-group-text i');

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDarkTheme = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
            updateIconColors(isDarkTheme);
        });

        const isDarkTheme = localStorage.getItem('theme') === 'dark';
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        }
        updateIconColors(isDarkTheme);
    }

    function updateIconColors(isDarkTheme) {
        icons.forEach(icon => {
            icon.style.color = isDarkTheme ? '#fff' : '#000';
        });
    }

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    $(document).ready(function() {
        // Toggle the dropdown
        $('.dropdown-toggle').click(function() {
          $(this).siblings('.dropdown-menu').toggle();
        });
  
        // Handle dropdown item click
        $('.dropdown-item').click(function() {
          var filterValue = $(this).data('filter');
          
          $('#room-table-body tr').each(function() {
            var rowStatus = $(this).data('status');
            
            if (filterValue === 'all' || rowStatus === filterValue) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          
          // Close dropdown after selection
          $('.dropdown-menu').hide();
          // Update button text
          $('.dropdown-toggle').text($(this).text());
        });
        
        // Hide dropdown when clicking outside
        $(document).click(function(e) {
          if (!$(e.target).closest('.dropdown-toggle').length) {
            $('.dropdown-menu').hide();
          }
        });
      });

      document.querySelector('.dropdownMenuButton').addEventListener('click', function() {
          document.querySelector('.dropdownMenu').classList.toggle('show');
      })
});
