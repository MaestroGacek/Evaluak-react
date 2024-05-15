import { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
});


function App() {
  const [filmy, nastavFilm] = useState([])
  const [vybranyFilm, vyberFilm] = useState("")
  useEffect(() => { axios.get("https://api.sampleapis.com/cartoons/cartoons2D").then(odpoved => { nastavFilm(odpoved.data) }) }, [])
  
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />

    <>
    <Typography variant='h2'>Filmy</Typography><br></br>

      
        <Typography variant='body1'>{vybranyFilm != "" && <span>Vybraný filmy: {vybranyFilm}</span>}</Typography><br></br>
      <Grid container spacing={4}>
        {filmy.map(film => (
          
          <Grid item xs={4} key={film.id}>
            <Paper onClick={() => vyberFilm(film.title + (window.alert("Žánr toho to filmu je:" +" " + film.genre)))} style={{textAlign:"center"}}
            >
            
          <Typography variant='caption'>
              <img src={film.image} style={{ width: "250px",  }}></img><br></br>
              {film.title}<br></br>
              {film.creator}<br></br>
              {film.year}
         
              </Typography>
            </Paper>
          </Grid>
   

          //        <a href={"https://cs.wikipedia.org/w/index.php?search="+props.title+"&title=Speci%C3%A1ln%C3%AD%3AHled%C3%A1n%C3%AD&ns0=1&ns100=1&ns102=1"}
))

        } </Grid>
            
    </>
    </ThemeProvider> 
  );

}




export default App;
