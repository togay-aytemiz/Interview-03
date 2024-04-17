import axios from "axios";
import { Ultra } from "next/font/google";
import { useEffect, useState } from "react";

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  //KODUNUZ BURAYA GELECEK

  const URL = "https://www.boredapi.com/api/activity"
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(URL)
      console.log(response.data);
      setData([...data, response.data])
    } catch (error) {
      console.log("Error");
    }
  }


  return (
    <>
    <div className="sm:mx-auto max-w-lg mt-10 mx-4 ">
      <button onClick={fetchData} className="p-3 bg-green-700 text-white rounded-md shadow-lg hover:bg-green-500 w-full">Generate Activity</button>

      {/* activity list */}
        {data && data.map((item) => (
        <ExpandableListItem key={item.key} item={item} />
      ))}

      {data.length === 0 && <p className=" mt-10 text-center ">There is no activity! Please click above button to create one ⬆️</p>}
    </div>
    </>
  )

};

const ExpandableListItem = ({ item }) => {
  // KODUNUZ BURAYA GELECEK

  const [expanded, setExpanded] = useState(false)
  return (
    <div className="flex flex-row mt-4 gap-5 items-start border p-4 justify-between">
      <div>
      <p className=" font-bold">{item.activity}</p>
      {expanded && (
        
        <div>
        <ul className="mt-5">
          <li>Type: {item.type}</li>
          <li>Participants: {item.participants}</li>
          <li>Price: {item.price}</li>
          <li>Link: {item.link}</li>
          <li>Key: {item.key}</li>
          <li>Accessibility: {item.accessibility}</li>
        </ul>
        </div>
      
      )}
      </div>
      <button onClick={()=>setExpanded(pre => !pre)}className="p-2 text-md  bg-green-300 text-green rounded-md shadow-lg hover:bg-green-200 ">{expanded ? "Collapse" : "Expand"}</button>
    </div>
  )
};

export default App;
