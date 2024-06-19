// Данные для круговой диаграммы (пример)
var data = {
    labels: ['JavaScript', 'Python', 'HTML', 'CSS', 'GIT', ],
    datasets: [{
        label: 'Знание языков программирования',
        data: [40, 40, 20, 50, 50], // Примерные уровни знания (от 0 до 100)
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
        ]
    }]
};

// Конфигурация графика
var options = {
    responsive: true,
    animation: {
        animateScale: true,
        animateRotate: true
    }
};

// Получаем элемент canvas и создаем круговую диаграмму
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});