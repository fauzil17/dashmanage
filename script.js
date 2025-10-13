lucide.createIcons();

const calendarBtn = document.getElementById('calendar-btn');
const calendarPopup = document.getElementById('calendar-popup');
const calendarLabel = document.getElementById('calendar-label');
const callyCalendar = document.getElementById('cally-calendar');

if (calendarLabel) {
  const today = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  calendarLabel.textContent = today.toLocaleDateString('en-US', options);
}
document.addEventListener('click', function(e) {
  if (calendarBtn && calendarBtn.contains(e.target)) {
    calendarPopup.classList.toggle('hidden');
  } else if (calendarPopup && !calendarPopup.contains(e.target)) {
    calendarPopup.classList.add('hidden');
  }
});
if (callyCalendar) {
  // Update label saat tanggal dipilih
  callyCalendar.addEventListener('change', function(e) {
    const date = new Date(e.target.value);
    // Tampilkan tanggal, bulan (singkat), dan tahun
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    calendarLabel.textContent = date.toLocaleDateString('en-US', options);
    calendarPopup.classList.add('hidden');
  });
}

const notifBtn = document.getElementById('notif-btn');
  const notifPopup = document.getElementById('notif-popup');
  document.addEventListener('click', function(e) {
    if (notifBtn && notifBtn.contains(e.target)) {
      notifPopup.classList.toggle('hidden');
    } else if (notifPopup && !notifPopup.contains(e.target)) {
      notifPopup.classList.add('hidden');
    }
  });


// Donut Chart: Alasan Resign
const ctxResign = document.getElementById("alasanResignChart").getContext("2d");
new Chart(ctxResign, {
  type: "doughnut",
  data: {
    labels: ["Studi", "Pribadi", "Kontrak habis"],
    datasets: [
      {
        data: [25, 40, 35],
        backgroundColor: ["#7FE9DE", "#49B3A6", "#276E63"],
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 10,
          padding: 12,
          // default color (tidak dipakai karena kita custom di generateLabels)
          color: "#2D7263",
          font: {
            size: 11,
            family: "'Plus Jakarta Sans', sans-serif",
            weight: "700",
          },
          generateLabels: function (chart) {
            const datasets = chart.data.datasets[0];
            return chart.data.labels.map((label, i) => ({
              text: label,
              fillStyle: "#ffffff", // isi putih
              strokeStyle: datasets.backgroundColor[i], // border sesuai warna
              lineWidth: 2.5,
              pointStyle: "circle",
              fontColor: datasets.backgroundColor[i], // warna teks (custom)
            }));
          },
          // Custom render text color
          color: ctx => ctx.dataset.backgroundColor[ctx.index] || "#2D7263",
        },
      },
    },
  },
});


// Donut Chart: Sumber Rekrutmen
const ctxRekrut = document.getElementById("sumberRekrutmenChart").getContext("2d");
new Chart(ctxRekrut, {
  type: "doughnut",
  data: {
    labels: ["Internal", "Job Portal", "Kampus"],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ["#7FE9DE", "#49B3A6", "#276E63"],
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 10,
          padding: 12,
          font: {
            size: 11,
            family: "'Plus Jakarta Sans', sans-serif",
            weight: "700",
          },
          generateLabels: function (chart) {
            const datasets = chart.data.datasets[0];
            return chart.data.labels.map((label, i) => ({
              text: label,
              fillStyle: "#ffffff",
              strokeStyle: datasets.backgroundColor[i],
              lineWidth: 2.5,
              pointStyle: "circle",
              fontColor: datasets.backgroundColor[i],
            }));
          },
          color: ctx => ctx.dataset.backgroundColor[ctx.index] || "#2D7263",
        },
      },
    },
  },
});


      // diagram batang
      const ctx = document.getElementById("pegawaiChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
          datasets: [
            {
              label: "Pegawai Baru",
              data: [3, 0, 2, 0, 0],
              backgroundColor: "#2D7263",
              borderRadius: 6,
              barThickness: 25,
            },
            {
              label: "Pegawai Resign",
              data: [2, 0, 0, 0, 0],
              backgroundColor: "#E87171",
              borderRadius: 6,
              barThickness: 25,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                color: "#555",
                font: { size: 12 },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 3,
                color: "#555",
                font: { size: 12 },
              },
              grid: {
                color: "#eee",
                borderDash: [4, 4],
              },
            },
          },
        },
      });

 