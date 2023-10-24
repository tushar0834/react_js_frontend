function Profile() {
  let isDifferentImage = false;
  var imgpath = ''
  if (isDifferentImage) {
    imgpath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
  } else {
    imgpath = 'https://i.imgur.com/QIrZWGIs.jpg'
  }
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  var listItems = people.map(person => <li key={person}>{person}</li>);
  return (
    <>
      <ul>
        { listItems }
      </ul>
    </>
  );
}

export function Gallery() {
  const sname = 'Amazing scient'
  return (
    <section>
      <h1>{sname}</h1>
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

