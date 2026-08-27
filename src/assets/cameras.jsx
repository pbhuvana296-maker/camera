import React from "react";

import camera1 from "./image/camera1.jpg";
import camera2 from "./image/camera2.jpg";
import camera3 from "./image/camera3.jpg";
import camera4 from "./image/camera4.jpg";
import camera5 from "./image/camera5.jpg";
import camera6 from "./image/camera6.jpg";
function Cameras() {
  const cameras = [
    {
      image: camera1,
      name: "Canon EOS R6",
      type: "Mirrorless Camera",
      price: "$1,899",
      desc: "Professional full-frame camera with excellent image quality."
    },
    {
      image: camera2,
      name: "Sony Alpha A7 IV",
      type: "Professional Camera",
      price: "$2,199",
      desc: "Powerful camera designed for photography and video creators."
    },
    {
      image: camera3,
      name: "Nikon D850",
      type: "DSLR Camera",
      price: "$1,599",
      desc: "High-resolution DSLR perfect for professional photography."
    },
    {
      image: camera4,
      name: "Canon EOS R5",
      type: "Mirrorless Camera",
      price: "$2,899",
      desc: "Advanced camera with outstanding detail and performance."
    },
    {
      image: camera5,
      name: "Sony Alpha A7R V",
      type: "Full Frame",
      price: "$3,099",
      desc: "High-resolution camera for professional creators."
    },
    {
      image: camera6,
      name: "Nikon Z8",
      type: "Mirrorless Camera",
      price: "$2,499",
      desc: "Compact professional camera with powerful performance."
    }
  ];

  return (
    <div className="bg-light">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container">

          <a className="navbar-brand fw-bold fs-3" href="/">
            <i className="bi bi-camera me-2 text-warning"></i>
            Camora
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cameraNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="cameraNavbar"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/cameras">
                  Cameras
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#lenses">
                  Lenses
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#accessories">
                  Accessories
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

            <a
              href="#products"
              className="btn btn-warning ms-lg-3 fw-bold"
            >
              Shop Now
            </a>
          </div>
        </div>
      </nav>


      {/* PAGE HEADER */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center py-4">

          <span className="badge bg-warning text-dark mb-3 px-3 py-2">
            PREMIUM COLLECTION
          </span>

          <h1 className="display-4 fw-bold">
            Explore Our Cameras
          </h1>

          <p className="lead text-secondary">
            Find the perfect camera for your photography journey.
          </p>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/" className="text-warning">
                  Home
                </a>
              </li>

              <li className="breadcrumb-item active text-white">
                Cameras
              </li>
            </ol>
          </nav>

        </div>
      </section>


      {/* FILTER SECTION */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">
              <h5 className="fw-bold mb-0">
                Professional Camera Collection
              </h5>

              <small className="text-muted">
                6 premium cameras available
              </small>
            </div>

            <div className="col-md-6 mt-3 mt-md-0">
              <div className="d-flex justify-content-md-end gap-2">

                <button className="btn btn-dark">
                  All Cameras
                </button>

                <button className="btn btn-outline-dark">
                  Mirrorless
                </button>

                <button className="btn btn-outline-dark">
                  DSLR
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* PRODUCTS */}
      <section className="py-5" id="products">
        <div className="container">

          <div className="row g-4">

            {cameras.map((camera, index) => (

              <div
                className="col-md-6 col-lg-4"
                key={index}
              >

                <div className="card h-100 border-0 shadow-sm">

                  {/* IMAGE */}
                  <div className="position-relative">

                    <img
                      src={camera.image}
                      className="card-img-top"
                      alt={camera.name}
                      style={{
                        height: "280px",
                        objectFit: "cover"
                      }}
                    />

                    <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3">
                      Featured
                    </span>

                  </div>


                  {/* CONTENT */}
                  <div className="card-body p-4">

                    <small className="text-warning fw-bold">
                      {camera.type}
                    </small>

                    <h4 className="card-title fw-bold mt-2">
                      {camera.name}
                    </h4>

                    <p className="card-text text-muted">
                      {camera.desc}
                    </p>

                    <div className="d-flex text-warning mb-3">

                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>

                      <span className="text-muted ms-2">
                        4.9
                      </span>

                    </div>

                    <div className="d-flex justify-content-between align-items-center">

                      <h4 className="fw-bold mb-0">
                        {camera.price}
                      </h4>

                      <button className="btn btn-dark rounded-pill px-4">
                        View Details
                        <i className="bi bi-arrow-right ms-2"></i>
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-warning py-5">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <h2 className="fw-bold">
                Not Sure Which Camera Is Right For You?
              </h2>

              <p className="mb-0">
                Our photography experts can help you choose
                the perfect camera for your needs.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">

              <a
                href="#contact"
                className="btn btn-dark btn-lg px-4"
              >
                <i className="bi bi-headset me-2"></i>
                Talk To Expert
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-dark text-white pt-5 pb-3">

        <div className="container">

          <div className="row g-4">

            <div className="col-lg-4">

              <h3 className="fw-bold">
                <i className="bi bi-camera text-warning me-2"></i>
                Camora
              </h3>

              <p className="text-secondary mt-3">
                Premium cameras and photography gear
                for creators who capture amazing moments.
              </p>

            </div>


            <div className="col-md-4 col-lg-2">

              <h5 className="fw-bold">
                Links
              </h5>

              <ul className="list-unstyled mt-3">

                <li className="mb-2">
                  <a
                    href="/"
                    className="text-secondary text-decoration-none"
                  >
                    Home
                  </a>
                </li>

                <li className="mb-2">
                  <a
                    href="/cameras"
                    className="text-secondary text-decoration-none"
                  >
                    Cameras
                  </a>
                </li>

                <li className="mb-2">
                  <a
                    href="#lenses"
                    className="text-secondary text-decoration-none"
                  >
                    Lenses
                  </a>
                </li>

              </ul>

            </div>


            <div className="col-md-4 col-lg-3">

              <h5 className="fw-bold">
                Categories
              </h5>

              <ul className="list-unstyled mt-3">

                <li className="text-secondary mb-2">
                  Mirrorless Cameras
                </li>

                <li className="text-secondary mb-2">
                  DSLR Cameras
                </li>

                <li className="text-secondary mb-2">
                  Camera Lenses
                </li>

              </ul>

            </div>


            <div className="col-md-4 col-lg-3">

              <h5 className="fw-bold">
                Contact
              </h5>

              <p className="text-secondary mt-3 mb-2">
                <i className="bi bi-geo-alt text-warning me-2"></i>
                 Thoothukudi, Tamil Nadu
              </p>

              <p className="text-secondary mb-2">
                <i className="bi bi-telephone text-warning me-2"></i>
                +91 98765 24678
              </p>

              <p className="text-secondary">
                <i className="bi bi-envelope text-warning me-2"></i>
                hello@camora.com
              </p>

            </div>

          </div>

          <hr className="border-secondary mt-4" />

          <div className="text-center">
            <p className="text-secondary mb-0">
              © 2026 Camora. All Rights Reserved.
            </p>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Cameras;