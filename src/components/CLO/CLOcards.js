//CLO cards are the cards that represent each week
//eache week has its own list of topics for now it will get the weekid, title or number(this will be dynamic) and render it as cards
import * as React from 'react';
import { stopPropagation } from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const styles = {
    card: {
      width: 600,
      height: 300,
      margin: '0 auto',
    },
  };

function CLOCard(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [weekInfo, setWeekInfo]=useState(props.weekInfo);

  const handleMenuOpen = (event) => {
    event.stopPropagation(); // stop event propagation to the card
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCardClick = () => {
    props.onClick(props.weekNumber);
  }
  return (
    <Card onClick={handleCardClick} sx={{ height: 20 + "vh", width: "80%", marginBottom: "16px", marginTop: "10px" }}>
      <CardHeader
        sx={{
         
          background: `linear-gradient(to right, #1e3c72, #2a5298)`,
          color: 'white'

        }}
        action={
          <div>
            <div onClick={(e) => 
              {
              e.preventDefault();} }>
              <IconButton aria-label="settings" onClick={(e) => {
                handleMenuOpen(e);
              }}>
                <MoreVertIcon />
              </IconButton>
              


              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Add Topic</MenuItem>
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
              </Menu>
            </div>
            </div>
        }
        title={props.weekNumber}
      //subheader={props.section}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Topics for week {props.weekNumber}
        </Typography>
      </CardContent>
    </Card>

  );
}

export default CLOCard