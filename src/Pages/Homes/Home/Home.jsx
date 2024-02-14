import React from 'react'
import Banner from '../Banner/Banner'
import { getAuth} from "firebase/auth";
const Home = () => {
  const auth = getAuth();
  console.log(auth.currentUser)
  return (
    <div>
        <Banner/>
    </div>
  )
}

export default Home