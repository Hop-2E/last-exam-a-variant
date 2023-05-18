import { instance } from "../App";
import { useState, useEffect } from "react";
const todoMap = () => {

  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post`);
    console.log(res);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={styles.Container}>
         <div style={styles.imgMap}>
            {post &&
              post.map((post) => {
                return <todo value={post} />;
              })}
          </div>
    </div>
  );
};


export default todoMap;