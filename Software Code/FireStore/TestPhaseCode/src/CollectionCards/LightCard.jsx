/* eslint-disable react/prop-types */
import Loading from "./Loading";
import Card from "../Card";
export default function LightCard({ lightsData, CollectionName }) {
  return (
    <div className="grid grid-cols-3 w-[60vw] h-[20vh] m-auto mt-16 gap-16">
      {lightsData ? (
        lightsData.map((light) => (
          <Card
            CardHeading={light.name}
            key={light.id}
            value={light.value}
            CollectionName={CollectionName}
            docId={light.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
