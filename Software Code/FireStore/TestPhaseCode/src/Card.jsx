import { Button_Heading, Toggle_Button } from "./ButtonCard-Component"
/* eslint-disable react/prop-types */
export default function Card({CardHeading,value,CollectionName,docId}) {
  return (
    <>
      <div className="bg-black rounded-3xl flex flex-col items-center justify-center text-nowrap">
            <Button_Heading CardHeading={CardHeading}/>
            <Toggle_Button value={value} CollectionName={CollectionName} docId={docId}/>
       </div>
    </>
  )
}

