import React, {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file;
import 'react-date-range/dist/theme/default.css'; // theme css file;
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';
import './Search.css';
import { useNavigate  } from "react-router-dom";

function Search() {
    let navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    function handleClick() {
        navigate("/search");
      }

    return (
        <div className="search">
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of Guest 
                <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2}
                   type='number' />
            
            <Button className='btn' onClick={handleClick}>Airbnb</Button>
            
        </div>
    )
}

export default Search