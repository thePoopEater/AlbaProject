import { useState, useEffect } from "react";

const useWebSocket = (serverUrl) => {
  const [socket, setSocket] = useState(null);
  const [videoFrame, setVideoFrame] = useState(null);
  const [sensorData, setSensorData] = useState(null);
  const [thresholdExceeded, setThresholdExceeded] = useState(false);

  useEffect(() => {
    const newSocket = new WebSocket(serverUrl);

    newSocket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      // Check if the message is video frame data
      if (data.type === "video") {
        const imageUrl = "data:image/jpeg;base64," + data.frameData;
        setVideoFrame(imageUrl);
      }

      // Check if the message is sensor data
      if (data.type === "sensor") {
        setSensorData(data.sensorData);
      }

      // Check if the message indicates a threshold exceedance
      if (data.type === "threshold" && data.thresholdExceeded) {
        setThresholdExceeded(true);
      }
    });

    newSocket.addEventListener("close", () => {
      console.log("WebSocket closed");
    });

    newSocket.addEventListener("error", (error) => {
      console.error("WebSocket error:", error);
    });

    setSocket(newSocket);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      newSocket.close();
    };
  }, [serverUrl]);

  return { videoFrame, sensorData, thresholdExceeded };
};

export default useWebSocket;
