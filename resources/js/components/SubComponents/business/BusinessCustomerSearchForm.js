import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import BusinessAlerts from './BusinessAlertShow';
import axios from 'axios';



const temp=
    "در مدت زمان معین میباشد. که کاربر مغازه دار (صاحب کسب کار)\n" +
    "                میتواند با پر کردن 3 فیلد مشخص نماید که مشتری با چند بار خرید\n" +
    "                در چه مدت زمانی دارای چه مقدار تخفیف باشد.\n" +
    "                به عنوان مثال: میتوانید مشخص نمایید\n" +
    "                مشتری پس از چه تعداد خرید(در قسمت تعداد خرید مشتری) میتواند چند درصد تخفیف\n" +
    "                (در قسمت درصد تخفیف) و در چه مدت زمانی (در قسمت تعداد ماه قابل استفاده)\n" +
    "                از فروشکاه یا صاحب کسب و کار تخفیف داشته باشد.\n" +
    "                هر صاحب کسب و کار میتواند 3 سطر در رابطه با تخفیفات را به صورت\n" +
    "                صعودی تنظیم نماید. به عنوان مثال : یک مشتری(خریدار) میتواند با\n" +
    "                توجه به تعداد خرید تنظیم شده در سطر اول زمانی که تعداد خرید وی بیشتر\n" +
    "                از آن تعداد شد به مدت زمان تعیین شده از آن تخفیف استفاده نماید.\n" +
    "                حال این مقدار و ارقام میبتواند در سطر های\n" +
    "                بعدی بیشتر باشد که مشتری (خریدار) با مراجعه بیشتر از درصد تخفیف بیشتر\n" +
    "                در مدت زمان بیشتری استفاده نماید.\n";


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
};
const  styleAddShoping={
    backgroundColor:'#ffffff',
    direction:'ltr',
    paddingBottom:'10px',
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

    const classes = useStyles();


    function sendCustomerPhoneNo(){
        // (0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}

        const mobile = /^(09)(12|19|35|36|37|38|39|32|21|22|31|34|13|14|18|17|16|15|11|10|20|90|91|92|93|94|01|02|03|04|05|30|33|)\d{7}$/g;
        const result = customerPhoneNo.match(mobile);
        if ((result)&&(customerPhoneNo !== '')){
            axios.post('/api/business/searchcustomer',{'customerphone':customerPhoneNo}) .then((res)=>
                {
                    alert()
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
                نتیجه جستجو
                    <br/>
                    {temp}

                    <div style={styleAddShoping}>
                        <IconButton color="primary" aria-label="upload picture" component="span"
                                    style={{backgroundColor: '#e1e8e7'}}
                                    disabled={enableAddShoping}>

                            <AddShoppingCartIcon/>

                        </IconButton>
                    </div>



            </Container>
         </div>
      </Container>

            );
}

export default BusinessCustomerSearchForm;