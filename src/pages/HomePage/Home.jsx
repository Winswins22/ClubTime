import React from 'react'
import {Calendar} from '../../components'
import { PagePusher } from '../../components/globalStyles'

function Home() {
  return (
    <PagePusher>
      <Calendar></Calendar>
    </PagePusher>
  )
}

export default Home