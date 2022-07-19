import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as MenuLine } from "../assets/Icon.svg";
import Close from "../assets/Close.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import Whatsapp from "../assets/whatsapp.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import { ReactComponent as Map } from "../assets/map.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import Hero from "../assets/image.png";
import Doctor from "../assets/doctor.png";
import Contato from "../assets/image_contato.png";

const nav__links = [
  {
    display: "Início",
    path: "/",
  },
  {
    display: "Sobre",
    path: "/",
  },
  {
    display: "Serviços",
    path: "/",
  },
  {
    display: "Depoimentos",
    path: "/",
  },
];

const Home = () => {
  const headerRef = useRef(null);
  const [check, setCheck] = useState(false);
  console.log(check);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 72 ||
        document.documentElement.scrollTop > 72
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }

      return () => window.removeEventListener("scroll");
    });
  });
  return (
    <>
      <header
        className={check ? "header primary_color" : "header"}
        ref={headerRef}
      >
        <div className={check ? "logo__primary" : "logo"}>
          <p>
            Doctor<span>Care</span>
          </p>
        </div>
        <div className={check ? "navigation visible" : "navigation"}>
          <ul className="navigation__list">
            {nav__links.map((item, index) => (
              <li key={index} className="navigation__item">
                {item.display}
              </li>
            ))}
          </ul>
          <div className="button_mobile">
            <button className="btn">AGENDAR CONSULTA</button>
          </div>
          <div className="contact">
            <img src={Instagram} alt="Instagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={Youtube} alt="Youtube" />
          </div>
        </div>
        <div className="nav__right">
          <button className="btn__secondary">AGENDAR CONSULTA</button>
        </div>
        {/* <img src={MenuLine} alt="MenuLine" className="menu__line" /> */}
        {!check ? (
          <MenuLine
            className="menu__line"
            onClick={() => {
              setCheck(true);
            }}
          />
        ) : (
          <img
            src={Close}
            alt="Close"
            className="close"
            onClick={() => {
              setCheck(false);
            }}
          />
        )}
      </header>

      <section className="home__banner">
        <div className="left">
          <div className="hero__content">
            <h5 className="subtitle">BOAS-VINDAS A DOCTORCARE 👋</h5>
            <h1 className="hero__title">
              Assistência médica simplificada para todos
            </h1>
            <p>
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <div className="hero__btn">
              <div className="btn__primary">
                <img src={Whatsapp} alt="whatsapp" />
                Agende sua consulta
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Hero} alt="Hero" />
        </div>
      </section>

      <section className="statistical">
        <div className="box__content">
          <div className="item">
            <h1 className="item__title">+3.500</h1>
            <p>Pacientes atendidos</p>
          </div>
          <div className="item border__x">
            <h1 className="item__title">+15</h1>
            <p>Especialistas disponíveis</p>
          </div>
          <div className="item">
            <h1 className="item__title">+10</h1>
            <p>Anos no mercado</p>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="top__title">
          <div className="subtitle">SERVIÇOS</div>
          <h1 className="title">Como podemos ajudá-lo a se sentir melhor?</h1>
        </div>
        <div className="card__box">
          <div className="card__item">
            <div className="check">
              <Check />
            </div>
            <h1 className="title">Problemas digestivos</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="card__item">
            <div className="check">
              <Check />
            </div>
            <h1 className="title">Saúde Hormonal</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="card__item">
            <div className="check">
              <Check />
            </div>
            <h1 className="title">Bem-estar mental</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="card__item">
            <div className="check">
              <Check />
            </div>
            <h1 className="title">Cuidados Pediátricos</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="card__item">
            <div className="check">
              <Check />
            </div>
            <h1 className="title">Autoimune e Inflamação</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="card__item">
            <div className="check">
              <Check />
            </div>
            <h1 className="title">Saúde do Coração</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre">
        <div className="left">
          <img src={Doctor} alt="Doctor" />
        </div>
        <div className="right">
          <div className="subtitle">SOBRE NÓS</div>
          <div className="title">Entenda quem somos e por que existimos</div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </section>

      <section className="contato">
        <div className="left">
          <div className="box__content">
            <h1 className="title">Entre em contato com a gente!</h1>
            <div className="contact">
              <div className="address">
                <Map />
                <span>R. Amauri Souza, 346</span>
              </div>
              <div className="email">
                <Mail />
                <span>contato@doctorcare.com</span>
              </div>
            </div>
            <div className="btn__primary">
              <img src={Whatsapp} alt="whatsapp" />
              Agende sua consulta
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Contato} alt="" />
        </div>
      </section>

      <section className="footer">
        <div className="left">
          <p className="logo">
            Doctor<span>Care</span>
          </p>
          <p className="subtitle">©2022 - DoctorCare.</p>
          <p className="subtitle">Todos os direitos reservados.</p>
        </div>
        <div className="right">
          <div className="contact">
            <img src={Instagram} alt="Instagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={Youtube} alt="Youtube" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
