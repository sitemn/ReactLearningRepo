import React, {useState, useEffect} from 'react'

export default function Main6() {
    const [name, setName] = useState('');
    let Students = [
        {name:"John", Marks: 40},
        {name:"Mike", Marks: 30},
        {name:"Cathy", Marks: 20}
    ];
    const [filteredData, setFilteredData] = useState(Students);

    // const filtered = Students.filter((Student) => {
    //     return Student.name === name;
    // })

    const handleInputChange = (e) => {
        setName(e.target.value);
        //setFilteredData(name.trim() === '' ? Students : Students.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
    };

    const handleFilter = () => {
        setFilteredData(name.trim() === '' ? Students : Students.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
    };

    useEffect(() => {handleFilter()},[name, Students]);

  return (
    <div>
        <h1>My Students</h1>
        <input type='text' onChange={handleInputChange}></input>
        {/* <button onClick={handleFilter}>Go</button> */}

        <ul>
            {filteredData.map((item, index) => (
                <div key={index}>{item.name}-{item.Marks}</div>
            ))}
        </ul>

    </div>
  )
}
