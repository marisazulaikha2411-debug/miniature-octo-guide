const destinasiData = {
  Maladewa: {
    harga: 13900000,
    durasi: "7 hari / 6 malam",
    rating: "4,9",
    lokasi: "Samudra Hindia",
    gambar:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Nikmati laut biru jernih, pasir putih, dan pengalaman menginap di kawasan pulau tropis yang menenangkan.",
    fasilitas: [
      "Akomodasi hotel pilihan",
      "Sarapan harian",
      "Transportasi lokal sesuai paket",
      "Pendamping perjalanan",
      "Bantuan pelanggan",
    ],
  },
  "Bora Bora": {
    harga: 17000000,
    durasi: "6 hari / 5 malam",
    rating: "4,8",
    lokasi: "Polinesia Prancis",
    gambar:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Jelajahi pulau tropis dengan panorama laguna, pegunungan, dan suasana liburan yang eksotis.",
    fasilitas: [
      "Hotel pilihan",
      "Sarapan",
      "Tur pulau",
      "Transportasi lokal",
      "Bantuan perjalanan",
    ],
  },
  Santorini: {
    harga: 12400000,
    durasi: "6 hari / 5 malam",
    rating: "4,7",
    lokasi: "Yunani",
    gambar:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Nikmati bangunan putih ikonik, pemandangan laut Aegea, dan suasana romantis khas Santorini.",
    fasilitas: [
      "Hotel pilihan",
      "Sarapan harian",
      "Tur kota",
      "Transportasi lokal",
      "Bantuan pelanggan",
    ],
  },
  Bali: {
    harga: 4200000,
    durasi: "5 hari / 4 malam",
    rating: "4,8",
    lokasi: "Indonesia",
    gambar:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Temukan pantai, alam, budaya, dan kuliner Bali dalam satu perjalanan yang berkesan.",
    fasilitas: [
      "Hotel pilihan",
      "Sarapan",
      "Tur destinasi pilihan",
      "Transportasi lokal",
      "Bantuan pelanggan",
    ],
  },
  Dubai: {
    harga: 15500000,
    durasi: "4 hari / 3 malam",
    rating: "4,7",
    lokasi: "Uni Emirat Arab",
    gambar:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Rasakan perpaduan gedung modern, pusat belanja, wisata gurun, dan budaya khas Timur Tengah.",
    fasilitas: [
      "Hotel pilihan",
      "Sarapan",
      "Tur kota",
      "Transportasi lokal",
      "Bantuan pelanggan",
    ],
  },
  Cancun: {
    harga: 11200000,
    durasi: "5 hari / 4 malam",
    rating: "4,6",
    lokasi: "Meksiko",
    gambar:
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Habiskan waktu di pantai Karibia dengan air laut jernih dan suasana liburan tropis.",
    fasilitas: [
      "Hotel pilihan",
      "Sarapan",
      "Tur pantai",
      "Transportasi lokal",
      "Bantuan pelanggan",
    ],
  },
  "Paket Petualang Solo": {
    harga: 7700000,
    durasi: "Menyesuaikan destinasi",
    rating: "-",
    lokasi: "Pilihan destinasi",
    gambar:
      "https://images.unsplash.com/photo-148864,?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Paket fleksibel untuk kamu yang ingin menjelajahi destinasi pilihan secara mandiri.",
    fasilitas: [
      "Bantuan perencanaan",
      "Rekomendasi hotel",
      "Panduan perjalanan",
    ],
  },
  "Paket Liburan Berdua": {
    harga: 12300000,
    durasi: "Menyesuaikan destinasi",
    rating: "-",
    lokasi: "Pilihan destinasi",
    gambar:
      "https://images.unsplash.com/photo-151,?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Paket perjalanan untuk dua orang dengan pengalaman liburan yang lebih berkesan.",
    fasilitas: [
      "Bantuan perencanaan",
      "Rekomendasi hotel",
      "Panduan perjalanan",
    ],
  },
  "Paket Liburan Keluarga": {
    harga: 19900000,
    durasi: "Menyesuaikan destinasi",
    rating: "-",
    lokasi: "Pilihan destinasi",
    gambar:
      "https://images.unsplash.com/photo-150,?auto=format&fit=crop&w=1000&q=85",
    deskripsi:
      "Paket liburan keluarga dengan pilihan aktivitas yang dapat disesuaikan.",
    fasilitas: [
      "Bantuan perencanaan",
      "Rekomendasi hotel",
      "Panduan perjalanan",
    ],
  },
};

const rupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
const $ = (selector) => document.querySelector(selector);
const detailModal = $("#detailModal"),
  bookingModal = $("#bookingModal"),
  summaryModal = $("#summaryModal");
let selectedPackage = "";
let selectedPrice = 0;
let lastBooking = null;

function openModal(modal) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(modal) {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal.show")) document.body.style.overflow = "";
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}
function getPackage(name) {
  return (
    destinasiData[name] || {
      harga: 0,
      durasi: "Menyesuaikan paket",
      rating: "-",
      lokasi: "Sesuai pilihan",
      gambar: "",
      deskripsi: "Paket perjalanan dapat disesuaikan dengan kebutuhanmu.",
      fasilitas: [
        "Konsultasi perjalanan",
        "Penyesuaian jadwal",
        "Bantuan pemesanan",
      ],
    }
  );
}

