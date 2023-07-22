
import './index.css'

const TableData = ({details}) => {
 
    console.log("Table")

    return (
     <table className="table">
            <tr>  
                <th>name</th>
                <th>email</th>
                <th>phone</th>
            </tr>  

            {details.map(each => (<tr>  
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.phone_no}</td>
            </tr>  ))}
       </table>
        )
    
}
export default TableData