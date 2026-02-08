const chartData = {
    labels: [],
    datasets: [{
        label: "Charge CPU (%)",
        data: [],
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true
    }]
};

let chart = null;
async function updateInfo() {
    try{
        const reponse = await fetch("http://localhost:3000/post/information")
        const data = await reponse.json();

        document.getElementById("info").innerHTML = `
        <div class="info-item">
      <span class="label">🖥️ Nom CPU:</span>
      <span class="value">${data.cpuname}</span>
    </div>
    <div class="info-item">
      <span class="label">⚙️ Cores:</span>
      <span class="value">${data.cpucores}</span>
    </div>
    <div class="info-item">
      <span class="label">🔌 Socket:</span>
      <span class="value">${data.cpusocket}</span>
    </div>`;

    const currentLoad = parseFloat(data.cpuLoad.toFixed(2));
    chartData.labels.push(new Date().toLocaleTimeString());
    chartData.datasets[0].data.push(currentLoad);

    if (chartData.labels.length > 30) {
        chartData.labels.shift();
        chartData.datasets[0].data.shift();
    }

    if(chart) {
        chart.update();
    } else {
        const ctx = document.getElementById('cpuChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
    } catch (error) {
    console.error("Erreur : ", error);
    document.getElementById("info").innerHTML = "<p style='color: red;'>❌ Erreur: " + error.message + "</p>";
    }
}

updateInfo();
setInterval(updateInfo, 1000);