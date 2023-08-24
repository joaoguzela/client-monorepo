import { HistoryContainer, HistoryList } from './styles';
import { Client } from '@types/Client';

export function ClientTable({ id, name, email, color, cpf }: Client) {
  return (
    <HistoryContainer>
      <h1>Registered Customer</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>color</th>
              <th>cpf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td style={{ backgroundColor: color }}>{color}</td>
              <td>{cpf}</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
