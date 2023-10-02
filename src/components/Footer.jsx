export default function Facility() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 footer-contact">
              <h3>Program Studi Paramedik Veteriner</h3>
              <p>
                Sekolah Vokasi
                <br />
                IPB University Kampus Gunung Gede <br />
                Jl. Lodaya II No.9, RT.04/RW.02
                <br />
                Kelurahan Babakan Kecamatan Bogor Tengah <br />
                Kota Bogor
                <br />
                <br />
                <b>Tel:</b> (0251) 8376845
                <br />
                <b>Email:</b>
                <a
                  className="link-light"
                  href="mailto:sv@apps.ipb.ac.id"
                  target="_blank"
                  rel="noreferrer"
                >
                  sv@apps.ipb.ac.id
                </a>
                <br />
              </p>
            </div>

            <div className="col-lg-6 col-md-6 footer-links">
              <h4>Tautan Terkait</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    href="https://sv.ipb.ac.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sekolah Vokasi IPB
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    href="https://sv.ipb.ac.id/paramedik-veteriner/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Program Studi Paramedik Veteriner
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    href="https://skhb.ipb.ac.id/rshp-2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rumah Sakit Hewan Pendidikan IPB
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    href="http://apps.ipb.ac.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IPB Apps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright 2023{" "}
              <strong>
                <span>Vet-X - Teknologi Rekayasa Perangkat Lunak</span>
              </strong>
              . All Rights Reserved
            </div>
            Sekolah Vokasi IPB University
          </div>
        </div>
      </div>
    </footer>
  );
}
