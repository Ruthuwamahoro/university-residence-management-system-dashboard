document.addEventListener('DOMContentLoaded', () => {
    const ctxRoomTypes = document.getElementById('roomTypesChart')?.getContext('2d');
    if (ctxRoomTypes) {
        new Chart(ctxRoomTypes, {
            type: 'pie',
            data: {
                labels: ['Suites', 'Single Rooms', 'Double Rooms'],
                datasets: [{
                    data: [10, 15, 5],
                    backgroundColor: ['#73B175', '#503D21', '#FC9089']
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
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });

        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
});
