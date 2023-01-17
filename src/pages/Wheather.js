import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Wheather = () => {

    const [search, setsearch] = useState('')
    const [data, setdata] = useState({})

    const onClick = async () => {
        try {
            let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=686faa73524a4ffaaac152828231101&q=${search}`)
            res = await res.json()


            if (res.location && res.current) {
                setdata(res)
            }

            if (res.error) {
                setdata({})
                toast.error(res.error.message, {
                    position: "top-right",
                    theme: "light",
                });
            }
        }
        catch(error) {
            toast.error(String(error), {
                position: "top-right",
                theme: "light",
            });
        }
    }

    const onChange = (event) => {
        setsearch(event.target.value)
    }

    return (
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>


            <input value={search} onChange={onChange} placeholder="search by city name.." style={{ width: '500px' }} /> <br />

            <button className="button" onClick={onClick}>Submit</button>


            <div>
                {data && data.location &&  <h1>{data?.location?.name} , { data?.location?.country}</h1>}

                {
                    data && data.current && <ul>
                        <li> celsius {data && data.current && data.current.temp_c}</li>
                        <li> fahrenhit {data?.current?.temp_f}</li>
                        <li> wind {data?.current?.wind_kph} / kph </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Wheather