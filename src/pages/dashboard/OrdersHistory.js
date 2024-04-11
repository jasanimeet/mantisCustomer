import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const orderHistory = [
  {
    Date: '05-Jan-2024',
    orderNo: '1',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '24-Feb-2024',
    orderNo: '2',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '28-Jan-2024',
    orderNo: '3',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '05-Jan-2024',
    orderNo: '4',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '24-Feb-2024',
    orderNo: '5',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '28-Jan-2024',
    orderNo: '6',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '05-Jan-2024',
    orderNo: '7',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '24-Feb-2024',
    orderNo: '8',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '28-Jan-2024',
    orderNo: '9',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  },
  {
    Date: '28-Jan-2024',
    orderNo: '10',
    totalPcs: 2000,
    totalCts: 1500,
    totalValue: 5000
  }
];

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'orderNo',
    align: 'left',
    disablePadding: true,
    label: 'orderNo'
  },
  {
    id: 'date',
    align: 'left',
    disablePadding: true,
    label: 'Date'
  },
  {
    id: 'totalPcs',
    align: 'right',
    disablePadding: false,
    label: 'totalPcs'
  },
  {
    id: 'totalCts',
    align: 'right',
    disablePadding: false,
    label: 'totalCts'
  },
  {
    id: 'totalValue',
    align: 'right',
    disablePadding: false,
    label: 'totalValue'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrdersHistory() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {orderHistory?.map((row) => {
              const isItemSelected = isSelected(row.trackingNo);

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.trackingNo}
                  selected={isItemSelected}
                >
                  <TableCell align="left">{row.orderNo}</TableCell>
                  <TableCell align="left">{row.Date}</TableCell>
                  <TableCell align="right">{row.totalPcs}</TableCell>
                  <TableCell align="right">{row.totalCts}</TableCell>
                  <TableCell align="right">{row.totalValue}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
