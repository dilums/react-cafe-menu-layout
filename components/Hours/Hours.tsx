export default function Hours() {
  return (
    <div className="pb-4 pr-4">
      <table className="hours justify-self-end">
        <thead>
          <tr>
            <th colSpan={2}>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-4">Mon. - Thurs.</td>
            <td>6 a.m. - 9 p.m.</td>
          </tr>
          <tr>
            <td>Fri. - Sat.</td>
            <td>6 a.m. - 11 p.m.</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>8 a.m. - 2 p.m.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
