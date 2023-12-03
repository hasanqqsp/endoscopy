export default function Steps() {
  const iconbox_color = ["blue", "orange", "pink", "yellow", "red", "teal"];
  iconbox_color.push(...iconbox_color);
  const langkah_langkah = [
    {
      title: "Puasakan Hewan Selama 12 Jam",
      description:
        "Sebelum prosedur, hewan harus dipuasakan selama minimal 12 jam untuk memastikan bahwa lambungnya kosong, meminimalkan risiko komplikasi selama endoskopi.",
    },
    {
      title: "Induksi Anestesi dan Posisikan Hewan",
      description:
        "Hewan akan diinduksi dengan anestesi untuk memastikan kesadaran yang minimal. Selanjutnya, hewan akan diletakkan dalam posisi berbaring ke kiri (left recumbency) agar memudahkan akses ke mulut dan kerongkongan.",
    },
    {
      title: "Pasang Mouth Gag dan Endotracheal Tube",
      description:
        "Mouth gag akan dipasang di mulut hewan untuk menjaga akses terbuka ke rongga mulut, sementara endotracheal tube (ETT) dimasukkan ke dalam trakea untuk menjaga saluran pernapasan yang aman selama prosedur.",
    },
    {
      title: "Pasang Peralatan Monitoring Pasien",
      description:
        "Spigmomanometer, electrocardiogram (ECG), dan pulse oxymetri dipasang untuk memantau tekanan darah, aktivitas jantung, dan kadar oksigen dalam darah pasien selama prosedur.",
    },
    {
      title: "Siapkan Peralatan dan Sumber Cahaya",
      description:
        "Peralatan dan sumber cahaya yang diperlukan, termasuk monitor dan suction pump, harus disiapkan untuk memastikan kondisi operasional yang optimal.",
    },
    {
      title: "Persiapkan Endoskop dan Buka Penutup",
      description:
        "Endoskop harus dibersihkan dengan hati-hati, dan penutup bagian umbilical cord harus dibuka untuk memulai prosedur.",
    },
    {
      title: "Kalibrasi Endoskop dan Input Data Pasien",
      description:
        "Endoskop dikalibrasi untuk memastikan akurasi gambaran yang ditampilkan, dan data pasien, seperti panjang mulut hingga lambung, dimasukkan untuk pengaturan yang tepat.",
    },
    {
      title: "Masukkan Umbilical Cord dan Tiupkan Udara",
      description:
        "Umbilical cord dimasukkan perlahan ke dalam rongga mulut hewan sambil menggunakan udara untuk memperluas lumen esofagus, memungkinkan visualisasi yang lebih baik.",
    },
    {
      title: "Navigasi Endoskop ke Lambung",
      description:
        "Endoskop digerakkan ke area yang dituju dengan fleksibilitas knob, dan instrumen tambahan dapat dimasukkan jika diperlukan.",
    },
    {
      title: "Selesaikan Prosedur dan Tarik Keluar Umbilical Cord",
      description:
        "Setelah prosedur selesai, umbilical cord ditarik perlahan sambil menggunakan suction valve untuk menghilangkan udara yang sebelumnya ditiupkan, mengembalikan lumen ke kondisi normal.",
    },
    {
      title: "Lepaskan Peralatan Monitoring",
      description:
        "Setelah pasien stabil dan prosedur selesai, peralatan monitoring dilepaskan untuk memungkinkan pemulangan pasien.",
    },
    {
      title: "Cuci Endoskop dan Keringkan",
      description:
        "Endoskop harus dicuci dengan air dan larutan desinfektan, dan bagian luar umbilical cord dibersihkan dengan kapas atau kain. Prosedur ini diulang sebanyak lima kali sebelum endoskop dikeringkan pada suhu ruang.",
    },
  ];
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Langkah-Langkah Penggunaan Endoskop</h2>
          <p>
            Berikut adalah langkah-langkah utama penggunaan endoskop pada hewan
          </p>
        </div>
        <style>
          {`.services .icon-box .icon svg path {
          fill: #823b80;
        }`}
        </style>
        <div className="row gy-4">
          {langkah_langkah.map((langkah, index) => (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 40}
              key={index}
            >
              <div className={`icon-box py-4 iconbox-purple`}>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height=""
                    width=""
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 32 32"
                    enableBackground="new 0 0 32 32"
                    xmlSpace="preserve"
                  >
                    <path d="M24,6H8c-2.8,0-5,2.2-5,5v10c0,2.8,2.2,5,5,5h16c2.8,0,5-2.2,5-5V11C29,8.2,26.8,6,24,6z" />
                  </svg>
                  <i
                    style={{ "font-style": "normal", color: "white" }}
                    className="fw-semibold"
                  >
                    {index + 1}
                  </i>
                </div>
                <h4>{langkah.title}</h4>
                <p>{langkah.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
