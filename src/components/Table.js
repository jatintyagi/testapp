import React from "react";
import TableHeaders from './TableHeaders.json'
import {isJson} from '../shared/utilities'
const Table = ({ data }) => {
 const headers = TableHeaders.headers[0]
 let array = Object.keys(headers)
  return (
    <div id='pokemon'>
      <table>
        <thead>
          <tr>
            {Object.keys(headers).map((item, key) => (
              <th key={key}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
               {array.map((item, key) => (
                <td key={'tr_' +  key}>{Array.isArray(row[headers[item]])? <ul>{renderArrayItems(row[headers[item]])}</ul>: row[headers[item]]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// Render Array items and object items present in array
const renderArrayItems = (items) =>{
 let list = []
  if (items.length > 0){
    list.push(items.map((item, index) => (
        isJson(item) ? Object.keys(item).map(function(key) { return <li key={'li_'+ key}>{key}: {item[key]}</li> })
         : <li key={'li_'+ index}>{items[index].toString()}</li>
  )))
}
return list
}

export default Table;
