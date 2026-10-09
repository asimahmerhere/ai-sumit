import React, { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Basic countdown logic to October 11, 2026
    const countDownDate = new Date("Oct 11, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="counter-section bg-gradient">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="counter-text">
                        <span>Conference Date</span>
                        <h3>Count Every Second <br />Until the Event</h3>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="cd-timer" id="countdown">
                        <div className="cd-item">
                            <span>{timeLeft.days}</span>
                            <p>Days</p>
                        </div>
                        <div className="cd-item">
                            <span>{timeLeft.hours}</span>
                            <p>Hours</p>
                        </div>
                        <div className="cd-item">
                            <span>{timeLeft.minutes}</span>
                            <p>Minutes</p>
                        </div>
                        <div className="cd-item">
                            <span>{timeLeft.seconds}</span>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
