import { initializeApp } from "firebase/app";
import firebaseConfig from '../../src/Firebase/firebase.config'

const initial =()=>{
    initializeApp(firebaseConfig)
}
export default initial;