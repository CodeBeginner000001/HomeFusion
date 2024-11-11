import { useEffect, useState } from "react";
import collectionData from "./Utils/Firebase_GetData.js";
import {
  FanCard,
  AcCard,
  LightCard,
  Private_LockCard,
  Public_LockCard,
} from "./CollectionCards";

export default function App() {
  // collection names variables
  let FanCollection = "Fans";
  let AcCollection = "ACs";
  let LightCollection = "Lights";
  let Private_LockCollection = "Private_Door_Locks";
  let Public_LockCollection = "Public_Door_Locks";

//  useStates to store collections data
  const [fansData, setFansData] = useState([]);
  const [acsData, setAcsData] = useState([]);
  const [lightsData, setLightsData] = useState([]);
  const [privateDoorLockData, setPrivateDoorLockData] = useState([]);
  const [publicDoorLockData, setPublicDoorLockData] = useState([]);

  useEffect(() => {
   // Fetch data from each collection and set it to respective state variables
   const unsubscribeFans = collectionData(FanCollection, setFansData);
   const unsubscribeAcs = collectionData(AcCollection, setAcsData);
   const unsubscribeLights = collectionData(LightCollection, setLightsData);
   const unsubscribePrivateDoorLocks = collectionData(Private_LockCollection, setPrivateDoorLockData);
   const unsubscribePublicDoorLocks = collectionData(Public_LockCollection, setPublicDoorLockData);

   // Cleanup on unmount
   return () => {
     unsubscribeFans();
     unsubscribeAcs();
     unsubscribeLights();
     unsubscribePrivateDoorLocks();
     unsubscribePublicDoorLocks();
   };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2 className="text-3xl">Fans</h2>
      <FanCard fansData={fansData} CollectionName={FanCollection}/>
      <h2 className="text-3xl">Ac</h2>
      <AcCard acsData={acsData} CollectionName={AcCollection}/>
      <h2 className="text-3xl">Lights</h2> 
      <LightCard lightsData={lightsData} CollectionName={LightCollection}/>
      <h2 className="text-3xl">Private Lock</h2>
      <Private_LockCard privateDoorLockData={privateDoorLockData} CollectionName={Private_LockCollection}/>
      <h2 className="text-3xl">Public Lock</h2>
      <Public_LockCard publicDoorLockData={publicDoorLockData} CollectionName={Public_LockCollection}/>
    </>
  );
}
