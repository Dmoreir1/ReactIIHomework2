import React from 'react'; 

export const Animals = ({table}) => {
    return (
        <table>
            <thead>
                <tr>
                <th>Barn Animals!</th>
                </tr>
            </thead>
            <tbody>
                {table.map((animal, index) => (
                    <tr key={index}>
                        <td>{animal}</td>
                    </tr>
                ))}
            </tbody>
        </table>
         
       
    )
}