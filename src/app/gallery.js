function Profile() {
    const imgpath = 'https://i.imgur.com/QIrZWGIs.jpg'
    return (
      <img
        src={imgpath}
        alt="Alan L. Hart"
      />
    );
  }
  
  export  function Gallery() {
    const sname = 'Amazing scientists'
    return (
      <section>
        <h1>{sname}</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  