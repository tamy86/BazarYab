import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import AssignmentIcon from '@material-ui/icons/Assignment';



const columns = [
    { id: 'shopingNameInDiscount', label: 'نام فروشگاه', minWidth: 100 },
    {
        id: 'noNewCustomerSentByUser',
        label: 'افراد معرفی شده توسط کاربر',
        minWidth: 110,
        align: 'right',

    },
    {
        id: 'discountPercentUser',
        label: 'درصد تخفیف فعلی',
        minWidth: 110,
        align: 'right',

    },
    {
        id: 'discountDiurationUser',
        label: 'اعتبار تاریخ تخفیف تا',
        minWidth: 170,
        align: 'right',

    },

];

const rows = [
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},
    { shopingNameInDiscount:'فروشگاه جدید', noNewCustomerSentByUser:20,discountPercentUser:20,discountDiurationUser:'12/02/1400'},


];


const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop:'25px',


    },
    container: {
        maxHeight: 440,
    },
    '& .MuiTableCell-stickyHeader':{

    }
});



const styleBgForm= {
    backgroundColor: '#f0f1f4',
    direction: 'rtl',
    width: '70%',
    height: '100%',
    minWidth:'270px',
    minHeight:'400px',
    fontFamily:'IRANSans',
    paddingTop: '40px',
    paddingBottom:'40px',

};

const headerReportForm={
    backgroundColor:'#001a33',
    width: '100%',
    color:'#fff',
    fontFamily:'IRANSans',
    textAlign:'center',
    fontSize:'20px',

};


function UserDiscountsReportTable() {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return(
        <Container style={styleBgForm}>

            <div className="card-header" style={headerReportForm}>
                <AssignmentIcon/>
                فرم گزارش تخفیف های مشتری

            </div>


            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth,fontFamily:"IRANSans",textAlign:'center',backgroundColor:'#ccdaf0',}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} style={{fontFamily:"IRANSans",textAlign:'center'}}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    style={{backgroundColor:'#ccdaf0',}}
                />
            </Paper>

        </Container>
    );

}

export default UserDiscountsReportTable;