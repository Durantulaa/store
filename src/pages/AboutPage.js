import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="fun event" />
        <article>
          <div className="title">
            <h3>St. Mary Coptic Orthodox Church</h3>
            <div className="underline"></div>
          </div>
          <p>
            At St. Mary Coptic Church in Lynnwood, Washington, we are
            passionately committed to fostering an inclusive and nurturing
            environment where every young person is valued and heard. Our church
            serves as a dynamic hub where youth can freely express themselves,
            explore their faith, and seek guidance within the framework of our
            rich Coptic Orthodox tradition. We offer a harmonious blend of
            spiritual teachings, cultural education, and personal development
            through various programs like engaging Sunday School, vibrant youth
            groups, inspiring retreats, and impactful community service
            projects. These opportunities are designed not only to deepen their
            faith and connect them with their heritage but also to cultivate
            essential life skills. We emphasize empowering our youth to take on
            leadership roles within the church and provide mentorship and
            support as they navigate the complexities of modern life, ensuring
            they are well-equipped to lead.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
