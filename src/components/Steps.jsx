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

        <div className="row gy-4">
          {langkah_langkah.map((langkah, index) => (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 40}
              key={index}
            >
              <div className={`icon-box py-4 iconbox-${iconbox_color[index]}`}>
                <div className="icon">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth="0"
                      fill="#f5f5f5"
                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                    ></path>
                  </svg>
                  <i>{index + 1}</i>
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
