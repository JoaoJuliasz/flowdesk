import DataTable from 'react-data-table-component';
import { getParsedTime } from '../../utils/getParsedTime';

type Props = {
    data: Trade[]
}

const Table = ({ data }: Props) => {

    const columns = [

        {
            name: 'Id',
            selector: (row: DataRow) => row.id,
        },
        {
            name: 'Price',
            selector: (row: DataRow) => row.price,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: (row: DataRow) => row.qty,
            sortable: true,
        },
        {
            name: 'Quote Quantity',
            selector: (row: DataRow) => row.qty,
        },
        {
            name: 'Time',
            selector: (row: DataRow) => getParsedTime(row.time),
            sortable: true,
        },
    ]

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination={true}
            customStyles={{ head: { style: { fontSize: '16px' } } }}
        />
    );
};

export default Table;