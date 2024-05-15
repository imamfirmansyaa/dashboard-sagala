
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DataTable from 'react-data-table-component';

function App() {

  const columns = [
    {name: 'Name', selector: row => row.name, sortable: true},
    {name: 'Tempat Lahir', selector: row => row.city, sortable: true},
    {name: 'Tanggal Lahir', selector: row => row.date, sortable: true},
    {name: 'Alamat', selector: row => row.address, sortable: true}
  ]

  const data = [
    {
      "id": "1",
      "name": "Shafira Sanchez",
      "city": "Cambridge",
      "date": "Jun 10, 2024",
      "address": "673-1254 Curabitur Street"
    },
    {
      "id": "2",
      "name": "Lucian Zamora",
      "city": "Orangeville",
      "date": "Feb 12, 2025",
      "address": "Ap #281-142 Sapien, Rd."
    },
    {
      "id": "3",
      "name": "Mira Medina",
      "city": "Cork",
      "date": "Aug 26, 2024",
      "address": "300-9145 Blandit Avenue"
    },
    {
      "id": "4",
      "name": "Mollie Fitzgerald",
      "city": "Busan",
      "date": "Feb 4, 2024",
      "address": "493-5259 In St."
    },
    {
      "id": "5",
      "name": "Amber Jacobs",
      "date": "May 9, 2024",
      "city": "San Cristóbal de la Laguna",
      "address": "Ap #777-2084 Tristique St."
    },
    {
      "name": "Kitra Mayer",
      "date": "May 28, 2024",
      "city": "Castelbianco",
      "address": "814 Dignissim Rd."
    },
    {
      "name": "Tyrone Booth",
      "date": "Jun 5, 2024",
      "city": "O'Higgins",
      "address": "Ap #882-9406 Lectus Road"
    },
    {
      "name": "Ali Graves",
      "date": "Mar 30, 2024",
      "city": "Ningxia",
      "address": "7942 Pede. Rd."
    },
    {
      "name": "Graham Barron",
      "date": "Jun 7, 2024",
      "city": "Kostroma",
      "address": "648-4189 At, Rd."
    },
    {
      "name": "Keegan Rutledge",
      "date": "Dec 5, 2023",
      "city": "Norrköping",
      "address": "P.O. Box 714, 3227 Proin Ave"
    },
    {
      "name": "Kiara Harvey",
      "date": "Aug 3, 2023",
      "city": "Zeya",
      "address": "725-5748 Lorem. Av."
    },
    {
      "name": "Wayne Mueller",
      "date": "Nov 29, 2023",
      "city": "Mandal",
      "address": "7904 In Rd."
    },
    {
      "name": "Chandler Schultz",
      "date": "Mar 29, 2024",
      "city": "Krefeld",
      "address": "3689 Tincidunt Rd."
    },
    {
      "name": "Byron Ewing",
      "date": "Nov 9, 2024",
      "city": "Huaraz",
      "address": "1563 Aliquam Av."
    },
    {
      "name": "Asher Compton",
      "date": "Dec 18, 2024",
      "city": "Troyes",
      "address": "206-4051 Arcu. Rd."
    },
    {
      "name": "Benjamin Cantu",
      "date": "Aug 14, 2023",
      "city": "Elingen",
      "address": "4321 Semper St."
    },
    {
      "name": "Trevor Faulkner",
      "date": "Jul 5, 2023",
      "city": "Mérida",
      "address": "5365 Ligula Street"
    },
    {
      "name": "Whitney Hayden",
      "date": "Sep 16, 2024",
      "city": "Baguio",
      "address": "Ap #485-3991 Aliquet Avenue"
    },
    {
      "name": "Camilla Montoya",
      "date": "Sep 5, 2023",
      "city": "Daly",
      "address": "1162 Vehicula. Ave"
    },
    {
      "name": "Melvin Sawyer",
      "date": "Sep 2, 2024",
      "city": "Derby",
      "address": "Ap #989-8305 Mauris. Av."
    }
  ]

  const [records, setRecords] = useState(data);

  function handleFilter(event){
      const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setRecords(newData)
  }

  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar/>

      <div className='container mt-7'>
        <div className='text-end'><input type='text' onChange={handleFilter}/></div>
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>

    </div>
  );
}

export default App;
