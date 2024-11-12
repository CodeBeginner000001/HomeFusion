/* eslint-disable react/prop-types */
import Loading from "./Loading";
import Card from "../Card";
export default function AcCard({ acsData, CollectionName }) {
  return (
    <div className="grid grid-cols-1 w-[60vw] m-auto mt-8 mb-10 gap-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6">
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
