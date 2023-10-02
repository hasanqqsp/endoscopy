import endoskopi from "../assets/img/endos-removebg-preview.png";
export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center py-5">
      <div className="container-fluid h-100 py-3" data-aos="fade-up">
        <div className="row justify-content-center h-100">
          <div
            className="order-1 order-lg-2 text-center h-100"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src={endoskopi} className="img-fluid animated h-100" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
