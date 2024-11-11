/* eslint-disable react/prop-types */
import Loading from "./Loading";
import Card from "../Card";
export default function Public_LockCard({publicDoorLockData,CollectionName}) {
  return (
    <div className="grid grid-cols-3 w-[80vw] h-[20vh] m-auto mt-16 gap-16">
      {publicDoorLockData ? (
        publicDoorLockData.map((Lock) => (
          <Card
            CardHeading={Lock.name}
            key={Lock.id}
            value={Lock.value}
            CollectionName={CollectionName}
            docId={Lock.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
