import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'
import Entry from './entry'
import { useState } from 'react';
import Admin from './admin';
import EventPage from './eventpage';

export default function Home() {

  const [creationDone, setCreationDone] = useState(false);

  function updateCreation(value:boolean){
    setCreationDone(value);
   }

  return (
    <div>
      {!creationDone?
      <Entry updateDone={updateCreation}></Entry>
      :<EventPage></EventPage>
    }
    </div>
  )
}
