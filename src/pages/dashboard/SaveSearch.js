import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project import
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const saveSearch = [
  { Date: '13-Jan-2024', Name: 'test1', Criteria: 'Shape: 20, Col: Regular, Criteria: IF,VVS1, Cts: 10' },
  { Date: '03-Jan-2024', Name: 'test', Criteria: 'Shape: 20, Col: Regular, Criteria: IF,VVS1, Cts: 10' },
  { Date: '28-Jan-2024', Name: 'demo', Criteria: 'Shape: 20, Col: Regular, Criteria: IF,VVS1, Cts: 10' },
  { Date: '28-Jan-2024', Name: 'demo', Criteria: 'Shape: 20, Col: Regular, Criteria: IF,VVS1, Cts: 10' },
  { Date: '28-Jan-2024', Name: 'demo', Criteria: 'Shape: 20, Col: Regular, Criteria: IF,VVS1, Cts: 10' }
];

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: '.'
  },
  {
    id: 'date',
    align: 'center',
    disablePadding: true,
    label: 'Date'
  },
  {
    id: 'name',
    align: 'center',
    disablePadding: true,
    label: 'Name'
  },
  {
    id: 'fat',
    align: 'center',
    disablePadding: false,
    label: 'Criteria'
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

export default function SaveSearch() {
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
            {saveSearch?.map((row, index) => {
              const isItemSelected = isSelected(row.trackingNo);
              const labelId = `enhanced-table-checkbox-${index}`;

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
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="">
                      <EditOutlined />
                      <DeleteOutlined />
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.Date}</TableCell>
                  <TableCell align="left">{row.Name}</TableCell>
                  <TableCell align="right">{row.Criteria}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
