// === MENU ACTIVE HANDLER ===
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  // Ambil semua elemen menu di sidebar
  const menuLinks = document.querySelectorAll("aside ul.menu a");

  menuLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // Hapus semua warna sebelumnya (biar ga bentrok)
    link.classList.remove("bg-[#D5F2EB]", "text-[#57CCB1]", "text-[#737374]");
    link.classList.add("text-[#737374]"); // default

    // Kalau link sesuai halaman aktif
    if (linkPage === currentPage) {
      link.classList.add("bg-[#D5F2EB]", "text-[#57CCB1]");
      link.classList.remove("text-[#737374]");
    }

    // Ganti juga warna ikon di dalamnya biar seragam
    const icon = link.querySelector("i");
    if (icon) {
      icon.classList.remove("text-[#57CCB1]");
      if (linkPage === currentPage) {
        icon.classList.add("text-[#57CCB1]");
      } else {
        icon.classList.add("text-[#737374]");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
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


// Chart Kehadiran
const kehadiran = document.getElementById('kehadiranChart');
if (kehadiran) {
  new Chart(kehadiran, { 
    type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags"],
    datasets: [
      {
        label: "Hadir",
        data: [129, 120, 110, 125, 115, 130, 120, 118],
        borderColor: '#3dd6bb',
        backgroundColor: 'rgba(61,214,187,0.1)',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#3dd6bb',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Tidak hadir",
        data: [5, 8, 12, 6, 10, 7, 9, 6],
        borderColor: '#ff3b3b',
        backgroundColor: 'rgba(255,59,59,0.1)',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#ff3b3b',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Cuti",
        data: [2, 4, 3, 2, 7, 5, 8, 9],
        borderColor: '#ffb800',
        backgroundColor: 'rgba(255,184,0,0.1)',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#ffb800',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 14,
            family: 'inherit',
            weight: 'bold',
          },
          color: '#3d3d3d',
          padding: 20,
          boxWidth: 6,
          boxHeight: 6,
          boxPadding: 10,
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        },
        ticks: {
          color: '#3d3d3d',
          font: {
            size: 14,
            family: 'inherit',
          }
        }
      },
      y: {
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        },
        ticks: {
          color: '#3d3d3d',
          font: {
            size: 14,
            family: 'inherit',
          }
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }
   });
}

//chart pegawai
const pegawai = document.getElementById('pegawaiChart');
if (pegawai) {
  new Chart(pegawai, { 
    type: 'line',
  data: {
    labels: ["Januari", "Februari", "Maret"],
    datasets: [
      {
        label: "Keluar",
        data: [2, 1, 3],
        borderColor: "#ef4444",  // merah
        backgroundColor: "#fff",
        borderWidth: 2,
        pointBackgroundColor: "#fff",   // titik putih
        pointBorderColor: "#ef4444",    // outline merah
        pointBorderWidth: 2,
        tension: 0.3
      },
      {
        label: "Masuk",
        data: [5, 4, 6],
        borderColor: "#14b8a6",  // hijau teal
        backgroundColor: "#fff",
        borderWidth: 2,
        pointBackgroundColor: "#fff",   // titik putih
        pointBorderColor: "#14b8a6",    // outline hijau
        pointBorderWidth: 2,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
            family: 'inherit',
            weight: 'normal',
          },
          color: '#3d3d3d',
          padding: 10,
          boxWidth: 6,
          boxHeight: 6,
          boxPadding: 8,
        }
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return Number.isInteger(value) ? value : '';
          },
          color: '#3d3d3d',
          font: {
            size: 12,
            family: 'inherit',
          }
        },
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        }
      },
      x: {
        ticks: {
          color: '#3d3d3d',
          font: {
            size: 12,
            family: 'inherit',
          }
        },
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        }
      }
    }
  }
   });
}
const produktivitas = document.getElementById('produktivitasChart');
if (produktivitas) {
  new Chart(produktivitas, { 
    type: 'bar',
  data: {
    labels: ['IT', 'HR', 'Sales', 'OPS'],
    datasets: [
      {
        label: 'Target',
        data: [80, 60, 90, 70],
        backgroundColor: '#a7f3d0', // warna lembut seperti di pegawaiChart
        borderRadius: 6,
      },
      {
        label: 'Realisasi',
        data: [70, 30, 85, 60],
        backgroundColor: '#14b8a6', // warna hijau teal utama
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
            family: "inherit",
            weight: "normal",
          },
          color: "#3d3d3d",
          padding: 10,
          boxWidth: 6,
          boxHeight: 6,
          boxPadding: 8,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#e5f5f0",
          borderColor: "#e5f5f0",
          drawBorder: false,
        },
        ticks: {
          color: "#3d3d3d",
          font: {
            size: 12,
            family: "inherit",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5f5f0",
          borderColor: "#e5f5f0",
          drawBorder: false,
        },
        ticks: {
          color: "#3d3d3d",
          font: {
            size: 12,
            family: "inherit",
          },
          callback: function (value) {
            return Number.isInteger(value) ? value : "";
          },
        },
      },
    },
  },
   });
}




// Chart Kinerja
const kinerja = document.getElementById('kinerChart');
if (kinerja) {
  new Chart(kinerja, { 
     type: 'line',
      data: {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [
          {
            label: 'HR',
            data: [80, 85, 82, 88, 90],
            borderColor: '#57CCB1',
            backgroundColor: 'rgba(87, 204, 177, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'CS',
            data: [75, 82, 78, 85, 88],
            borderColor: '#2E7363',
            backgroundColor: 'rgba(46, 115, 99, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'QA',
            data: [85, 88, 84, 90, 92],
            borderColor: '#3dd6bb',
            backgroundColor: 'rgba(61, 214, 187, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'SA',
            data: [78, 80, 76, 82, 85],
            borderColor: '#217c6a',
            backgroundColor: 'rgba(33, 124, 106, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            min: 70,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
   });
}
  

    // Chart Produktivitas
    const produk = document.getElementById('produkChart');
    if (produk) {
      new Chart(produk, { 
        type: 'bar',
      data: {
        labels: ['Finished', 'Handling', 'Behöps', 'Utbildnings', 'Installation'],
        datasets: [{
          label: 'Produktivitas',
          data: [80, 60, 45, 70, 85],
          backgroundColor: [
            '#57CCB1',
            '#3dd6bb',
            '#2E7363',
            '#217c6a',
            '#A0BDB1'
          ],
          borderWidth: 0,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
       });
}
});   
function createMiniDonut(id, color, value) {
  new Chart(document.getElementById(id), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [color + 'CC', '#E5E7EB'],
        borderWidth: 0,
        cutout: '75%',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      animation: {
        animateRotate: true,
        duration: 1000,
        easing: 'easeOutQuart'
      }
    },
  });
}

// Panggilan chart
createMiniDonut('chartTotalPegawai', '#14b8a6', 95);
createMiniDonut('chartHadir', '#14b8a6', 76);
createMiniDonut('chartIzin', '#14b8a6', 30);
createMiniDonut('chartCuti', '#14b8a6', 25);
createMiniDonut('chartPegawaiBaru', '#14b8a6', 15);
createMiniDonut('chartKontrak', '#14b8a6', 40);