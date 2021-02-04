import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import BusinessAlerts from './BusinessAlertShow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";


const columns = [
    { id: 'name', label: 'نام', minWidth: 120 },
    { id: 'family', label: ' نام خانوادگی', minWidth: 100 },
    { id: 'phone',  label: 'شماره همراه', minWidth: 110,align: 'right',},
    // {
    //     id: 'discountPercent',
    //     label: 'درصد تخفیف',
    //     minWidth: 110,
    //     align: 'right',
    //
    // },
    // {
    //     id: 'discountDiuration',
    //     label: 'معتبر تا تاریخ',
    //     minWidth: 170,
    //     align: 'right',
    //
    // },

];





const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(5),
            width:"40%",
            marginTop:'40px',
            direction: 'rtl',

        },
        "& .MuiFormLabel-root": {
            fontFamily:"IRANSans",
        },
        "& .MuiInputLabel-formControl":{
            right:0,
            left:'auto',
        },

    },
}));


const styleBgForm= {
    backgroundColor: '#f0f1f4',
    direction: 'ltr',
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

const  styleSearchResult={
    backgroundColor:'#ffffff',
    width:'85%',
    height: '100%',
    paddingTop: '25px',
    direction:'rtl',
};
const  styleAddShoping={
    backgroundColor:'#ffffff',
    direction:'ltr',
    paddingBottom:'10px',
};
const  resultInfo={
    backgroundColor:'#C0DDE5',
    direction:'rtl',
    paddingBottom:'10px',
    width:'45%',
    height:'70px',
    marginTop: '15px',
    marginBottom:'5px',
    marginRight:'10px',
    textAlign:'center',
};
const twoPaper={
    direction:'rtl',
    display:'flex',
};
const headerPaper={
    width:'100%',
    height:'20px',
    direction:'rtl',
    backgroundColor:'#2ECC71',
    marginTop:'10px',
    textAlign:'center',
    fontWeight:'bold',
};
//
// function resultSearchShow()
// {
//     setShow('show');
// }


function BusinessCustomerSearchForm(){

    const [showResultSearch,setShowResultSearch]=useState(true);
    const [enableAddShoping,setEnableAddShoping]=useState(true);
    const [customerPhoneNo,setCustomerPhoneNo]=useState();
    const [showerror,setShowerror]=React.useState(false);
    const [errormessage,setErrormesasage]=React.useState('');

    const[customerName,setCustomerName]=React.useState();
    const[customerFamily,setCustomerFamily]=React.useState();
    const[sumPresented,setSumPresented]=React.useState();
    const[presentedCustomerName,setPresentedCustomerName]=React.useState();
    const[presentedCustomerFamily,setPresentedCustomerFamily]=React.useState();
    const[presentedCustomerPhone,setPresentedCustomerPhone]=React.useState();
    const[customerPresented,setCustomerPresented]=React.useState([]);


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



    function sendCustomerPhoneNo(){
        // (0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}

        const mobile = /^(09)(12|19|35|36|37|38|39|32|21|22|31|34|13|14|18|17|16|15|11|10|20|90|91|92|93|94|01|02|03|04|05|30|33|)\d{7}$/g;
        const result = customerPhoneNo.match(mobile);
        if ((result)&&(customerPhoneNo !== '')){
            axios.post('/api/business/searchcustomer',{'phone':customerPhoneNo}) .then((res)=>
                {
                    setCustomerName(res.data['customerSearchName']);
                    setCustomerFamily(res.data['customerSearchFamily']);
                    setSumPresented(res.data['sumCusotmerPresented']);
                    setPresentedCustomerName(res.data['whoPresentedCustomerSearchName']);
                    setPresentedCustomerFamily(res.data['whoPresentedCustomerSearchFamily']);
                    setPresentedCustomerPhone(res.data['whoPresentedCustomerSearchPhone']);

                    setCustomerPresented(res.data['whoPresentedByCustomerSearch']);

                })
        }else{
            setErrormesasage(
                {
                    msg: 'شماره همراه صحیح نمیباشد',
                    key: Math.random(),
                    errortype: 'warning'
                });

            setShowerror(true);
        }

    }

    const rows = [{customerPresented}];
    console.log(rows);

    return(
      <Container style={styleBgForm}>

          {showerror ?
              <BusinessAlerts key={errormessage.key} errormessage={errormessage.msg} errortype={errormessage.errortype}/>:null
          }

            <div className="card-header" style={headerReportForm}>



                <SearchIcon/>
                جستجوی سریع مشتریان

            </div>

            <div style={{textAlign:'center'}} className={classes.root}>

                <TextField
                    id="searchMobileNo"
                    label="شماره همراه را وارد نمایید(09xxxxxxxxx)"
                    type="number"
                    onChange={event=>setCustomerPhoneNo(event.target.value)}
                    value={customerPhoneNo}
                    InputProps={{endAdornment:
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                style={{backgroundColor:"#e6e6e6",bottom:'5px'}}
                                onClick={()=>{setShowResultSearch(false);setEnableAddShoping(false);sendCustomerPhoneNo();}}
                            >
                            <SearchIcon />
                        </IconButton>}}

                />

            </div>

         <div hidden={showResultSearch}>

            <Container style={styleSearchResult}>

                    <br/>
                <div style={headerPaper}>   مشخصات شماره همراه وارد شده( مشتری)   </div>

              <div style={twoPaper}>
                <Paper elevation={3} style={resultInfo}>
                   <h3> نام مشتری: {customerName}</h3>
                </Paper>

                <Paper elevation={3} style={resultInfo}>
                    <h3> نام خانوادگی مشتری: {customerFamily}</h3>
                </Paper>
              </div>

              <div style={twoPaper}>
                    <Paper elevation={3} style={resultInfo}>
                        <h3> تعداد معرف: {sumPresented}  نفر </h3>
                    </Paper>

                    <Paper elevation={3} style={resultInfo}>

                    </Paper>
              </div>


                <div style={headerPaper}>   مشخصات معرف شماره همراه وارد شده (مشتری)   </div>
                <div style={twoPaper}>

                <Paper elevation={3} style={resultInfo}>
                    <h3> نام: {presentedCustomerName}</h3>
                </Paper>
                <Paper elevation={3} style={resultInfo}>
                    <h3> نام خانوادگی: {presentedCustomerFamily}</h3>
                </Paper>
                </div>
                <div style={twoPaper}>
                <Paper elevation={3} style={resultInfo}>
                    <h3> شماره همراه: {presentedCustomerPhone}</h3>
                </Paper>
                </div>
                <div style={headerPaper}>   افراد معرفی شده توسط مشتری   </div>


                <div>

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
                                {customerPresented.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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

                </div>

            </Container>
         </div>
      </Container>

            );
}

export default BusinessCustomerSearchForm;