import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function ImgMediaCard({ searchQuery }) {
  const cardData = [
    {
      id: 1,
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
      image: 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg'
    },
    {
      id: 2,
      title: 'Shark',
      description: 'Sharks are a group of elasmobranch fish, known for their carnivorous behavior and streamlined body structure.',
      image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYXJrJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'
    },
    {
      id: 3,
      title: 'Elephant',
      description: 'Elephants are the largest land animals, known for their intelligence and social behavior, primarily found in Asia and Africa.',
      image: 'https://as2.ftcdn.net/v2/jpg/06/82/59/17/1000_F_682591730_dlCKBuPe500B15CnU2KxtTppXencRIwP.jpg'
    },
    {
      id: 4,
      title: 'Lion',
      description: 'Lions are large carnivorous felines, often referred to as the "king of the jungle," native to parts of Africa and India.',
      image: 'https://as1.ftcdn.net/v2/jpg/06/67/35/44/1000_F_667354403_J8n3UskSViyUqe377lXRcOOtqmmZkrOF.jpg'
    },
    {
      id: 5,
      title: 'Penguin',
      description: 'Penguins are flightless birds that are highly adapted for swimming, mostly found in the Southern Hemisphere, especially in Antarctica.',
      image: 'https://wallpapercat.com/w/full/9/7/0/704704-3840x2160-desktop-4k-penguin-wallpaper.jpg'
    },
    {
      id: 6,
      title: 'Sloth',
      description: 'Sloths are slow-moving mammals found in Central and South America, known for spending most of their time hanging from trees.',
      image: 'https://t3.ftcdn.net/jpg/09/45/44/66/360_F_945446600_KamjPgZsVQI7HUadpMsBafmuVWsRoQdw.jpg'
    }
  ];

  const filteredAnimals = searchQuery
    ? cardData.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cardData;

  return (
    <div className='card-data'>
      {filteredAnimals.length > 0 ? (
        filteredAnimals.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345, margin: '15px 2% 15px' }}>
            <CardMedia
              component="img"
              alt={card.title}
              height="140"
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" sx={{ margin: '20px', textAlign: 'center' }}>
          No results found.
        </Typography>
      )}
    </div>
  );

}

ImgMediaCard.propTypes = {
  searchQuery: PropTypes.string
};