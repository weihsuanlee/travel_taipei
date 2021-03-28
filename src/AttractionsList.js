import axios from './api/axios'
import requests from './api/requests'
import { useEffect, useState } from 'react'

function AttractionsList({ setPageNow, attractions }) {
  return (
    <>
      {attractions.map((attraction) => (
        <div key={attraction.id}>{attraction.name}</div>
      ))}
      <button
        onClick={() => {
          setPageNow(5)
        }}
      >
        5
      </button>
    </>
  )
}

export default AttractionsList
