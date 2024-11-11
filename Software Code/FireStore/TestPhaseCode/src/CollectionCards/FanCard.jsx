/* eslint-disable react/prop-types */
import Card from "../Card";
import Loading from "./Loading";
export default function FanCard({ fansData, CollectionName }) {
  return (
    <div className="grid grid-cols-3 w-[60vw] h-[20vh] m-auto mt-16 gap-16">
      {fansData ? (
        fansData.map((fan) => (
          <Card
            CardHeading={fan.name}
            key={fan.id}
            value={fan.value}
            CollectionName={CollectionName}
            docId={fan.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
