import React from 'react'
import TestApi from './TestApi'

const Content = () => {
  return (
    <div className="flex justify-bewtween">
        <TestApi />
        <div className=" w-full">
          <iframe title='mapa'
            width="100%"
            height="100%"
            src="https://api.maptiler.com/maps/493bcfed-b3bd-40dc-8481-2a8bf0de4d2f/?key=zinS1wlCxvs7Sqeojrxg#11.0/53.02098/18.77182"
          ></iframe>
        </div>
    </div>
  )
}

export default Content