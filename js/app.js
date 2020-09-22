//========================= ALERT BANNER =====================================================
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `<div class="alert"><p><strong>Alert</strong>: You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">X</p></div>`;



// alertBanner.style.display = "flex";
// alertBanner.style.justifyContent = "space-between";
alertBanner.style.width = "90%";

alertBanner.style.backgroundColor = '#7477BF';
alertBanner.style.color = "white";
alertBanner.style.borderRadius = "4px";

// alertBanner.style.margin = "10px";
alertBanner.style.paddingRight = "10px";
alertBanner.style.paddingLeft = "10px";
alertBanner.style.padding = "5px";

const closeBanner = document.getElementsByClassName("alert-banner-close");
closeBanner[0].style.color = "red";

closeBanner[0].addEventListener('click', () => {
    alertBanner.style.display = 'none';
    });
//========================= NOTIFICATIONS -NEEDS TO BE AT THE SAME TIME ===========
const notifications = document.getElementById('bell');

function alertNotifications() {
    alert('You have notifications.');
    alert('Please complete your overdue tasks.')
}
        
// notifications.addEventListener('click', () => {
//         alert('You have notifications.');
//         alert('Please complete your overdue tasks.')
// })


        notifications.addEventListener('click', (event) => {
                    alertNotifications();
                });








//========================= LINE CHART =====================================================
const lineData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-20', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};
const lineOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false,
        }
    };
const line = document.getElementById('trafficChart').getContext('2d');
const lineChart = new Chart(line, {
    type: 'line',
    data: lineData,
    options: lineOptions
});

//========================= 2 LINE CHART =====================================================
const lineDataDaily = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-20', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [550, 850, 1400, 400, 2500, 1350, 1150, 1650, 250, 500, 2000, 2100],
        backgroundColor: 'red',
        borderWidth: 1,
    }]
};
// const lineOptions = {
//     aspectRatio: 2.5,
//     animation: {
//         duration: 0
//     },
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//     },
//     legend: {
//         display: false,
//         }
//     };
const lineDaily = document.getElementById('trafficChartDaily').getContext('2d');
const lineChartDaily = new Chart(lineDaily, {
    type: 'line',
    data: lineDataDaily,
    options: lineOptions
});

// const dailyChart = document.getElementById('daily');
// dailyChart.addEventListener('click', () => {
//     lineChart.style.display = 'none';
//     });

//========================= BAR CHART =======================================================
const barData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
    }]  
};
const barOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false,
    }
}
const bar = document.getElementById('dailyTraffic');
const barChart = new Chart(bar, {
    type: 'bar',
    data: barData,
    options: barOptions,
});
//========================= DONUT CHART =====================================================
const donutData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78cf82',
            '#51B6C8'
        ]
    }]
};
const donutOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontstyle: 'bold'
        }
    }
}
const donut = document.getElementById('mobileUsers');
const donutChart = new Chart(donut, {
    type: 'doughnut',
    data: donutData,
    options: donutOptions,
});
//========================= MESSAGING SECTION ==============================================
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending')
    } else if ( user.value === '') {
        alert('Please fill our user field before sending');
    } else if ( message.value === '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});





