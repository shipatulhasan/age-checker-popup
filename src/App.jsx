import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  const [show, setShow] = useState(false);
  const [verificationData, setVerificationData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleVerify = () => {
    setShow(!show);
    localStorage.setItem("BBBage-verification", true);
  };
  useEffect(() => {
    // fetch api
    setIsLoading(true);
    fetch(
      `http://localhost:8000/api/age-verification?shop=kinda-hot-sauce-store.myshopify.com`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setVerificationData(data.data);
      })
      .catch((err) => console.error(err.message));
  }, []);
  useEffect(() => {
    const isVerified = localStorage.getItem("BBBage-verification");
    if (!isVerified) {
      const unsubscribe = setTimeout(() => {
        setShow(true);
      }, 3000);
      return () => clearTimeout(unsubscribe);
    }
    setShow(false);
    return;
  }, []);
  if(isLoading){
    return
  }

  return (
    <div className="nvd-age-checker">
      <Modal
        show={show}
        setShow={setShow}
        handleVerify={handleVerify}
        data={verificationData}
      />
    </div>
  );
}

export default App;
