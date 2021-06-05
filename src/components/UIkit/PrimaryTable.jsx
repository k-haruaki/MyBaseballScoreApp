import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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

  // 編集画面の際に、ボタン表示用のカラムを先頭に追加
  const addButtonColumns = () => {
    if (true === props.isEdit) {
      props.columns.push({ id: 'editButton', minWidth: 30})
      props.columns.push({ id: 'deleteButton', minWidth: 30})
    }
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size="medium">
          <TableHead>
            <TableRow>
              {addButtonColumns()}
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
                      if (value !== undefined){
                        return (
                          <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      }
                    })}
                    {props.isEdit ? 
                      <>
                        <TableCell>
                          <IconButton>
                            <EditIcon ></EditIcon>
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton>
                            <DeleteForeverIcon></DeleteForeverIcon>
                          </IconButton>
                        </TableCell>
                      </>
                      :
                      ""
                    }
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
