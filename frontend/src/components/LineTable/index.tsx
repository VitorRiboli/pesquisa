import { formatDate } from "../../pages/ClientPage/Records/utils";

type Props = {
  id: number;
  name: string;
  moment: string;
  age: string;
  platform: string;
  genreName: string;
  gameTitle: string;
}

export default function LineTable({ ...record } : Props) {
  return (
    <tr key={record.id}>
      <td>{formatDate(record.moment)}</td>
      <td>{record.name}</td>
      <td>{record.age}</td>
      <td className="text-secondary">{record.platform}</td>
      <td>{record.genreName}</td>
      <td className="text-primary">{record.gameTitle}</td>
    </tr>
  );
}
