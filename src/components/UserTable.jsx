function UserTable ({search}) {
  return (
        <table style={{width: "100%", border: "1px solid #000", borderRadius: "5px", padding: "0 10px", color: "#000"}}>
          <thead style={{background: "#000", color: "#fff"}}>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody style={{background: "#e3dfdf"}}>
            {search.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                </tr>
            ))}
          </tbody>
        </table>
    )
}

export default UserTable;