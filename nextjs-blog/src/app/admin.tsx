'use client'
import Image from 'next/image'
import styles from './admin.module.css'
import { Button, TextField,FormControl, Grid, StyledEngineProvider } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore, doc, getDoc, collection, query, where, Query, getDocs, getDocsFromServer } from "firebase/firestore";


export default function admin() {

  const [teamsInfo, setTeamInfo1] = useState([] as any);

  const [teamAmount, setTeamAmount] = useState(0);

  const [eventName, setEventName] = useState("");

  
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
      
            <Button variant="contained"><a href="admin">Submit</a></Button>
            


            
          </>
          }
          


          
            

            
       


    </main>
  )
}