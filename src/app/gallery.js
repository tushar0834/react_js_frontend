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
    const sname = 'Amazing scient'
    return (
      <section>
        <h1>{sname}</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  const baseUrl = 'https://i.imgur.com/';
  const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  export function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl + person.imageId + person.imageSize + '.jpg'}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  
  