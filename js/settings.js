document.addEventListener('DOMContentLoaded', () => {
    const userDetailsForm = document.getElementById('user-details-form');
    const changePasswordForm = document.getElementById('change-password-form');
    const preferencesForm = document.getElementById('preferences-form');
    const notificationsPanel = document.querySelector('.notifications');
    const notificationsContainer = document.querySelector('.notifications-container');
    const numberOfNotifications = document.querySelector('.nbr-notifications');
    const API_URL_NOTIFICATIONS = 'https://669a46459ba098ed61ff0909.mockapi.io/api/request/notifications';
    const themeSwitcher = document.querySelector('.theme-switcher');

    // Toggle notifications panel visibility
    if (notificationsPanel) {
        notificationsPanel.addEventListener('click', () => {
            notificationsContainer.style.display = notificationsContainer.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Fetch notifications from API
    const fetchNotifications = async () => {
        try {
            const response = await fetch(API_URL_NOTIFICATIONS);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching notifications:', error);
            alert('Failed to load notifications. Please try again later.'); // User-friendly error message
            return [];
        }
    };

    // Update notification count
    const updateNotificationCount = async () => {
        const notifications = await fetchNotifications();
        numberOfNotifications.textContent = notifications.length;
        numberOfNotifications.style.display = notifications.length > 0 ? 'block' : 'none';
    };

    updateNotificationCount();

    // Handle user details form submission
    if (userDetailsForm) {
        userDetailsForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            // Simulate an API call to save user details
            alert('User details updated!'); // Replace this with actual API call and handling
        });
    }

    // Handle change password form submission
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Simulate an API call to change the password
            alert('Password changed successfully!'); // Replace with actual API call and handling
        });
    }

    // Handle preferences form submission
    if (preferencesForm) {
        preferencesForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const theme = document.getElementById('theme').value;
            const language = document.getElementById('language').value;

            // Simulate an API call to save preferences
            alert(`Preferences saved: Theme - ${theme}, Language - ${language}`); // Replace with actual API call and handling
        });
    }

    // Handle theme switching
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
