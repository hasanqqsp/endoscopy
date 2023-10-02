import Accordion from "react-bootstrap/Accordion";
export default function Procedure() {
  const daftar_prosedur = [
    {
      title: "Instruksi Kerja Pembersihan Alat Endoskopi",
      text: (
        <ol className="mt-2">
          <li className="my-1 pl-1 py-0">
            Bersihkan katup udara-air dan
            <span className="fst-italic">
              suction (flushing/suction valves)
            </span>
          </li>
          <li className="my-1 pl-1 py-0">
            Lumasi <span className="fst-italic">flushing/suction valves</span>
          </li>
          <li className="my-1 pl-1 py-0">
            Buang semua air keluar dari saluran udara-air
          </li>
          <li className="my-1 pl-1 py-0">
            Bersihkan bagian luar <span className="fst-italic">scope</span>
            dengan <span className="fst-italic">approved detergen</span> dan air
          </li>
          <li className="my-1 pl-1 py-0">
            Jika diperlukan sterilisasi, hanya cairan sterilisasi dingin yang
            diperbolehkan atau{" "}
            <span className="fst-italic">ethylene oxide</span>
          </li>
          <li className="my-1 pl-1 py-0">Lakukan test kebocoran</li>
          <li className="my-1 pl-1 py-0">
            Masukkan sifat kedalam asesoris channel pada fleksibel endoskopi
          </li>
          <li className="my-1 pl-1 py-0">
            Jika diperlukan, desinfektan (larutan 2%{" "}
            <span className="fst-italic">glutaraldehyde</span>) diaspirasi untuk
            mencuci <span className="fst-italic">biopsy/accessories</span>{" "}
            channel dengan detergen khusus
          </li>
          <li className="my-1 pl-1 py-0">
            Aspirasi
            <span className="fst-italic">distilled water</span> (DW) kemudian
            alkohol melewati <span className="fst-italic">biopsy</span>
            /aksesoris channel
          </li>
          <li className="my-1 pl-1 py-0">
            Aspirasi udara sampai <span className="fst-italic">biopsy</span>
            /aksesoris channel kering
          </li>
          <li className="my-1 pl-1 py-0">
            Buang semua air keluar dari saluran udara-air
          </li>
          <li className="my-1 pl-1 py-0">Pengeringan dengan udara</li>
          <li className="my-1 pl-1 py-0">
            Bersihkan dan keringkan <span className="fst-italic">biopsy</span>{" "}
            dan{" "}
            <span className="fst-italic">foreign body retrieval forceps</span>
          </li>
          <li className="my-1 pl-1 py-0">
            Jika diperlukan sterilisasi, hanya cairan sterilisasi dingin yang
            diperbolehkan atau{" "}
            <span className="fst-italic">ethylene oxide</span>
          </li>
        </ol>
      ),
    },
    {
      title: "Instruksi Kerja Perawatan Alat Endoskopi",
      text: (
        <ol className="mt-2">
          <li className="my-1 pl-1 py-0">
            {`Ingat: endoskopi sangat mudah rusak dan "rapuh"`}
          </li>
          <li className="my-1 pl-1 py-0">
            Batasi akses orang baik operator maupun yang membershikan
          </li>
          <li className="my-1 pl-1 py-0">
            Digantung di rak vertikal saat tidak digunakan atau dalam tasnya
          </li>
          <li className="my-1 pl-1 py-0">
            Sumber cahaya tidak boleh dibasahi air
          </li>
          <li className="my-1 pl-1 py-0">
            Gunakan <span className="fst-italic">stabilizer</span>
          </li>
          <li className="my-1 pl-1 py-0">
            Hanya jelly larut air yang dipergunakan sebagai lubrikan
          </li>
          <li className="my-1 pl-1 py-0">
            Gunakan selalu mouth gag dan hewan sudah teranethesi dengan baik
          </li>
          <li className="my-1 pl-1 py-0">
            Scopes harus selalu dibersihkan segera setelah digunakan
          </li>
        </ol>
      ),
    },
    {
      title: "Instruksi Persiapan Pasien Endoskopi",
      text: (
        <ol className="mt-2">
          <li className="my-1 pl-1 py-0">Puasa makan sebelum pemeriksaan</li>
          <li className="my-1 pl-1 py-0">
            12-15 jam (normal) atau 18-24 jam (pada
            <span className="fst-italic">delayed emptying)</span> untuk
            <span className="fst-italic"> upper GI tract</span>
          </li>
          <li className="my-1 pl-1 py-0">
            24 sampai 36 jam untuk pemeriksaan kolon (kolonoskopi)
          </li>
          <li className="my-1 pl-1 py-0">
            Dapat diberikan obat-obat pencahar ringan
          </li>
          <li className="my-1 pl-1 py-0">
            Dapat juga diberikan enema, prosedur pemasukkan cairan ke dalam
            kolon melalui anus atau merangsang peristaltik
          </li>
          <li className="my-1 pl-1 py-0">
            <span className="fst-italic">Anesthesia</span>
          </li>
          <li className="my-1 pl-1 py-0">
            Posisi lateral atau dorsal rekumbensi
          </li>
        </ol>
      ),
    },
  ];
  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Instruksi Kerja</h2>
          <p>
            Petunjuk terkait langkah - langkah kerja yang tepat dalam penanganan
            endoskopi
          </p>
        </div>
        <Accordion defaultActiveKey="0" className="rounded" data-aos="fade-up">
          {daftar_prosedur.map((prosedur, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <i className="bx bx-help-circle icon-help m-1 me-3 fs-5" />
                {prosedur.title}
              </Accordion.Header>
              <Accordion.Body>{prosedur.text}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
