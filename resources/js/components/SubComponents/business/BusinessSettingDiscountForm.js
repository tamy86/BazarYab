import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import PersonIcon from '@material-ui/icons/Person';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PaymentIcon from '@material-ui/icons/Payment';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormLabel-root": {
            fontFamily:"IRANSans",
        },
        "& .MuiInputLabel-formControl":{
            right:0,
            left:'auto',
            direction:'rtl',
        },


    },

}));

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
const headerSettingForm={
    backgroundColor:'#001a33',
    width: '100%',
    color:'#fff',
    fontFamily:'IRANSans',
    textAlign:'center',
    fontSize:'20px',

};
const styleButton={
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 15px',
    fontFamily:'IRANSans',
    marginRight:'20px',
    width:'50%',
    marginTop: '15px',
};
const spaceBetwenButton={
    paddingTop:'40px',
    textAlign:'center',
};
const selectStyle={
width:'70%',
    direction: 'rtl',
    fontFamily:'IRANSans',

};

function BusinessSettingDiscountForm(){

    const classes = useStyles();
    const [loading,setLoading]=React.useState(true);

    const[customerNo1,setCustomerNo1]=React.useState();
    const[customerNo2,setCustomerNo2]=React.useState();
    const[customerNo3,setCustomerNo3]=React.useState();
    const [listcustomerNo, setListcustomerNo]=React.useState([]);

    const[percent1,setPercent1]=React.useState();
    const[percent2,setPercent2]=React.useState();
    const[percent3,setPercent3]=React.useState();
    const [listPercent, setListPercent]=React.useState([]);

    const[month1,setMonth1]=React.useState();
    const[month2,setMonth2]=React.useState();
    const[month3,setMonth3]=React.useState();
    const [listMonth, setListMonth]=React.useState([]);




    if(loading) {
        axios.get('/api/business/listnocustomer').then(res => {

            setListcustomerNo(res.data);

            setLoading(false);
        });

        axios.get('/api/business/listpercents').then(res => {

            setListPercent(res.data);

            setLoading(false);
        });

        axios.get('/api/business/listmonths').then(res => {

            setListMonth(res.data);

            setLoading(false);
        });

    }

    const handeleChangeRow1 = (event) => {
        setCustomerNo1(event.target.value);
        setPercent1(event.target.value);
        setMonth1(event.target.value);
    };

    const handeleChangeRow2 = (event) => {
        setCustomerNo2(event.target.value);
        setPercent2(event.target.value);
        setMonth2(event.target.value);
    };

    const handeleChangeRow3 = (event) => {
        setCustomerNo3(event.target.value);
        setPercent3(event.target.value);
        setMonth3(event.target.value);
    };



    return(
    <Container  style={styleBgForm} xs="6">
        <div className="card-header" style={headerSettingForm}>
            <SettingsIcon/>
             فرم تنظیم تخفیف ها

        </div>

        <div>
            <h3>
            نحوه تنظیم فرم:
            </h3>
            <br/>
            <p>
                <SpeakerNotesIcon/>                  این فرم برای تنظیم درصد تخفیف با توجه به تعداد مشتری معرفی شده
                در مدت زمان معین میباشد. که کاربر صاحب کسب کار
                میتواند با پر کردن 3 فیلد مشخص نماید که مشتری با معرفی چند خریدار
                در چه مدت زمانی دارای چه مقدار تخفیف باشد.
                به عنوان مثال: میتوانید مشخص نمایید
                مشتری پس از معرفی چه تعداد مشتری(تعداد مشتری معرفی شده) میتواند چند درصد تخفیف
                 (در قسمت درصد تخفیف برای مشتری) و در چه مدت زمانی (در قسمت تعداد ماه قابل استفاده از تخفیف)
                از فروشکاه یا صاحب کسب و کار را داشته باشد.
                هر صاحب کسب و کار میتواند 3 سطر در رابطه با تخفیفات را به صورت
                صعودی تنظیم نماید. به عنوان مثال : یک مشتری(خریدار) میتواند با
                توجه به تعداد مشتری معرفی شده تنظیم شده در سطر اول زمانی که تعداد افراد معرف شده توسط مشتری بیشتر
                از آن تعداد شد به مدت زمان تعیین شده از آن تخفیف استفاده نماید.
                حال این مقدار و ارقام میبتواند در سطر های
                بعدی صعودی باشد که مشتری (خریدار) با معرفی افراد بیشتر از درصد تخفیف بیشتر
                در مدت زمان بیشتری استفاده نماید.
            </p>
            <p style={{fontWeight:'bold'}}><InfoIcon/> لازم به ذکر میباشد این فرم فقط یکبار توسط صاحب کسب و کار قابل تنظیم میباشد.  </p>
        </div>
      <form>
        <Grid style={{marginTop:'50px'}} className={classes.root}  container spacing={24}>

           <Grid style={{textAlign:'right',float:'right'}}   item xs>
               <InputLabel id="customerNo" ><PersonIcon/>تعداد مشتری معرفی شده</InputLabel>

               <Select
                   labelId="customerNo"
                   id='customerNo'
                   value={customerNo1}
                   style={selectStyle}
                   onChange={handeleChangeRow1}

               >
                   {listcustomerNo.map(list=>{

                       return(
                           <MenuItem key={list.id} value={list.id}>{list.no_customer} نفر </MenuItem>
                       )


                   })}


               </Select>
           </Grid>

            <Grid style={{textAlign:'right',float:'right'}}   item xs>
                <InputLabel id="customerpercent" ><PaymentIcon/>درصد تخفیف برای مشتری</InputLabel>

                <Select
                    labelId="customerpercent"
                    id='customerpercent'
                    value={percent1}
                    style={selectStyle}
                    onChange={handeleChangeRow1}

                >
                    {listPercent.map(list=>{

                        return(
                            <MenuItem key={list.id} value={list.id}>{list.percent} درصد </MenuItem>
                        )


                    })}


                </Select>
            </Grid>


            <Grid style={{textAlign:'right',float:'right'}}   item xs>
                <InputLabel id="customermonth1" ><DateRangeIcon/>تعداد ماه قابل استفاده از تخفیف</InputLabel>

                <Select
                    labelId="customermonth1"
                    id='customermonth1'
                    value={month1}
                    style={selectStyle}
                    onChange={handeleChangeRow1}

                >
                    {listMonth.map(list=>{

                        return(
                            <MenuItem key={list.id} value={list.id}>{list.month} ماه </MenuItem>
                        )


                    })}


                </Select>
            </Grid>
        </Grid>


          <Divider style={{marginTop:'20px'}}/>


          <Grid style={{marginTop:'50px'}} className={classes.root}  container spacing={24}>

              <Grid style={{textAlign:'right',float:'right'}}   item xs>
                  <InputLabel id="customerNo" ><PersonIcon/>تعداد مشتری معرفی شده</InputLabel>

                  <Select
                      labelId="customerNo"
                      id='customerNo'
                      value={customerNo2}
                      style={selectStyle}
                      onChange={handeleChangeRow2}

                  >
                      {listcustomerNo.map(list=>{

                          return(
                              <MenuItem key={list.id} value={list.id}>{list.no_customer} نفر </MenuItem>
                          )


                      })}


                  </Select>
              </Grid>

              <Grid style={{textAlign:'right',float:'right'}}   item xs>
                  <InputLabel id="customerpercent" ><PaymentIcon/>درصد تخفیف برای مشتری</InputLabel>

                  <Select
                      labelId="customerpercent"
                      id='customerpercent'
                      value={percent2}
                      style={selectStyle}
                      onChange={handeleChangeRow2}

                  >
                      {listPercent.map(list=>{

                          return(
                              <MenuItem key={list.id} value={list.id}>{list.percent} درصد </MenuItem>
                          )


                      })}


                  </Select>
              </Grid>


              <Grid style={{textAlign:'right',float:'right'}}   item xs>
                  <InputLabel id="customermonth1" ><DateRangeIcon/>تعداد ماه قابل استفاده از تخفیف</InputLabel>

                  <Select
                      labelId="customermonth1"
                      id='customermonth1'
                      value={month2}
                      style={selectStyle}
                      onChange={handeleChangeRow2}

                  >
                      {listMonth.map(list=>{

                          return(
                              <MenuItem key={list.id} value={list.id}>{list.month} ماه </MenuItem>
                          )


                      })}


                  </Select>
              </Grid>
          </Grid>



          <Divider style={{marginTop:'20px'}}/>


          <Grid style={{marginTop:'50px'}} className={classes.root}  container spacing={24}>

              <Grid style={{textAlign:'right',float:'right'}}   item xs>
                  <InputLabel id="customerNo" > <PersonIcon/>تعداد مشتری معرفی شده</InputLabel>

                  <Select
                      labelId="customerNo"
                      id='customerNo'
                      value={customerNo3}
                      style={selectStyle}
                      onChange={handeleChangeRow3}

                  >
                      {listcustomerNo.map(list=>{

                          return(
                              <MenuItem key={list.id} value={list.id}>{list.no_customer} نفر </MenuItem>
                          )


                      })}


                  </Select>
              </Grid>

              <Grid style={{textAlign:'right',float:'right'}}   item xs>
                  <InputLabel id="customerpercent" > <PaymentIcon/>درصد تخفیف برای مشتری</InputLabel>

                  <Select
                      labelId="customerpercent"
                      id='customerpercent'
                      value={percent3}
                      style={selectStyle}
                      onChange={handeleChangeRow3}

                  >
                      {listPercent.map(list=>{

                          return(
                              <MenuItem key={list.id} value={list.id}>{list.percent} درصد </MenuItem>
                          )


                      })}


                  </Select>
              </Grid>


              <Grid style={{textAlign:'right',float:'right'}}   item xs>
                  <InputLabel id="customermonth1" > <DateRangeIcon/>تعداد ماه قابل استفاده از تخفیف</InputLabel>

                  <Select
                      labelId="customermonth1"
                      id='customermonth1'
                      value={month3}
                      style={selectStyle}
                      onChange={handeleChangeRow3}

                  >
                      {listMonth.map(list=>{

                          return(
                              <MenuItem key={list.id} value={list.id}>{list.month} ماه </MenuItem>
                          )


                      })}


                  </Select>
              </Grid>
          </Grid>


          <div style={spaceBetwenButton}>
              <Button variant="outlined" color="primary" style={styleButton}>
                  <SaveIcon/>
                  ذخیره فرم
              </Button>
              <Button variant="outlined" color="primary" style={styleButton}>
                  <CancelIcon/>
                  کنسل فرم
              </Button>
          </div>
      </form>
    </Container>
);
}

export default BusinessSettingDiscountForm;


