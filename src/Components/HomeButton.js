
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import './HomeButton.scss'

const Home = () => {
  return (
    <div>
      <Button component={Link} to="/" variant="contained" color="primary" startIcon={<HomeIcon />}/>

    </div>
  );
};

export default Home;
