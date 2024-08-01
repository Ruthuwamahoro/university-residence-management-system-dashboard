document.addEventListener('DOMContentLoaded', async () => {
    const roomContainer = document.getElementById('room-table-body');

    const API_URL = 'https://66a3a4a844aa63704581ff08.mockapi.io/api/rooms';
    // fech Data from created from MockAPI
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            // If there is error
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // else fetching data and change it to json
            const data = await response.json();
            return data;
        } catch (error) {
            //else console.log error and return an empty array
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const populateTable = (data) => {
        if (roomContainer) {
            roomContainer.innerHTML = '';
            data.forEach(item => {
                // create container of our document
                const row = document.createElement('tr');
                // create DOM
                row.innerHTML = `
                    <td>${item.RoomNo}</td>
                    <td>${item.studentNo}</td>
                    <td>${item.Status}</td>
                    <td>${item.MaintainanceNeeded}</td>
                    <td>${item.AmenitiesProvided}</td>
                `;
                //append it to container
                roomContainer.appendChild(row);
            });
        } else {
            console.error('Room container not found.');
            return error
        }
    };
    //calll fetchData() function and pass it as an argument to populateTable function
    const maintenanceData = await fetchData();
    populateTable(maintenanceData);
});
