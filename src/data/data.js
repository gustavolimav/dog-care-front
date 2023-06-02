import { get, child } from "firebase/database";
import { dbRef } from "../config/firebaseConfig";

export const dataRefs = ['rLed', 'yLed', 'gLed', 'buz', 'mic'];

export function getData() {
  const promises = dataRefs.map(ref => {
    return get(child(dbRef, `prod/${ref}`))
      .then(snapshot => snapshot.val())
      .catch(error => {
        console.error(`Error fetching data for ${ref}:`, error);
        return null;
      });
  });

  return Promise.all(promises);
}

export default getData;
