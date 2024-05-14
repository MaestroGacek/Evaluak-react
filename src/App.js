import { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper'
import { Grid, Typography } from '@mui/material';



function App() {
  const [piva, nastavPiva] = useState([])
  const [vybranaPiva, vyberPivo] = useState("")
  useEffect(() => { axios.get().then(odpoved => { nastavPiva(odpoved.data) }) }, [])
  
  return (

    <>
    <Typography variant='h2'>Pub menu</Typography><br></br>

      
        <Typography variant='body1'>{vybranaPiva != "" && <span>Vybraná kava je: {vybranaPiva}</span>}</Typography><br></br>
      
      <Grid container spacing={4}>
        {piva.map(pivo => (
          
          <Grid item xs={6} key={pivo.id}>
            <Paper onClick={() => vyberPivo(pivo.title)} style={{textAlign:"center"}}>
          <Typography variant='caption'>
              <img src={pivo.image} style={{ width: "250px",  }}></img><br></br>
              {pivo.title}
              </Typography>
            </Paper>
          </Grid>

        ))

        } </Grid>
    </>
  );

}




export default App;
