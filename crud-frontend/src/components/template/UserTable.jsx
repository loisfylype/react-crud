import UserRows from './UserRows'

const UserTable = rowProps => (
    <table className="table mt-4">
        <thead>
            <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {UserRows(rowProps)}
        </tbody>
    </table>
)


export default UserTable