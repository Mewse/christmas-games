const ScoreTable = (props) => {
    const {players, data} = props;
    return (
        <div>
            <table>
                <thead>
                    <th>Game</th>
                    <th>Round</th>
                    {players.map((player, id) => (
                        <th>{player}</th>
                    ))}
                </thead>
                <tbody>
                    {data.map((dataRow, id) => (
                        <tr>
                            {dataRow.map((field, id) => (
                                <td>{field}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ScoreTable;