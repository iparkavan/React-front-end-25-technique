import { useEffect, useState } from "react";
import "./scroll.css";

// eslint-disable-next-line react/prop-types
export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [scorllPercentage, setScorllPercentage] = useState(0);

  useEffect(() => {
    (async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          setData(data.products);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setErrorMessage(error.message);
      }
    })();
  }, [url]);

  const scrollHandler = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScorllPercentage((howMuchScrolled / height) * 100);
  };
  console.log(scorllPercentage);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scorllPercentage}%` }}
          />
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0 ? (
          data.map((item, i) => <p key={i}>{item.title}</p>)
        ) : (
          <p>No Data Dound</p>
        )}
      </div>
    </div>
  );
};
