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
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  