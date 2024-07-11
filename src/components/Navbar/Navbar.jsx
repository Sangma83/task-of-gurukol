import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import img from '../../assets/download.jpeg';
import logo from '../../assets/Screenshot_6-removebg-preview.png';

const Navbar = () => {

  return (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          textAlign: 'center', 
          background: '#bee7da', 
          boxShadow: '0px 4px 6px #0d929a', 
          p: 1, 
          gap: 4 
        }}
      >
        <img src={logo} alt="logo" />
        <Typography sx={{ minWidth: 100, background: '#0d929a', borderRadius: '10px',marginLeft: '380px', paddingY: 1  }}>Home</Typography>
        <Typography sx={{ minWidth: 100 }}>Courses</Typography>
        <Typography sx={{ minWidth: 100 }}>Dashboard</Typography>
            <Avatar sx={{ width: 42, height: 42,marginLeft: '450px'  }} src={img} />
      </Box>
     
    </>
  );
}

export default Navbar;
