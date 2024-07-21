const menu = document.getElementsByClassName('menu')[0];
const navigation = document.getElementsByClassName('navigation')[0];
const closeIcon = document.querySelector('.close-fill');
const searchWord = document.querySelector('.search-word');
const searchInput = document.querySelector('.search-input');
const toogleMode = document.querySelector('.toogle-mode');
const maintenanceTableBody = document.getElementById('maintenance-table-body');
const tableContent = document.querySelector('.table-container')

menu.addEventListener('click', (e) => {
    e.preventDefault();
    navigation.style.display = 'block';
});

closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    navigation.style.display = 'none';
});

searchWord.addEventListener('click', (e) => {
    e.preventDefault();
    searchWord.style.display = 'none';
    searchInput.style.display = 'inline-block';
    searchInput.style.border = 'none';
    searchInput.style.borderBottom = '1px solid #000';
    searchInput.focus();
});

toogleMode.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('navigation-dark');
});

const API_URL = 'https://669a46459ba098ed61ff0909.mockapi.io/api/request/maintenances';

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const populateTable = (data) => {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.roomNumber}</td>
            <td>${new Date(item.requestDate).toLocaleDateString()}</td>
            <td>${item.issueDescription}</td>
            <td>${item.status}</td>
            <td>${item.priority ? 'Yes' : 'No'}</td>
            <td>${item.notes}</td>
        `;
        maintenanceTableBody.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    const maintenanceData = await fetchData();
    populateTable(maintenanceData);
});