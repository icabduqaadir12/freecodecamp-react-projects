import { useEffect, useState } from "react"

export function PasswordGenerator() {
    const [ seconds, setSeconds ] = useState(0);
    const [ otp, setOtp ] = useState(null);

    function generateOtp() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // const random = Math.floor()

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => {
                setSeconds(prev => prev - 1)
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [seconds]);

    // Handle button click
    const handleGenerate = () => {
        setOtp(generateOtp());
        setSeconds(5);
    };

    return (
        <div style={{
            textAlign: 'center'
        }} className="container">
            <h1 className="otp-title">OTP Generator</h1>
            <h2 style={{
                fontSize: '28px'
            }} className="otp-display">{otp ? `${otp}` : "Click 'Generate   OTP' to get a code"}</h2>
            { otp && <p id="otp-timer">{seconds > 0 ? `Expires in: ${seconds} seconds` : 'OTP expired. Click the button to generate a new OTP.'}</p>}
            <button style={{
                backgroundColor: seconds > 0 ? '#303c51' : '#000f2B',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '16px',
                cursor: seconds > 0 ? 'not-allowed' : 'pointer',
                border: 'none',
                marginTop: '1rem'
            }} disabled={seconds > 0} id="generate-otp-button" onClick={handleGenerate}>Generate OTP</button>
        </div>
    )
}