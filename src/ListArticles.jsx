const ListArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Pourquoi le ciel est bleu",
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph",
      isPublished: true,
    },
    {
      id: 2,
      title: "Les oiseaux chantent",
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph",
      isPublished: false,
    },
    {
      id: 3,
      title: "Les oiseaux chantent pas",
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph",
      isPublished: true,
    },
    {
      id: 4,
      title: "Les oiseaux chantent pas tgefrdesz",
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph",
      isPublished: true,
    },

    {
      id: 5,
      title: "Les oiseaux chantent pas tgefrdesz4",
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph",
      isPublished: false,
    },
  ];

  const publishedArticles = articles.filter((article) => {
    return article.isPublished === true;
  });

  return (
    <section>
      {publishedArticles.map((article) => {
        return (
          <article>
            <h2>{article.title}</h2>
            <img src={article.img} alt={article.title} />
            <p>{article.resume}</p>
          </article>
        );
      })}
    </section>
  );
};

export default ListArticles;
