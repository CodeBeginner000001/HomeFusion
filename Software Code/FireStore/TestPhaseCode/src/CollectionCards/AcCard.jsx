/* eslint-disable react/prop-types */
import Loading from "./Loading";
import Card from "../Card";
export default function AcCard({ acsData, CollectionName }) {
  return (
    <div className="grid grid-cols-3 w-[60vw] h-[20vh] m-auto mt-16 gap-16">
      {acsData ? (
        acsData.map((ac) => (
          <Card
            CardHeading={ac.name}
            key={ac.id}
            value={ac.value}
            CollectionName={CollectionName}
            docId={ac.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
