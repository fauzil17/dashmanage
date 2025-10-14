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



 