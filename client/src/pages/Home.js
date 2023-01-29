import React from "react";
import Article from "../components/Article";

const Home = () => {
  const body = (
    <>
      <h3>
        <u>Inner title:</u>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi deserunt
        illum nesciunt corrupti nemo ea sit fuga magnam eos, quas tenetur nihil
        similique obcaecati possimus! Reiciendis maxime reprehenderit pariatur
        nihil corporis non velit natus, blanditiis repellendus illo consectetur
        eos neque obcaecati ab! Nam sint fugit vitae maiores cum asperiores qui.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi
        nesciunt, eos quo ullam excepturi vitae dicta, deserunt ipsa dolorem
        temporibus sed aliquid reiciendis unde cum cupiditate. Inventore culpa
        dolores, deserunt porro quos et labore aliquam, molestias doloribus
        quisquam laborum laboriosam incidunt ipsam! Perferendis in, laudantium
        obcaecati quidem aut nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed possimus
        cum saepe eum consectetur. Quae unde dolore, magni veritatis, illum
        ullam officia aliquid quod sapiente facere accusantium voluptatibus ea
        vitae illo reiciendis placeat numquam voluptates ipsam eos. Pariatur,
        beatae quibusdam sed harum nesciunt nihil optio ad laboriosam voluptatem
        modi, dolorum quaerat corporis voluptatibus deleniti! Laboriosam
        corrupti recusandae velit officia iusto adipisci, enim quam facere sed
        tenetur totam quae minus nemo? Exercitationem fuga a vitae officiis
        impedit, aperiam placeat atque repudiandae?
      </p>
    </>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Article
        title="Example"
        body={body}
        author="Matthew Brignola"
        date="1/28/2022"
      />
    </div>
  );
};

export default Home;
