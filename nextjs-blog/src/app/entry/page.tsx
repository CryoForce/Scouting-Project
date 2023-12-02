'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button, TextField,FormControl, Grid, StyledEngineProvider } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Home() {

  const [teamsInfo, setTeamInfo1] = useState([] as any);

  const [teamAmount, setTeamAmount] = useState(0);

  const [eventName, setEventName] = useState("");

  



  function collectEventName(value: any){
   setEventName(value.target.value)
  }


  function collectTeamAmount(value: any){
    setTeamAmount(value.target.value);
    let array=[];
    for (let i = 0; i < value.target.value; i++) {
      array.push({}) 
    }
    setTeamInfo1(array)
  }


  function collectTeamName(value: any, key: any){
    let team =teamsInfo[key] 
    team.name = value.target.value
    setTeamInfo1(teamsInfo)
  }

  function collectTeamNumber(value: any, key: any){
    let team =teamsInfo[key] 
    team.number = value.target.value
    setTeamInfo1(teamsInfo)
  }


  return (
    <main className={styles.main}>
      <div className={`${styles.header} ${styles.bottomspacing}`}>Create an Event</div>

      
      <TextField label="Event Name" variant="outlined" value={eventName}
                               onChange={collectEventName}></TextField>
    

    {/* Amount of Teams */}

      <div className={`${styles.subheader} ${styles.topspacing} ${styles.bottomspacing}`}>How many teams are attending?</div>

      <TextField label="Amount of Teams Attending" variant="outlined" value={teamAmount}
                               onChange={collectTeamAmount}></TextField>

                            {/* Collecting Team Info */}
    
    <div className={styles.spacing}>
      {Array.from(teamsInfo).map((team:any, key:any) => ( <div className={`${styles.row} ${styles.topspacing}`}>
                <Grid>
                    <TextField label="Team Number" variant="outlined" value={team.number}
                               onChange={(e)=> collectTeamNumber(e,key)}></TextField>

                </Grid>

                <Grid className={styles.sidespacing}>
                    <TextField label="Team Name" variant="outlined" value={team.name}
                               onChange={(e)=> collectTeamName(e,key)}></TextField>

                </Grid>
                </div>
                )
            )}
            </div>

            {/* Submit Button */}


{/* makeshift if statememt */}
          {teamAmount > 0 &&
          <>
            <div className={`${styles.subheader} ${styles.topspacing} ${styles.bottomspacing}`}>Ready To Submit?</div>

            const navigate = useNavigate();
          <Button onClick={() => navigate("/your-path-here")}>
            Submit
          </Button>
            


            
          </>
          }
          
            

            
       


    </main>
  )
}