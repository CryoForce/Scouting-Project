'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'
import Entry from './entry'
import { useState } from 'react';
import Admin from './admin';
import EventPage from './eventpage';
import MatchCreation from './eventpage'

export default function Home() {

  const [creationDone, setCreationDone] = useState(false);
  const [eventName, setEventName] = useState("");
  const [teamsInfo, setTeamsInfo] = useState([] as any);

  function updateCreation(value:boolean, eventName:any, teamsInfo:any){
    setCreationDone(value);
    setEventName(eventName)
    setTeamsInfo(teamsInfo)
   }

  return (
    <div>
      {!creationDone?
      <Entry updateDone={updateCreation}></Entry>
      :<EventPage eventName = {eventName} teamsInfo = {teamsInfo}></EventPage>
      :<MatchCreation eventName = {eventName} teamsInfo = {teamsInfo}></MatchCreation>
    }
    </div>
  )
}
