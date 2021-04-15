import React from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { selectlayerData } from '../../reducks/Player/operations'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
});



const PrimaryTable = (props) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // const onRowClick = (event, row) => {
  //   props.onClick(row)
  // }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => {
                return (
                  <TableRow 
                    hover
                    role='ckeckbox'
                    tabIndex={-1} 
                    key={row.code}
                    onClick={(event) => props.onClick(row)}
                  >
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                    })}
                  </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PrimaryTable;
