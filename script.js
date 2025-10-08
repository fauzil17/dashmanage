
lucide.createIcons();
  // chart pegawai
     new Chart(document.getElementById('pegawaiChart'), {
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
   // Chart Kehadiran
   new Chart(document.getElementById('kehadiranChart'), {
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
  // Lucide icon init
  
  // Sidebar menu active state
  // Navigation is now handled by anchor hrefs for simplicity.
  // Toggle popup kalender saat icon kalender diklik
  const calendarBtn = document.getElementById('calendar-btn');
  const calendarPopup = document.getElementById('calendar-popup');
  const calendarLabel = document.getElementById('calendar-label');
  const callyCalendar = document.getElementById('cally-calendar');

  // Set label kalender ke tanggal hari ini saat pertama kali load
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

  // Tidak perlu set min date, cukup event handler saja
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


   // ...existing calendar script...

  // Notifikasi popup
  const notifBtn = document.getElementById('notif-btn');
  const notifPopup = document.getElementById('notif-popup');
  document.addEventListener('click', function(e) {
    if (notifBtn && notifBtn.contains(e.target)) {
      notifPopup.classList.toggle('hidden');
    } else if (notifPopup && !notifPopup.contains(e.target)) {
      notifPopup.classList.add('hidden');
    }
  });

// lembar kedua pegawai baru dan resign
// donat 2 alasan dan rekrut
const ctx1 = document.getElementById("alasanResignChart").getContext("2d");
      new Chart(ctx1, {
        type: "doughnut",
        data: {
          labels: ["Studi", "Pribadi", "Kontrak habis"],
          datasets: [
            {
              data: [30, 45, 25],
              backgroundColor: ["#7FE9DE", "#49B3A6", "#276E63"],
              hoverOffset: 10,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              backgroundColor: "#2D7263",
              titleColor: "#fff",
              bodyColor: "#fff",
              displayColors: false,
              callbacks: {
                label: function (context) {
                  switch (context.label) {
                    case "Studi":
                      return "Melanjutkan pendidikan (Studi)";
                    case "Pribadi":
                      return "Alasan pribadi atau keluarga";
                    case "Kontrak habis":
                      return "Masa kontrak kerja telah berakhir";
                    default:
                      return context.label;
                  }
                },
              },
            },
            legend: { display: false },
          },
          cutout: "70%",
        },
      });

      // ---------- Donut Chart 2 ----------
      const ctx2 = document
        .getElementById("sumberRekrutmenChart")
        .getContext("2d");
      new Chart(ctx2, {
        type: "doughnut",
        data: {
          labels: ["Internal", "Job Portal", "Kampus"],
          datasets: [
            {
              data: [40, 35, 25],
              backgroundColor: ["#7FE9DE", "#49B3A6", "#276E63"],
              hoverOffset: 10,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              backgroundColor: "#2D7263",
              titleColor: "#fff",
              bodyColor: "#fff",
              displayColors: false,
              callbacks: {
                label: function (context) {
                  switch (context.label) {
                    case "Internal":
                      return "Promosi dari dalam perusahaan";
                    case "Job Portal":
                      return "Rekrutmen dari situs lowongan kerja";
                    case "Kampus":
                      return "Rekrutmen melalui universitas";
                    default:
                      return context.label;
                  }
                },
              },
            },
            legend: { display: false },
          },
          cutout: "70%",
        },
      });


