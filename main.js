import React, {useState} from 'react';

export function App(props) {
  const [searchItem, setSearchItem] = useState('');
  const [data, setData] = useState([]);

  var people = [
  {
    FirstName: "James",
    Address: "123 Main St",
    PhoneNumber: "998-755-655"
  },
  {
    FirstName: "Anand",
    Address: "25 Koramangala",
    PhoneNumber: "555-987-6543"
  },
  {
    FirstName: "Hari",
    Address: "36 Indira Nagar",
    PhoneNumber: "990-123-456"
  }
];

  const handleChange = (event) => {
    let keyword = event.target.value;
    setSearchItem(keyword);
  }

  const searchData = () => {
    const newArr = [];
    people.map((obj) => {
      Object.values(obj).forEach(item => {
        if (item.includes(searchItem)) {
          newArr.push(item);
        }
      })

      setData(newArr);
    });
  }

  return (
    <div className='App'>
      <input onChange={handleChange}/>
      <button onClick={searchData}>Click</button>
      <div>LIST : 
      {data.map(item => <div key={item}>{item}</div>)}
      </div>
    </div>
  );
}

// Testing scenarios
- First check for data object type
- Search term should be a String and have a value
- Check complete search with mock data