'use client';
import { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const updateNow = () => setNow(new Date());

    const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    const timeout = setTimeout(() => {
      updateNow();
      const interval = setInterval(updateNow, 60000);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [now]);

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full", timeZone: "Asia/Kolkata" }).format(now);

  return (
    <div>
      <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
    </div>
  );
};

export default TimeDisplay;