function showDetail(name) {
  const data = getPackage(name);
  selectedPackage = name;
  selectedPrice = data.harga;
  $("#detailTitle").textContent = name;
  $("#detailDescription").textContent = data.deskripsi;
  $("#detailImage").src =
    data.gambar ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85";
  $("#detailImage").alt = "Foto " + name;
  $("#detailMeta").innerHTML =
    `<span><i class="fa-regular fa-calendar"></i> ${data.durasi}</span><span><i class="fa-solid fa-location-dot"></i> ${data.lokasi}</span><span><i class="fa-solid fa-star"></i> ${data.rating}</span>`;
  $("#detailFacilities").innerHTML = data.fasilitas
    .map((item) => `<li>${item}</li>`)
    .join("");
  $("#detailPrice").textContent = data.harga
    ? rupiah(data.harga)
    : "Hubungi kami";
  openModal(detailModal);
}
function showBooking(name, prefill = {}) {
  const data = getPackage(name);
  selectedPackage = name;
  selectedPrice = data.harga;
  $("#bookingPackage").value = name;
  $("#bookingPeople").value = prefill.people || $("#travelers")?.value || "2";
  if (prefill.date) $("#bookingDate").value = prefill.date;
  else if ($("#checkIn").value) $("#bookingDate").value = $("#checkIn").value;
  updateTotal();
  closeModal(detailModal);
  openModal(bookingModal);
}
function updateTotal() {
  const people = Number($("#bookingPeople").value || 1);
  $("#bookingTotal").textContent = selectedPrice
    ? rupiah(selectedPrice * people)
    : "Akan dikonfirmasi";
}
function makeSummary(data) {
  const rows = [
    ["Nama", data.name],
    ["Email", data.email],
    ["WhatsApp", data.phone],
    ["Paket", data.package],
    ["Tanggal berangkat", data.date],
    ["Jumlah wisatawan", `${data.people} orang`],
    ["Catatan", data.notes || "Tidak ada"],
    [
      "Estimasi total",
      selectedPrice
        ? rupiah(selectedPrice * Number(data.people))
        : "Akan dikonfirmasi",
    ],
  ];
  $("#summaryDetails").innerHTML = rows
    .map(
      ([label, value]) =>
        `<div class="summary-row"><span>${label}</span><b>${escapeHTML(value)}</b></div>`,
    )
    .join("");
}
function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
}

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  const bookButton = event.target.closest("[data-book]");
  const closeButton = event.target.closest("[data-close]");
  if (detailButton) showDetail(detailButton.dataset.detail);
  if (bookButton) showBooking(bookButton.dataset.book);
  if (closeButton) {
    const modal = closeButton.closest(".modal");
    if (modal) closeModal(modal);
  }
});
document.querySelectorAll(".destination").forEach((card) =>
  card.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    showDetail(card.dataset.destination);
  }),
);
document
  .querySelectorAll(".plan button")
  .forEach((button) =>
    button.addEventListener("click", () => showBooking(button.dataset.book)),
  );
$("#detailBook").addEventListener("click", () => showBooking(selectedPackage));
$("#bookingPeople").addEventListener("change", updateTotal);
$("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  lastBooking = Object.fromEntries(form.entries());
  lastBooking.people = Number(lastBooking.people);
  makeSummary(lastBooking);
  closeModal(bookingModal);
  openModal(summaryModal);
});
$("#finishBooking").addEventListener("click", () => {
  closeModal(summaryModal);
  showToast("Ringkasan pemesanan demo selesai dibuat.");
  $("#bookingForm").reset();
});
[detailModal, bookingModal, summaryModal].forEach((modal) =>
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape")
    document.querySelectorAll(".modal.show").forEach(closeModal);
});

$("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = $("#searchPlace").value.trim().toLowerCase();
  if (!query) {
    showToast("Masukkan nama destinasi terlebih dahulu.");
    return;
  }
  const match = Object.keys(destinasiData).find((name) =>
    name.toLowerCase().includes(query),
  );
  if (match) {
    showDetail(match);
  } else {
    showToast(
      "Destinasi belum ditemukan. Coba Bali, Dubai, Maladewa, atau Santorini.",
    );
  }
});
$("#ideaBtn").addEventListener("click", () => {
  const interest = $("#interest").value,
    budget = $("#budget").value;
  let suggestion = "Bali";
  if (interest === "Pantai dan pulau") suggestion = "Maladewa";
  if (interest === "Alam dan petualangan") suggestion = "Bali";
  if (interest === "Kota dan budaya") suggestion = "Dubai";
  if (budget === "Di bawah Rp5 juta") suggestion = "Bali";
  if (budget === "Di atas Rp15 juta")
    suggestion = interest === "Kota dan budaya" ? "Dubai" : "Bora Bora";
  showToast(`Rekomendasi untuk ${interest}: ${suggestion}`);
  window.setTimeout(() => showDetail(suggestion), 500);
});
$("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Terima kasih sudah berlangganan!");
  event.currentTarget.reset();
});
$("#signInBtn").addEventListener("click", () =>
  showToast("Fitur masuk akun belum terhubung ke database."),
);
$("#menuToggle").addEventListener("click", () =>
  $("#navLinks").classList.toggle("open"),
);
$("#navLinks")
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () =>
      $("#navLinks").classList.remove("open"),
    ),
  );
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);
$("#checkIn").min = localDate;
$("#checkOut").min = localDate;
$("#bookingDate").min = localDate;
$("#checkIn").addEventListener("change", () => {
  $("#checkOut").min = $("#checkIn").value;
  if ($("#checkOut").value && $("#checkOut").value < $("#checkIn").value)
    $("#checkOut").value = "";
});
