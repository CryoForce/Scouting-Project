'use client'
import Image from 'next/image'
import styles from './entry.module.css'
import { Button, TextField,FormControl, Grid, StyledEngineProvider } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore, doc, getDoc, collection, query, where, Query, getDocs, getDocsFromServer, setDoc } from "firebase/firestore";


export default function MatchCreation({updateDone}: any) {

  const [matchesInfo, setMatchesInfo1] = useState([] as any);

  const [matchAmount, setMatchAmount] = useState(0);


  
  const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyC_yk4qGelNtzm-zJzDm1wHRBMmcCA5YYA",
  authDomain: "the-scouting-project.firebaseapp.com",
  projectId: "the-scouting-project",
  storageBucket: "the-scouting-project.appspot.com",
  messagingSenderId: "798121930934",
  appId: "1:798121930934:web:9ca23e0a8157fc6a393617",
  measurementId: "G-RPYXS03GQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


  



const handleChange = (event: SelectChangeEvent) => {
  setMatchesInfo1(event.target.value as []);
};

  function collectMatchAmount(value: any){
    setMatchAmount(value.target.value);
    let array=[];
    for (let i = 0; i < value.target.value; i++) {
      array.push({}) 
    }
    setMatchesInfo1(array)
  }

  function displayTeamSelect(value: any){
    setMatchAmount(value.target.value);
    let array=[];
    for (let i = 0; i < value.target.value; i++) {
      array.push({}) 
    }
    setMatchesInfo1(array)
  }


  function collectTeam1(value: any, key: any){
    let team =matchesInfo[key] 
    team.name = value.target.value
    setMatchesInfo1(matchesInfo)
  }

  function collectTeam2(value: any, key: any){
    let team =matchesInfo[key] 
    team.number = value.target.value
    setMatchesInfo1(matchesInfo)
  }
  
  function collectTeam3(value: any, key: any){
    let team =matchesInfo[key] 
    team.number = value.target.value
    setMatchesInfo1(matchesInfo)
  }

  function collectTeam4(value: any, key: any){
    let team =matchesInfo[key] 
    team.number = value.target.value
    setMatchesInfo1(matchesInfo)
  }
  // function Submit(){
  //    updateDB()
  //    updateDone(true, matchesInfo)
    
  // }

  //  async function updateDB(){
  //   await setDoc(doc(db, "events"), {teams:matchesInfo});
  // }


  return (
    <main className={styles.main}>
      <div className={`${styles.header} ${styles.bottomspacing}`}>Create an Event</div>

      

    

    {/* Amount of Matches */}

      <div className={`${styles.subheader} ${styles.topspacing} ${styles.bottomspacing}`}>How many matches are being played?</div>

      <TextField label="Amount of Matches" variant="outlined" value={matchAmount}
                               onChange={collectMatchAmount}></TextField>

                            {/* Collecting Match Info */}
    
    <div className={styles.spacing}>
      {Array.from(matchesInfo).map((team:any, key:any) => ( <div className={`${styles.row} ${styles.topspacing}`}>
                <Grid>
                    
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Red 1</InputLabel>
        <           Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={matchesInfo}
                    label="Red 1"
                    onChange={handleChange}
        >

                {teamsInfo && <>
                {Array.from(teamsInfo).map((team:any, key:any) => ( <div className={`${styles.row} ${styles.topspacing}`}>
                <MenuItem value={10}><div>{team.number}</div>
                <div>{team.name}</div></MenuItem>
                
              
                </div>
                )
                )}
            </>}

                   </Select>
                   </FormControl>
                    </Box>
                </Grid>

                <Grid className={styles.sidespacing}>
               

                </Grid>
                </div>
                )
            )}
            </div>

            {/* Submit Button */}


{/* makeshift if statememt */}
          {/* {teamAmount > 0 &&
          <>
            <div className={`${styles.subheader} ${styles.topspacing} ${styles.bottomspacing}`}>Ready To Submit?</div>
      
            <Button variant="contained" onClick={Submit}><a href='admin'/>Submit</Button>
            


            
          </>
          } */}
          


          
            

            
       


    </main>
  )
}