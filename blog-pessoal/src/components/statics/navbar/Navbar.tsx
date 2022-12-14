import React from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  
  let navigate = useNavigate();

  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(''))
    alert("Usuário deslogado")
    navigate('/login')
  }

  var navbarComponent;

  
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  if(token !== ""){
      navbarComponent =
      <div className={classes.root} >
      <AppBar className='navbar' position="static">
        <Toolbar>
        <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/home' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to='/postagens' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Postagens</MenuItem>
        </Link>
        <Link to='/temas' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Temas</MenuItem>
        </Link>
        <Link to='/formularioTema' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Cadastrar Temas</MenuItem>
        </Link>
        <MenuItem className='text-decorator-none' onClick={goLogout}>Logout</MenuItem>
      </Menu>
    </div>
          <Typography className='classes.title' variant="h6" noWrap>
            Blog Pessoal
          </Typography>
          <div className='search'>
            <div className='searchIcon'>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Procurar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  }


  return (
   <>
   {navbarComponent}
   </>
  );
}